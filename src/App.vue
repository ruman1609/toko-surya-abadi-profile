<template>
  <BaseLayout :is-snap="true">
    <router-view />
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import router from '@/router'

// Navigate to the StoreProfile route (root path)
router.push('/').catch(() => {
  // Handle navigation errors if needed
})
</script>
