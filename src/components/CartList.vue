<template>
  <div class="cart-box__content">
    <CartItem
        v-for="item of cart.contents"
        :key="item.id_product"
        :img="item.image"
        :cartProduct="item">
    </CartItem>
  </div><!-- /.cart-box__content -->

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

import CartItem from './CartItem.vue';

export default {
  name: 'CartList',
  props: {
  },
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(['cart']),
  },
  methods: {
    ...mapActions(['getCartList']),
  },
  created() {
    this.getCartList();
  },
  mounted() {
    console.log(this.cart);
  },
};
</script>

<style>

</style>
