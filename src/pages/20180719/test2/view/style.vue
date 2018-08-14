<template>
	<div class="style-page">
		<p v-bind:class="{'title':active}" class="style-title">我是一段文字</p>
		<h1 v-if="true">Yes</h1>
		<h1 v-else>No</h1>
		<ul>
			<li v-for="(item,index) in items" v-bind:key="item.id">{{item.message}}</li>
		</ul>
		<ul>
			<li v-for="item in even(numbers)" v-bind:key="item.id">{{item}}</li>
		</ul>
		<ul>
			<template v-for="(item,index) in items">
				<li>{{item.message}}</li>
				<p>{{item.age}}</p>
			</template>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		data:function(){
			return{
				active:true,
				items:[
					{message:"Sam",age:12},
					{message:"Tom",age:23},
					{message:"Mike",age:34},
					{message:"Jane",age:21},
				],
				numbers:[1,2,3,4,5]
			}
		},
		methods:{
			even:function(numbers){
				return numbers.filter(function(number){
					return number % 2 !== 0;
				})
			}
		}
	}
</script>
<style type="text/css" scoped>
	.title{
		font-size: 40px;
		color: red;
	}
</style>