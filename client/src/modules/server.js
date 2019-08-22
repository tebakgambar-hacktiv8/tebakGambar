import Vue from 'vue'
import Vuex from 'vuex'
import db from '../apis/firebase'
import questionsList from '../../questions.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: '',
    players: [],
    questions: []
  },
  mutations: {
    ADD_PLAYERS (state, playerName) {
      state.players.push({ name: playerName, score: 0 })
    },
    ADD_QUESTIONS (state, question) {
      state.questions.push(question)
    },
    SET_ID (state, id) {
      state.id = id
    },
    PLUS_SCORE (state) {
      state.players.forEach(e => {
        e.score++
      })
    }
  },
  actions: {
    createNewGames ({ state, commit }) {
      let data = {
        status: true,
        players: state.players
      }
      db.collection('games').add(data)
        .then(ref => {
          console.log('Added document with ID: ', ref.id)
          commit('SET_ID', ref.id)
        })
    },
    createQuestions () {
      let batch = db.batch()
      questionsList.forEach((doc) => {
        let docRef = db.collection('quiz').doc()
        batch.set(docRef, doc)
      })
      batch.commit()
    },
    fetchQuestions ({ state, commit }) {
      db.collection('quiz').onSnapshot((snapshot) => {
        let question = { id: snapshot.id, ...snapshot.data() }
        commit('ADD_QUESTIONS', question)
      })
      state.questions.sort(() => Math.random() - 0.5) // random
    },
    updatePlayer ({ state, commit }, payload) {
      // payload : answer, id
      let found = state.questions.find(function (element) {
        return element.id === payload.id_soal
      })
      if (found.name === payload.answer) {
        commit('PLUS_SCORE')
      }
      let gameRef = db.collection('games').doc(state.id)
      gameRef.update({ players: state.players })
    }
  }
})
