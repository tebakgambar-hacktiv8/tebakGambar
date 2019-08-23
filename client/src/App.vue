<template>
  <div id="app">
    <!-- <Home></Home> -->
    <!-- <Choice></Choice> -->
    <!-- <Username></Username> -->
    <!-- <Waiting-Room></Waiting-Room> -->
    <!-- <Play-Room></Play-Room> -->
    <Final-Page></Final-Page>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Choice from './views/Choice.vue'
import Username from './views/Username.vue'
import WaitingRoom from './views/WaitingRoom.vue'
import PlayRoom from './views/PlayRoom.vue'
import FinalPage from './views/ScorePage'

export default {
  name: 'app',
  components: {
    Home,Choice,Username,WaitingRoom,PlayRoom,FinalPage
  }
}
</script>

<style>
  @import url('./assets/style.css');
  @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
</style>
