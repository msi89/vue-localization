<template>
  <div id="app">
    <component :is="layout">
      <router-view/>     
    </component>
  </div>
</template>

<script>
const defaultLayout = 'default'
export default {
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$session.start()
      this.$session.set('locale', this.$store.state.locale)
    }
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  },
  mounted(){
    
  },
  destroyed(){
    this.$session.destroy()
  }
}
</script>

