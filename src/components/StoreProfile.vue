<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="space-y-6">
      <h2 class="text-3xl font-bold">Toko Surya Abadi</h2>
      <div class="space-y-2">
        <p class="text-gray-600">Berdiri sejak 2011</p>
        <p class="text-gray-600">Pemilik: Anton Rachman (Iwan)</p>
      </div>
      <section class="mt-6">
        <h3 class="text-xl font-semibold mb-4">Lokasi</h3>
        <p class="text-gray-600">Jl. D.I. Panjaitan No. 6, Sungai Pinang Dalam, Kec. Sungai Pinang, Kota Samarinda, Kalimantan Timur 75117</p>
      </section>
      <section class="mt-6">
        <h3 class="text-xl font-semibold mb-4">Jam Operasional</h3>
        <ul class="space-y-2">
          <li class="text-gray-600">Senin - Jumat: 09:30 - 12:00 & 13:30 - 18:00</li>
          <li class="text-gray-600">Sabtu: 09:30 - 12:00 & 13:30 - 18:00</li>
          <li class="text-gray-600">Minggu: Tutup</li>
        </ul>
      </section>
    </div>

    <div class="space-y-6">
      <h2 class="text-3xl font-bold mb-4">Produk Utama</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductCategory v-for="category in categories" :key="category" :name="category" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCategory from './ProductCategory.vue';

export default {
  components: {
    ProductCategory
  },
  data() {
    return {
      categories: [
        'Beras', 'Minyak', 'Air', 'Gula', 'Tepung',
        'Bumbu-bumbuan', 'Makanan ringan', 'Rokok'
      ]
    }
  }
}
</script>
