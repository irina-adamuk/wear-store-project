<template>
  <div id="registration">
    <div class="breadcrumb center">
      <div class="breadcrumb__left">
        <h1 class="breadcrumb__title">REGISTRATION</h1>
      </div>
    </div>
    <!-- /.breadcrumb -->
    <section class="registration center">
      <form action="" class="registration__form">
        <fieldset class="inputs__wrapper">
          <p class="registration__subtitle">Your Name</p>
          <label for="">
            <input
              class="registration__input"
              type="text"
              placeholder="First Name"
            />
          </label>
          <label>
            <input
              class="registration__input registration__input--last"
              type="text"
              placeholder="Last Name"
            />
          </label>
        </fieldset>
        <fieldset class="inputs__wrapper inputs__wrapper--small">
          <label for=""
            ><input class="registration__radio" type="radio" /><span
              >Male</span
            ></label
          >
          <label for=""
            ><input class="registration__radio" type="radio" /><span
              >Female</span
            ></label
          >
          <label for=""
            ><input class="registration__radio" type="radio" /><span
              >Other</span
            ></label
          >
        </fieldset>
        <fieldset class="inputs__wrapper">
          <p class="registration__subtitle">Login details</p>
          <label for="">
            <input
              class="registration__input"
              type="email"
              placeholder="Email"
            />
          </label>
          <label for="">
            <input
              class="registration__input registration__input--last"
              type="password"
              placeholder="Passward"
            />
          </label>
        </fieldset>
        <p class="registration__description">
          Please use 8 or more characters, with at least 1 number and a mixture
          of uppercase and lowercase letters
        </p>
        <button class="registration__button" type="submit">
          <span>JOIN NOW</span>
        </button>
      </form>
      <article class="advantages">
        <h3 class="advantages__title">LOYALTY HAS ITS PERKS</h3>
        <p class="advantages__text">
          Get in on the loyalty program where you can earn points and unlock
          serious perks. Starting with these as soon as you join:
        </p>
        <div class="advantages__item">15% off welcome offer</div>
        <div class="advantages__item">
          Free shipping, returns and exchanges on all orders
        </div>
        <div class="advantages__item">$10 off a purchase on your birthday</div>
        <div class="advantages__item">Early access to products</div>
        <div class="advantages__item">Exclusive offers & rewards</div>
      </article>
    </section>
    <!-- /.registration -->
  </div>
</template>
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
.registration {
  padding-top: 64px;
  padding-bottom: 96px;

  display: flex;
  justify-content: space-between;

  &__form {
    box-sizing: border-box;
    width: 360px;
    display: flex;
    flex-direction: column;
  }

  &__subtitle {
    margin-bottom: 20px;

    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    color: $colorText;
  }

  &__input {
    box-sizing: border-box;
    width: 100%;
    padding: 13px 16px;
    margin-bottom: 21px;

    border: 1px solid #a4a4a4;
    outline: none;

    &--last {
      margin-bottom: 0;
    }
  }

  &__radio {
    margin-right: 10px;
    outline: none;
  }

  &__description {
    margin-top: 16px;
    margin-bottom: 39px;

    font-weight: 300;
    font-size: 13px;
    line-height: 16px;

    color: #b1b1b1;
  }

  &__button {
    width: 167px;
    height: 50px;
    border: none;

    background: $colorSelect;

    font-size: 14px;
    line-height: 17px;

    color: $colorLight;
    text-transform: uppercase;
    outline: none;

    &:hover {
      cursor: pointer;
      background-color: $colorLight;
      border: 1px solid $colorSelect;
      color: $colorSelect;
    }
  }

  &__icon {
    fill: $colorLight;
  }
}

.inputs__wrapper {
  display: flex;
  flex-direction: column;
  border: none;

  width: 100%;

  &--small {
    margin-top: 31px;
    margin-bottom: 33px;

    width: 250px;
    flex-direction: row;
    justify-content: space-between;
  }
}

input::placeholder {
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;

  color: #b1b1b1;
}

.registration__button:hover .registration__icon {
  fill: $colorSelect;
}

.registration__button span {
  margin-right: 20px;
}

.advantages {
  width: 660px;

  &__title {
    margin-bottom: 22px;

    font-weight: 300;
    font-size: 24px;
    line-height: 29px;

    color: #000000;
    text-transform: uppercase;
  }

  &__text {
    margin-bottom: 21px;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;

    color: #000000;
  }

  &__item {
    margin-left: 35px;
    margin-bottom: 16px;

    position: relative;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;

    color: #000000;

    &::before {
      position: absolute;
      top: 5px;
      left: -30px;
      z-index: 1;

      content: "";
      display: block;
      width: 20px;
      height: 16px;

      background-image: url("../assets/images/registration_marker.png");
      background-size: contain;
    }
  }
}
</style>
