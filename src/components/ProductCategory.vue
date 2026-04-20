<template>
  <div 
    class="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border-2 border-primary transition-all hover:border-secondary hover:bg-gray-50 dark:hover:bg-gray-700"
    data-theme="light"
  >
    <div class="space-y-3 md:space-y-4">
      <h3 
        class="text-lg md:text-xl font-semibold capitalize text-primary dark:text-secondary"
      >
        {{ name }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base">
        {{ getDescription(name) }}
      </p>
      <p class="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">
        Produk ini merupakan bagian dari kategori kebutuhan pokok dan harian.
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

const getDescription = (category: string) => {
  const descriptions: Record<string, string> = {
    'Bahan Pangan Pokok': 'Berbagai jenis beras, minyak goreng, gula, dan tepung untuk kebutuhan pokok rumah tangga.',
    'Kebutuhan Dapur': 'Berbagai macam bumbu-bumbuan untuk memasak yang lengkap dan berkualitas.',
    'Minuman & Konsumsi': 'Air mineral serta aneka makanan ringan (snack) untuk kebutuhan harian.',
    'Produk Lainnya': 'Berbagai merek rokok yang tersedia di toko kami.'
  }
  return descriptions[category] || 'Ketersediaan barang bisa berubah, silakan hubungi nomor kontak untuk informasi terbaru.'
}
</script>
