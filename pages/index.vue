<template>
  <div class="container">
    <player/>
    <nuxt-child/>
  </div>
</template>


<script>
    // let param=2;
    // let test2=require(`./test${param}.json`);
    // console.log(test2);
    // import config from './config-APP_TARGET.js';
    // console.log(config.title);
    import test1 from './test.json';
    console.log(test1);
    import player from './../components/player/player.vue'
    export default {
        components: {
            player
        }
    }
</script>

<style lang="scss">@import "./index.scss";</style>
