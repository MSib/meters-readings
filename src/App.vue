<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderMenu from '@/components/HeaderMenu.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderMenu />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
