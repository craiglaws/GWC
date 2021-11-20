<template>
  <div class="dev-grid">
    <div
      v-for="(service, i) in services"
      :key="i"
      class="service-card px-4 py-6 d-flex flex-column align-center text-center"
    >
      <nuxt-img class="service-icon mb-5" :src="service.icon"></nuxt-img>
      <h3 class="mb-3 card-header" v-html="service.title"></h3>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      services: [
        {
          icon: '/icons/eye.png',
          title: "Business Visibility Strategy Planning",
        },
        {
          icon: '/icons/calendar.png',
          title: "Scheduling Appointments",
        },
        {
          icon: '/icons/networking.png',
          title: "Events Attendance to promote you",
        },
        {
          icon: '/icons/customers.png',
          title: "Visiting Customer to promote you",
        },
        {
          icon: '/icons/research.png',
          title: "Market Research",
        },
        {
          icon: '/icons/filter.png',
          title: "Building Pipeline",
        },
        {
          icon: '/icons/generation.png',
          title: "Lead Generation",
        },
        {
          icon: '/icons/goal.png',
          title: "Business Tasks",
        },
      ]
    }
  },
}
</script>

<style scoped>

.dev-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 50px;
}

.service-card{
  background-color: #f7f7f7;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 4px;
  max-width: 280px;
  width: 100%;
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

@media(max-width: 900px){
  .dev-grid{
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
  }
  .service-card{
    margin: auto;
    max-width: 300px;
    height: 100%;
  }
}
@media(max-width: 500px){
  .dev-grid{
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
}

</style>