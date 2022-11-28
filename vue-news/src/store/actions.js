import {fetchNewsList,fetchJobsList,fetchAskList,fetchUserInfo,fetchItemList} from '../api/index.js'
export default{
	FETCH_NEWS(context){
		fetchNewsList()
		.then(response =>{
			console.log(response);
			context.commit('SET_NEWS', response.data);
		})
		.catch(error => {
			console.log(error);
		})
	},
	FETCH_JOBS({commit}){
		fetchJobsList().
		then(({data, headers}) => {
			console.log(headers);
			commit('SET_JOBS', data);
		})
		.catch(error => {
			console.log(error);
		});
	},
	FETCH_ASK({commit}){
		fetchAskList().
		then(({data}) => {
			commit('SET_ASK', data);
		})
		.catch(error => {
			console.log(error);
		});
	},
	FETCH_USER({commit}, name){
		fetchUserInfo(name).
		then(({data}) => {
			commit('SET_USER', data);
		})
		.catch(error => {
			console.log(error);
		});
	},
	FETCH_ITEM_LIST({commit}, id){
		fetchItemList(id).
		then(({data}) => {
			commit('SET_ITEM_LIST', data);
		})
		.catch(error => {
			console.log(error);
		});
	}
	
}