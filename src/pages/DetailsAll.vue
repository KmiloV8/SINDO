<template>
  <div>
    <div class="card" v-if="persona != undefined">
      <h5 class="card-header">{{ persona.usuario }}</h5>
      <div class="card-body">
        <div class="card-text">
          <p>usuario: {{persona.usuario}}</p>
          <p>password : {{persona.password}}</p>
        </div>
       
      </div>
    </div>

    <div v-else class="alert alert-danger" role="alert">
      No hay datos disponibles
    </div>
    <router-link to="/print" class="btn btn-primary mt-3">Volver</router-link>
  </div>
</template>

<script>
/* import {computed} from 'vue' */
/* import {useStore} from 'vuex' */
import {useRoute} from 'vue-router'
import axios from 'axios'
import {ref} from 'vue'
/* import { conditionalExpression } from '@babel/types'; */

export default {
  setup(){
    /* const store = useStore() */
    const route = useRoute()
    const persona = ref("")
    /* const persona = computed(()=>{ */
      const index = route.params.index;
      /* return store.getters.getPersona(index);
    }) */

    axios.get('https://sindo-1557c-default-rtdb.firebaseio.com/persona/' +index+'.json')
    .then(res => {
      console.log(res)
      persona.value = res.data
    })
    .catch(error => console.log(error))
    return {persona}
  }
  // computed: {
  //   persona() {
  //     const index = this.$route.params.index;
  //     return this.$store.getters.getPersona(index);
  //   },
  // },
};
</script>

<style>


</style>