<template>
<div class="w-full rounded-3xl bg-salt dark:bg-gray-800 mt-12 py-20">
  <p class="text-center max-w-[500px] mx-auto text-prblue font-danaBold"> برگذار چطوری کار می‌کنه؟</p>
  <h2 class="text-center max-w-[500px] mx-auto text-4xl font-danaBold dark:text-white mt-4">خلق تجربه‌ی جذاب برای شما</h2>
  <p class="text-center max-w-[500px] mx-auto text-space dark:text-gray-300 font-danaReg mt-4">
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
  </p>
  <div class="hidden lg:flex w-full p-8 *:w-1/3 *:p-4 *:flex *:justify-center *:content-start *:flex-wrap">
    <div>
      <img src="@/assets/images/how1.png" alt="" class="w-[150px] h-[150px] mb-8" loading="lazy" decoding="async">
      <div class=" how-box">
        <span class="font-danaBold rounded-full bg-prblue flex justify-center items-center text-white w-[40px] h-[40px]">۰۱</span>
      </div>
      <h2 class="font-danaBold text-3xl max-w-[300px] mx-auto mt-8 text-center dark:text-white">
        ایونت‌های اطرافت رو بررسی و جستجو کن
      </h2>
    </div>
    <div>
      <img src="@/assets/images/how2.png" alt="" class="w-[150px] h-[150px] mb-8" loading="lazy" decoding="async">
      <div class="how-box">
        <span class="font-danaBold rounded-full bg-prblue flex justify-center items-center text-white w-[40px] h-[40px]">۰۲</span>
      </div>
      <h2 class="font-danaBold text-3xl max-w-[300px] mx-auto mt-8 text-center dark:text-white">
        ایونتی که به علایقت نزدیکه رو رزرو کن
      </h2>
    </div>
    <div>
      <img src="@/assets/images/how3.png" alt="" class="w-[150px] h-[150px] mb-8" loading="lazy" decoding="async">
      <div class="w-full flex justify-center">
        <span class="font-danaBold rounded-full bg-prblue flex justify-center items-center text-white w-[40px] h-[40px] z-10">۰۳</span>
      </div>
      <h2 class="font-danaBold text-3xl max-w-[300px] mx-auto mt-8 text-center dark:text-white">
        از تک تک لحظات انتخابت لذت ببر
      </h2>
    </div>
  </div>
  <div class="flex lg:hidden flex-wrap md:container mx-auto p-8 *:flex *:w-full *:mt-8">
    <div class="flex items-start h-fit">
      <img src="@/assets/images/how1.png" alt="" class="w-[150px] h-[150px] mb-8" loading="lazy" decoding="async">
      <div class="flex flex-wrap ms-8">
        <div class="w-full mb-4 h-fit">
          <span class="font-danaBold rounded-full bg-prblue flex justify-center items-center text-white w-[40px] h-[40px]">۰۱</span>
        </div>
        <h2 class="font-danaBold md:max-w-[400px] text-3xl text-start dark:text-white">
          ایونت‌های اطرافت رو بررسی و جستجو کن
        </h2>
        <p class="text-space dark:text-gray-300 max-w-[400px] my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquam cumque eius enim laudantium maxime nisi non perferendis quaerat.</p>
      </div>
    </div>
    <div class="flex items-start h-fit">
      <img src="@/assets/images/how3.png" alt="" class="w-[150px] h-[150px] mb-8" loading="lazy" decoding="async">
      <div class="flex flex-wrap ms-8">
        <div class="w-full mb-4 h-fit">
          <span class="font-danaBold rounded-full bg-prblue flex justify-center items-center text-white w-[40px] h-[40px]">۰۲</span>
        </div>
        <h2 class="font-danaBold md:max-w-[400px] text-3xl text-start dark:text-white">
          ایونتی که به علایقت نزدیکه رو رزرو کن
        </h2>
        <p class="text-space dark:text-gray-300 max-w-[400px] my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquam cumque eius enim laudantium maxime nisi non perferendis quaerat.</p>
      </div>
    </div>
    <div class="flex items-start h-fit">
      <img src="@/assets/images/how2.png" alt="" class="w-[150px] h-[150px] mb-8" loading="lazy" decoding="async">
      <div class="flex flex-wrap ms-8">
        <div class="w-full mb-4 h-fit">
          <span class="font-danaBold rounded-full bg-prblue flex justify-center items-center text-white w-[40px] h-[40px]">۰۳</span>
        </div>
        <h2 class="font-danaBold md:max-w-[400px] text-3xl text-start dark:text-white">
          از تک تک لحظات انتخابت لذت ببر
        </h2>
        <p class="text-space dark:text-gray-300 max-w-[400px] my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquam cumque eius enim laudantium maxime nisi non perferendis quaerat.</p>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "How"
})
</script>


<style scoped>
.how-box{
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    z-index: 10;
  }
  &::after{
    content: '';
    width: calc(100% + 40px);
    height: 1px;
    background: #cbd7ea;
    position: absolute;
    z-index: 1;
    right: 50%;
  }
}
</style>