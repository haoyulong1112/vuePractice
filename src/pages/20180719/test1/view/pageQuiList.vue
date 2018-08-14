<template>
	<div id="pageQuiList">
		<qui-list tipsText="自定义文案，默认右边是按钮" msg="弹层"></qui-list>
		<qui-list tipsText="默认文案是下载"></qui-list>
		<qui-list ref="child1" tipsText="最右边是箭头" currentView="qui-arrow"></qui-list>
	</div>
</template>
<script type="text/javascript">
	import quiList from '../component/quiList.vue'
	export default{
		name:'pageQuiList',
		components:{
			'qui-list':quiList
		}
	}
</script>
