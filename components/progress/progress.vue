<template>
  <div class="component-progress" ref='_progress' @click='changeProgress'>
    <div class="progress"
         :style="{width:progress * 100, background: barColor||'#2f9842'}"></div>
  </div>
</template>
<script>
  export default{
    methods:{
        changeProgress:()=>{
            let progressBar = this.$refs.pregress;
            let progress = (e.clientX - progressBar['getBoundingClientRect']().left) / progressBar['clientWidth'];
            props.onProgressChange && props.onProgressChange(progress);
        }
    }
  }
</script>
<style lang="scss">
  @import "./progress";
</style>
