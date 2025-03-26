<template >
    <Header/>
    <HomeView/>
    <Footer/>
</template>

<script lang="ts">
useHead({
  title: 'MeetUp | Home',
  meta: [
    {
      name: 'description',
      content: 'Browse and find great events'
    },
    {
      name: 'keywords',
      content: 'events,meetups,conferences'
    }
  ]
})
import {defineComponent} from 'vue'


export default defineComponent({})
</script>


<style scoped>

</style>