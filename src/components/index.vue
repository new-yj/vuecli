<template>
  <div>
    <h1>index</h1>
    <router-link to="/about">to about</router-link>
    <router-link to="/user/123">to user</router-link>
    <h2>count: {{$store.state.a.count}}</h2>
    <h2>type count: {{$store.state.a.typeCount}}</h2>
    <h2>list: {{$store.getters.filteredList}}</h2>
  </div>
</template>

<script>
export default {}
</script>
