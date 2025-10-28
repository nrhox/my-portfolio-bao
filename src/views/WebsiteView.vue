<script setup lang="ts">
import a29vagtaThumbnail from '@/assets/a29vagta_thumbnail.webp'
import tokoOnlineThumbnail from '@/assets/toko_online.webp'
import BaseLayout from '@/components/BaseLayout.vue'

type tWebList = {
  url: string
  title: string
  description: string
  deployAt: string
  thumbnail: string
}

const myWebLists: tWebList[] = [
  {
    deployAt: '12 Maret 2023',
    description:
      'Website pertama yang saya buat pada saat smp untuk melihat kumpulan foto maupun video.',
    thumbnail: a29vagtaThumbnail,
    title: 'A 29 Vagta',
    url: 'https://a29vagta.netlify.app/',
  },
  {
    deployAt: '27 Juli 2025<',
    description:
      'Prototype website toko online, belum sepenuhnya jadi tetapi memberikan tantangan tersendiri bagi saya.',
    thumbnail: tokoOnlineThumbnail,
    title: 'Toko online',
    url: 'https://toko-nrhox.netlify.app/',
  },
]
</script>

<template>
  <BaseLayout>
    <template #page-name> Website </template>
    <div class="mx-1 mt-5 flex flex-col gap-7">
      <a
        v-for="(list, index) in myWebLists"
        :href="list.url"
        :key="index"
        target="_blank"
        class="select-none"
        draggable="false"
      >
        <div class="flex flex-col rounded-xl border border-gray-200 bg-white shadow-2xs">
          <img
            class="aspect-16/7 w-full rounded-t-xl object-cover object-top"
            :src="list.thumbnail"
            :alt="'Screenshot ' + list.title"
          />
          <div class="p-4 md:p-5">
            <h3 class="text-xl font-bold text-gray-800 underline">{{ list.title }}</h3>
            <p class="mt-1 text-black">
              {{ list.description }}
            </p>
            <p class="mt-1 text-sm text-gray-600">{{ list.deployAt }}</p>
          </div>
        </div>
      </a>
    </div>
  </BaseLayout>
</template>
