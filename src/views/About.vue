<template>
  <div class="about">
    <ul><li v-for="(person, index) of humans" :key='index'>{{person}}</li></ul>
  </div>
</template>
<script>
export default {
  computed: {
    humans(){
      return this.$store.getters.getPeople
    }
  }
}
</script>