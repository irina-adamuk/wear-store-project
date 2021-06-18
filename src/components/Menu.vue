<template>
  <div class="nav__wrapper">
    <nav class="nav__bar">
      <img class="nav__close" src="http://localhost:3000/images/home/close.svg" alt="close">
      <h4 class="nav__title">MENU</h4>
      <ul class="nav__item">
        <li class="nav__subtitle">MAN</li>
        <li><a class="nav__link" href="#" target="_blank">Accessories</a></li>
        <li><a class="nav__link" href="#" target="_blank">Bags</a></li>
        <li><a class="nav__link" href="#" target="_blank">Denim</a></li>
        <li><a class="nav__link nav__link--last" href="#" target="_blank">T-Shirts</a></li>
      </ul>
      <ul class="nav__item">
        <li class="nav__subtitle">WOMAN</li>
        <li><a class="nav__link" href="#" target="_blank">Accessories</a></li>
        <li><a class="nav__link" href="#" target="_blank">Jackets & Coats</a></li>
        <li><a class="nav__link" href="#" target="_blank">Polos</a></li>
        <li><a class="nav__link" href="#" target="_blank">T-Shirts</a></li>
        <li><a class="nav__link nav__link--last" href="#" target="_blank">Shirts</a></li>
      </ul>
      <ul class="nav__item">
        <li class="nav__subtitle">KIDS</li>
        <li><a class="nav__link" href="#" target="_blank">Accessories</a></li>
        <li><a class="nav__link" href="#" target="_blank">Jackets & Coats</a></li>
        <li><a class="nav__link" href="#" target="_blank">Polos</a></li>
        <li><a class="nav__link" href="#" target="_blank">T-Shirts</a></li>
        <li><a class="nav__link" href="#" target="_blank">Shirts</a></li>
        <li><a class="nav__link nav__link--last" href="#" target="_blank">Bags</a></li>
      </ul>
    </nav>
  </div><!-- /.nav__wrapper -->
</template>
<script>

export default {
  name: 'Menu',
};
</script>
<style lang="scss">
$colorSelect: #f16d7f;
$colorText: #222222;
$colorLight: #ffffff;
$widthSite: 1140px;
/************Nav*************/

.nav {
  &__drop-icon {
      display: none;
  }
  &__wrapper {
    position: absolute;
    top: 75px;
    /*right: calc(50% - 750px);*/
    right: 0;
    z-index: 1000;
    display: none;
    transition: opacity 0.2s linear;
    &--show {
      display: block;
    }

    &--close {
      display: none;
    }
  }

  &__bar {
    position: relative;
    background: $colorLight;
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
    box-sizing: border-box;

    width: 100%;
    height: 764px;

    padding: 37px 34px;
    display: flex;
    flex-direction: column;
  }

  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 1;

    cursor: pointer;
  }

  &__title {
    margin-bottom: 4px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
  &__item li{
    list-style: none;
  }
  &__subtitle {
    margin-top: 20px;
    margin-bottom: 12px;

    font-size: 14px;
    line-height: 17px;

    color: $colorSelect;
    text-transform: uppercase;
  }
  &__link {
    display: block;
    margin-left: 17px;
    margin-bottom: 11px;
    font-size: 14px;
    line-height: 17px;
    color: #6F6E6E;

    text-decoration: none;
    &--last {
      margin-bottom: 0;
    }
  }
}
</style>
