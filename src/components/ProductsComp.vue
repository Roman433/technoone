<template>
    <div class="my-5 flex items-start justify-between flex-wrap">
        <div @click="$router.push({name: 'single', params: { id: product.id }})" class="bg-white singleBlock m-2 p-2 rounded-lg relative" v-for="product of allProducts" :key="product.id">
            <p v-if="product.discount != null" class="discount p-1 text-white bg-green-400 text-xs font-semibold rounded-md">-{{ product.discount }}%</p>
            <img :src="product.images[0].first" alt="">
            <p class="font-semibold"> {{ product.title }} </p>
            <p v-if="product.discount != null" class="text-2xl font-semibold text-oran">{{ Math.round(product.price-(product.price*product.discount)/100) }} тг.</p>
            <p v-if="product.discount != null" class="text-sm line-through text-gray-400 font-semibold"> {{ product.price }} тг.</p>
            <p v-else class="text-2xl font-semibold"> {{ product.price }} тг. без</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "ProductsComp",
    computed: mapGetters(['allProducts']),
    async mounted() {
        this.fetchProducts()
    },
    methods: mapActions(['fetchProducts'])
}
</script>