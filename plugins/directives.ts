import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';
export default defineNuxtPlugin(nuxtApp => {
    // Register PrimeVue
    nuxtApp.vueApp.use(PrimeVue);

    // Register AnimateOnScroll directive
    nuxtApp.vueApp.directive('animateonscroll', AnimateOnScroll);
});
