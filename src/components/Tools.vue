<template>
  <div class="jumbotron">
    <h1 class="display-3 text-center">{{ msg }}</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <p>
            <label for="title">Title:</label>
            <input v-model="msg" id="title" type="text">
          </p>
          <p>
            <label for="color1">Color1:</label>
            <input v-model="donutData[0].label" id="color1" type="text">
            <label for="value1">Value1:</label>
            <input v-model="donutData[0].value" id="value1" type="text">
          </p>
          <p>
            <label for="color2">Color2:</label>
            <input v-model="donutData[1].label" id="color2" type="text">
            <label for="value2">Value2:</label>
            <input v-model="donutData[1].value" id="value2" type="text">
          </p>
          <p>
            <label for="color3">Color3:</label>
            <input v-model="donutData[2].label" id="color3" type="text">
            <label for="value3">Value3:</label>
            <input v-model="donutData[2].value" id="value3" type="text" @change="updatedonut('donutData[2].value:' + donutData[2].value )">
          </p>
        </div>
        <div class="col">
          <p class="lead">
           <donut-chart
            id="donut" 
            :data="donutData" 
            colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]' 
            resize="true">
          </donut-chart>
        </p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Raphael from 'raphael/raphael'
import { DonutChart } from 'vue-morris'
global.Raphael = Raphael

export default {
  name: 'Tools_view',
  data () {
    return {
      msg: 'Tools example page',
      donutData: [
      { label: 'Red', value: 300 },
      { label: 'Blue', value: 50 },
      { label: 'Yellow', value: 100 }
      ]
    }
  },
  components: { DonutChart },
  methods: {
    updatedonut: function (arrayelement) {
      console.log(arrayelement)
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 40px;
  border: 1px solid black;
  border-radius: 10px;
}
.container {
  border: 1px solid black;
  border-radius: 10px;
}

.col {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
}
  
</style>
