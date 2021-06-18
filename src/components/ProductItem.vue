<template>
  <div id="product" class="product">
    <router-link :to="{ path: `/product/${product.id_product}` }">
      <a href="#">
        <img
          class="product__img"
          alt="product"
          :src="host + product.image"
        />
      </a>
    </router-link>
    <div class="product__info">
      <a class="product__name" href="product.html"
        >{{ product.product_name }}</a
      >
      <p class="product__description">
        {{ product.product_description }}
      </p>
      <p class="product__price">${{ product.price }}</p>
    </div>
    <button class="product__add" @click.prevent="addProduct(product)">
      <img
        class="product__icon"
        src="http://localhost:3000/images/home/cart.svg"
        alt="cart"
      />Add to Cart
    </button>
  </div><!-- /.product -->
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProductItem',
  props: ['product'],
  data() {
    return {
      host: 'http://localhost:3000',
    };
  },
  computed: {
    ...mapGetters(['cart']),
  },
  methods: {
    ...mapActions(['addProduct']),
  },

};
</script>
<style lang="scss">
$colorSelect: #f16d7f;
$colorText: #222222;
$colorLight: #ffffff;
$widthSite: 1140px;
/************Product*************/

.product {
  position: relative;
  margin-bottom: 30px;

  width: 360px;
  background: #f8f8f8;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.03);
  }

  &--catalog {
    margin-bottom: 0;
  }

  &__img {
    width: 100%;
    transition: filter 0.2s linear;
  }

  &__info {
    padding: 24px 16px 20px;
  }

  &__name {
    display: block;
    margin-bottom: 12px;
    font-weight: 700;

    font-size: 13px;
    line-height: 16px;

    color: #000000;
    text-transform: uppercase;
    text-decoration: none;
  }

  &__description {
    margin-bottom: 18px;

    font-weight: 300;
    font-size: 14px;
    line-height: 17px;

    color: #5d5d5d;
  }

  &__price {
    font-size: 16px;
    line-height: 19px;

    color: $colorSelect;
  }

  &__add {
    display: none;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    width: 139px;
    height: 44px;
    border: 1px solid $colorLight;
    border-radius: none;

    font-size: 14px;
    line-height: 17px;

    color: $colorLight;

    position: absolute;
    top: 188px;
    left: 111px;
    z-index: 1000;

    transition: opacity 0.2s linear;
  }

  &__icon {
    margin-right: 11px;
  }
}

.product:hover .product__img {
  filter: brightness(50%);
}

.product:hover .product__add {
  display: flex;
}

.button {
  display: block;
  margin: 0 auto;

  padding: 14px 38px 13px;
  background-color: transparent;

  border: 1px solid #ff6a6a;
  border-radius: 0;

  font-size: 16px;
  line-height: 19px;

  color: #f26376;

  outline: none;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    color: $colorLight;
    background-color: #f26376;
    cursor: pointer;
  }
}
</style>
