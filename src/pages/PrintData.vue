<template>
  <div>

    <header>
    <h3>Lista de usuarios</h3>
  </header>
<body>
  

    <div class="list-group">
      <div class="container">
      <div v-for="(persona, i) in personas" :key="i"  class="list-group-item">
        
        <router-link :to="`/details/${persona.id}`" >{{
          persona.usuario
        }}</router-link>
      </div>
      </div>
    </div>
  </body>
  </div>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
export default {
  setup(){
    const personas = ref([])
    axios.get('https://sindo-1557c-default-rtdb.firebaseio.com/persona.json')
    .then(res => {
      console.log(res)
      for(const id in res.data){
        personas.value.push({
          id: id,
          usuario : res.data[id].usuario,
          password : res.data[id].password,
          
        })
      }

    })

    .catch(error => console.log(error))
    return{personas};
  }
  /* computed: {
    personas() {
      return this.$store.getters.getPersonas;
    },
  }, */
};
</script>

<style scoped>
header{
  text-align: center;
  padding: .75rem 1.25rem;
  color: rgb(255, 255, 255);
  border: 1px solid rgba(0,0,0,.125);
  background-color: #a668ee;
  max-width: 480px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 10px;

}



.list-group-item{
  
  color: #0080ff;
  font-size: 1rem;
  font-weight: 400;
  padding: .60rem 1.25rem;
  line-height: 1.5;
  text-align: center;
  border: 1px solid rgba(0,0,0,.125);
  box-sizing: border-box;
}
  
.container{
  box-sizing: border-box;
color: rgb(44, 62, 80);
font-family: Avenir, Helvetica, Arial, sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 24px;
margin: auto;
max-width: 500px;
padding-left: 10px;
padding-right: 10px;
text-align: left;
width: 1140px
}
  



</style>

