import Vue from 'vue'
import Vuex from 'vuex'
import action from './Action'
import mutation from './Mutations'
import getters from './Getters'

Vue.use(Vuex);


export default new Vuex.Store({
	modules:{
		mutation,
		getters
	},
	action
});
