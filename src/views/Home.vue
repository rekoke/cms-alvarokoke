<template>
  <div class="home">
    <MyInput msg="Welcome to the best cms in the world"/>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { login } from '../config';

// @ is an alias to /src
import MyInput from '@/components/MyInput.vue';

export default {
  name: 'home',
  components: {
    MyInput,
  },
  methods: {
    logout() {
      login.auth('login').signOut().then(() => {
        this.$router.replace('login');
      });
    },
  },
};
</script>
