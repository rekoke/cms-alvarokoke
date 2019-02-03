<template>
  <div class="home">
    <MyInput class="my-input" msg="Footer location in alvarokoke's site"/>
    <button class="logout-but" @click="logout">Logout</button>
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
<style scooped>
  .home{
    height: 100vh;
    width: 100vw;
    padding: 20px;
  }
  .logout-but{
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: auto;
  }
  .my-input{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>