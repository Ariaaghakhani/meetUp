<template>
  <div class="p-4 md:p-8 ">
    <h2 class="font-danaBold text-4xl leading-normal dark:text-white">رویدادها</h2>
    <div class="flex flex-wrap items-center mt-8 w-full border-b dark:border-gray-700 font-danaReg py-4">
      <div
          class="input-search-box w-full lg:w-1/4 lg:border-e px-4 mb-2 md:mb-4 border-b after:-bottom-0 lg:after:-bottom-4 lg:border-b-0 lg:mb-0">
        <IconField class="">
          <InputText v-model="search" class="w-full py-8 lg:py-2" placeholder="جستجو"/>
          <InputIcon class="pi pi-search" style="color:#4457ff"/>
        </IconField>
      </div>
      <div
          class="input-search-box border-b md:border-b-0 w-full md:w-1/3 lg:w-1/4 md:border-e px-4">
        <IconField>
          <InputIcon class="pi pi-map" style="color:#4457ff"/>
          <Select
              v-model="selectedLocation"
              :options="locations"
              append-to="self"
              class="w-full font-danaReg p-2"
              filter
              optionLabel="name"
              placeholder="موقعیت"
              showClear
          />
        </IconField>
      </div>
      <div
          class="input-search-box border-b md:border-b-0 w-full md:w-1/3 lg:w-1/4 md:border-e px-4">
        <IconField>
          <InputIcon class="pi pi-th-large" style="color:#4457ff"/>
          <Select
              v-model="selectedCategory"
              :options="categories"
              append-to="self"
              class="w-full font-danaReg p-2"
              optionLabel="name"
              placeholder="دسته بندی"
              showClear
          />
        </IconField>

      </div>
      <div class="input-search-box w-full md:w-1/3 lg:w-1/4 px-4">
        <IconField>
          <InputIcon class="pi pi-pencil" style="color:#4457ff"/>
          <Select
              v-model="selectedType"
              :options="type"
              append-to="self"
              class="w-full font-danaReg p-2"
              optionLabel="name"
              placeholder="نوع رویداد"
              showClear
          />
        </IconField>
      </div>
    </div>
  </div>
  <div class="p-4 pt-0 md:p-8 md:pt-0 grid grid-cols-3 gap-8">
    <div v-for="n in 12" v-if="eventsLoading" class="card col-span-3 lg:col-span-1">
      <Skeleton border-radius="1.5rem" class="hidden lg:block" height="31.25rem"/>
      <Skeleton border-radius="1.5rem" class="block lg:hidden" height="12.5rem"/>
    </div>
    <NuxtLink v-for="(item,index) in events" v-else :key="index" :to="`/event/${item.id}`"
              class="card col-span-3 lg:col-span-1 border dark:border-gray-700 dark:bg-gray-800 rounded-3xl flex flex-wrap overflow-hidden group h-[200px] lg:h-[500px] relative">
      <div class="absolute w-full top-0 right-0 p-4 flex z-50 font-danaReg">
        <div v-if="!item.type" class="rounded-full bg-white dark:bg-gray-700 text-prblue dark:text-french px-4 py-2 flex items-center font-bold">
          <i class="pi pi-desktop me-2"></i>
          آنلاین
        </div>
        <div v-else class="rounded-full bg-white dark:bg-gray-700 text-prblue dark:text-french px-4 py-2 flex items-center font-bold">
          <i class="pi pi-user me-2"></i>
          حضوری
        </div>
        <Button class="rounded-full px-4 py-2 flex items-center font-bold ms-2" severity="info">
          {{ item.category }}
        </Button>
      </div>
      <div class="max-h-[200px] h-[200px] overflow-hidden w-1/2 lg:w-full">
        <img
            :alt="item.description"
            :src="item.image"
            class="h-full object-cover w-full"
            loading="lazy"
            decoding="async"
        >
      </div>
      <div class="w-1/2 lg:w-full">
        <div class="w-full p-4 my-4">
          <div class="flex items-center justify-start">
          <span>
            <i class="pi pi-map-marker text-[1rem] text-prblue"></i>
          </span>
            <span class="ms-2 text-space dark:text-gray-300">{{ item.location }}</span>
          </div>
        </div>
        <div class="w-full p-4 flex-wrap">
          <div class="w-full font-bold text-xl group-hover:text-prblue duration-300 dark:text-french">{{ item.title }}</div>
          <div class="text-space dark:text-gray-400 mt-4">{{ item.description }}</div>
        </div>
      </div>
    </NuxtLink>
  </div>
  <Paginator
      v-if="!eventsLoading"
      :first="first"
      :rows="chunkSize"
      :totalRecords="totalEvents"
      paginator
      @page="onPageChange"
  />
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import SERVER from '~/SERVER'


export default defineComponent({
  data() {
    return {
      search: '',
      selectedCategory: null,
      selectedLocation: null,
      selectedType: null,
      locations: [
        {name: 'تهران', code: 'tehran'},
        {name: 'اصفهان', code: 'isfahan'},
        {name: 'شیراز', code: 'shiraz'},
        {name: 'تبریز', code: 'tabriz'},
        {name: 'رشت', code: 'rasht'},
        {name: 'مشهد', code: 'mashhad'},
      ],
      categories: [
        {name: 'سرگرمی', code: 'entertainment'},
        {name: 'فرهنگی', code: 'culture'},
        {name: 'ورزشی', code: 'sport'},
        {name: 'هیجان', code: 'extreme'},
        {name: 'خلاقیت', code: 'creativity'},
      ],
      type: [
        {name: 'حضوری', code: 'offline'},
        {name: 'آنلاین', code: 'online'},
      ],
      eventsLoading: true,
      events: [],
      pageNumber: 1,
      chunkSize: 12,
      totalEvents: 0,
      first: 0,
      loadedImages: 0,
    }
  },
  beforeMount() {
    this.getEvents()
  },
  methods: {
    getEvents() {
      this.eventsLoading = true
      this.loadedImages = 0;
      SERVER.getEvents()
          .then((res) => {
            const allEvents = res.data;
            this.totalEvents = allEvents.length;
            this.events = allEvents.slice(this.first, this.first + this.chunkSize);
            this.preloadImages(this.events);
          })
          .catch((err) => {
            console.log(err)
            this.eventsLoading = false
          })
    },
    onPageChange(evt) {
      this.first = evt.first;  // Update the start index based on page change
      this.pageNumber = evt.page + 1;  // PrimeVue starts from 0, so adjust accordingly
      this.getEvents();
    },
    preloadImages(events) {
      const images = events.map(event => event.image);
      images.forEach(image => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          this.loadedImages += 1;
          if (this.loadedImages === this.events.length) {
            this.eventsLoading = false;
          }
        };
      });
    }
  }
})
</script>


<style scoped>

</style>