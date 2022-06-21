<template>
  <div>
    <div class="container mx-auto">
      <div class="flex justify-between py-5">
        <div class="flex items-center py-1 px-2 rounded-md bg-white">
          <i class="fas fa-map-marker-alt text-bluee"></i>
          <select name="" id="">
            <option value="">Алматы</option>
            <option value="">Астана</option>
            <option value="">Павлодар</option>
            <option value="">Актобе</option>
          </select>
        </div>
        <div class="bg-orangee p-2 rounded-md flex items-center">
          <i class="fas fa-phone-alt text-yellou"></i>
          <p class="mx-3 text-yellou">Горячая линия с 08:00 до 00:00</p>
          <a class="text-lg font-semibold" href="tel:1717">1717</a>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="flex items-center justify-between container mx-auto py-2">
        <router-link to="/">
          <img
            src="https://www.technodom.kz/images/global/logo_technodom.svg"
            alt=""
          />
        </router-link>
        <div
          class="
            bg-oran
            py-2
            px-3
            text-white
            rounded-md
            flex
            items-center
            text-sm
          "
        >
          <i class="fa-solid fa-list mr-3"></i>
          <p class="font-semibold">Каталог</p>
        </div>
        <div class="w-1/3 relative">
          <input
            placeholder="Я хочу найти"
            class="w-full border border-oran rounded-lg py-3 px-3"
            type="text"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="flex text-center">
          <div class="mx-3 hover:text-oran hover:cursor-pointer">
            <i class="fa-solid fa-heart"></i>
            <p class="text-yellou">Избранное</p>
          </div>
          <div class="mx-3">
            <i class="fa-solid fa-scale-unbalanced"></i>
            <p class="text-yellou">Сравнить</p>
          </div>
          <div class="mx-3 relative">
            <div class="relative" @click="changeCart()">
              <i class="fa-solid fa-cart-shopping"></i>
              <p class="text-yellou">Корзина</p>
              <p class="counter">{{ counterStatus }}</p>
            </div>
            <div v-if="showCart === 1" class="cart-list">
              <div
                class="flex my-2 items-center justify-between"
                v-for="(product, index) of cartProducts"
                :key="product.id"
              >
                <img class="w-14 h-14" :src="product.images[0].first" alt="" />
                <p class="text-xs text-left ml-2">{{ product.title }}</p>
                <p class="text-lg font-semibold">{{ product.price }}</p>
                <p @click="removeItem(index)" class="ml-3 hover:cursor-pointer mr-5"><i class="fa-solid fa-xmark text-red-500"></i></p>
              </div>
              <p>Итого: {{ totalPrice }}</p>
              <div class="flex justify-between items-center">
                <p>Перейти в корзину</p>
                <p @click="sendRequest()">Очистить корзину</p>
              </div>
            </div>
          </div>
          <div v-if="currentUser != null" class="mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-user"></i>
            <p class="text-yellou">{{ currentUser.name }}</p>
          </div>
          <div v-if="currentUser == null" class="mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-user"></i>
            <p class="text-yellou">Вход</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button @click="changeButton = 1" :class="{ 'border-oran text-oran' : changeButton === 1}" class="w-full py-2 rounded-lg text-lg border mr-1">Вход</button>
            <button @click="changeButton = 2" :class="{ 'border-oran text-oran' : changeButton === 2}" class="w-full py-2 rounded-lg text-lg border ml-1">Регистрация</button>
          </div>
          <div class="modal-body">
            <form v-if="changeButton === 1" action="">
              <div v-if="loginStatus === 2" class="bg-red-500 rounded-lg p-4 w-full text-lg text-white font-semibold">
                <p>Введенные данные неверны</p>
              </div>
              <div v-if="loginStatus === 1" class="bg-green-500 rounded-lg p-4 w-full text-lg text-white font-semibold">
                <p>Вы успешно вошли!</p>
              </div>
              <input v-model="form.email" class="border p-2 w-full block rounded-md my-4" placeholder="Email" type="text">
              <input v-model="form.password" class="border p-2 w-full block rounded-md my-4" placeholder="Пароль" type="password">
              <p @click="checkUser()" class="hover:cursor-pointer bg-oran rounded-lg w-full text-center py-2 text-white uppercase font-semibold">Войти</p>
            </form>
            <form v-if="changeButton === 2" action="">
              <input class="border p-2 w-full block rounded-md my-4" placeholder="Имя" type="text">
              <input class="border p-2 w-full block rounded-md my-4" placeholder="Фамилия" type="text">
              <input class="border p-2 w-full block rounded-md my-4" placeholder="Email" type="text">
              <input class="border p-2 w-full block rounded-md my-4" placeholder="Номер телефона" type="number">
              <input class="border p-2 w-full block rounded-md my-4" placeholder="Пароль" type="password">
              <input class="border p-2 w-full block rounded-md my-4" placeholder="Подтвердите пароль" type="password">
              <p class="hover:cursor-pointer bg-oran rounded-lg w-full text-center py-2 text-white uppercase font-semibold">Регистрация</p>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="block w-full text-center text-sm" data-bs-dismiss="modal">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavbarComp",
  data() {
    return {
      showCart: 0,
      changeButton: 1,  
      currentUser: null,
      loginStatus: 0,
      form: {
        email: '',
        password: ''
      }
    };
  },
  computed: mapGetters(["cartProducts", "counterStatus", "totalPrice", "allUsers"]),
  methods: {
    ...mapActions(['removeAll', 'removeSingleProduct', 'fetchUsers']),
    changeCart() {
      if(this.showCart === 0) {
        this.showCart = 1
      } else {
        this.showCart = 0
      }
    },
    sendRequest() {
      this.removeAll();
    },
    removeItem(id) {
      this.removeSingleProduct(id);
    },
    checkUser() {
      for(let i = 0; i <= this.allUsers.length; i++) {
        if(this.allUsers[i].email === this.form.email && this.allUsers[i].password === this.form.password) {
          this.currentUser = this.allUsers[i];
          this.loginStatus = 1
        } else if( this.currentUser != null ) {
          this.loginStatus = 1
        } else {
          this.loginStatus = 2
        }
      }
    }
  },
  async mounted() {
    this.fetchUsers()
  }
};
</script>

<style scoped>
  @import url("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
</style>