<template>
  <header>
    <div class="container">
      <div class="nav-inner">
        <h2>Reviews UI</h2>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/">About</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
}
nav a {
  margin: 0px 20px;
  color: #fff;
  transition: .3s;
}
nav a:hover {
  color: #4ecca3;
}
</style>
