<template>
  <div class="bg-gray-100 dark:bg-gray-900 py-10">
    <Vue3Marquee class="mt-8" :duration="300" :pause-on-hover="true" style="direction: ltr">
      <div v-for="(item, index) in quotes" :key="index" class="testimonial-card">
        <p class="text-gray-700 dark:text-gray-300">{{ item.quote }}</p>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">— {{ item.id }}</p>
      </div>
    </Vue3Marquee>
    <Vue3Marquee class="mt-8" direction="reverse" :duration="300" :pause-on-hover="true" style="direction: ltr">
      <div v-for="(item, index) in quotes" :key="index" class="testimonial-card">
        <p class="text-gray-700 dark:text-gray-300">{{ item.quote }}</p>
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">— {{ item.id }}</p>
      </div>
    </Vue3Marquee>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SERVER from "@/SERVER.js";
export default defineComponent({

  data() {
    return {
      testimonials: [
        { text: "This event changed my life! Highly recommended.", author: "Sophia Moore" },
        { text: "A fantastic experience with great networking opportunities.", author: "Matt Cannon" },
        { text: "Loved every bit of it. Can't wait for the next event!", author: "John Doe" },
        { text: "Exceptional organization and great speakers!", author: "Jane Smith" },
      ],
      quotes:[],
    };
  },
  mounted() {
    this.getQuotes()
  },
  methods:{
    getQuotes(){
      SERVER.getQuotes()
          .then((res)=>{
            this.quotes = res.data.quotes
          })
          .catch((err)=>{
            console.log(err)
          })
    }
  },
});
</script>

<style scoped>
.testimonial-card {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  min-width: 300px;
  max-width: 350px;
  margin-right: 1rem;
  direction: rtl;
  height: 200px;
}

:global(.dark) .testimonial-card {
  background: #1f2937 !important;
}
</style>
