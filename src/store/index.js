import { createStore } from 'vuex';

export default createStore({
  state: {
    apiUrl: 'http://e25532i4.beget.tech/shopping-list/api/?',
    itemsList: [],
    preloaderVisible: 'display: flex',
    sortedItem: 1000000,
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
      this.commit('SaveItemsList');
    },
    DeleteItem (state, index) {
      this.state.itemsList.splice(index, 1);
      this.commit('SaveItemsList');
    },
    AddItem (state, item) {
      this.state.itemsList.push(item);
      this.commit('SaveItemsList');
    },
    SortItemAsc (state, index) {
      if (index < 1) {return;}
      var current = this.state.itemsList[index];
      var previous = this.state.itemsList[index-1];
      this.state.itemsList[index] = previous;
      this.state.itemsList[index-1] = current;
      this.commit('SaveItemsList');
      this.state.sortedItem = current.sort;
    },
    SortItemDesc (state, index) {
      if (index >= this.state.itemsList.length - 1) {return;}
      var current = this.state.itemsList[index];
      var next = this.state.itemsList[index+1];
      this.state.itemsList[index] = next;
      this.state.itemsList[index+1] = current;
      this.commit('SaveItemsList');
      this.state.sortedItem = current.sort;
    },
    SaveItemsList: async function () {
      for (var i = 0; i < this.state.itemsList.length; i++) {
        this.state.itemsList[i].sort = i;
      }
      var list = JSON.stringify(this.state.itemsList);
      try {
        fetch(this.state.apiUrl+'save_shopping_list='+list);
      } catch(e) {
        console.log(e);
      }
    }

  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
});
