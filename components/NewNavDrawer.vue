<template>
  <div>
    <v-scroll-x-transition>
    <div v-show="navState" class="nav-drawer">
      <div class="text-center mt-8" style="position: relative"  v-click-outside="clickOutsideNav">
        <v-btn @click="closeNav" class="close-btn" fab small text>
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
        <nuxt-link to="/" @click="closeNav">
          <nuxt-img src="/logos/gwc-logo-light-nostrap.png" class="nav-logo mt-4"></nuxt-img>
        </nuxt-link>
        <div class="d-flex flex-column mt-8">
          <v-btn
            v-for="(navLink, i) in navOptions"
            :key="i"
            :to="navLink.path"
            plain
            small
            link
            @click="closeNav"
            class="nav-btn mb-7 scale-hover"
          >
            {{navLink.text}}
          </v-btn>
        </div>
        <div class="d-flex justify-center mt-8">
          <a 
            v-for="(social, i) in socials"
            :key="i"
            :href="social.link"
            target="_blank"
          >
            <v-icon color="secondary" large class="pr-2">{{social.icon}}</v-icon>
          </a>
        </div>
      </div>
    </div>
    </v-scroll-x-transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data(){
    return{
      navOptions: [
         {
          text: 'Coaching',
          path: '/coaching'
        },
        {
          text: 'Business Development',
          path: '/business-development'
        },
        {
          text: 'About',
          path: '/about'
        },
        {
          text: 'Contact',
          path: '/contact'
        },
      ],
      socials: [
        {
          link: "https://www.linkedin.com/in/henrieta-farkasova/",
          icon: "mdi-linkedin"
        },
        {
          link: "https://www.facebook.com/Grow-with-Confidence-105375788569683",
          icon: "mdi-facebook"
        },
        {
          link: "https://www.youtube.com/channel/UC04J-PyswfCclM_-FoQsghA",
          icon: "mdi-youtube"
        },
        {
          link: "mailto:henrieta.gwc@gmail.com",
          icon: "mdi-email"
        },
      ]
    }
  },
  methods: {
    closeNav(){
      this.$store.dispatch('nav/closeNav');
    },
    navTo(slug) {
      //console.log(slug)
      this.closeNav()
      this.$router.push({ path: slug });
    },

    clickOutsideNav(e){
      if(this.navState && e.target.className === "v-overlay__scrim"){
        this.$store.dispatch('nav/closeNav');
      }
    }
  },
  computed: {
    ...mapState({
      navState: (state) => state.nav.navOpen
    })
  },
}
</script>

<style scoped>

.nav-drawer{
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #2B4D57;
  z-index: 100;
}

.nav-logo{
  width: 150px;
}

.nav-btn{
  color: #fff !important;
  text-transform: none !important;
  font-weight: 700;
  font-size: 16px !important;
}
.nav-btn:hover, .nav-btn:active, .nav-btn:focus{
  transform: scale(1.1);
}
.close-btn{
  position: absolute;
  top: -20px;
  right: 20px;
}
</style>