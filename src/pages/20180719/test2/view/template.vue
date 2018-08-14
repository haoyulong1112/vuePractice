<template>
	<div id="props-demo">
		<blog-post msg = "My journey with Vue"></blog-post>
	</div>
</template>
<script type="text/javascript">
	import blogpost from '../component/prop.vue'
	export default{
		name:'props-demo',
		components: {
			'blog-post':blogpost
		}
	}
</script>