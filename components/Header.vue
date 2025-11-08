<template>
  <header class="fixed top-0 left-0 right-0 z-[9999] w-full bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-black/[0.08] dark:border-white/10 shadow-sm dark:shadow-md">
    <div class="container mx-auto md:px-20">
      <div
        class="flex justify-between p-4 md:p-8 w-full mx-auto items-center font-danaReg"
      >
        <div class="nav flex">
          <div class="logo me-4">
            <img alt="logo" src="@/assets/images/logo.png" />
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
            :title="isDark ? 'حالت روز' : 'حالت شب'"
            @click="toggleDarkMode"
          />
          <Button icon="pi pi-user" label="پنل برگذار کننده" rounded />
        </div>
        <div class="md:hidden flex items-center gap-2">
          <Button
            :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
            rounded
            text
            :title="isDark ? 'حالت روز' : 'حالت شب'"
            @click="toggleDarkMode"
          />
          <Drawer
            v-model:visible="showMenu"
            position="top"
            style="height: auto"
          >
            <ul
              class="flex flex-wrap *:w-full *:border-b-2 *:flex *:items-center font-danaReg *:text-2xl *:p-4"
            >
              <NuxtLink active-class="active-menu" to="/">
                <li class="flex items-center">
                  <i class="pi pi-home me-4" style="font-size: 1.5rem" />
                  خانه
                </li>
              </NuxtLink>
              <NuxtLink active-class="active-menu" to="/about">
                <li class="flex items-center">
                  <i class="pi pi-info me-4" style="font-size: 1.5rem" />
                  درباره
                </li>
              </NuxtLink>
            </ul>
          </Drawer>
          <Button icon="pi pi-bars" outlined rounded @click="showMenu = true" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'primeicons/primeicons.css'

export default defineComponent({
  setup() {
    const { isDark, toggleDarkMode } = useDarkMode()

    return {
      isDark,
      toggleDarkMode,
    }
  },
  data() {
    return {
      showMenu: false,
    }
  },
})
</script>
