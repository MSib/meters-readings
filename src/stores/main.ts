import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const API_URL = 'https://msib-dev.ru/api/'

  return { API_URL }
})
