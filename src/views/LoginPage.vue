<template>
  <HeaderNav />
    <div class="bg-gray-100 dark:bg-gray-900 min-h-screen">
    <main class="container mx-auto py-16 px-4">
      <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-md shadow-md p-8">
        <h2 class="text-3xl font-semibold mb-4 dark:text-white">Log in</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Email:</label>
            <input type="email" id="email" v-model="email" class="w-full p-2 border dark:border-gray-600 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white" required>
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Password:</label>
            <input type="password" id="password" v-model="password" class="w-full p-2 border dark:border-gray-600 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white" required>
          </div>
          <button type="submit" class="w-full py-2 px-4 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none">Log in</button>
        </form>
      </div>
    </main>
  </div>
  <toggleThemeButton />
</template>
  
  <script>
  import HeaderNav from '@/components/HeaderNav.vue';
  import apiService from '@server/apiService';
  import toggleThemeButton from '@/components/ToggleThemeButton.vue';

  export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    components: {
      HeaderNav,
      toggleThemeButton
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
                this.$store.dispatch('user/setAccountType', response.accountType);
                this.$store.dispatch('user/setFirstName', response.firstName);
                this.$store.dispatch('user/setLastName', response.lastName);
                this.$store.dispatch('user/setEmail', response.email);
                this.$router.push('/home');
            }
            else {
                // Handle invalid login credentials here (optional)
                alert('Invalid login credentials. Please try again.');
            }
        },
    },
};
  </script>