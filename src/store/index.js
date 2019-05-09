import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const now = new Date();
const store = new Vuex.Store({
  state: {
    testData: {
      content: "hello,Vuex",
      date: now
    }
  }
});

store.watch(
  (state) => state.testData,
  (val) => {
    console.log('CHANGE: ', val);
    localStorage.setItem('testdata', JSON.stringify(val));
  }, {
    deep: true
  }
);

export default store;
