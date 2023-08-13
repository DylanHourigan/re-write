<template>
    <button @click="toggleTheme" :class="buttonClass" class="fixed bottom-4 right-4 p-2 rounded shadow-md hover:opacity-90">
        <img v-if="isDarkMode" :src="sunIcon" alt="Light Mode Icon" class="w-6 h-6">
        <img v-else :src="moonIcon" alt="Dark Mode Icon" class="w-6 h-6">
    </button>
</template>
<script>
export default {
    name: 'DarkModeToggle',
    data() {
        return {
            isDarkMode: false,
            sunIcon: require('@/assets/svg/light.svg'),
            moonIcon: require('@/assets/svg/dark.svg')
        };
    },
    computed: {
        buttonClass() {
            return this.isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';
        }
    },
    methods: {
        toggleTheme() {
            this.isDarkMode = !this.isDarkMode;
            document.body.classList.toggle('dark', this.isDarkMode);

            // Save the user's preference to localStorage
            localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
        }
    },
    created() {
        // Check the user's saved preference when the component is created
        const savedTheme = localStorage.getItem('theme');
        this.isDarkMode = savedTheme === 'dark';
        document.body.classList.toggle('dark', this.isDarkMode);
    }
};
</script>
  