<script setup lang="ts">
defineProps(['src', 'alt', 'name', 'description'])
</script>

<template>
  <button>
    <div class="container w-11/12 sm:w-full h-auto flex flex-row justify-center gap-2">
      <div class="avatar w-28 background-button rounded-lg shadow-lg">
        <img class="py-4" :src="src" :alt="alt" />
      </div>
      <div
        class="avatar-container-description bg-white w-full h-auto sm:w-96 rounded-lg shadow-lg flex flex-col justify-center items-center gap-2 background-shadow"
      >
        <p class="avatar-name sm:text-2xl font-bold">{{ name }}</p>
        <p class="avatar-description sm:text-sm text-[10px] text-gray-500">
          {{ description }}
        </p>
      </div>
    </div>
  </button>
</template>
