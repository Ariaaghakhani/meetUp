<template>
  <footer class="w-full bg-salt dark:bg-gray-900 border-t dark:border-gray-800 mt-20">
    <div class="container mx-auto px-4 md:px-8 py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <div class="logo mb-6">
            <img alt="logo برگذار" src="@/assets/images/logo.png" class="w-32">
          </div>
          <p class="text-space dark:text-gray-400 font-danaReg mb-6 max-w-[300px]">
            برگذار، پلتفرم برگزاری و کشف رویدادهای هیجان‌انگیز در سراسر کشور. با ما تجربه‌های فراموش‌نشدنی بسازید.
          </p>
          <!-- Social Media -->
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 flex items-center justify-center hover:bg-prblue hover:text-white dark:hover:bg-prblue transition-all duration-300">
              <i class="pi pi-instagram"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 flex items-center justify-center hover:bg-prblue hover:text-white dark:hover:bg-prblue transition-all duration-300">
              <i class="pi pi-twitter"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 flex items-center justify-center hover:bg-prblue hover:text-white dark:hover:bg-prblue transition-all duration-300">
              <i class="pi pi-linkedin"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 flex items-center justify-center hover:bg-prblue hover:text-white dark:hover:bg-prblue transition-all duration-300">
              <i class="pi pi-telegram"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="lg:col-span-1">
          <h3 class="font-danaBold text-xl mb-6 dark:text-white">دسترسی سریع</h3>
          <ul class="space-y-3 font-danaReg">
            <li>
              <NuxtLink to="/" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
                صفحه اصلی
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/events" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
                رویدادها
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
                درباره ما
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/hosting" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
                برگذاری رویداد
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div class="lg:col-span-1">
          <h3 class="font-danaBold text-xl mb-6 dark:text-white">دسته‌بندی‌ها</h3>
          <ul class="space-y-3 font-danaReg">
            <li>
              <a href="#" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
                سرگرمی
              </a>
            </li>
            <li>
              <a href="#" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
                فرهنگی
              </a>
            </li>
            <li>
              <a href="#" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
                ورزشی
              </a>
            </li>
            <li>
              <a href="#" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
                هیجان‌انگیز
              </a>
            </li>
            <li>
              <a href="#" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
                خلاقیت
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="lg:col-span-1">
          <h3 class="font-danaBold text-xl mb-6 dark:text-white">تماس با ما</h3>
          <ul class="space-y-4 font-danaReg">
            <li class="flex items-start gap-3">
              <i class="pi pi-envelope text-prblue mt-1"></i>
              <div class="text-space dark:text-gray-400">
                <a href="mailto:info@bargozar.com" class="hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
                  info@bargozar.com
                </a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <i class="pi pi-phone text-prblue mt-1"></i>
              <div class="text-space dark:text-gray-400">
                <a href="tel:+982112345678" class="hover:text-prblue dark:hover:text-prblue transition-colors duration-300" style="direction: ltr; display: inline-block;">
                  021-1234-5678
                </a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <i class="pi pi-map-marker text-prblue mt-1"></i>
              <div class="text-space dark:text-gray-400">
                تهران، خیابان ولیعصر، پلاک ۱۲۳
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t dark:border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- Copyright -->
          <p class="text-space dark:text-gray-400 font-danaReg text-sm text-center md:text-right">
            © {{ currentYear }} برگذار. تمامی حقوق محفوظ است.
          </p>

          <!-- Legal Links -->
          <div class="flex gap-6 font-danaReg text-sm">
            <a href="#" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
              حریم خصوصی
            </a>
            <a href="#" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
              شرایط استفاده
            </a>
            <a href="#" class="text-space dark:text-gray-400 hover:text-prblue dark:hover:text-prblue transition-colors duration-300">
              قوانین
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
})
</script>

<style scoped>

</style>