<template>
  <div class="landing-page">
    <div class="content-holder">
      <nuxt-img src="/logos/gwc-logo-light.png" class="logo"></nuxt-img>
      <h2 class="font-white font-weight-regular text-center slogan mb-8">Making your business visable</h2>
      <h1 class="font-white font-weight-bold text-center mb-6 coming-soon">COMING SOON</h1>
      <div class="d-flex mt-8 icon-holder">
        <div class="d-flex icon-row">
          <v-btn
            color="secondary"
            fab
            class="mr-8"
            target="_blank"
            href="mailto:"
          >
            <v-icon large>mdi-email</v-icon>
          </v-btn>
          <v-btn
            color="secondary"
            fab
            class="mr-8"
            target="_blank"
            href="tel:"
          >
            <v-icon large>mdi-phone</v-icon>
          </v-btn>
        </div>
        <div class="d-flex">
          <v-btn
            color="secondary"
            fab
            class="mr-8"
            target="_blank"
            href=""
          >
            <v-icon large>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            color="secondary"
            fab
            target="_blank"
            href="https://www.youtube.com/channel/UC04J-PyswfCclM_-FoQsghA"
          >
            <v-icon large>mdi-youtube</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.landing-page{
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(43,77,87, 1), rgba(43,77,87, 0.6)), url('/images/gwc-cover-photo.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.content-holder{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo{
  width: 400px;
  object-fit: contain;
}

.coming-soon{
  border: solid 2px #fff;
  padding: 10px;
}

a{
  color: #fff;
  text-decoration: none;
}

@media(max-height:540px){
  .content-holder{
    padding: 70px 0;
  }
}

@media(max-width: 600px){
  .landing-page{
    background: #2b4d57;
  }
}

@media(max-width: 400px){
  .logo{
    width: 100%;
  }

  .slogan{
    font-size: 20px
  }

  .icon-holder{
    flex-direction: column;
  }

  .icon-row{
    margin-bottom: 32px;
  }
}
</style>