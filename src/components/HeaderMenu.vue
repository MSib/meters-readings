<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const items = ref([
  {
    label: 'Главная',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'О проекте',
    icon: 'pi pi-book',
    route: '/about',
  },
])
</script>

<template>
  <nav class="menu">
    <Menubar :model="items">
      <template #item="{ item, props }">
        <router-link
          v-slot="{ href, navigate }"
          :to="item.route"
          :class="{ 'border-b-2': route.path === item.route }"
          custom
        >
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menubar>
  </nav>
</template>

<style scoped></style>
