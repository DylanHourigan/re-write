<template>
    <div class="blog-list">
      <h2>Blog Posts</h2>
      <ul>
        <!-- Loop through the blog posts and display them -->
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogList',
    props: {
      posts: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  /* Some CSS styling for the BlogList component */
  .blog-list {
    margin-top: 20px;
  }
  
  .blog-list h2 {
    margin-bottom: 10px;
  }
  
  .blog-list li {
    margin-bottom: 15px;
  }
  </style>