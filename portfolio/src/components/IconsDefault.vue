<script setup lang="ts">
defineProps(['title', 'link'])
</script>

<template>
  <div>
    <a class="flex flex-col" :href="link" target="_blank" rel="noopener noreferrer">
      <button>
        <div class="icons flex flex-col justify-center items-center text-[10px] sm:text-base gap-2">
          <slot></slot>
          <span>{{ title }}</span>
        </div>
      </button>
    </a>
  </div>
</template>
