<template>
  <div class="p-4 bg-white rounded-lg shadow-sm">
    <h3 class="text-lg font-semibold capitalize mb-2">{{ name }}</h3>
    <div class="space-y-1">
      <p class="text-gray-600">Ketersediaan barang bisa berubah, silakan hubungi nomor kontak untuk informasi terbaru.</p>
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
