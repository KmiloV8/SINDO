<template>
  <v-app>
    <v-main>
      <MenuAll/>
      <HeaderAll/>
   <!--  <FormData/> -->
      <router-view></router-view>
    </v-main>
   
  </v-app>
</template>

<script>
import MenuAll from './components/MenuAll';
import HeaderAll from './components/HeaderAll';
/* import FormData from './pages/FormData.vue'; */




export default {
  name: 'App',

  components: {
    HeaderAll,
    MenuAll,
    /* FormData */
},

  data:()=> ({
    //
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}</style>



