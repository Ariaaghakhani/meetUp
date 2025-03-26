<template>
  <Header/>
  {{ this.$route.params.id }}
  <Footer/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "[id].vue"
})
</script>


<style scoped>

</style>