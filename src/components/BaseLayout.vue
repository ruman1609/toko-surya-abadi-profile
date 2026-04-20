<template>
  <div class="flex flex-col bg-surface dark:bg-surface-container overflow-hidden"
    :class="isSnap ? 'h-screen' : 'min-h-screen'">
    <nav class="bg-primary text-on-primary py-4 px-6 flex items-center justify-between fixed top-0 z-50">
      <div class="flex items-center">
        <img src="/src/assets/logo.png" alt="Logo" class="h-10 w-auto mr-4" />
        <h1 class="text-2xl font-bold">Toko Surya Abadi</h1>
      </div>
      <div class="space-x-4">
        <a href="https://wa.me/628125810410" class="text-on-primary hover:text-on-primary/80">Kontak:
          +62-812-581-0410</a>
      </div>
    </nav>

    <main :class="['grow', isSnap ? 'snap-y snap-mandatory overflow-y-auto' : 'overflow-y-auto']">
      <slot></slot>

      <footer class="bg-primary text-on-primary mt-auto border-t-2 border-on-primary" :class="isSnap ? 'snap-end' : ''">
        <div class="mx-auto px-4 py-4">
          <p>&copy; {{ year }} Toko Surya Abadi. All rights reserved.</p>
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
