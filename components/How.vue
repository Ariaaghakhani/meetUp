<template>
<div class="w-full rounded-3xl bg-salt mt-40 py-40">
  <p class="text-center max-w-[500px] mx-auto text-prblue font-danaBold"> برگذار چطوری کار می‌کنه؟</p>
  <h2 class="text-center max-w-[500px] mx-auto text-4xl font-danaBold mt-4">خلق تجربه‌ی جذاب برای شما</h2>
  <div class="flex w-full p-8 *:w-1/3 *:p-4 *:flex *:justify-center *:content-start *:flex-wrap">
    <div>
      <img src="@/assets/images/how1.png" alt="" class="w-[150px] h-[150px] mb-8">
      <div class=" how-box">
        <span class="font-danaBold rounded-full bg-prblue flex justify-center items-center text-white w-[40px] h-[40px]">۰۱</span>
      </div>
    </div>
    <div>
      <img src="@/assets/images/how2.png" alt="" class="w-[150px] h-[150px] mb-8">
      <div class="how-box">
        <span class="font-danaBold rounded-full bg-prblue flex justify-center items-center text-white w-[40px] h-[40px]">۰۲</span>
      </div>
    </div>
    <div>
      <img src="@/assets/images/how3.png" alt="" class="w-[150px] h-[150px] mb-8">
      <div class="w-full flex justify-center">
        <span class="font-danaBold rounded-full bg-prblue flex justify-center items-center text-white w-[40px] h-[40px] z-10">۰۳</span>
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