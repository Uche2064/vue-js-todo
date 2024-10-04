<template>
  <header class="header">
    <RouterLink :to="'/'" class="link">
      <h1>Todo app</h1>
    </RouterLink>
    <nav class="nav-bar">
      <RouterLink :to="'/login'" class="link"> Login </RouterLink>
      <RouterLink :to="'/signup'" class="link"> Sign up </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #03445d;
  color: #fff;
  padding: 1% 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-bar {
  display: flex;
  gap: 20px;
}
.link {
  color: #fff;
  text-decoration: none;
  transition: color 300ms ease;
}
.link:hover {
  color: #addcee;
}
</style>
