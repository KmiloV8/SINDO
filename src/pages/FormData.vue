<template>
  <div class="fondo">
    <v-main>
      
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>PRUEBA LOGIN</title>
    </head>
    <body>

    <div class="divlogin" style="width: 35rem">
      <div class="container">
        
           

            <div class="form-group">
              <label for="formGroupExampleInput">usuario</label>
              <input
                v-model="usuario" type="text" class="form-control" placeholder="usuario"/>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">password</label>
              <input v-model="password" type="password" class="form-control" placeholder="contraseña"/>
            </div>
       
            <button class="btn btn-primary" @click="addPersona">
              A&ntilde;adir
        </button>
      
      </div>
    </div>
  </body>
  </v-main>
  </div>

</template>


<script>

/* eslint-disable*/
import {ref} from 'vue'
/* import {useStore} from 'vuex' */
/* import {useRouter} from 'vue-router' */
import axios from 'axios'
export default {
  setup(){
    /* const store = useStore() */
    /* const router = useRouter() */
    const usuario = ref("")
    const password = ref("")

    
    function addPersona(){
      console.log(usuario.value,"usuario")
      if(usuario.value != '' && password.value != ""){
        const persona = {
          usuario:usuario.value,
          password:password.value,
        }
        /* store.dispatch("addPersona", persona);
        router.push('/print') */
        axios.post('https://sindo-1557c-default-rtdb.firebaseio.com/persona.json',persona)

        .then(res => console.log(res))
        .catch(error => console.log(error))
      }
    }

    return{usuario, password, addPersona}
  }
  
};
</script>

<style scoped>

.fondo {
  background-image:url('../assets/fondo.png');
  width: 100;
  height: 100;

}
html,body{
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  color: #222;
}


.divlogin{
  background-size: center center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
  margin: auto;
  
}
.divlogin .container{
  width: 100%;
  text-align: center;
  
}

.divlogin .container {
  border: 10px;
  border-color: #222;
  width: 100%;
  max-width: 300px;
  background: rgb(185, 185, 185);
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  margin: auto;
  border: solid;
  border-color: #222;


}

.divlogin .container  h3{
  margin-top: 0px;

}

.divlogin .container input{
  height: 30px;
  margin: 0px;
  border: 10px;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  width: 90%;
  margin-bottom: 10px;
  border: dashed; 
  border-color: rgb(70, 67, 67);
}

.divlogin .container button{
  margin: 0px;
  border: 90px;
  display: block;
  margin: auto;
  padding: 10px 30px;
  background: rgb(150, 83, 226);
  color: white;
  border-radius: 10px;
  border: groove; 
  border-color: #222;
}

.btn-primary{
  border: 10px;
}
</style>