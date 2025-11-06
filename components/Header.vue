<template>
  <header class="header-sticky">
  <div class=" container mx-auto md:px-20">
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
    <div class="items-center gap-2 hidden md:flex">
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


<style>
.header-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 9999 !important;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  width: 100%;
}

:global(.dark) .header-sticky {
  background-color: rgba(15, 23, 42, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
</style>