<template>
  <div class="cart-box__product">
    <img
      class="cart-box__img"
      :src="host + cartProduct.image"
      alt="product">
    <div class="cart-box__info">
      <p class="cart-box__name" href="#">{{ cartProduct.product_name }}</p>
      <p class="cart-box__text">
        Price:<span class="cart-box__price">{{ cartProduct.price }}</span>
      </p>
      <p class="cart-box__text">Color: {{ cartProduct.color }} </p>
      <p class="cart-box__text">Size: {{ cartProduct.size }}</p>
      <label class="cart-box__text">
        Quantity: {{ cartProduct.quantity }}
      </label>
    </div>
  </div><!-- /.cart-box__product -->
</template>
<script>
export default {
  name: 'CartItem',
  props: ['cartProduct'],
  data() {
    return {
      host: 'http://localhost:3000',
    };
  },
};
</script>
<style lang="scss">
$colorSelect: #F16D7F;
$colorText: #222222;
$colorLight: #ffffff;
$widthSite: 1140px;

.cart-box {
  display: flex;
  justify-content: space-between;
  padding-top: 96px;
  padding-bottom: 128px;

  &__content {
    width: 652px;
    display: flex;
    flex-direction: column;
  }

  &__product {
    box-sizing: border-box;
    background: $colorLight;
    margin-bottom: 40px;

    filter: drop-shadow(17px 19px 24px rgba(0, 0, 0, 0.13));
    position: relative;

    display: flex;
    width: 652px;
    height: 306px;
  }

  &__img {
    width: 262px;
    height: 306px;
  }

  &__info {
    box-sizing: border-box;
    padding: 22px 31px;
    width: 390px;
    height: 262px;
  }

  &__name {
    margin-bottom: 42px;

    font-weight: normal;
    font-size: 24px;
    line-height: 29px;

    color: $colorText;
    text-transform: uppercase;
  }

  &__text {
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;

    color: #575757;

    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }

  &__price {
    margin-left: 3px;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;

    color: $colorSelect;
  }

  &__input {
    display: inline-block;
    margin-left: 25px;

    width: 44px;
    height: 25px;
    font-size: 18px;
    color: #656565;
    text-align: center;

    border: 1px solid #eaeaea;
    outline: none;
  }
  &__input[type="number"] {
    appearance: textfield;
  }

  &__close {
    position: absolute;
    top: 28px;
    right: 31px;
    z-index: 1;
  }

  &__button {
    background: $colorLight;
    padding: 15px 33px;
    width: 235px;
    height: 50px;

    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    outline: none;

    color: #000000;
    border: 1px solid #a4a4a4;
    transition: background-color 0.2s linear;
    &:hover {
      background-color: $colorSelect;
      cursor: pointer;
    }

    &--small {
      width: 225px;
    }
  }
}

.cart__buttons {
  margin-top: 32px;
  width: 652px;

  display: flex;
  justify-content: space-between;
}
.shipping {
  &__form {
    box-sizing: border-box;
    width: 360px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin-bottom: 20px;

    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    color: $colorText;
  }

  &__input {
    width: 324px;
    height: 28px;
    padding: 12px 16px;

    border-radius: 0;
    border: 1px solid #a4a4a4;

    margin-bottom: 21px;
    outline: none;

    &::placeholder {
      font-weight: 300;
      font-size: 13px;
      line-height: 16px;

      color: $colorText;
    }
  }

  &__button {
    margin-top: 3px;

    width: 100px;
    height: 35px;
    background: $colorLight;

    font-weight: 300;
    font-size: 11px;
    line-height: 13px;

    color: #4a4a4a;
    outline: none;

    border-radius: none;
    border: 1px solid #a4a4a4;
    transition: background-color 0.2s linear;

    &:hover {
      cursor: pointer;
      background-color: $colorSelect;
    }
  }
}

.checkout {
  margin-top: 57px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 277px;
  min-height: 133px;

  background: #f5f3f3;

  padding: 39px 44px 42px 39px;

  &__subtitle {
    margin-bottom: 12px;

    font-weight: normal;
    font-size: 11px;
    line-height: 13px;

    color: #4a4a4a;
    text-transform: uppercase;
  }

  &__title {
    margin-bottom: 21px;

    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    color: $colorText;
    text-transform: uppercase;
  }
  &__summ {
    margin-left: 30px;

    &--select {
      color: $colorSelect;
    }
  }

  &__hr {
    margin-bottom: 17px;

    width: 275px;
    height: 1px;
    background: #e2e2e2;
  }

  &__button {
    width: 275px;
    height: 47px;

    background: $colorSelect;

    border: none;

    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    color: $colorLight;
    text-transform: uppercase;
    transition: background-color 0.2s linear;
    outline: none;

    &:hover {
      cursor: pointer;
      background-color: $colorLight;
      border: 1px solid $colorSelect;
      color: $colorSelect;
      animation: vibrate 0.3s linear infinite both;
    }
  }
}
</style>
