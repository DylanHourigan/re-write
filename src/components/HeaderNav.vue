<template>
    <header class="header">
      <div class="header__logo">
        <img src="../assets/logo.jpg" alt="Re-Write Logo" />
      </div>

      <h1 class="header__heading">Re-Write</h1>
  
      <nav class="header__nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderNav',
  };
  </script>
  
  <style>
  /* Add your custom styling here */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f0f0f0;
  }
  
  .header__logo img {
    width: 100px;
    margin-right: 10px;
  }

  .header__heading {
    font-size: 24px;
    margin: 0;
    margin-left: 10px;
}
  
  .header__nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .header__nav li {
    margin-left: 20px;
  }
  
  .header__nav li:last-child {
    margin-right: 0;
  }
  
  .header__nav a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
 
  </style>