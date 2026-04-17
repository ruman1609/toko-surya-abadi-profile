<template>
  <div 
    class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border-2 border-primary transition-all hover:border-secondary hover:bg-gray-50 dark:hover:bg-gray-700"
    data-theme="light"
  >
    <div class="space-y-4">
      <h3 
        class="text-xl font-semibold capitalize text-primary dark:text-secondary"
      >
        {{ name }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300">
        Ketersediaan barang bisa berubah, silakan hubungi nomor kontak untuk informasi terbaru.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
