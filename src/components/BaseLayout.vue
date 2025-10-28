<script setup lang="ts">
import ButtonBack from './ButtonBack.vue'
</script>

<template>
  <div class="mx-auto w-full max-w-lg">
    <header class="sticky top-0 flex bg-white px-3 py-2 pt-3">
      <ButtonBack />
      <h1 class="ml-3 text-2xl font-bold"><slot name="page-name"></slot></h1>
    </header>
    <div class="mt-5 px-3">
      <slot></slot>
    </div>
  </div>
</template>
