<template>
  <div>
    <span>{{msg}}</span>
    <textarea v-model="footer_location" placeholder="footer text displayed"></textarea>
    <button @click="change">Change</button>
  </div>
</template>

<script>
import { secondaryDatabase } from '../config';

export default {
  name: 'MyInput',
  props: {
    msg: String
  },
  data() {
    return {
      footer_location: '',
    };
  },
  methods: {
    change() {
      const updates = {};
      updates.footer_location = this.footer_location;
      secondaryDatabase.ref().update(updates);
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
