<template>
  <div class="home">
    <HeaderNav />
    <ParaphraseTextBox />
    <ToggleThemeButton />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import ParaphraseTextBox from "@/components/ParaphraseTextBox.vue";
import ToggleThemeButton from "@/components/ToggleThemeButton.vue";

export default {
  name: "HomePage",
  components: {
    ParaphraseTextBox,
    HeaderNav,
    ToggleThemeButton,
  },
};
</script>

<style>
.home {
  margin: 0 auto;
}
</style>
