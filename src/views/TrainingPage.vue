<template>
  <div class="home">
    <HeaderNav />
    <ParaphraseContainer />
    <ToggleThemeButton />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import ParaphraseContainer from "@/components/ParaphraseContainer.vue";
import ToggleThemeButton from "@/components/ToggleThemeButton.vue";

export default {
  name: "HomePage",
  components: {
    ParaphraseContainer,
    HeaderNav,
    ToggleThemeButton,
  },
};
</script>

<style></style>
