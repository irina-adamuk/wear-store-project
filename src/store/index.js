import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    catalogList: [],
    cartList: { contents: [] },
    search: '',
  },
  getters: {
    catalogList: (state) => state.catalogList,
    cart: (state) => state.cartList,
    cartCounter: (state) => {
      let counter = 0;
      state.cartList.contents.forEach((element) => {
        counter += element.quantity;
      });
      return counter;
    },
    getTotalSum: (state) => state.cartList.contents
      .map((el) => el.price * el.quantity)
      .reduce((a, b) => a + b, 0),
  },

  mutations: {
    SET_CATALOG_LIST(state, list) {
      state.catalogList = list;
    },
    SET_CART_LIST(state, list) {
      state.cartList = list;
    },
  },
  actions: {
    async addProduct(context, product) {
      await context.dispatch('getCartList');
      const find = context.state.cartList.contents
        .find((element) => element.id_product === product.id_product);
      if (find) {
        context.dispatch('updateCart', { id: find.id_product, quantity: 1, option: 'plus' });
      } else {
        context.dispatch('addToCart', { quantity: 1, ...product });
      }
    },
    async getMainProduct(context, id) {
      await context.dispatch('getCatalogList');
      const data = context.state.catalogList.find((el) => el.id_product === +id);
      return data;
    },
    async getCatalogList({ commit }) {
      const response = await fetch('http://localhost:3000/api/products');
      let json;
      if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        json = await response.json();
        commit('SET_CATALOG_LIST', json);
      } else {
        console.log(`Ошибка HTTP: ${response.status}`);
      }
    },
    async getCartList({ commit }) {
      const response = await fetch('http://localhost:3000/api/cart');
      let json;
      if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        json = await response.json();
        commit('SET_CART_LIST', json);
      } else {
        console.log(`Ошибка HTTP: ${response.status}`);
      }
    },
    async addToCart(context, productInfo) {
      const response = await fetch('http://localhost:3000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productInfo),
      });
      let json;
      if (response.ok) {
        // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        json = await response.json();
        if (json.result === 1) {
          // обновляем корзину
          context.dispatch('getCartList');
        } else {
          console.log(`Ошибка бэкэнд: ${json}`);
        }
      } else {
        console.log(`Ошибка HTTP: ${response.status}`);
      }
      console.log(json);
    },
    async updateCart(context, { id, quantity, option }) {
      const response = await fetch(`http://localhost:3000/api/cart/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity,
          option,
        }),
      });
      let json;
      if (response.ok) {
        // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        json = await response.json();
        if (json.result === 1) {
          // обновляем корзину
          context.dispatch('getCartList');
        } else {
          console.log(`Ошибка бэкэнд: ${json}`);
        }
      } else {
        console.log(`Ошибка HTTP: ${response.status}`);
      }
      console.log(json);
    },
    async clearCart(context) {
      const response = await fetch('http://localhost:3000/api/cart', {
        method: 'DELETE',
      });
      let json;
      if (response.ok) {
        // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        json = await response.json();
        if (json.result === 1) {
          // обновляем корзину
          context.dispatch('getCartList');
        } else {
          console.log(`Ошибка бэкэнд: ${json}`);
        }
      } else {
        console.log(`Ошибка HTTP: ${response.status}`);
      }
      console.log(json);
    },
  },
  modules: {
  },
});
