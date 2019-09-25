<template>
    <v-app-bar
      class="center-toolbar"
      style="backgroundColor: #013E5C;"
      dense
      dark
    >
      <v-toolbar-title>alvarokoke backend</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn v-if="!$route.meta.inHome" @click="back" class="ma-2" small outlined color="white">home</v-btn>
      <v-btn @click="logout" class="ma-2" small outlined color="white">logout</v-btn>
    </v-app-bar>
</template>

<script>
    import login from '../authConfig';
    const inHome = window.location.pathname === '/home';
    export default {
        name: 'NavBar',
        methods: {
        logout() {
            login.auth('login').signOut().then(() => {
            this.$router.replace('login');
            });
        },
        back(){
            this.$router.push('home');
        }
        },
  };
</script>
<style scooped>

</style>