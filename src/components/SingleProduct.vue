<template>
  <div class="my-10">
    <div class="container mx-auto">
      <div class="flex items-start justify-between">
        <div>
          <div class="bg-white rounded-lg p-12 w-full mr-3">
            <div>
              <h1 class="text-2xl font-semibold mb-2">
                {{ allProducts[curID].title }}
              </h1>
              <p class="text-gray-400 text-xs">
                Артикул: {{ allProducts[curID].article }}
              </p>
              <div class="flex items-start justify-between w-full">
                <div class="w-2/5 mt-7 mr-4">
                  <img
                    v-if="setImg === 1"
                    class="w-full"
                    :src="allProducts[curID].images[0].first"
                    alt=""
                  />
                  <img
                    v-if="setImg === 2"
                    class="w-full"
                    :src="allProducts[curID].images[0].second"
                    alt=""
                  />
                  <img
                    v-if="setImg === 3"
                    class="w-full"
                    :src="allProducts[curID].images[0].third"
                    alt=""
                  />
                  <div
                    class="flex justify-center items-center w-full img-block"
                  >
                    <img
                      @click="setImg = 1"
                      class="w-12 p-1 mx-1 rounded-sm"
                      :class="{ 'border border-oran': setImg == 1 }"
                      :src="allProducts[curID].images[0].first"
                      alt=""
                    />
                    <img
                      @click="setImg = 2"
                      class="w-12 p-1 mx-1 rounded-sm"
                      :class="{ 'border border-oran': setImg == 2 }"
                      :src="allProducts[curID].images[0].second"
                      alt=""
                    />
                    <img
                      @click="setImg = 3"
                      class="w-12 p-1 mx-1 rounded-sm"
                      :class="{ 'border border-oran': setImg == 3 }"
                      :src="allProducts[curID].images[0].third"
                      alt=""
                    />
                  </div>
                </div>
                <div class="w-3/5">
                  <p
                    v-if="allProducts[curID].credit === true"
                    class="
                      bg-credit
                      w-max
                      p-0
                      text-white
                      font-semibold
                      rounded-sm
                      px-1
                    "
                  >
                    0 - 0 - 12
                  </p>
                  <h2 class="text-xl font-semibold mt-2">Описание</h2>
                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      border-b border-dashed border-gray-300
                      my-2
                    "
                  >
                    <p>Модельный год</p>
                    <p>{{ allProducts[curID].year }}</p>
                  </div>
                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      border-b border-dashed border-gray-300
                      my-2
                    "
                  >
                    <p>Диагональ дисплея, дюйм</p>
                    <p>{{ allProducts[curID].diagonal }}</p>
                  </div>
                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      border-b border-dashed border-gray-300
                      my-2
                    "
                  >
                    <p>Разрешение дисплея</p>
                    <p>{{ allProducts[curID].resolution }}</p>
                  </div>
                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      border-b border-dashed border-gray-300
                      my-2
                    "
                  >
                    <p>Тип матрицы</p>
                    <p>{{ allProducts[curID].matrix }}</p>
                  </div>
                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      border-b border-dashed border-gray-300
                      my-2
                    "
                  >
                    <p>Частота обновления</p>
                    <p>{{ allProducts[curID].hz }}</p>
                  </div>
                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      border-b border-dashed border-gray-300
                      my-2
                    "
                  >
                    <p>Объем оперативной памяти, ГБ</p>
                    <p>{{ allProducts[curID].ram }}</p>
                  </div>
                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      border-b border-dashed border-gray-300
                      my-2
                    "
                  >
                    <p>Объем встроенной памяти, ГБ</p>
                    <p>{{ allProducts[curID].hard }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white mt-5 rounded-lg p-6">
            <div v-for="review of allProducts[curID].reviews" :key="review">
              <div
                style="box-shadow: 0 1px 8px rgb(0 0 0 / 10%)"
                class="flex justify-between items-start p-4 my-6 rounded-lg"
              >
                <div>
                  <p class="font-semibold">{{ review.name }}</p>
                  <p
                    class="
                      text-black
                      bg-yellow-300
                      w-max
                      font-semibold
                      text-xs
                      px-2
                      py-1
                      rounded-md
                      my-4
                    "
                  >
                    {{ review.stars }}.0
                  </p>
                  <p class="font-semibold mb-3">
                    <i class="fas fa-comment-alt text-bluee"></i> Отзыв
                  </p>
                  <p class="text-yellou font-semibold">{{ review.review }}</p>
                </div>
                <div>
                  <p class="text-xs font-semibold text-yellou">
                    {{ review.date }}
                  </p>
                  <div class="flex items-center justify-between mt-3">
                    <p class="text-green-400 font-semibold text-xs">
                      <i class="fas fa-thumbs-up text-base"></i>
                      {{ review.likes }}
                    </p>
                    <p class="text-red-400 font-semibold text-xs ml-3">
                      <i class="fas fa-thumbs-down text-base"></i>
                      {{ review.dislikes }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white h-full w-2/6 ml-3 p-4 rounded-lg sticky top-5">
          <p
            v-if="allProducts[curID].discount != null"
            class="text-4xl font-semibold text-oran mb-4"
          >
            {{ allProducts[curID].price / allProducts[curID].discount }} тг.
          </p>
          <p
            v-if="allProducts[curID].discount != null"
            class="line-through text-gray-400 font-semibold"
          >
            {{ allProducts[curID].price }} тг.
          </p>
          <p v-else class="text-2xl font-semibold">
            {{ allProducts[curID].price }} тг.
          </p>
          <p
            v-if="allProducts[curID].discount != null"
            class="
              p-1
              w-max
              text-white
              bg-green-400
              text-xs
              font-semibold
              rounded-md
              mt-5
            "
          >
            -{{ allProducts[curID].discount }}%
          </p>
          <p
          @click="sendProduct()"
            class="
              w-full
              bg-bluee
              text-center text-white
              py-3
              my-4
              rounded-lg
              uppercase
              font-semibold
              hover:cursor-pointer
            "
          >
            Добавить в корзину
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      curID: this.$route.params.id - 1,
      setImg: 1,
    };
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchCart"]),
    sendProduct() {
      this.fetchCart(this.curID)
    }
  },
  async mounted() {
    this.fetchProducts();
  },
  computed: mapGetters(["allProducts", "cartProducts"]),
};
</script>