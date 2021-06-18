<template>
  <div class="product-box__content product-box__content--catalog">
    <ProductItem
        v-for="item of filteredAndSlicedCatalog(sliceNumber, search)"
        :key="item.id_product"
        :img="item.image"
        :product="item">
    </ProductItem>
  </div><!-- /.product-box__content -->

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  props: {
    sliceNumber: {
      type: Number,
      required: true,
    },
    search: {
      type: String,
    },
  },
  components: {
    ProductItem,
  },

  computed: {
    ...mapGetters(['catalogList']),
  },
  methods: {
    ...mapActions(['getCatalogList']),
    filteredAndSlicedCatalog(sliceNumber, filter) {
      let catalog = this.catalogList.slice(0, sliceNumber);
      if (filter) {
        const regexp = new RegExp(filter, 'i');
        catalog = catalog.filter((el) => regexp.test(el.product_name));
      }
      return catalog;
    },
  },
  created() {
    this.getCatalogList();
  },
  mounted() {
    console.log(this.catalogList);
  },

};
</script>

<style>

</style>
