<template>
  <div class="bg-gray-100 py-10 rounded-3xl pt-20">
    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
      <p class="text-center max-w-[500px] mx-auto text-prblue font-danaBold">نظرات</p>
      <h2 class="text-center max-w-[500px] mx-auto text-4xl font-danaBold mt-4">دیگران درباره برگذار چی میگن؟</h2>
      <p class="text-center max-w-[500px] mx-auto text-space font-danaReg mt-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
        روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
    </div>
    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-20 animate-duration-1000' }">
      <Vue3Marquee :duration="300" :pause-on-hover="true" class="mt-8 " style="direction: ltr">
        <div v-for="(item, index) in quotes" :key="index" class="testimonial-card p-8">
          <div class="flex max-h-[40px]">
            <img :src="item.avatar" alt="" width="40" height="40" class="rounded-full ">
            <div class="flex ms-4 flex-wrap">
              <span class="font-bold">{{item.name}}</span>
              <span class="w-full text-xs text-space">{{item.city}},{{item.state}}</span>
            </div>
          </div>
          <p class="text-gray-700 mt-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </p>
        </div>
      </Vue3Marquee>
    </div>
    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-20 animate-duration-1000' }">
      <Vue3Marquee :duration="300" :pause-on-hover="true" class="mt-8 " direction="reverse" style="direction: ltr">
        <div v-for="(item, index) in quotesReverse" :key="index" class="testimonial-card p-8">
          <div class="flex ">
            <img :src="item.avatar" alt="" width="40" height="40" class="rounded-full ">
            <div class="flex ms-4 flex-wrap">
              <span class="font-bold">{{item.name}}</span>
              <span class="w-full text-xs text-space">{{item.city}},{{item.state}}</span>
            </div>
          </div>
          <p class="text-gray-700 mt-4 font-danaReg [font-size:14px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </p>
        </div>
      </Vue3Marquee>
    </div>
    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
      <div class="flex card w-full justify-center items-center font-danaReg gap-4 my-16 md:-ms-8">
        <NuxtLink to="/events">
          <Button label="مشاهده رویدادها" outlined rounded size="large"/>
        </NuxtLink>
        <NuxtLink to="/hosting">
          <Button label="برگذاری رویداد" rounded size="large"/>
        </NuxtLink>
      </div>
    </div>
    <div class="w-full relative py-16">
      <div class="w-[90%] h-[200px] bg-prblue absolute top-1/2 left-1/2 -translate-x-1/2 rounded-3xl"></div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import SERVER from "@/SERVER.js";

export default defineComponent({

  data() {
    return {
      testimonials: [
        {text: "This event changed my life! Highly recommended.", author: "Sophia Moore"},
        {text: "A fantastic experience with great networking opportunities.", author: "Matt Cannon"},
        {text: "Loved every bit of it. Can't wait for the next event!", author: "John Doe"},
        {text: "Exceptional organization and great speakers!", author: "Jane Smith"},
      ],
      quotes: [],
      quotesReverse: [],
    };
  },
  mounted() {
    this.getQuotes()
  },
  methods: {
    getQuotes() {
      SERVER.getQuotes()
          .then((res) => {
            this.quotes = res.data
            this.quotesReverse = this.quotes.reverse()
            // this.quotesReverse =
          })
          .catch((err) => {
            console.log(err)
          })
    }
  },
});
</script>

<style scoped>
.testimonial-card {
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  //padding: 1rem;
  border-radius: 10px;
  min-width: 300px;
  max-width: 350px;
  margin-right: 1rem;
  direction: rtl;
  height: 200px;

  p {
    display: block;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 4.5rem;
    white-space: pre-line;
    word-wrap: normal;
    line-height: 18px;
    line-clamp: 4;
    -webkit-line-clamp: 2;
  }
}

</style>
