<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-transparent dark:border-transparent shadow-sm">
    <div class="flex justify-between p-4 md:p-8 w-full mx-auto items-center font-danaReg">
    <div class="nav flex">
      <div class="logo me-4 ">
        <img alt="logo" src="@/assets/images/logo.png">
      </div>
      <ul class="items-center *:me-8 *:text-xl ms-8 hidden md:flex">
        <NuxtLink active-class="active" to="/">
          <li>خانه</li>
        </NuxtLink>
        <NuxtLink active-class="active" to="/about">
          <li>درباره</li>
        </NuxtLink>
      </ul>
    </div>
    <div class="flex items-center gap-2 hidden md:flex">
      <Button
        :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
        rounded
        text
        @click="toggleDarkMode"
        :title="isDark ? 'حالت روز' : 'حالت شب'"
      />
      <Button icon="pi pi-user" label="پنل برگذار کننده" rounded/>
    </div>
    <div class="md:hidden flex items-center gap-2">
      <Button
        :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
        rounded
        text
        @click="toggleDarkMode"
        :title="isDark ? 'حالت روز' : 'حالت شب'"
      />
      <Drawer v-model:visible="showMenu" position="top" style="height: auto">
        <ul class="flex flex-wrap *:w-full *:border-b-2 *:flex *:items-center font-danaReg *:text-2xl *:p-4">
          <NuxtLink active-class="active-menu" to="/">
            <li class="flex items-center ">
              <i class="pi pi-home me-4" style="font-size: 1.5rem"></i>
              خانه
            </li>
          </NuxtLink>
          <NuxtLink active-class="active-menu" to="/about">
            <li class="flex items-center ">
              <i class="pi pi-info me-4" style="font-size: 1.5rem"></i>
              درباره
            </li>
          </NuxtLink>
        </ul>
      </Drawer>
      <Button icon="pi pi-bars" outlined rounded @click="showMenu=true"/>
    </div>
  </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import 'primeicons/primeicons.css'

import Drawer from 'primevue/drawer';


export default defineComponent({
  setup() {
    const { isDark, toggleDarkMode } = useDarkMode()

    return {
      isDark,
      toggleDarkMode
    }
  },
  data(){
    return{
      showMenu:false,
    }
  }
})
</script>


<style scoped>

</style>