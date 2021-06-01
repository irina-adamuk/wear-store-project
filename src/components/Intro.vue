<template>
  <div>
    <section class="promo center">
      <div class="promo__img">
        <img class="promo__photo" src="@/assets/images/promo.png" alt="photo" />
      </div>
      <div class="promo__text">
        <div class="promo__content">
          <h1 class="promo__heading">THE BRAND</h1>
          <p class="promo__info">
            OF LUXERIOUS <span class="select">FASHION</span>
          </p>
        </div>
      </div>
    </section>
    <!-- /.promo -->

    <div class="promo__mask"></div>
    <section class="sale center">
      <div class="sale__top">
        <a href="#" target="_blank">
          <div class="sale__item">
            <img
              class="sale__img"
              src="@/assets/images/sale-1.jpg"
              alt="item"
            />
            <div class="sale__text">
              <p class="sale__subtitle">30% OFF</p>
              <h3 class="sale__title">FOR WOMEN</h3>
            </div>
          </div>
        </a>
        <a href="#" target="_blank">
          <div class="sale__item">
            <img
              class="sale__img"
              src="@/assets/images/sale-2.jpg"
              alt="item"
            />
            <div class="sale__text">
              <p class="sale__subtitle">HOT DEAL</p>
              <h3 class="sale__title">FOR MEN</h3>
            </div>
          </div>
        </a>
        <a href="#" target="_blank">
          <div class="sale__item">
            <img
              class="sale__img"
              src="@/assets/images/sale-3.jpg"
              alt="item"
            />
            <div class="sale__text">
              <p class="sale__subtitle">NEW ARRIVALS</p>
              <h3 class="sale__title">FOR KIDS</h3>
            </div>
          </div>
        </a>
      </div>
      <!-- /.sale__top -->
      <div class="sale__bottom">
        <a href="#" target="_blank">
          <div class="sale__item">
            <img
              class="sale__img sale__img--big"
              src="@/assets/images/sale-4.jpg"
              alt="item"
            />
            <div class="sale__text">
              <p class="sale__subtitle">LUXIROUS & TRENDY</p>
              <h3 class="sale__title">ACCESORIES</h3>
            </div>
          </div>
        </a>
      </div>
      <!-- /.sale__bottom -->
    </section>
    <!-- /.sale -->

    <section class="product-box center">
      <h3 class="product-box__title">Fetured Items</h3>
      <p class="product-box__subtitle">
        Shop for items based on what we featured in this week
      </p>
      <div class="product-box__content">
        <router-link to="/product">
          <div class="product">
            <a href="product.html">
              <img
                class="product__img"
                src="@/assets/images/product1.png"
                alt="product"
              />
            </a>
            <div class="product__info">
              <a class="product__name" href="product.html"
                >ELLERY X M'O CAPSULE</a
              >
              <p class="product__description">
                Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi.
              </p>
              <p class="product__price">$52.00</p>
            </div>
            <a class="product__add" href="#">
              <img
                class="product__icon"
                src="@/assets/images/cart.svg"
                alt="cart"
              />Add to Cart
            </a>
          </div>
          <!-- /.product -->
        </router-link>
        <div class="product">
          <a href="product.html">
            <img
              class="product__img"
              src="@/assets/images/product2.png"
              alt="product"
            />
          </a>
          <div class="product__info">
            <a class="product__name" href="product.html"
              >ELLERY X M'O CAPSULE</a
            >
            <p class="product__description">
              Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
            </p>
            <p class="product__price">$52.00</p>
          </div>
          <a class="product__add" href="#">
            <img
              class="product__icon"
              src="@/assets/images/cart.svg"
              alt="cart"
            />Add to Cart
          </a>
        </div>
        <!-- /.product -->
        <div class="product">
          <a href="product.html">
            <img
              class="product__img"
              src="@/assets/images/product3.png"
              alt="product"
            />
          </a>
          <div class="product__info">
            <a class="product__name" href="product.html"
              >ELLERY X M'O CAPSULE</a
            >
            <p class="product__description">
              Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
            </p>
            <p class="product__price">$52.00</p>
          </div>
          <a class="product__add" href="#">
            <img
              class="product__icon"
              src="@/assets/images/cart.svg"
              alt="cart"
            />Add to Cart
          </a>
        </div>
        <!-- /.product -->
        <div class="product">
          <a href="product.html">
            <img
              class="product__img"
              src="@/assets/images/product4.png"
              alt="product"
            />
          </a>
          <div class="product__info">
            <a class="product__name" href="product.html"
              >ELLERY X M'O CAPSULE</a
            >
            <p class="product__description">
              Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
            </p>
            <p class="product__price">$52.00</p>
          </div>
          <a class="product__add" href="#">
            <img
              class="product__icon"
              src="@/assets/images/cart.svg"
              alt="cart"
            />Add to Cart
          </a>
        </div>
        <!-- /.product -->
        <div class="product">
          <a href="product.html">
            <img
              class="product__img"
              src="@/assets/images/product5.png"
              alt="product"
            />
          </a>
          <div class="product__info">
            <a class="product__name" href="product.html"
              >ELLERY X M'O CAPSULE</a
            >
            <p class="product__description">
              Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
            </p>
            <p class="product__price">$52.00</p>
          </div>
          <a class="product__add" href="#">
            <img
              class="product__icon"
              src="@/assets/images/cart.svg"
              alt="cart"
            />Add to Cart
          </a>
        </div>
        <!-- /.product -->
        <div class="product">
          <a href="product.html">
            <img
              class="product__img"
              src="@/assets/images/product6.png"
              alt="product"
            />
          </a>
          <div class="product__info">
            <a class="product__name" href="product.html"
              >ELLERY X M'O CAPSULE</a
            >
            <p class="product__description">
              Known for her sculptural takes on traditional tailoring,
              Australian arbiter of cool Kym Ellery teams up with Moda Operandi.
            </p>
            <p class="product__price">$52.00</p>
          </div>
          <a class="product__add" href="#">
            <img
              class="product__icon"
              src="@/assets/images/cart.svg"
              alt="cart"
            />Add to Cart
          </a>
        </div>
        <!-- /.product -->
      </div>
      <!-- /.product-box__content -->
      <router-link to="/catalog">
        <a href="#">
          <button class="button">Browse All Product</button>
        </a>
      </router-link>
    </section>
    <!-- /.product-box -->

    <section class="features center">
      <article class="features__item">
        <div class="features__img">
          <img
            class="features__icon"
            src="@/assets/images/delivery.svg"
            alt="icon"
          />
        </div>
        <h4 class="features__title">Free Delivery</h4>
        <p class="features__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </article>
      <article class="features__item">
        <div class="features__img">
          <img
            class="features__icon"
            src="@/assets/images/discount.svg"
            alt="icon"
          />
        </div>
        <h4 class="features__title">Sales & discounts</h4>
        <p class="features__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </article>
      <article class="features__item">
        <div class="features__img">
          <img
            class="features__icon"
            src="@/assets/images/quality.svg"
            alt="icon"
          />
        </div>
        <h4 class="features__title">Quality assurance</h4>
        <p class="features__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </article>
    </section>

    <!-- /.features -->
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
/* Generated by Animista on 2021-2-17 20:1:0
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * animation vibrate-2 */

