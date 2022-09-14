import { createStore } from 'vuex';

export default createStore({
  state: {
    apiUrl: 'http://e25532i4.beget.tech/shopping-list/api/?',
    itemsList: [],
    preloaderVisible: 'display: flex',
  },
  mutations: {
    GetItemsList: async function (state) {
      var itemsList = await fetch(this.state.apiUrl+'get_shopping_list=Y').then(function (response){
        return response.text();
      }).then(function(text){
        return JSON.parse(text);
      });
      this.state.itemsList = itemsList;
      this.state.preloaderVisible = 'display: none';
    },
    setItemComplete (state, index) {
      if (this.state.itemsList[index].complete == 'true') {
        this.state.itemsList[index].complete = 'false';
      } else {
        this.state.itemsList[index].complete =  'true';
      }
    },
    DeleteItem (state, index) {
      this.state.itemsList.splice(index, 1);
    },
     AddItem (state, item) {
      this.state.itemsList.push(item);
    }

  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
});
