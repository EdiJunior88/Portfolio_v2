<script setup lang="ts">
import type { InterfaceButton } from '@/Interface/Interface'

defineProps<InterfaceButton>()
</script>

<template>
  <button
    className="button sm:w-56 w-40 rounded-lg bg-white p-2 border-zinc-200 border-solid border-2 background-button shadow-lg {{theme}}"
  >
    <div className="icon-button flex flex-col justify-center items-center gap-4">
      <p className="font-medium text-sm sm:text-lg">{{ title }}</p>
    </div>
  </button>
</template>

<style lang="css" scoped></style>
