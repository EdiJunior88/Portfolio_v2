<script setup lang="ts">
import HomePage from '@/page/HomePage.vue'
import { inject } from '@vercel/analytics'

inject()
</script>

<template>
  <div>
    <HomePage />
  </div>
</template>
