<template>
  <v-container fluid style="max-width: 40vw">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>{{msg}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-textarea
            v-model="footer_location"
            label="footer in alvarokoke"
            auto-grow
            outlined
            rows="1"
            row-height="15"
          ></v-textarea>
          <v-btn
            @click="submit"
            :disabled="loading"
            :loading="loading"
            medium
            color="primary"
            style="width: auto">
            submit
          </v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import alvarokokeDB from '../dbConfig';

export default {
  name: 'MyInput',
  props: {
    msg: String,
  },
  data() {
    return {
      footer_location: '',
      loading: false,
    };
  },
  methods: {
    submit() {
      var vm = this
      this.loading=true;
      const updates = {
        footer: this.footer_location
      };
      alvarokokeDB.collection("home")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // Build doc ref from doc.id
                alvarokokeDB.collection("home").doc(doc.id).update(updates).then(() => {
                  console.log('this in then', vm);
                  vm.loading = false;
                });
            });
      })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span{
    margin-bottom: 20px;
  }

</style>
