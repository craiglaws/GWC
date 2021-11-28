<template>
  <div>
    <HeroHeader title="Contact Me" mobileTitle="Contact Me" image="/images/contact.jpg"/>
    <v-row class="gwc-row-5">
      <v-col cols="11" md="10" class="mx-auto">
        <v-row>
          <v-col cols="12" md="6" >
            <h2 class="mb-6">Get in touch</h2>
            <p>Send a message via the contact form or contact me directly with one of the links provided below.</p>
            <div
              v-for="(contact, i) in contactLinks"
              :key="i"
              class="d-flex mb-4 align-center"
            >
            <v-icon
              color="secondary"
              class="pr-4"
              large
            >
              {{contact.icon}}
            </v-icon>
            <a
              v-html="contact.text"
              :href="contact.link"
              class="contact-link mb-0"></a>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <ContactForm  class="bg-primary rounded ml-md-4 px-4 py-6 contact-shadow"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>  
  </div>
</template>

<script>
export default {

  data(){
    return{
      contactLinks: [
      {
        text: '07449 523090',
        icon: 'mdi-phone',
        link: 'tel:07449523090'
      },
      {
        text: 'henrieta.gwc@gmail.com',
        icon: 'mdi-email',
        link: 'mailto:henrieta.gwc@gmail.com'
      },
      {
        text: '/henrieta-farkasova',
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/henrieta-farkasova/'
      },
      {
          text: "/GrowWithConfidence",
          link: "https://www.facebook.com/Grow-with-Confidence-105375788569683",
          icon: "mdi-facebook"
        },
      ]
    }
  }

}
</script>

<style scoped>

.contact-link{
  color: #000000DE;
  text-decoration: none;
  font-weight: 600;
  transition: .3s ease-in-out;
}

.contact-link:hover{
  color: #E6324A
}

.contact-shadow{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>