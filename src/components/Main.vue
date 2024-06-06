<script>
import {defineComponent} from "vue";
import Weather from "../components/Weather.vue";

export default defineComponent({
  name: "Main",
  components: {Weather},
  setup(){

    return{
    }
  }
})
</script>

<template>

  <Weather />

</template>

<style scoped>

</style>
