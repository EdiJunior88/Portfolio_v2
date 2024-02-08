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
    class="flex h-full w-full flex-col items-center justify-center gap-5 text-center sm:flex-row sm:items-start sm:justify-start sm:text-start"
  >
    <ButtonDefault :title="title">
      <span class="text-5xl">{{ icon }}</span>
    </ButtonDefault>
    <div class="flex w-full flex-col justify-between">
      <slot />
    </div>
  </div>
</template>
