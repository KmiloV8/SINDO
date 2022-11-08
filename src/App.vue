<template>
  <v-app>
    <v-main>
      

      <MenuAll/>
      
    </v-main>
    <router-view></router-view>
  </v-app>
</template>

<script>
import MenuAll from './components/MenuAll';



export default {
  name: 'App',

  components: {
    MenuAll,
  },

  data:()=> ({
    //
  }),
};
</script>



