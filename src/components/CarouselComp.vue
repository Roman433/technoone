<template>
  <div class="flex">
    <div id="carouselExampleControls"
      class="carousel slide w-full my-8 mr-5"
      data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="7" aria-label="Slide 8"></button>
    </div>
      <div class="carousel-inner rounded-lg">
        <div class="carousel-item active">
          <img src="../assets/1.webp" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/2.webp" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/3.webp" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/4.webp" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/5.webp" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/6.webp" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/7.webp" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/8.webp" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div id="carouselExampleControls2"
      class="carousel slide w-1/3 my-8"
      data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button v-for="(button, index) of allProducts" :key="button.id" type="button" data-bs-target="#carouselExampleControls2" :data-bs-slide-to="index" :class="{ 'active' : index === 0 }" aria-current="true" aria-label="Slide 1"></button>
    </div>
      <div class="carousel-inner">
        <div v-for="(product, index) of allProducts" :key="product.id" class="carousel-item" :class="{ 'active' : index === 0}">
          <div @click="$router.push({name: 'single', params: { id: product.id }})" class="bg-white p-2 rounded-lg relative">
            <p v-if="product.discount != null" class="discount p-1 text-white bg-green-400 text-xs font-semibold rounded-md">-{{ product.discount }}%</p>
            <img :src="product.images[0].first" alt="">
            <p class="font-semibold"> {{ product.title }} </p>
            <p v-if="product.discount != null" class="text-2xl font-semibold text-oran">{{ Math.round(product.price-(product.price*product.discount)/100) }} тг.</p>
            <p v-if="product.discount != null" class="text-sm line-through text-gray-400 font-semibold"> {{ product.price }} тг.</p>
            <p v-else class="text-2xl font-semibold"> {{ product.price }} тг. без</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls2"
        data-bs-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls2"
        data-bs-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import "bootstrap";
export default {
  name: "CarouselComp",
  computed: mapGetters(['allProducts']),
};
</script>

<style scoped>
@import url("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
</style>