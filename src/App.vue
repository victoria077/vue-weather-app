<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'montserrat', sans-serif;
    }
    #app {
        background-image: url('./assets/mountains.png');
        background-size: cover;
        background-position: bottom;
        transition: 0.4s;
    }
</style>


