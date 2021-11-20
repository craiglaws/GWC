<template>
  <div
    class="title-border"
    :class="[
      color ? `${color}` : 'primary-bd'
    ]"
  >

  </div>
</template>

<script>
export default {

  props: {
    color: String
  }

}
</script>

<style scoped>
  .title-border{
    width: 30px;
    height: 3px;
  }

  .primary-bd{
    background-color: #2B4D57;
  }

  .secondary-bd{
    background-color: #E6324A;
  }

  .white-bd{
    background-color: #fff;
  }

</style>