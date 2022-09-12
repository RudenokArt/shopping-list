import { createStore } from 'vuex'

export default createStore({
  state: {
    apiUrl: 'http://e25532i4.beget.tech/shopping-list/api/?',
    itemsList: [],
  },
  mutations: {
    GetItemsList: async function () {
      var itemsList = await fetch(this.state.apiUrl+'get_shopping_list=Y').then(function (response){
        return response.text();
      }).then(function(text){
        return JSON.parse(text);
      });
      this.state.itemsList = itemsList;
    },
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
