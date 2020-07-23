<template>
  <!--  <audio src="someaudio.wav">-->
  <!--    您的浏览器不支持 audio 标签。-->
  <!--  </audio>-->
  <div class="player-page">
    <h1 class="caption">
      <nuxt-link to="/list">我的私人音乐坊 &gt;</nuxt-link>
    </h1>
    <div class="mt20 row">
      <div class="controll-wrapper">
        <h2 class="music-title">{{currentMusicItem.title}}</h2>
        <h3 class="music-artist mt10">{{currentMusicItem.artist}}</h3>
        <div class="row mt20">
          <div class="left-time -col-auto">{{leftTime}}-{{totalTime}}</div>
          <div class="volume-container">
            <i class="icon-volume rt" style='top:5px'></i>
            <div class="volume-wrapper">
              <Progress
                progress={volume}
                onProgressChange={volumeHandler}
                barColor="#aaa"
              >
              </Progress>
            </div>
          </div>
        </div>
        <!--        <div style={{height: 10, lineHeight: '10px', marginTop: 10}}>-->
        <!--        <Progress-->
        <!--          progress={progress}-->
        <!--          onProgressChange={progressHandler}-->
        <!--        >-->
        <!--        </Progress>-->
        <!--      </div>-->
        <!--      <div class="mt35 row">-->
        <!--        <div>-->
        <!--          <i class="icon prev" @Click=playPrev></i>-->
        <!--          <i class={`icon ml20 ${isPlay ? 'pause' : 'play'}`}-->
        <!--          onClick={playHandler}-->
        <!--          ></i>-->
        <!--          <i class="icon next ml20" onClick={playNext}></i>-->
        <!--        </div>-->
        <!--        <div class="-col-auto">-->
        <!--          <i class={`icon repeat-${playType}`} onClick={playTypeHandler}></i>-->
        <!--        </div>-->
        <!--      </div>-->
      </div>
      <div class="-col-auto cover">
        <img v-bind:src="currentMusicItem.cover" v-bind:alt='currentMusicItem.title'/>
      </div>
    </div>
  </div>
</template>


<script>
    // import "./player.scss";
    // import Progress from '../progress/progress'
    import {mapMutations} from 'vuex'

    export default {
        data: function () {
            return {
                currentMusicItem: {},
                leftTime: 0,
                totalTime: 0
            }
        },
        computed: {
            list() {
                debugger;
                return this.$store.state.music.list
            }
        },
        mounted() {
            debugger;
            this.currentMusicItem = this.list[0];
        },
        methods: {
            test1() {
                console.log(1);
            }
        }

    }
</script>


<style lang="scss">@import "./player.scss";</style>
