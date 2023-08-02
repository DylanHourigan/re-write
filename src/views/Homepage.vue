<template>
  <div class="home">
    <ParaphraseV1 />
  </div>
</template>
  
<script>
import ParaphraseV1 from '@/components/ParaphraseV1.vue';

export default {
  name: 'HomePage',
  components: {
    ParaphraseV1,
  }
};
</script>
  
<style>
/* Some CSS styling for the Home view */
.home {
  margin: 0 auto;
}
</style>