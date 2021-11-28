<template>
  <div class="bg-primary gwc-row">
    <v-row>
      <v-col cols="10" class="mx-auto text-center">
        <nuxt-img src="/logos/gwc-logo-light.png" class="footer-logo"></nuxt-img>
        <div class="d-flex justify-center mt-8">
          <a 
            v-for="(social, i) in socials"
            :key="i"
            :href="social.link"
            target="_blank"
          >
            <v-icon color="white" large class="pr-2 scale-hover">{{social.icon}}</v-icon>
          </a>
        </div>
        <div class="mt-8 d-flex justify-center footer-link-holder">
          <nuxt-link
            v-for="(link, i) in footerLinks"
            :key="i"
            :to="link.path"
            class="footer-link pr-6 scale-hover"
          >
            {{link.text}}
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
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
      ],
      footerLinks: [
         {
          text: 'About',
          path: '/about'
        },
        {
          text: 'Contact',
          path: '/contact'
        },
        {
          text: 'Cookie Policy',
          path: '/cookie-policy'
        },
        {
          text: 'Privacy Policy',
          path: '/privacy-policy'
        },
         {
          text: 'Coaching',
          path: '/coaching'
        },
        {
          text: 'Business Development',
          path: '/business-development'
        }
      ],
    }
  }
}
</script>

<style scoped>
  .footer-logo{
    width: 250px;
  }

  .footer-link{
  text-decoration: none;
  color: white;
  font-weight: 600;
}

@media(max-width: 540px){
  .footer-link-holder{
    flex-direction: column;
  }

  .footer-link{
    margin-bottom: 1rem;
    padding: 0;
  }
}
</style>