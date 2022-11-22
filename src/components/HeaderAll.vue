<template>
  <div>
  <nav class="navbar navbar-light nav-pills" style="background-color: #e3f2fd">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/print" class="nav-link" active-class="active"
            >Personas</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<style>
*{
  box-sizing: border-box;
}

.navbar .container{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.container{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

}
</style>
