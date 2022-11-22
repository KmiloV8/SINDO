<template>
  <div>
    <v-app>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>PRUEBA LOGIN</title>
    </head>

    <div class="divlogin" style="width: 35rem">
      <div class="container">
        <div class="divcont">
            <h5 class="card-title">Datos Usuario</h5>

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
    </div>
  </v-app>
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
  // data() {
  //   return {
  //     nombre: "",
  //     email: "",
  //     aporte: "",
  //   };
  // },
  // methods: {
  //   addPersona() {
  //     if (this.nombre != "" && this.email != "") {
  //       const persona = {
  //         nombre: this.nombre,
  //         email: this.email,
  //         aporte: this.aporte,
  //       };
  //       this.$store.dispatch("addPersona", persona);
  //       this.$router.push('/print')
  //     }
  //   },
  // },
};
</script>

<style>
.divlogin{
  /*background: url(../assets/fondo.png) no-repeat;*/
  background-size: center center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
}
.divlogin .container{
  width: 100%;
  text-align: center;
}

.divlogin .container .divcont{
  width: 100%;
  max-width: 300px;
  background: rgb(206, 204, 204);
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
}

.divlogin .container .divcont h3{
  margin-top: 0px;
}

.divlogin .container .divcont input{
  height: 30px;
  margin: 0px;
  border: 0px;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  width: 90%;
  margin-bottom: 10px;
}

.divlogin .container .divcont button{
  margin: 0px;
  border: 0px;
  display: block;
  margin: auto;
  padding: 10px 30px;
  background: rgb(92, 90, 90);
  color: white;
  border-radius: 10px;
}
</style>