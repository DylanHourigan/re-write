<template>
  <div class="home">
    <HeaderNav />
    <ParaphraseTextBox />
  </div>
</template>
  
<script>
import HeaderNav from '@/components/HeaderNav.vue';
import ParaphraseTextBox from '@/components/ParaphraseTextBox.vue';

export default {
  name: 'HomePage',
  components: {
    ParaphraseTextBox,
    HeaderNav,
  },
};
</script>
  
<style>
/* Some CSS styling for the Home view */
.home {
  margin: 0 auto;
}
</style>