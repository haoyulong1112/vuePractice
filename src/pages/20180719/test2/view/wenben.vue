<template>
	<div>
		<input type="text" name="" v-model="content" placeholder="edit me">
		<p>{{content}}</p>
		<span>Multiline message is:</span>
		<p style="white-space: pre-line;">{{message}}</p><br>
		<textarea v-model="message" placeholder="add multiple lines"></textarea>
		<br>
		<input type="checkbox" id="checkbox" v-model="checked" name="">
		<label for="checkbox">{{checked}}</label>
		<div>
			<input type="checkbox" id="jack" value="jack" v-model="checkedNames" name="">
			<label for="jack">jack</label>
			<input type="checkbox" id="sam" value="sam" v-model="checkedNames" name="">
			<label for="sam">sam</label>
			<input type="checkbox" id="mike" value="mike" v-model="checkedNames" name="">
			<label for="mike">mike</label>
			<input type="checkbox" id="jane" value="jane" v-model="checkedNames" name="">
			<label for="jane">jane</label><br>
			<span>checked Names : {{checkedNames}}</span>
		</div>
		<div>
			<input type="radio" id="one" value="One" v-model="picked" name="">
			<label for="one">One</label>
			<input type="radio" id="two" value="Two" v-model="picked" name="">
			<label for="two">Two</label><br>
			<span>Picked: {{picked}}</span>
		</div>
		<div>
			<select v-model="selected">
				<option v-for="option in options" v-bind:value="option.value">
					{{option.text}}
				</option>
			</select>
			<span>Selected:{{selected}}</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data:function(){
			return{
				content:'',
				message:'',
				checked:false,
				checkedNames:[],
				picked:'',
				selected:'A',
				options:[
					{text:'One',value:'A'},
					{text:'Two',value:'B'},
					{text:'Three',value:'C'},
					{text:'Four',value:'D'},
				]
			}
		}
	}
</script>