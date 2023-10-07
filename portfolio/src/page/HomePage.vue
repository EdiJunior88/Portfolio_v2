<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Avatar from '@/components/AvatarDefault.vue'
import ButtonDefault from '@/components/ButtonDefault.vue'
import Mii from '@/assets/Image/Mii.webp'
</script>

<template>
  <div className="mx-auto w-full h-full background-home {{theme}}">
    <div className="">
      <Avatar
        :src="Mii"
        alt="Mii avatar"
        name="Edivaldo Reis Moura Junior"
        description="Desenvolvedor Front-End + React + TypeScript"
      />

      <div className="container-button flex justify-center items-center flex-wrap gap-8">
        <RouterLink to="/">
          <ButtonDefault title="Home"></ButtonDefault>
        </RouterLink>
        <RouterLink to="/habilities">
          <ButtonDefault title="Habilidades"></ButtonDefault>
        </RouterLink>
        <RouterView />
      </div>
    </div>
  </div>
</template>
