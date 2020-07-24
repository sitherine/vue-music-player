<template>
  <div>
    <div class="header row">
      <img src="~/assets/images/vue.png" width="40" alt="logo" class="-col-auto"/>
      <h1 class="caption">
        <nuxt-link to="/">Vue Music Player</nuxt-link>
      </h1>
    </div>
    <nuxt/>
    <div class='footer'>
      <div class="beian-icp">
        <a href="http://beian.miit.gov.cn/" target="_blank"
           rel="nofollow noopener">粤ICP备20032374号</a>
      </div>
    </div>
  </div>
</template>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size:
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  .header {
    box-sizing: border-box;
    padding: 15px 25px;
    border-bottom: 1px solid #ccc;
    background: white;
  }

  .header .caption {
    font-size: 20px;
    text-indent: 20px;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .footer .beian-icp {
    line-height: 50px;
    text-align: center;
    width: 100%;
  }

  .footer .beian-icp a:hover {
    color: #2f9842;
    text-decoration: none;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
  }
</style>
