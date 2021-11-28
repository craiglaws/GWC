<template>
  <div>

    <v-app-bar
      app
      hide-on-scroll
      height="100px"
      class="d-flex bg-primary justify-center"
    >
      <div class="d-flex w-100 nav-holder">
        <!-- Logo -->
          <nuxt-link to="/">
            <nuxt-img src="/logos/gwc-logo-light-nostrap.png" class="header-logo mr-10"></nuxt-img>
          </nuxt-link>
        <!-- Desktop Options -->
        <div class="desktop-nav align-self-center">
          <div class="d-flex">
            <v-menu
              open-on-hover
              offset-y
              role="menu">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  plain
                  small
                  link
                  class="nav-btn pr-6 scale-hover"
                >
                  Services
                  <v-icon>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in services"
                  :key="i"
                  :to="item.path"
                  role="menuitem"
                >
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-btn
              v-for="(navLink, i) in navOptions"
              :key="i"
              :to="navLink.path"
              plain
              small
              link
              class="nav-btn pr-6 scale-hover"
            >
              {{navLink.text}}
            </v-btn>
          </div>
        </div>

        <!-- Socials -->
        <div class="social-icons align-self-center">
          <div class="d-flex">
            <a 
              v-for="(social, i) in socials"
              :key="i"
              :href="social.link"
              target="_blank"
            >
              <v-icon color="white" class="scale-hover pr-2">{{social.icon}}</v-icon>
            </a>
          </div>
        </div>

        <!-- Tablet & below -->
        <div class="mobile-nav">
          <v-btn class="align-self-center" fab text @click="openNav">
            <v-icon color="white" large>
              mdi-menu
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
    <!-- Nav Drawer -->
    <v-scroll-x-transition>
    <div v-show="navState" class="nav-drawer">
      <div class="text-center mt-8" style="position: relative" >
        <v-btn @click="closeNav" class="close-btn" fab small text>
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
        <nuxt-link to="/" @click="closeNav">
          <nuxt-img src="/logos/gwc-logo-light-nostrap.png" class="nav-logo mt-4"></nuxt-img>
        </nuxt-link>
        <div class="d-flex flex-column mt-8">
          <v-btn
            v-for="(navLink, i) in navOptionsMobile"
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
export default {

  data(){
    return{
      navState: false,
      navOptions: [
        {
          text: 'About',
          path: '/about'
        },
        {
          text: 'Contact',
          path: '/contact'
        },
      ],
      services: [
        {
          text: 'Coaching',
          path: '/coaching'
        },
        {
          text: 'Business Development',
          path: '/business-development'
        }
      ],
      navOptionsMobile: [
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
      this.navState = false
    },
    navTo(slug) {
      //console.log(slug)
      this.closeNav()
      this.$router.push({ path: slug });
    },
     openNav(){
      this.navState = !this.navState
    }
  },
}
</script>

<style scoped>
/* draweer */
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
/*  */

.desktop-nav{
  width: 100%;
}

.nav-btn{
  color: #fff !important;
  text-transform: none !important;
  font-weight: 700;
  font-size: 18px !important;
}

.nav-btn:hover, .nav-btn:active, .nav-btn:focus{
}


>>> .v-btn__content{
  opacity: 1 !important;
}

>>> .v-toolbar__content {
    width: 100% !important;
    display: flex;
    flex-direction: row;
    max-width: 1000px
}

.header-logo{
  width: 150px;
  margin-right: 20px;
}

@media(max-width: 768px){
  .desktop-nav, .social-icons{
    display: none !important;
  }
  .nav-holder{
  justify-content: space-between;
}
}

@media(min-width: 769px){
  .mobile-nav{
    display: none !important;
  }
}
</style>