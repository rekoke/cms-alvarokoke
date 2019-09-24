<template>
  <div>
    <span>{{msg}}</span>
    <textarea v-model="footer_location" placeholder="footer text displayed"></textarea>
    <button @click="submit">submit</button>
  </div>
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
    };
  },
  methods: {
    submit() {
      const updates = {
        footer: this.footer_location
      };
      console.log(updates);
      alvarokokeDB.collection("home")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
                // Build doc ref from doc.id
                alvarokokeDB.collection("home").doc(doc.id).update(updates);
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
  textarea{
    width: 500px;
    height: 200px;
    margin-bottom: 20px;
    resize: none;
  }

</style>
