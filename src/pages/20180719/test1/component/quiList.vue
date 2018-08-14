<template>
	<div class="qui-list">
		<span class="list-tips">{{tipsText}}</span>
		<component :is="currentView" v-on:btnEvent="clickEvent" :msg = msg class="small" keep-alive></component>
	</div>
</template>
<script type="text/javascript">
	import quiButton from './quiButton.vue'
	import quiArrow from './quiArrow.vue'
	export default{
		props:{
			msg:{
				default:'下载'
			},
			tipsText:{
				default:'默认的文案'
			},
			currentView:{
				default:'qui-btn'
			}
		},
		components:{
			'qui-btn': quiButton,
			'qui-arrow':quiArrow
		},
		methods:{
			clickEvent: function () {
				alert('hahaah');
      		}
		}
	}
</script>
<style type="text/css" scoped>
	.qui-list{
		padding: 20px 5px;
		border-bottom: 1px solid #ccc;
		margin: 0 5px;
	}
</style>