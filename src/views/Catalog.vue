<template>
  <div id="catalog" class="catalog">
    <div class="breadcrumb center">
      <div class="breadcrumb__left">
        <h1 class="breadcrumb__title">NEW ARRIVALS</h1>
      </div>
      <nav>
        <ul class="breadcrumb__right">
          <li class="breadcrumb__item">
            <router-link to="/">
              <a class="breadcrumb__link" href="#">HOME</a>
            </router-link>
          </li>
          <li class="breadcrumb__item">
            <a class="breadcrumb__link" href="#">MEN</a>
          </li>
          <li class="breadcrumb__item">
            <a class="breadcrumb__link breadcrumb__link--select" href="#"
              >NEW ARRIVALS</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="sort-box center">
      <div class="sort-box__filter">
        <details class="filter">
          <summary class="filter__title">Filter
            <svg
              class="filter__icon"
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
              />
            </svg>
          </summary>

          <details class="filter__details">
            <summary class="filter__summary">CATEGORY</summary>
            <ul class="filter__wrapper">
              <li><a class="filter__item" href="#">Accessories</a></li>
              <li><a class="filter__item" href="#">Bags</a></li>
              <li><a class="filter__item" href="#">Denim</a></li>
              <li>
                <a class="filter__item" href="#">Hoodies & Sweatshirts</a>
              </li>
              <li><a class="filter__item" href="#">Jackets & Coats</a></li>
              <li><a class="filter__item" href="#">Polos</a></li>
              <li><a class="filter__item" href="#">Shirts</a></li>
              <li><a class="filter__item" href="#">Shoes</a></li>
              <li><a class="filter__item" href="#">Sweaters & Knits</a></li>
              <li><a class="filter__item" href="#">T-Shirts</a></li>
              <li><a class="filter__item" href="#">Tanks</a></li>
            </ul>
          </details>
          <details class="filter__details">
            <summary class="filter__summary">Brand</summary>
            <ul class="filter__wrapper">
              <li><a class="filter__item" href="#">Brand</a></li>
              <li><a class="filter__item" href="#">Brand</a></li>
              <li><a class="filter__item" href="#">Brand</a></li>
              <li><a class="filter__item" href="#">Brand</a></li>
              <li><a class="filter__item" href="#">Brand</a></li>
              <li><a class="filter__item" href="#">Brand</a></li>
              <li><a class="filter__item" href="#">Brand</a></li>
              <li><a class="filter__item" href="#">Brand</a></li>
              <li><a class="filter__item" href="#">Brand</a></li>
              <li><a class="filter__item" href="#">Brand</a></li>
              <li><a class="filter__item" href="#">Brand</a></li>
            </ul>
          </details>
          <details class="filter__details">
            <summary class="filter__summary">Designer</summary>
            <ul class="filter__wrapper">
              <li><a class="filter__item" href="#">Designer</a></li>
              <li><a class="filter__item" href="#">Designer</a></li>
              <li><a class="filter__item" href="#">Designer</a></li>
              <li><a class="filter__item" href="#">Designer</a></li>
              <li><a class="filter__item" href="#">Designer</a></li>
              <li><a class="filter__item" href="#">Designer</a></li>
              <li><a class="filter__item" href="#">Designer</a></li>
              <li><a class="filter__item" href="#">Designer</a></li>
              <li><a class="filter__item" href="#">Designer</a></li>
              <li><a class="filter__item" href="#">Designer</a></li>
              <li><a class="filter__item" href="#">Designer</a></li>
            </ul>
          </details>
        </details>
        <!-- /.filter -->
      </div>
      <!-- /. sort-box__filter -->

      <div class="options options--catalog">
        <details
          name="choose color"
          id=""
          class="options__color options__trending"
        >
          <summary class="options__summary">trending now</summary>
          <fieldset class="options__wrapper">
            <label class="options__checkbox">
              <input checked type="checkbox" /><span class="options__item"
                >white</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >black</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >green</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >blue</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >orange</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >yellow</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >pink</span
              ></label
            >
          </fieldset>
        </details>

        <details name="choose size" id="" class="options__size">
          <summary class="options__summary">size</summary>
          <fieldset class="options__wrapper">
            <label class="options__checkbox">
              <input checked type="checkbox" /><span class="options__item"
                >xs</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" /><span class="options__item"
                >s</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" /><span class="options__item"
                >m</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" /><span class="options__item"
                >l</span
              ></label
            >
          </fieldset>
        </details>

        <details name="quantity" id="" class="options__quantity">
          <summary class="options__summary">price</summary>
          <fieldset class="options__wrapper">
            <label class="options__checkbox">
              <input checked type="checkbox" name="" id="" /><span
                class="options__item"
                >1</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >2</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >3</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >4</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >5</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >6</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >7</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >8</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >9</span
              ></label
            >
            <label class="options__checkbox">
              <input type="checkbox" name="" id="" /><span class="options__item"
                >10</span
              ></label
            >
          </fieldset>
        </details>
      </div>
      <!-- /.options -->
    </div>
    <!-- /. sort-box -->

    <section class="product-box product-box--catalog center">

      <ProductList :sliceNumber="9" :search="this.$route.query.search"></ProductList>

      <nav class="pages">
        <a href="#" class="pages__link">
          <img
            class="pages__arrow"
            src="http://localhost:3000/images/catalog/pages-arrow-left.svg"
            alt="arrow"
          />
        </a>
        <a href="#" class="pages__link pages__link--active">1</a>
        <a href="#" class="pages__link">2</a>
        <a href="#" class="pages__link">3</a>
        <a href="#" class="pages__link">4</a>
        <a href="#" class="pages__link">5</a>
        <a href="#" class="pages__link">6.....20</a>
        <a href="#" class="pages__link">
          <img
            src="http://localhost:3000/images/catalog/pages-arrow-right.svg"
            alt="arrow"
            class="pages__arrow"
          />
        </a>
      </nav>
      <!-- /.pages -->
    </section>
    <!-- /.product-box -->

    <section class="features center">
      <article class="features__item">
        <div class="features__img">
          <img
            class="features__icon"
            src="http://localhost:3000/images/delivery.svg"
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
            src="http://localhost:3000/images/discount.svg"
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
            src="http://localhost:3000/images/quality.svg"
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
import ProductList from '../components/ProductList.vue';

