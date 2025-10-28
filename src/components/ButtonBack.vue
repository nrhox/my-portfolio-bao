<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <button @click="router.back()">
    <Icon icon="heroicons:arrow-left" class="size-6" />
  </button>
</template>
