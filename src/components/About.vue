<template>
  <div class="jumbotron">
    <vue-flashcard
      front="Vue.js SPA Dashboard" 
      back="Free to use"
      headerFront="SPA Dashboard"
      imgFront="https://vuejs.org/images/logo.png"
      imgBack="https://vuejs.org/images/logo.png"
    >
    </vue-flashcard>
  </div>
</template>

<script>
import vueFlashcard from 'vue-flashcard'

export default {
  name: 'About_view',
  components: { vueFlashcard },
  data () {
    return {
      msg: 'About Elasticsearch dashboard'
    }
  }
}
</script>