<template>
  <div id="wrap" :style="{ height: screenHeight + 'px' }">
    <div id="main" :style="{ top: nowTop + 'px' }">
      <!-- <ul id="pageUl" type="circle">
        <li id="pageUlLi1" class="pageUlLi" :class="{'active': curIndex == 1}">&nbsp;</li>
        <li id="pageUlLi2" class="pageUlLi" :class="{'active': curIndex == 2}">&nbsp;</li>
        <li id="pageUlLi3" class="pageUlLi" :class="{'active': curIndex == 3}">&nbsp;</li>
        <li id="pageUlLi4" class="pageUlLi" :class="{'active': curIndex == 4}">&nbsp;</li>
        <li id="pageUlLi5" class="pageUlLi" :class="{'active': curIndex == 5}">&nbsp;</li>
      </ul> -->
      <div style="background-color: #1b6d85" id="page1" class="page">
        <div>
    <article>
      <section>
        <video id="video"></video>
      </section>
      <section>
        <audio id="audio"></audio>
      </section>
      <button id="btn" @click="tackcapture">拍照</button>
      <button @click="opening">开启</button>
      <section>
        <canvas id="canvas"></canvas>        
      </section>

    </article>
  </div>

      </div>
      <div style="background-color: #5cb85c" id="page2" class="page">
      <section><img src="" alt="" id="img" /></section>
      
      <button @click="btnTakePhotoClicked">保存</button>
      </div>
      <div style="background-color: #8a6d3b" id="page3" class="page"></div>
      <div style="background-color: #337ab7" id="page4" class="page"></div>
      <div style="background-color: #66512c" id="page5" class="page"></div>
    </div>
  </div>
</template>
 
<script>
  const Address = ''
  export default {
    name: 'Home',
    data(){
      return{
        screenWeight: 0,    // 屏幕宽度
        screenHeight: 0,    // 屏幕高度
        index: 1,        // 用于判断翻页
        curIndex: 1,      // 当前页的index
        startTime: 0,      // 翻屏起始时间
        endTime: 0,       // 上一次翻屏结束时间
        nowTop: 0,       // 翻屏后top的位置
        pageNum: 0,       // 一共有多少页
        main: Object,
        obj: Object
      }
    },
    mounted(){
      this.screenWeight = document.documentElement.clientWidth;
      this.screenHeight = document.documentElement.clientHeight;
      this.main = document.getElementById("main");
      this.obj = document.getElementsByTagName("div");
      console.log(this.obj)
      for (let i = 0; i < this.obj.length; i++) {
        if (this.obj[i].className == 'page') {
          this.obj[i].style.height = this.screenHeight + "px";
        }
      }
      this.pageNum = document.querySelectorAll(".page").length;
 
      // 浏览器兼容  
      if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
        document.addEventListener("DOMMouseScroll", this.scrollFun, false);
      } else if (document.addEventListener) {
        document.addEventListener("mousewheel", this.scrollFun, false);
      } else if (document.attachEvent) {
        document.attachEvent("onmousewheel", this.scrollFun);
      } else {
        document.onmousewheel = this.scrollFun;
      }
    },
    methods:{
      scrollFun(event) {
        this.startTime = new Date().getTime();
        // mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
        // DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
        let delta = event.detail || (-event.wheelDelta);
        // 如果当前滚动开始时间和上次滚动结束时间的差值小于1.5s，则不执行翻页动作，这样做是为了实现类似节流的效果
        if ((this.startTime - this.endTime) > 1500) {
          if (delta > 0 && parseInt(this.main.offsetTop) >= -(this.screenHeight * (this.pageNum - 2))) {
            // 向下滚动
            this.index++;
            this.toPage(this.index);
          }else if (delta < 0 && parseInt(this.main.offsetTop) < 0) {
            // 向上滚动
            this.index--;
            this.toPage(this.index);
          }
          // 本次翻页结束，记录结束时间，用于下次判断
          this.endTime = new Date().getTime();
        }
      },
      // 翻页
      toPage(index) {
        if (index != this.curIndex) {
          let delta = index - this.curIndex;
          this.nowTop = this.nowTop - delta * this.screenHeight;
          this.curIndex = index;
        }
      },
         opening () {
      let convas = document.querySelector('#canvas') //
      let video = document.querySelector('#video')
      let audio = document.querySelector('audio')
      let img = document.querySelector('#img')
      let btn = document.querySelector('button')
      let context = canvas.getContext('2d')
      let width = 320 // 视频和canvas的宽度
      let height = 0 //
      let streaming = false // 是否开始捕获媒体
      // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
      if (navigator.mediaDevices == undefined) {
        navigator.mediaDevices = {}
      }
      // 获取用户媒体,包含视频和音频
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          video.srcObject = stream // 将捕获的视频流传递给video  放弃window.URL.createObjectURL(stream)的使用
          video.play() //  播放视频
          audio.srcObject = stream
          audio.play()
        })
    },
    tackcapture () {
      // 需要判断媒体流是否就绪
      let convas = document.querySelector('#canvas') //
      let video = document.querySelector('#video')
      let audio = document.querySelector('audio')
      let img = document.querySelector('#img')
      let btn = document.querySelector('button')
      let context = canvas.getContext('2d')
      let width = 320 // 视频和canvas的宽度
      let height = 0 //
      let streaming = true // 是否开始捕获媒体
      if (streaming) {
        context.drawImage(video, 0, 0, 350, 200) // 将视频画面捕捉后绘制到canvas里面
        img.src = canvas.toDataURL('image/png') // 将canvas的数据传送到img里
        alert(img.src) // 这边的值可以传入后端
      }
      // 监听视频流就位事件,即视频可以播放了
      video.addEventListener(
        'canplay',
        function (ev) {
          if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width)
            video.setAttribute('width', width)
            video.setAttribute('height', height)
            canvas.setAttribute('width', width)
            canvas.setAttribute('height', height)
            streaming = true
          }
        },
        false
      )
    },
    btnTakePhotoClicked(e){
      console.log(e)
      console.log(test.previousElementSibling)
    }
  }
}
</script>
<style>
  html, body {
    height: 100%;
  }
 
  body, ul, li, a, p, div {
    /*慎删*/
    padding: 0px;
    margin: 0px;
  }
 
  #wrap {
    overflow: hidden;
    width: 100%;
  }
 
  #main {
    position: relative;
    transition:top 1.5s;
  }

  .page {
    /*谨删*/
    width: 100%;
    margin: 0;
  }
x
  #pageUl {
    position: fixed;
    right: 10px;
    bottom: 50%;
  }
 
  .active{
    color: red;
  }
</style>
