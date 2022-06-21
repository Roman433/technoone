<template>
  <div class="home">
    <div class="container mx-auto">
      <carousel />
      <products />
    </div>
  </div>
</template>

<script>
import products from "../components/ProductsComp.vue";
import carousel from "../components/CarouselComp.vue";
export default {
  name: "HomeView",
  components: {
    products, carousel
  },
};
</script>
