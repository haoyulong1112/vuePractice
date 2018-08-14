<template>
	<div class="qui-nav nav-type-1">
		<a href="javascript:;" @click="navClickEvent(index)" v-for="(item,index) in items" :class="{active: item.active}">
			<span class="nav-text">{{item.text}}</span>
		</a>
		<div class="tab-content">
			<p v-for="(item,index) in items" v-if="item.active">{{item.text}}</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data:function(){
			return{
				commonClass:'nav-item',
				activeClass:'active',
				items:[
					{
						text:'首页',
						active:true
					},
					{
						text:'列表',
						active:false
					},
					{
						text:'关于',
						active:false
					},
					{
						text:'招聘',
						active:false
					}
				]
			}
		},
		methods:{
			navClickEvent:function(index){
				const arr = this.items;
				arr.forEach(function(el){
					el.active = false;
				})
				arr[index].active = true;
				// this.$emit('navClickEvent',items,index);
			}
		}
	}
</script>
<style type="text/css" scoped>
	/*.nav-item{
		text-decoration: none;
		padding:10px 34px;
		color: #000;
	}*/
	a{
		text-decoration: none;
		padding:10px 34px;
		color: #000;
	}
	a:active{
		color: gold;
	}
	a.active{
		border-bottom: 2px solid gold;
		color: gold;
	}
</style>
