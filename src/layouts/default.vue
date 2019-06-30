<script>
export default {
data(){
    return{
        languages: [
          { code: 'en', label: 'English', iso: 'us' },
          { code: 'fr', label: 'Francais', iso: 'fr' },
          { code: 'ru', label: 'русский', iso: 'ru' },
          { code: 'cn', label: '中国', iso: 'cn' },
          { code: 'ja', label: '日本の', iso: 'jp' },
        ]
    }
},
mounted(){
  if(this.$session.exists()) {
    this.$i18n.locale = (this.$session.get('locale')).code
  }
},
  computed: {
     locale() {
        //return this.$store.state.locale
         return this.$session.get('locale')
     }
  },
  methods: {
      setLocale(ln){
         this.$i18n.locale = ln.code
         this.$session.set('locale', ln)
        location.reload()
        // this.$store.commit('SETLOCALE', ln)
      },
  }
}
</script>

<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
              <img class="logo" src="@/assets/logo.png" alt="">
              Localization
        </a>
        <div class="nav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <flag :iso="locale.iso"></flag>{{ locale.code }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a v-for="(lang, i) in languages" :key="i" class="dropdown-item" href="#"
                         @click="setLocale(lang)">
                            <flag :iso="lang.iso"></flag>{{ lang.label }}({{ lang.code }})
                        </a>
                    </div>
                </li>
            </ul>
        </div>
      </nav>
      <slot/>
    </div>
</template>
<style lang="scss">
 *, *:before, *:after {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
 .navbar{
    
     box-shadow: 0px 2px 4px rgba($color: #000000, $alpha: 0.3);
    .flag-icon{
        margin: 0 5px;
    }
     .router-link-exact-active {
        color: #42b983;
     }
     .navbar-brand{
         .logo{
             height: 38px;
         }
     }
     .nav{
         flex: 1;
     }
    
 }
</style>

