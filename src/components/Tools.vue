<template>
  <div class="jumbotron">
    <h1 class="display-3 text-center">{{ msg }}</h1>
    <p class="lead">
      <donut-chart
        id="donut" 
        :data="donutData" 
        colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]' 
        resize="true">
      </donut-chart>
    </p>
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
  components: { DonutChart }
}
</script>