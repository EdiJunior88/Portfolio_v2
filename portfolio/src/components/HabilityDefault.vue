<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue'

defineProps({
  title: {
    type: String,
    required: true,
    default: ''
  },
  icon: {
    type: String,
    required: true,
    default: ''
  }
})
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-center sm:justify-start sm:flex-row items-center sm:items-start text-center sm:text-start gap-5"
  >
    <ButtonDefault :title="title">
      <span class="text-5xl">{{ icon }}</span>
    </ButtonDefault>
    <div class="w-full flex flex-col justify-between">
      <slot />
    </div>
  </div>
</template>
