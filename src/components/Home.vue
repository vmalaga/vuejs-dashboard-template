<template>
  <div class="jumbotron">
    <h1 class="display-3 text-center">{{ msg }}
      <img src="../assets/logo.png" style="height: 10%; width: 5%;">
    </h1>
    <p class="lead text-center">This Vuejs app is the skeleton to build a SPA Dashboard</p>
    <hr class="my-4">
    <p class="text-center">Using the Vuejs webpack template and adding support for bootstrap 4, this app allows you to build a dashboard with very few steps.
I use it as a template to start new dashboards</p>
    <div class="progress">
      <div :class="wvaluenow" role="progressbar" :aria-valuenow="valuenow" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <hr class="my-4">
    <div class="d-flex p-2" style="background-color: white;">
      <pre>
        <code>git clone git://github/vmalaga/vuejs-dashboard-template</code>
        <code>cd vuejs-dashboard-template</code>
        <code>npm install</code>
        <code>npm run dev</code>
      </pre>
     </div>
  </div>
</template>

<script>

export default {
  name: 'Home_view',
  data () {
    return {
      msg: 'Vuejs SPA Dashboard',
      wvaluenow: 'progress-bar w-0',
      valuenow: 0
    }
  },
  created: function () {
    var self = this
    var seq = 25
    this.interval = setInterval(function () {
      self.wvaluenow = 'progress-bar w-' + seq
      console.log(self.wvaluenow)
      console.log(self.valuenow)
      self.valuenow = self.valuenow + 25
      seq = seq + 25
      if (seq === 125) {
        seq = 0
      }
      if (self.valuenow === 100) {
        self.valuenow = 0
      }
    }, 1000)
  },
  // clear interval when go to other page
  beforeDestroy: function () {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
.jumbotron{
margin: 15px;
padding: 20px;
}
.code{
  color: black;
}
</style>
