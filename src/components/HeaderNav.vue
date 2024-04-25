<template>
  <header class="bg-gray-800 py-4 relative">
    <div class="container mx-auto grid grid-cols-4 items-center">
      <div class="text-white font-bold text-xl pl-5 relative">
        <router-link to="/">
          <img src="../assets/logo.jpg" alt="Logo" class="h-20 w-20" />
        </router-link>
      </div>

      <div class="text-3xl col-span-2 font-bold text-white text-center titlefont">
        Re-Write
      </div>

      <div class="flex justify-end">
        <nav v-if="!menuOpen" class="hidden md:flex space-x-4">
          <router-link to="/" class="text-white hover:text-gray-200">Home</router-link>
          <router-link to="/train" class="text-white hover:text-gray-200">Training</router-link>
          <router-link to="/login" @click="handleLogout" class="text-white hover:text-gray-200">Log out</router-link>
        </nav>

        <nav v-if="menuOpen" class="md:hidden space-y-2 bg-slate-700 p-2 absolute w-full top-full right-0 z-10">
          <router-link to="/"
            class="text-white block py-1 px-4 hover:bg-slate-800 border-b border-slate-900">Home</router-link>
          <router-link to="/train"
            class="text-white block py-1 px-4 hover:bg-slate-800 border-b border-slate-900">Train</router-link>
          <router-link to="/login" @click="handleLogout" class="text-white block py-1 px-4 hover:bg-slate-800">Log
            out</router-link>
        </nav>

        <div v-if="loggedIn" class="md:hidden ml-4">
          <button class="mr-4" @click="toggleMenu">
            <img src="@assets/svg/menu.svg" alt="Menu" class="h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("auth/logout");
      this.$store.dispatch("user/setEmail", "");
      this.$store.dispatch("user/setFirstName", "");
      this.$store.dispatch("user/setLastName", "");
      this.$store.dispatch("user/setAccountType", "");
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  computed: {
    loggedIn() {
      return this.$store.getters["auth/getLoggedIn"] === "true";
    },
  },
};
</script>
<style>
.titlefont {
  font-family: "Libre Baskerville", serif;
}
</style>
