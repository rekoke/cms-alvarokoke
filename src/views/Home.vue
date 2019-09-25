<template>
  <div class="all-screen">
    <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="3">
        <router-link to="/alvarokoke">
          <v-card
            class="mx-auto card"
            height="300px"
            width="300px"
            hover
            style="backgroundColor: white; border: 2px solid #016CA0;"
          >
            <v-card-title class="text-center">Alvarokoke</v-card-title>
            <v-card-text class="text-center">www.alvarokoke.com</v-card-text>
          </v-card>
        </router-link>
        </v-col>
        <v-col cols="12" sm="3">
        <router-link to="/travel">
          <v-card
            class="mx-auto card"
            height="300px"
            width="300px"
            hover
            style="backgroundColor: white; border: 2px solid #016CA0;"
          >
            <v-card-title>Travelblog</v-card-title>
            <v-card-text>www.travelblog.com</v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MyInput from '@/components/MyInput.vue';
export default {
  name: 'home',
};
</script>

<style scooped>
  .all-screen{
    height: 100%;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .card{
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }
  a{
    text-decoration: none;
  }
</style>
