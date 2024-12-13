<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="conainer mx-auto p-4 flex justify-between">
        <nuxt-link to="/" class="font-bold">Nuxt Dojo</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/products" class="btn">Products</nuxt-link></li>
        </ul>
      </nav>
    </header>

    <!-- output the pages content -->
    <div class="conainer mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
