<template>
  <div class="cart">
    <div class="breadcrumb center">
      <div class="breadcrumb__left">
        <h1 class="breadcrumb__title">SHOPPING CART</h1>
      </div>
    </div>
    <!-- /.breadcrumb -->
    <div class="cart-box center">
      <div class="cart-box__left">
        <div class="cart-box__content">
          <div class="cart-box__product">
            <a href="#">
              <img
                class="cart-box__img"
                src="@/assets/images/product3.png"
                alt="product"
              />
            </a>
            <div class="cart-box__info">
              <p class="cart-box__name" href="#">MANGO PEOPLE T-SHIRT</p>
              <p class="cart-box__text">
                Price:<span class="cart-box__price">$300</span>
              </p>
              <p class="cart-box__text">Color: Red</p>
              <p class="cart-box__text">Size: Xl</p>
              <label class="cart-box__text"
                >Quantity:<input
                  class="cart-box__input"
                  type="number"
                  value="2"
              /></label>
            </div>
          </div>
          <!-- /.cart-box__product -->
          <div class="cart-box__product">
            <a href="#">
              <img
                class="cart-box__img"
                src="@/assets/images/catalog/product7.png"
                alt="product"
              />
            </a>
            <div class="cart-box__info">
              <p class="cart-box__name" href="#">MANGO PEOPLE T-SHIRT</p>
              <p class="cart-box__text">
                Price:<span class="cart-box__price">$300</span>
              </p>
              <p class="cart-box__text">Color: Red</p>
              <p class="cart-box__text">Size: Xl</p>
              <label class="cart-box__text"
                >Quantity:<input
                  class="cart-box__input"
                  type="number"
                  value="2"
              /></label>
            </div>
          </div>
          <!-- /.cart-box__product -->
        </div>
        <!-- /.cart-box__content -->
        <div class="cart__buttons">
          <button class="cart-box__button">CLEAR SHOPPING CART</button>
          <button class="cart-box__button cart-box__button--small">
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
      <!-- /.cart-box__left -->

      <div class="cart-box__right">
        <form action="" class="shipping__form">
          <p class="shipping__title">SHIPPING ADRESS</p>
          <label for=""
            ><input
              class="shipping__input"
              type="text"
              placeholder="Bangladesh"
          /></label>
          <label for=""
            ><input class="shipping__input" type="text" placeholder="State"
          /></label>
          <label for=""
            ><input
              class="shipping__input"
              type="text"
              placeholder="Postcode / Zip"
          /></label>
          <button class="shipping__button" type="submit">GET A QUOTE</button>
        </form>
        <div class="checkout">
          <div class="checkout__subtitle">
            SUB TOTAL <span class="checkout__summ">$900</span>
          </div>
          <div class="checkout__title">
            GRAND TOTAL
            <span class="checkout__summ checkout__summ--select">$900</span>
          </div>
          <hr class="checkout__hr" />
          <button class="checkout__button">PROCEED TO CHECKOUT</button>
        </div>
        <!-- /.checkout -->
      </div>
      <!-- /.cart-box__right -->
    </div>
    <!-- /.cart-box -->
  </div>
</template>
<style lang="scss">
@-webkit-keyframes vibrate {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
  60% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
@keyframes vibrate-2 {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
  60% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
$colorSelect: #f16d7f;
$colorText: #222222;
$colorLight: #ffffff;
$widthSite: 1140px;
.breadcrumb {
  background: #f8f3f4;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 148px;

  &__title {
    font-size: 24px;
    line-height: 29px;
    font-weight: normal;
    color: $colorSelect;
    text-transform: uppercase;
  }

  &__right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  &__item {
    display: block;
    position: relative;
    list-style: none;
    text-transform: uppercase;

    &:not(:last-child) {
      margin-right: 12px;
    }

    &:not(:last-child)::after {
      content: "/";
      display: block;
      position: absolute;
      top: 0;
      right: -9px;
      z-index: 1;
    }
  }

  &__link {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #636363;

    &--select {
      color: $colorSelect;
      font-weight: 700;
    }
  }
}

.breadcrumb__item:hover .breadcrumb__link {
  color: $colorSelect;
  font-weight: 700;
}
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
