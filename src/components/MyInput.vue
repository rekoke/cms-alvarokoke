<template>
  <div>
    <input type="text" v-model="footer_location" placeholder="footer text displayed">
    <button @click="change">Change</button>
  </div>
</template>

<script>
import { secondaryDatabase } from '../config';

export default {
  name: 'MyInput',
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

</style>