$colorSelect: #f16d7f;
$colorText: #222222;
$colorLight: #ffffff;
$widthSite: 1140px;
/* ----------------------------------------------
 * Generated by Animista on 2021-2-17 19:58:47
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation focus-in-contract
 * ----------------------------------------
 */
@-webkit-keyframes focus-in-contract {
  0% {
    letter-spacing: 1em;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-contract {
  0% {
    letter-spacing: 1em;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
/************Promo*************/

.promo {
  position: relative;

  background: #f1e4e6;
  display: flex;
  padding-left: calc(50% - 800px);
  padding-right: calc(50% - 800px);

  &__mask {
    box-sizing: border-box;
    width: 100%;
    height: 764px;

    position: absolute;
    top: 75px;
    left: 0;
    z-index: 2;

    display: none;
    background: rgba(0, 0, 0, 0.5);

    &--show {
      display: flex;
    }
  }

  &__img {
    min-width: 50%;
    display: flex;
  }

  &__photo {
    width: 100%;
    display: flex;
  }

  &__text {
    min-width: 50%;
  }

  &__content {
    margin-top: 40%;
    border-left: 12px solid $colorSelect;
    padding-left: 16px;
  }

  &__heading {
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;
    text-transform: uppercase;

    color: $colorText;
    &:hover {
      animation: focus-in-contract 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
    }
  }
  &__info {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-transform: uppercase;

    color: $colorText;
  }
}

.select {
  color: $colorSelect;
}

/************Sale*************/

.sale {
  padding-top: 64px;
  &__top {
    display: flex;
    padding-bottom: 30px;
  }
  &__img {
    width: 100%;
  }
  &__item {
    display: flex;
    position: relative;
  }
  &__text {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;

    color: $colorSelect;
    text-transform: uppercase;
  }

  &__subtitle {
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: $colorLight;
    text-transform: uppercase;
  }
}

.sale a:not(:last-child) {
  margin-right: 30px;
}

/************Product-box*************/

.product-box {
  padding-top: 96px;
  padding-bottom: 96px;
  background-color: $colorLight;

  &--product {
    margin-top: 129px;
    padding-top: 0;
    padding-bottom: 140px;
  }

  &__title {
    font-size: 30px;
    line-height: 36px;

    color: $colorText;
    text-align: center;
  }

  &__subtitle {
    font-size: 14px;
    line-height: 17px;

    color: #9f9f9f;
    text-align: center;
    margin-top: 6px;
  }

  &__content {
    padding-top: 48px;
    padding-bottom: 18px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &--catalog {
      padding-bottom: 0;
      padding-top: 0;
    }
  }
}

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

/************Features*************/

.features {
  background: #222222;
  padding-top: 104px;
  padding-bottom: 104px;
  min-height: 361px;
  box-sizing: border-box;

  display: flex;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
  }

  &__img {
    margin-bottom: 25px;
  }

  &__icon {
    width: 47px;
    height: 34px;
  }

  &__title {
    margin-bottom: 16px;

    font-size: 19.96px;
    line-height: 24px;

    color: #fbfbfb;
  }

  &__text {
    font-weight: 300;
    font-size: 13.972px;
    line-height: 17px;
    text-align: center;

    color: #fbfbfb;
  }
}

.features__item:not(:last-child) {
  margin-right: 30px;
}
</style>
