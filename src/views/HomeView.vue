<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

type tSosmed = {
  icon: string
  url: string
  name: string
  cssBackground: string
}

const baseCssButtonSosmed = 'aspect-square flex-none rounded-full p-1 select-none sm:p-1.5'

const SosmedLists: tSosmed[] = [
  {
    url: 'https://github.com/nrhox',
    cssBackground: 'bg-black',
    icon: 'uil:github',
    name: 'github',
  },
  {
    url: 'https://ig.me/m/jl.nc18',
    cssBackground: 'bg-linear-to-tr from-yellow-400 from-5% via-orange-600 to-purple-600',
    icon: 'uil:instagram',
    name: 'instagram',
  },
  {
    url: 'mailto:jalunugroho118@gmail.com',
    cssBackground: 'bg-red-600',
    icon: 'uil:envelope',
    name: 'email',
  },
]
</script>
<template>
  <main>
    <div class="h-[150px] w-full bg-linear-to-r from-emerald-300 via-cyan-400 to-violet-400"></div>
    <div class="flex w-full flex-col items-center">
      <div
        class="-mt-14 flex aspect-square w-28 items-center justify-center rounded-full bg-white ring-8 ring-white sm:w-32"
      >
        <img
          src="https://github.com/nrhox.png"
          draggable="false"
          class="aspect-square max-w-28 rounded-full select-none sm:max-w-32"
          alt="avatar"
        />
      </div>

      <div class="mt-4 flex w-full max-w-lg flex-none flex-col items-center">
        <h1 class="text-2xl font-bold text-black">Pecel Balap</h1>
        <p class="mt-2 px-2 text-center text-black">
          Halo👋, saya developer baru senang bertemu dengan kalian. Saya menyukai Frontend tetapi
          yang paling saya suka adalah backend
        </p>
        <div class="mx-auto mt-5">
          <h2 class="text-center text-xl font-bold text-black">Sosial Media</h2>
          <div class="mt-4 flex w-full items-center justify-between gap-8">
            <a
              v-for="(sosmed, index) in SosmedLists"
              :href="sosmed.url"
              :key="index"
              draggable="false"
              target="_blank"
              :class="baseCssButtonSosmed + ' ' + sosmed.cssBackground"
              ><Icon :icon="sosmed.icon" class="size-7 text-white" />
              <span class="sr-only"> {{ sosmed.name }} </span></a
            >
          </div>
        </div>
        <div class="mt-6 flex w-full flex-col items-center gap-3 px-10">
          <RouterLink
            to="/about"
            draggable="false"
            class="w-full rounded-full border-2 border-gray-400 px-7 py-3 text-center font-semibold text-black select-none active:bg-gray-200 sm:hover:bg-gray-100"
            >About Me</RouterLink
          >
          <RouterLink
            to="/portofolio"
            draggable="false"
            class="w-full rounded-full border-2 border-gray-400 px-7 py-3 text-center font-semibold text-black select-none active:bg-gray-200 sm:hover:bg-gray-100"
            >Portofolio</RouterLink
          >
          <RouterLink
            to="/website"
            draggable="false"
            class="w-full rounded-full border-2 border-gray-400 px-7 py-3 text-center font-semibold text-black select-none active:bg-gray-200 sm:hover:bg-gray-100"
            >Website</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
