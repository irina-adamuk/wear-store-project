<template>
  <a id="search" class="search" href="#">
    <div class="search__form" >
      <input v-model="searchLine" type="text" class="search__field">
      <router-link :to="{ path: 'catalog', query: { search: searchLine }}"
  >
        <button class="search__btn" type="submit">
          <img
            class="search__img"
            src="http://localhost:3000/images/home/search.svg"
            alt="search"
          />
        </button>
      </router-link>
    </div>
  </a>
</template>
<script>

export default {
  name: 'Search',
  data() {
    return {
      searchLine: '',
    };
  },
};
</script>
<style lang="scss">
.search {
  margin-top: 0;
  margin-left: 41px;
  &__btn {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1.2em;
    position: absolute;
    bottom: 5px;
    right: 0;
    cursor: pointer;
  }
  &__form {
    position: relative;
    display: inline-block;
  }
  &__form:focus {
    outline: none;
  }
  &__field:focus {
    outline: none;
  }
  &__field {
    box-sizing: border-box;
    width: 200;
    color: #fff;
    padding: 12px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.6s linear;
  }
  &__field:hover {
    border-bottom: 2px solid #fff;
    outline: none;
  }
  &__img {
    display: block;
    transform: translateX(-170px);
    transition: transform 0.6s linear;
  }
}
.search__form:hover .search__img {
    transform: translateX(0px);
}
</style>
