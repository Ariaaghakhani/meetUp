<template>
    <AboutView/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
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

export default defineComponent({
  name: "About"
})
</script>


<style scoped>

</style>