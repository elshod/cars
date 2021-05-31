<template>
  <div class="home">
    <input type="text" v-model="car.name">
    <input type="color" v-model="car.color">
    <select v-model="car.comp">
      <option value="GM">GM</option>
      <option value="Ford">Ford</option>
      <option value="Toyota">Toyota</option>
    </select>
    <button @click="add">Qo'shish</button>
    <hr>
    <table width='100%' border='1' cellspacing='0'>
      <tr>
        <th>№</th>
        <th>Model</th>
        <th>Rangi</th>
        <th>Kompaniya</th>
      </tr>
      <tr v-for="car of cars" :key='car.id'>
        <td>{{car.id}}</td>
        <td>{{car.name}}</td>
        <td><span :style="{'background-color':car.color}"></span></td>
        <td>{{car.comp}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: ()=>({ car:{} }),
  computed: {
    cars(){ return this.$store.getters.cars }
  },
  methods: {
    add(){
      this.$store.dispatch('newCar',this.car)
      this.car = {}  }
  }, 
  created(){ this.$store.dispatch('getCars') }
}
</script>

<style scoped>
  table span {
    display: inline-block;
    width: 100px;
    height: 30px;
  }
</style>