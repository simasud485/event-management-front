<template>
  <div class="container py-3">
    <MainNavbar />
    <main>
      <router-view />
    </main>
    <FooterView />
  </div>
</template>

<script setup>
import MainNavbar from '@/views/MainNavbar.vue';
import FooterView from '@/views/FooterView.vue';
</script>

<style scoped></style>