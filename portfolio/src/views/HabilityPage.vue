<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue';
</script>

<template>
  <div>
    tetetete

    <router-link to="/">
      <ButtonDefault title="Home" />
    </router-link>
    <router-view />
  </div>
</template>

<style lang="css" scoped></style>
