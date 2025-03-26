<template>
  <div class="p-4 md:p-8 my-16">
    <h2 class="font-danaBold text-4xl leading-normal">رویدادها</h2>
    <div class="flex flex-wrap items-center mt-8 w-full border-b font-danaReg py-4">
      <div class="input-search-box w-full lg:w-1/4 lg:border-l px-4 mb-8 border-b after:-bottom-0 lg:after:-bottom-5 lg:border-b-0 lg:mb-0">
        <IconField>
          <InputText v-model="search" class="w-full py-8 lg:py-0" placeholder="جستجو"/>
          <InputIcon class="pi pi-search" style="color:#4457ff"/>
        </IconField>
      </div>
      <div
          class="input-search-box border-b md:border-b-0 w-full md:w-1/3 lg:w-1/4 md:border-l px-4 pb-2">
        <IconField>
          <InputIcon class="pi pi-map" style="color:#4457ff"/>
          <Select v-model="selectedLocation" :options="locations" class="w-full font-danaReg" filter optionLabel="name"
                  placeholder="موقعیت" showClear/>
        </IconField>
      </div>
      <div
          class="input-search-box border-b md:border-b-0 w-full md:w-1/3 lg:w-1/4 md:border-l px-4 pb-2">
        <IconField>
          <InputIcon class="pi pi-th-large" style="color:#4457ff"/>
          <Select v-model="selectedCategory" :options="categories" class="w-full font-danaReg" optionLabel="name"
                  placeholder="دسته بندی" showClear/>
        </IconField>

      </div>
      <div class="input-search-box w-full md:w-1/3 lg:w-1/4 px-4 pb-2">
        <IconField>
          <InputIcon class="pi pi-pencil" style="color:#4457ff"/>
          <Select v-model="selectedType" :options="type" class="w-full font-danaReg" optionLabel="name" placeholder="نوع رویداد"
                  showClear/>
        </IconField>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

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
      ]
    }
  }
})
</script>


<style scoped>

</style>