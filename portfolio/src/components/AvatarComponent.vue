<script setup lang="ts">
import type { InterfaceAvatar } from '@/Interface/Interface'

defineProps<InterfaceAvatar>()
</script>

<template>
  <div className="container w-11/12 sm:w-full h-auto flex flex-row justify-center gap-2">
    <div className="avatar w-28 background-button rounded-lg shadow-lg">
      <img className="py-4" :src="src" :alt="alt" />
    </div>
    <div
      className="avatar-container-description bg-white w-full h-auto sm:w-96 rounded-lg shadow-lg flex flex-col justify-center items-center gap-2 background-shadow"
    >
      <p className="avatar-name sm:text-2xl font-bold">{{ name }}</p>
      <p className="avatar-description sm:text-sm text-[10px] text-gray-500">{{ description }}</p>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
