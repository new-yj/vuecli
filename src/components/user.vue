<template>
  <div>
      <h2>{{$route.params.id}}</h2>
      <router-link to="/" @click.native="handleClick">to index</router-link>
  </div>
</template>

<script>
export default {
    mounted () {
        console.log(this.$route.params.id)
        console.log(this.$router)
    },
    methods: {
        handleClick () {
            this.$store.commit({
                type: 'typeIncrement',
                count: 1
            })
            console.log(this.$store.getters.listCount)
        }
    }
}
</script>
