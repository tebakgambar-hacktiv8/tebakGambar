<template>
  <div id="app">
    <Home v-if="page === 'home'"></Home>
    <Choice v-if="page === 'choice'"></Choice>
    <Username v-if="page === 'username'"></Username>
    <Waiting-Room v-if="page === 'waiting-room'"></Waiting-Room>
    <Play-Room v-if="page === 'play-room'"></Play-Room>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Choice from './views/Choice.vue'
import Username from './views/Username.vue'
import WaitingRoom from './views/WaitingRoom.vue'
import PlayRoom from './views/PlayRoom.vue'

import {mapState} from 'vuex'

export default {
  name: 'app',
  components: {
    Home,Choice,Username,WaitingRoom,PlayRoom
  },
  data: {
    },
  methods: {
    },
  computed:{
    ...mapState({
      page: state => state.view.page,
    })
    
  }
}
</script>

<style>
  @import url('./assets/style.css');
  @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
</style>
