<template>
  <div>
    <section>
		<!-- 질문 상세 정보-->
		
		<user-profile :info="fetchedItem">
			<!-- <div slot="username">{{fetchedItem.user}}</div> -->
			<router-link slot="username" :to="`/user/${fetchedItem.user}`">
				{{ fetchedItem.user }}
			</router-link>
			<div slot="time">{{'Posted ' + fetchedItem.time_ago}}</div>
		</user-profile>
		
	</section>
	<section>
		<h2>{{ fetchedItem.title }}</h2>
	</section>
	<section>
		<div v-html="fetchedItem.content"></div>
	</section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import {mapGetters} from 'vuex';
export default {
	components : {
		UserProfile
	},
	computed :{
		...mapGetters(['fetchedItem'])
	},
	created(){
		console.log(this.$route.params.id);
		const id = this.$route.params.id;
		this.$store.dispatch('FETCH_ITEM_LIST', id);
	}
}
</script>

<style scoped>
.user-container{
	display: flex;
	align-items: center;
	padding: 0.6rem;
}
.fa-user{
	font-size: 2.5rem;
}
.user-description {
	padding-left: 8px;
}
.time{
	font-size: 0.7rem;
}
</style>