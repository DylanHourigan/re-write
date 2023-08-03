<template>
  <div class="home">
    <HeaderNav />
    <ParaphraseV1 />
  </div>
</template>
  
<script>
import HeaderNav from '@/components/HeaderNav.vue';
import ParaphraseV1 from '@/components/ParaphraseV1.vue';

export default {
  name: 'HomePage',
  components: {
    ParaphraseV1,
    HeaderNav,
  }
};
</script>
  
<style>
/* Some CSS styling for the Home view */
.home {
  margin: 0 auto;
}
</style>