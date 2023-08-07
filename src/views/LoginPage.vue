<template>
    <div class="bg-gray-100 min-h-screen">
      <!-- Header Section -->
      <header class="bg-gray-800 py-4">
        <div class="container mx-auto py-4 px-8">
          <h1 class="text-white font-bold text-3xl">Re-Write</h1>
        </div>
      </header>
  
      <!-- Login Section -->
      <main class="container mx-auto py-16 px-4">
        <div class="max-w-md mx-auto bg-white rounded-md shadow-md p-8">
          <h2 class="text-3xl font-semibold mb-4">Log in</h2>
          <form @submit.prevent="login">
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email:</label>
              <input type="email" id="email" v-model="email" class="w-full p-2 border rounded-md focus:outline-none" required>
            </div>
            <div class="mb-6">
              <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Password:</label>
              <input type="password" id="password" v-model="password" class="w-full p-2 border rounded-md focus:outline-none" required>
            </div>
            <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none">Log in</button>
          </form>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import apiService from '@server/apiService';

  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        const data = {
          email: this.email,
          password: this.password,
        };
        const response = await apiService.login(data);
        if (response) {
          this.$store.dispatch('auth/setLoggedIn', 'true');
          this.$store.dispatch('user/setEmail', this.email);
          this.$router.push('/home');
        } else {
          // Handle invalid login credentials here (optional)
          alert('Invalid login credentials. Please try again.');
        }
      },
    },
  };
  </script>