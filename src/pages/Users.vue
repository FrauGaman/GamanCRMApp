<template>
	<div class="wrapper-content wrapper-content--fixed">
	  <section>
	    <div class="container">
	      <table>
	      	<thead>
	      		<tr>
	      			<th @click="sort('name')">Name &#8595;</th>
	      			<th @click="sort('age')">Age &#8595;</th>
	      			<th @click="sort('gender')">Gender &#8595;</th>
	      		</tr>
	      	</thead>

	      	<tbody>
	      		<tr v-for="user in usersSort" :key="user.id" >
	      			<td>
						<img :src="user.img" :alt="user.name">
	      				<span>{{ user.name }}</span>
	      			</td>
	      			<td>{{ user.age }}</td>
	      			<td>{{ user.gender }}</td>
	      		</tr>
	      	</tbody>
	      </table>
	      <p>debug: sort: {{ currentSort }}, dir: {{ currentSortDir }}</p>
	      <p>page: {{ page.current }}, length: {{ page.length }}</p>
	    </div>
	  </section>

	  <!-- buttons -->
	  <section>
	  	<div class="container">
	  		<div class="button-list">
	  			<div class="btn btnPrimary" @click="prevPage">&#8592;</div>
	  			<div class="btn btnPrimary" @click="nextPage">&#8594;</div>
	  		</div>
	  	</div>
	  </section>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				users: [],
				currentSort: 'name',
				currentSortDir: 'asc',
				page: {
					current: 1,  // номер текущей страницы
					length: 4 //сколько элементов выводим на странице				
				}
			}
		},
		created() {
			axios
				.get('https://api.myjson.com/bins/rzgya')
					.then(response => {
						this.users = response.data
					})
					.catch(error => {
						console.log(error)
					})
		},
		computed: {
			usersSort () {
				return this.users.sort((a, b) => {
					let flag = 1
					if (this.currentSortDir === 'desc')	flag = -1
					if (a[this.currentSort] < b[this.currentSort]) return -1*flag
					if (a[this.currentSort] > b[this.currentSort]) return 1*flag
					return 0
				}).filter((row, index) => {
					let start = (this.page.current-1)*this.page.length
					let end = this.page.current*this.page.length
					if (index >= start && index < end) return true
				})
			}
		},
		methods: {
			sort(event) {
				if(event === this.currentSort) {
					this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
				}
				this.currentSort = event
			},
			//Pagination
			prevPage() {
				if (this.page.current >1) {
					this.page.current -= 1
				}
			},
			nextPage() {
				if ((this.page.current * this.page.length) < this.users.length) {
					this.page.current += 1
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	img {
		width: 60px;
		height: auto;
		border-radius: 50%;
		margin-right: 16px;
	}
	.button-list {
		width: 100%;
		text-align: center;
	}
	.btn {
		margin: 0 20px;
		border-radius: 60px;

	}
</style>


