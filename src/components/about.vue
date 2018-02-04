<template>
  <div>
      <h3>about</h3>
      <router-link to="/">to index</router-link>
      <button @click="handleRouter">跳转到user</button>
  </div>
</template>

<script>
export default {
    methods: {
        handleRouter () {
            // this.$store.state.count++
            this.$store.commit('increment', 2)
            this.$router.push('/user/456')
        }
    }
}
</script>
