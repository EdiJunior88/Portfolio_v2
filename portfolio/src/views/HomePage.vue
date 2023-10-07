<script setup lang="ts">
import Avatar from '@/components/AvatarComponent.vue'
import Mii from '@/assets/Image/Mii.webp'
import ButtonDefault from '@/components/ButtonDefault.vue'
</script>

<template>
  <div className="mx-auto w-full h-full background-home {{theme}}">
    <div
      className="w-full h-screen flex flex-col justify-evenly sm:justify-center items-center gap-10 sm:gap-12"
    >
      <Avatar
        :src="Mii"
        alt="Mii avatar"
        name="Edivaldo Reis Moura Junior"
        description="Desenvolvedor Front-End + React + TypeScript"
      />

      <div className="container-button flex justify-center items-center flex-wrap gap-8">
        <router-link to="/habilities">
          <ButtonDefault title="Habilidades" />
        </router-link>
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
