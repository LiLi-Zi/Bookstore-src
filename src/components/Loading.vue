<template>
  <div class="loading">
		<div class="shadow">
			<div class="loader">
				<div class="mask"></div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
    name:'loading',
}
</script>

<style scoped>
    .shadow{
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -50px;
		margin-right: -50px;
		border-radius: 50%;
		box-shadow: -2px 2px 10px 0 rgba(0, 0, 0, 0.5),
			2px -2px 10px 0 rgba(255,255,255,0.5);
	}
	.loader{
		background-image: linear-gradient(to left,skyblue 50%,#fafafa 50%);
		border-radius: 50%;
		height: 100px;
		width: 100px;
		/*animation:time 8s steps(500, start) infinite;*/
		
	}
	.mask{
		
		border-radius: 50px 0 0 50px;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		width: 50%;
		animation: mask 8s steps(250,start) infinite;
		transform-origin: 100% 50%;/*改变旋转的中心点x y 默认是50% 50% 0*/
	} 
	
	/*@keyframes time{
		100%{
			transform: rotate(360deg);
		}
	}*/
	@keyframes mask{
		0%{
			background-color: #fafafa;
			transform: rotate(0deg);
		}
		50%{
			background-color: #fafafa;
			transform: rotate(-180deg);

		}
		50.01%{
			background-color: skyblue;
			transform: rotate(0deg);
		}
		100%{
			background-color: skyBlue;
			transform: rotate(-180deg);
		}
	}

</style>