<template>
  <div>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
      praesentium expedita illo asperiores consequatur accusamus perferendis
      fuga libero! Aperiam consequatur quod provident veniam sit ea deleniti
      excepturi itaque eligendi?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
      praesentium expedita illo asperiores consequatur accusamus perferendis
      fuga libero! Aperiam consequatur quod provident veniam sit ea deleniti
      excepturi itaque eligendi?
    </p>
    <h2>Api data: {{ data }}</h2>
  </div>
</template>

<script setup>
// const { data } = await useFetch("/api/ninja?name=mario", {
//   method: "post",
//   body: { age: 44 },
// });

// const { data } = await useFetch("/api/ninja");

const { code } = useRuntimeConfig().public;
const { data } = await useFetch(`/api/currency/${code}`);
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
