<template>
  <div 
    class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-primary dark:hover:border-secondary hover:-translate-y-1"
    data-theme="light"
  >
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 
          class="text-xl font-bold capitalize text-primary dark:text-secondary"
        >
          {{ name }}
        </h3>
        <div class="w-10 h-10 rounded-full bg-primary/10 dark:bg-secondary/10 flex items-center justify-center">
          <span class="text-primary dark:text-secondary text-lg">📦</span>
        </div>
      </div>
      <p class="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
        {{ getDescription(name) }}
      </p>
      <div class="pt-2 border-t border-gray-100 dark:border-gray-700">
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Ketersediaan barang bisa berubah, silakan hubungi nomor kontak untuk informasi terbaru.
        </p>
      </div>
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
