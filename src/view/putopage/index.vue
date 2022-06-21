<template>
  <div class="box">
    <div class="big_box">
      <div class="big_box_left">
        <div style="color: aqua">父组件</div>
        <div>子组件对我说：{{ children_msg }}</div>
        <children :title="msg" @listen="listenToChildren"></children>
        {{ value }}
      </div>
      <div class="big_box_right">
        <div class="big_box_right_ones">
           <div>子组件说的话：{{nowChir_l}}</div> 
            <Childe1 :childers1="klj" @listen1='newtalkenChilde'></Childe1>
        </div>
        <div class="big_box_right_ones"></div>
        <div class="big_box_right_ones"></div>
        <div class="big_box_right_ones"></div>
        <div class="big_box_right_ones"></div>
        <div class="big_box_right_ones"></div>
        <div class="big_box_right_ones"></div>
        <div class="big_box_right_ones"></div>
      </div>
    </div>
  </div>
</template>

<script>
import children from "./child.vue";
import Childe1 from './childe1.vue'
import { defineComponent, ref } from "vue"
export default defineComponent({
  components: {
    children,
    Childe1
  },
  name: "father",
  setup() {
    let msg = "我是父组件"
    let children_msg = ref("") // ref的作用是实现响应式， 如果没有ref则不能实现响应式（引用数据类型用reactive）
    let listenToChildren = (val) => {
      children_msg.value = val // 使用ref包裹的数据，需要通过.value的形式访问他的值
    }

    let klj = "我是父组件"
    let nowChir_l = ref("")
    let newtalkenChilde =(val)=>{
        nowChir_l.value = val
    }
    return {
      msg,
      klj,
      children_msg,
      nowChir_l,
      listenToChildren,
      newtalkenChilde
    }
  },
})
</script> 

<style lang="less" scoped>
.box {
  width: 100%;
}
.big_box {
  width: 99%;
  // height: 660px;
  background: rgba(64, 150, 219, 0.533) 00;
  margin: 0 auto;
  display: flex;
  .big_box_left {
    flex: 2;
    background: rgb(174, 89, 196);
  }
  .big_box_right {
    flex: 8;
    background: rgb(62, 124, 33);
    display: flex;
    // justify-content: center;
    flex-wrap: wrap;
    // justify-content: space-between;
    justify-content: center;
    .big_box_right_ones {
      width: 255px;
      height: 310px;
      background: rgb(90, 51, 51);
      border-radius: 5%;
      margin-left: 15px;
      margin-top: 10px;
    }
    .big_box_right_ones:hover {
      z-index: 3;
      box-shadow: 0 0 10px 10px;
      transform: scale(1.05);
      width: 255px;
      height: 310px;
      background: rgb(238, 159, 159);
      border-radius: 5%;
      margin-left: 15px;
      margin-top: 10px;
    }
  }
}
</style>
