<template>
  <div class="flex flex-col bg-surface dark:bg-surface-container overflow-hidden min-h-screen"
    :class="isSnap ? 'h-screen' : 'min-h-screen'">
    <nav
      class="bg-primary/90 backdrop-blur-md text-on-primary py-4 px-4 md:px-6 flex items-center justify-between fixed top-0 w-full z-50 shadow-md">
      <div class="flex items-center">
        <img src="/src/assets/logo.png" alt="Logo" class="h-8 w-auto mr-3 md:h-10 md:mr-4" />
        <h1 class="text-lg md:text-2xl font-bold tracking-tight">Toko Surya Abadi</h1>
      </div>
      <div class="space-x-2 md:space-x-4">
        <!-- <router-link to="/check-stock"
          class="text-on-primary hover:text-on-primary/80 text-sm md:text-base font-medium transition-colors">
          Check Stock
        </router-link> -->
        <a href="https://wa.me/628125810410"
          class="text-on-primary hover:text-on-primary/80 text-sm md:text-base font-medium transition-colors">
          Kontak: +62-812-581-0410
        </a>
      </div>
    </nav>

    <main :class="['grow pt-20', isSnap ? 'snap-y snap-mandatory overflow-y-auto' : 'overflow-y-auto']">
      <slot></slot>

      <footer class="bg-primary text-on-primary mt-auto border-t-2 border-on-primary/20 snap-start">
        <div class="mx-auto px-4 py-6">
          <p class="text-sm md:text-base text-center">&copy; {{ year }} Toko Surya Abadi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isSnap: boolean
}
withDefaults(defineProps<Props>(), {
  isSnap: false
})

const date = new Date();
const year = date.getFullYear();
</script>
