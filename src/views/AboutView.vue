<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'

const biodata = `
Halo👋, saya developer baru dan mulai kenal dunia pemrograman semenjak pandemi COVID-19.
Awalnya cuma buat ngisi waktu, tapi malah jadi hobi yang terbawa sampai saat ini. Sekarang
saya paling sering main di Golang dan TypeScript, dua bahasa yang kadang bikin pusing tapi
menarik kalau udah dapet feel-nya.

Kalau nulis kode, saya biasanya berjalan dulu sampai sesuai harapan, baru nanti dirapikan
sambil nyari cara biar lebih efisien. Saya suka suasana tenang waktu ngerjain sesuatu,
ditemani minuman dan musik dangdut pop kayak NDX AKA ataupun DJ. Tapi kalau udah fokus banget, musik
langsung saya pause biar gak ada gangguan. Cuma saya, layar, dan ide yang tiba-tiba muncul.

Buat saya, dunia pemrograman itu tempat buat terus nyoba hal baru. Kadang bikin stres,
kadang malah lucu, tapi selalu seru karena banyak hal yang bisa diambil. Saya masih baru,
sering salah, dan kadang bingung juga, tapi justru di situ letak menariknya.
`

const finalTextBiodata = biodata
  .trim()
  .split('\n\n')
  .filter((t) => t.length > 5)
</script>

<template>
  <BaseLayout>
    <template #page-name> About Me </template>
    <div class="mt-4 space-y-4 text-black">
      <p v-for="(text, index) in finalTextBiodata" :key="index" class="text-justify indent-8">
        {{ text }}
      </p>
    </div>
  </BaseLayout>
</template>
