<template>
  <div class="coach-grid">
    <div
      v-for="(service, i) in services"
      :key="i"
      class="service-card px-4 py-6 d-flex flex-column align-center text-center"
      @click="scroll(service.goTo)"
    >
      <nuxt-img class="service-icon mb-5" :src="service.icon"></nuxt-img>
      <h3 class="mb-3 card-header" v-html="service.title"></h3>
      <p class="mb-0" v-html="service.text"></p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      services: [
        {
          icon: '/icons/team.png',
          title: "Account Management",
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          goTo: "accountManagement"
        },
        {
          icon: '/icons/growth.png',
          title: "Business Development & Live Prospecting",
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          goTo: "businessDevelopment"
        },
        {
          icon: '/icons/online-sales.png',
          title: "Online Sales Coaching",
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          goTo: 'salesCoaching'
        },
        {
          icon: '/icons/check-list.png',
          title: "Sales Assessment",
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          goTo: "salesAssessment"
        },
      ]
    }
  },
  methods: {
     scroll(refName){
      this.$emit('scroll-to', refName)
    }
  }

}
</script>

<style scoped>

.coach-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 30px;
}

.service-card{
  background-color: #f7f7f7;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 4px;
  max-width: 280px;
  transition: transform .3s ease-in-out;
}

.service-card:hover{
  cursor: pointer;
  transform: scale(1.1);
}

.service-icon{
  width: 50px;
}

.card-header{
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

@media(max-width: 1110px){
  .coach-grid{
    grid-template-columns: 1fr 1fr;
    row-gap: 50px;
  }
  .service-card{
    margin: auto;
    max-width: 350px;
    height: 100%;
  }
}
@media(max-width: 700px){
  .coach-grid{
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
  .service-card{
    margin: auto;
    max-width: 350px;
    height: 100%;
  }
}

</style>