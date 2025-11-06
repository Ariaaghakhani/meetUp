<template>
  <div class="w-full flex py-40 px-4 flex-wrap md:flex-nowrap justify-center md:justify-between">
    <img src="@/assets/images/why.png" class="w-full md:w-1/2 -scale-x-100 order-2 md:order-1 max-w-[600px] object-contain mb-8 md:mb-0" alt="">
    <div class="w-full md:w-1/2 ms-8 order-1 md:order-2">
      <p class="max-w-[500px] md:max-w-full text-center md:text-start mx-auto text-prblue font-danaBold">چرا برگذار؟</p>
      <h2 class="max-w-[500px] md:max-w-full text-center md:text-start mx-auto text-4xl font-danaBold dark:text-white mt-4">
        قابلیت دسترسی به بیش از ۱۰۰۰ ایونت در کف دستانتون
      </h2>
      <p class="md:text-start mx-auto md:mx-0 text-center max-w-[500px] text-space dark:text-gray-300 font-danaReg mt-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
      <div class="flex card w-full justify-center items-center font-danaReg gap-4 my-16 md:-ms-8">
        <NuxtLink to="/events">
          <Button size="large" label="مشاهده رویدادها" outlined rounded/>
        </NuxtLink>
        <NuxtLink to="/hosting">
          <Button size="large" label="برگذاری رویداد" rounded/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Why"
})
</script>


<style scoped>

</style>