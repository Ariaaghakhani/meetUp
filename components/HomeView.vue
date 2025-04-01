<template>
  <div
      v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0 animate-duration-1000' }">
    <div class="p-4 md:p-8 bg-landing bg-center bg-no-repeat bg-cover">
      <div class="container mx-auto max-w-[500px] *:text-center">
        <div class="text-prblue font-danaBold text-2xl ">به برگذار خوش آمدید</div>
        <h1 class="text-5xl  font-danaBold my-16 leading-relaxed">
          با
          <strong class="text-prblue">برگذار</strong>
          کشف کنید، رزرو کنید، لذت ببرید
        </h1>
        <p class="font-danaReg text-space">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
        <div class="flex card w-full justify-center items-center font-danaReg gap-4 my-16">
          <NuxtLink to="/events">
            <Button class="" label="مشاهده رویدادها" outlined rounded/>
          </NuxtLink>
          <NuxtLink to="/hosting">
            <Button class="" label="برگذاری رویداد" rounded/>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
<!--  <Events/>-->
<!--  <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">-->
<!--    <How/>-->
<!--  </div>-->
<!--  <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">-->
<!--    <Why/>-->
<!--  </div>-->
    <Testimonial/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {}
  }
})
</script>


<style scoped>

</style>