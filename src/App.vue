<template>
  <div id="app">
    <v-app>
      <NavBar v-if="!$route.meta.hideNavigation" />
      <router-view/>
      <v-footer v-if="!$route.meta.hideNavigation">
        <div class="flex-grow-1">koke inc</div>
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  export default {
    name: 'App',
    components: {
      NavBar
    },
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
#app {
  font-family: 'Montserrat', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
