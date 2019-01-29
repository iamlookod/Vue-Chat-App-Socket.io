<template>
  <div id="app">
    <h1>Chat</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <Chat/>
  </div>
</template>

<script>
import Chat from './components/ChatComponent.vue'

export default {
  name: 'app',
  components: {
    Chat
  }
}
</script>

<style>
body{
background-color: #f8f8f8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
