<template>
  <header class="bg-gray-800 py-4">
    <div class="container mx-auto grid grid-cols-3 items-center">

      <div class="text-white font-bold text-xl">
        <img src="../assets/logo.jpg" alt="Logo" class="h-20">
      </div>

      <div class="text-3xl font-bold text-white text-center">
        Re-Write
      </div>

      <div class="flex justify-end">
        <nav v-if="loggedIn" class="hidden md:flex space-x-4">
          <router-link to="/" class="text-white hover:text-gray-200">Home</router-link>
          <router-link to="/" class="text-white hover:text-gray-200">About</router-link>
          <router-link to="/" class="text-white hover:text-gray-200">Services</router-link>
          <router-link to="/login" @click="handleLogout" class="text-white hover:text-gray-200">Log out</router-link>
        </nav>

        <div class="md:hidden ml-4"> 
          <button class="text-white">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      this.$store.dispatch('auth/logout');
      this.$store.dispatch('user/setEmail', '');
      this.$store.dispatch('user/setFirstName', '');
      this.$store.dispatch('user/setLastName', '');
      this.$store.dispatch('user/setAccountType', '');
    },
  },
  computed: {
    loggedIn() {
      return this.$store.getters['auth/getLoggedIn'] === 'true';
    }
  },
};
</script>
