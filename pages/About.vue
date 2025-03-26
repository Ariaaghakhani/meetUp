<template>
    <Header/>
    <AboutView/>
    <Footer/>
</template>

<script lang="ts">
useHead({
  title: 'MeetUp | About',
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

export default defineComponent({
  name: "About"
})
</script>


<style scoped>

</style>