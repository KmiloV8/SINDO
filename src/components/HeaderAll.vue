<template>
  <div>
  <nav class="navbar navbar-light nav-pills" style="background-color: #e3f2fd">
    <div class="container">
      
      <router-link to="/print" class="nav-link" active-class="active"
        >Personas</router-link
      >
    
    </div>
  </nav>
</div>
</template>

<style scoped>


*{
  box-sizing: border-box;
}



.container{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

} 

.navbar .container{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.nav-link{
  padding-left: 15px;
  text-decoration: none;
  margin: auto;
}

</style>
