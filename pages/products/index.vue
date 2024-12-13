<template>
  <div>
    <div class="grid grid-cols-2 gap-5 sm:grid-cols-4">
      <div class="" v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
// fetch the products
const { data: products } = await useFetch("https://fakestoreapi.com/products");

definePageMeta({
  layout: "products",
});

useHead({
  title: "Nuxt Dojo | Products",
  meta: [{ name: "description", content: "description Nuxt Dojo | Products" }],
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
