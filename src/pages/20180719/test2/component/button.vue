<template>
	<!-- <button v-on:click="count++">You clicked me {{ count }} times</button> -->
	<el-button v-on:click="count++" type="success">You clicked me {{ count }} times</el-button>
</template>
<script type="text/javascript">
	export default{
		data:function(){
			return{
				count:0
			}
		}
	}
</script>