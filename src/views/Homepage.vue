<template>
    <div class="home">
      <HeaderNav />
      <BlogList :posts="blogPosts" />
    </div>
  </template>
  
  <script>
  import BlogList from '@/components/BlogList.vue'; // Import the BlogList component
import HeaderNav from '@/components/HeaderNav.vue';
  
  export default {
    name: 'HomePage',
    components: {
    BlogList,
    HeaderNav
},
    data() {
      return {
        blogPosts: [
          { id: 1, title: 'First Post', content: 'This is the first blog post.' },
          { id: 2, title: 'Second Post', content: 'This is the second blog post.' },
          // Add more blog posts here
        ],
      };
    },
  };
  </script>
  
  <style>
  /* Some CSS styling for the Home view */
  .home {
    margin: 0 auto;
  }
  </style>