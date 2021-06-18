<template>
  <div class="home">
    <Intro msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/blocks/Intro.vue';

export default {
  name: 'Home',
  components: {
    Intro,
  },
};
</script>
