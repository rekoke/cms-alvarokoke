<template class="travel">
  <div class="all-screen">
    <div class="travel__container">
      <v-container class="travel__container__select">
        <v-select
          :items="dropdown_countries"
          label="select continent"
          v-model="selectedItem"
          v-on:change="selected">
        >
        </v-select>
        <div v-if="selectedItem.length">
          <v-container>
            <v-textarea
              v-model="country"
              label="add country"
              auto-grow
              outlined
              rows="1"
              row-height="15"
            ></v-textarea>
          </v-container>
          <div v-if="countryRepeated">ERROR</div>
          <v-container>
            <v-btn raised @click="onPickFile" :disabled="!country"> upload cover image </v-btn>
            <input 
              type="file" 
              style="display: none"
              ref="fileInput"
              accept="image/*"
              @change="onFilePicked"
            >
            <img :src="imageUrl" height="150">
          </v-container>
          <v-container>
            <v-textarea
              v-model="textPost"
              label="text in post"
              auto-grow
              outlined
              row-height="15"
            ></v-textarea>
          </v-container>
          <v-btn
            @click="submitCountry"
            :disabled="loading"
            :loading="loading"
            medium
            color="primary"
            style="width: auto">
              ADD
          </v-btn>
        </div>
      </v-container>
      <div class="travel__title" v-if="list.length > 1">Countries in {{selectedItem}}</div>
      <ul class="travel__list">
        <li class="travel__list__item" v-for="item in list" v-bind:id="item.id">
          <div class="travel__list__item__container" v-if="item.country"> 
            <span class="travel__list__item__container__data" >{{ item.country }}</span>
            <img class="travel__list__item__container__data" :src="item.imageUrl">
            <span class="travel__list__item__container__data" >{{ item.textPost }}</span>
            <span class="travel__list__item__container__cross" @click="eraseCountry(item.id)"><v-icon>mdi-close</v-icon></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {travelDB, travelDBStorage} from '../dbConfig'

export default {
  name: 'travel',
  data: () => ({
    dropdown_countries: ['AFRICA', 'AMERICA', 'EUROPA'],
    selectedItem: [],
    list: [],
    locations:"",
    country: '',
    loading: false,
    imageUrl: '',
    image: null,
    fileName: '',
    countryRepeated: false,
    textPost: ''
  }),
    methods: {
      selected() {
        var vm = this
        const continent = this.selectedItem
        this.list = []
        this.resetData()
        travelDB.collection(continent).onSnapshot(res =>{
          const changes = res.docChanges()
          changes.forEach(change => {
            if(change.type === 'added'){
              vm.list.push({country: change.doc.data().country, imageUrl: change.doc.data().imageUrl, textPost: change.doc.data().textPost, id: change.doc.id})
            } else if(change.type === 'removed'){
              const index = vm.list.map(sitem => sitem.id).indexOf(change.doc.id)
              vm.list.splice(index, 1)
            }
          })
        }
        )
      },
      resetData(){
        this.textPost = ''
        this.country = ''
        this.imageUrl = ''
      },
      checkCountry(countryIn){
        var vm = this
        if(this.list){
          vm.list.forEach(item => {
            if(item.data === countryIn) {
              vm.countryRepeated = true
            }
          })
        }
      },
      submitCountry() {
        var vm = this
        this.loading = true
        const continent = this.selectedItem
        let country = this.country
        const updates = {continent: this.country}
        const storageRef = travelDBStorage.ref('images/' + continent + '/' + country + this.fileName)
        const task = storageRef.put(this.image)
        let textPost = this.textPost
        task.on('state_changed', snapshot => {}, error => console.log(error.message),
        () => {
          task.snapshot.ref.getDownloadURL().then(imageUrl => {
            travelDB.collection(continent).add({
            country,
            imageUrl,
            textPost
            }).then(()=>{
              vm.resetData()
            })
            vm.loading=true
            }  
          )
          }
        )
      },
      eraseCountry(clickedCountry) {
        const continent = this.selectedItem
        travelDB.collection(continent).doc(clickedCountry).delete()
    },
      onPickFile(){
        this.$refs.fileInput.click()
      },
      onFilePicked(event){
        const files = event.target.files
        this.fileName = files[0].name
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      }
    }
}
</script>

<style scoped>
  .travel__container{
    width: 400px;
  }
  .travel__list{
    padding: 0;
    display: flex;
    font-size: 18px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
  }
  .travel__list__item{
    display: flex;
    justify-content: space-between;
  }
  .travel__list__item__container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    border-bottom: 1px solid #c7c7c7;
    padding-bottom: 5px;
  }
  .travel__container__select{
    margin-bottom: 30px;
  }
  .travel__list__item__container__data{
    margin-right: 15px;
  }
  .travel__list__item__container__cross .v-icon{
    margin-right: 20spx;
    cursor: pointer;
    font-weight: 800;
    color: red;
  }
  .travel__title{
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 15px;
  }
  ul{
    list-style: none;
  }
</style>