export default {
  name: 'Catalog',
  components: {
    ProductList,
  },
};
</script>
<style lang="scss">
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
.sort-box {
  box-sizing: border-box;
  height: 133px;
  padding-top: 51px;
  padding-bottom: 64px;
  &__filter {
    position: relative;
  }
}
.filter {
  padding: 13px 16px 13px;
  position: absolute;
  top: -13px;
  left: 0;
  z-index: 1;
  &:hover {
    background: $colorLight;
    -webkit-box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
  }

  &:hover .filter__title {
    color: $colorSelect;
  }

  &:hover .filter__icon {
    fill: $colorSelect;
  }

  &__title {
    text-transform: uppercase;

    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    outline: none;
  }

  &__icon {
    margin-left: 11px;
    fill: #000000;
  }

  &__name {
    width: 328px;
    margin-top: 16px;

    &:last-child {
      margin-bottom: 16px;
    }
  }

  &__summary {
    padding: 11px;
    font-size: 14px;
    line-height: 17px;
    border-left: 5px solid $colorSelect;
    border-bottom: 1px solid #ebebeb;
    color: #6f6e6e;
    text-transform: uppercase;
    outline: none;

    &:hover {
      color: $colorSelect;
      border-left: 5px solid $colorSelect;
    }
  }

  &__wrapper {
    padding: 24px 12px;
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    list-style: none;
    & li:not(:last-of-type) {
      padding-bottom: 11px;
    }
  }

  &__item {
    font-size: 14px;
    line-height: 17px;
    color: #6f6e6e;

    &:hover {
      color: $colorSelect;
    }
  }
}

.filter[open] {
  width: 360px;
  box-sizing: border-box;
  padding: 13px 16px 16px;
  background: #ffffff;
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
}

.filter[open] .filter__title {
  color: $colorSelect;
}

.filter[open] .filter__icon {
  fill: $colorSelect;
}

.filter__details {
  margin-top: 18px;
}

.filter__details[open] .filter__summary {
  color: $colorSelect;
}

.options--catalog details:not(:last-child) {
  margin-right: 28px;
}

.product-box__content--catalog {
  padding-top: 0;
  padding-bottom: 0;
}

.product-box--catalog {
  padding-top: 0;
  margin: 0;
}

.options__trending {
  width: 150px;
}

.pages {
  margin: 18px auto 0;
  padding: 15px;
  background: $colorLight;
  width: 251px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border: 1px solid #ebebeb;
  border-radius: 3px;

  &__link {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #6f6e6e;

    &--active {
      color: #ef5b70;
    }
  }

  &__arrow {
    margin-right: 0;
    width: 100%;
    display: block;
  }
}
/************ Options ************/
.options {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 48px;

  &--product {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 420px;
    position: absolute;
    top: 0;
    left: calc(50%-321px);
    z-index: 2;
  }

  &--catalog {
    position: absolute;
    top: 273px;
    left: calc(50% - 180px);
    z-index: 2;
  }

  &__summary {
    position: relative;
    outline: none;

    &:not(:last-child) {
      margin-right: 35px;
    }

    &::after {
      display: block;
      width: 11px;
      height: 6px;
      content: "";
      background-image: url("../assets/images/product/arrow_down.png");
      background-size: cover;
      position: absolute;
      top: 40%;
      right: -20px;
    }
  }

  &__wrapper {
    margin-top: 3px;
    position: relative;
    padding: 9px 9px;
    background: $colorLight;
    -webkit-box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  &__checkbox {
    display: block;
    margin-bottom: 7px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
  }
}

.options--product details:not(:last-child) {
  margin-right: 22px;
}

details summary::-webkit-details-marker {
  /* нестандартный псевдоэлемент Google Chrome */
  display: none;
}

.options__color,
.options__size,
.options__quantity {
  border: none;

  font-size: 14px;
  line-height: 17px;
  color: #6f6e6e;
  text-transform: uppercase;
}

.options__checkbox input[type="checkbox"] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}

.options__checkbox span {
  display: inline-block;
  position: relative;
  padding-left: 25px;
  font-size: 14px;
  line-height: 16px;
  color: #6f6e6e;
  text-transform: uppercase;
}

.options__checkbox span:before {
  content: "";
  display: inline-block;
  width: 13px;
  height: 13px;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
  border: 1px solid #ebebeb;
}

.options__checkbox span:before {
  content: "";
  display: inline-block;
  width: 13px;
  height: 13px;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transition: background-color 0.3s linear;
  transition: background-color 0.3s linear;
  background-image: none;
}

.options__checkbox input[type="checkbox"]:checked + span:before {
  background: url("../assets/images/catalog/cross.png") 0 0 no-repeat;
  background-size: contain;
}
</style>
