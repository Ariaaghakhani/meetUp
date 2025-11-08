<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1" style="padding-top: 100px">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
})
</script>
