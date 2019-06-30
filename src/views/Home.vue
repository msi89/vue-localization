<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="$t('welcome')"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
