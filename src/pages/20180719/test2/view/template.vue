<template>
	<div id="props-demo">
		<blog-post msg = "My journey with Vue"></blog-post>
		<blog-post msg = "What is your name ?"></blog-post>
		<blog-post v-for="post in posts" v-bind:msg="post.title" v-bind:style="{fontSize: postFontSize + 'em'}"></blog-post>
		<el-button v-on:click="plus" type="default">加大字号</el-button>
		<button-count></button-count>
		<el-button v-on:click="plus" type="default">{{ a }}</el-button>
		<el-input v-model="input" placeholder="请输入内容"></el-input>
		<h1>{{ input }}</h1>
	</div>
</template>
<script type="text/javascript">
	import blogpost from '../component/prop.vue'
	import buttonCount from '../component/button.vue'
	export default{
		data:function(){
			return{           
				a:0,
				input:'默认文本',
				posts:[
				  { id: 1, title: 'My journey with Vue' },
			      { id: 2, title: 'Blogging with Vue' },
			      { id: 3, title: 'Why Vue is so fun' }
				],
				postFontSize: 1
			}
		},
		name:'props-demo',
		components: {
			'blog-post':blogpost,
			'button-count':buttonCount,
		},
		methods:{
			plus:function(){
				this.postFontSize += 0.1;
			},
			put:function(){
				$.ajax({
					url:
				})
			}
		}
	}
</script>
<style type="text/css">
	input{
		margin-top: 20px;
		width: 50%!important;
	}
</style>