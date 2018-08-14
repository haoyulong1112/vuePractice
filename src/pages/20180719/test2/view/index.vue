<template>
	<el-container>
		<el-col :span="24">
			<div class="grid-content bg-purple-dark">
			  <el-header>
			  	<p>正序字符串：{{message}}</p>
			  	<p>倒序字符串：{{reversedMessage}}</p>
				  <button-count></button-count>
				  <button-count></button-count>
				  <button-count></button-count>
			  	<p>计算属性：{{fullName}}</p>
			  </el-header>
			  <el-main>
			  	<a href="#/style">样式</a>
			  	<a href="#/wenben">文本</a>
			  	<a href="#/template">props</a>
			  	<div id="componentsCount">
				  	<button-count></button-count>
				</div>
			  </el-main>
			</div>
		</el-col>
	</el-container>
</template>
<script type="text/javascript">
	import buttonCount from '../component/button.vue'
	export default{
		name:'componentsCount',
		components:{
			'button-count':buttonCount,
		},
		data:function(){
			return{
				message:'Hello',
				firstName: 'Foo',
    			lastName: 'Bar',
			}
		},
		computed:{
			reversedMessage:function(){
				this.message = 'What'
				//原字符串以每個
				return this.message.split("").reverse().join()
			},
			fullName:function(){
				return this.firstName + ' ' + this.lastName
			}
		}
	}
</script>
<style type="text/css" scoped>
@import '../style/main.css'
</style>