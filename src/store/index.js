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
    },
    SortItemAsc (state, index) {
      if (index < 1) {return;}
      var current = this.state.itemsList[index];
      var previous = this.state.itemsList[index-1];
      this.state.itemsList[index] = previous;
      this.state.itemsList[index-1] = current;
    },
    SortItemDesc (state, index) {
      if (index >= this.state.itemsList.length - 1) {return;}
      var current = this.state.itemsList[index];
      var next = this.state.itemsList[index+1];
      this.state.itemsList[index] = next;
      this.state.itemsList[index+1] = current;
    },

  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
});
