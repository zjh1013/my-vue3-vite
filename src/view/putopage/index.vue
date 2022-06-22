<template>
  <div class="box">
    <div class="big_box">
      <div class="big_box_left">
        <h1 style="background: #77886e; text-align: center">now</h1>
        <div>{{ children_msg }}</div>
        <Children :title="msg" @listen="listenToChildren"></Children>
        <!-- {{ children_msg.value }} -->
      </div>
      <div class="big_box_right">
        <div class="big_box_right_ones">
          <div class="big_box_right_ones_Time">
            <el-calendar ref="calendar">
              <template #header="{ date }">
                <span>{{ date }}</span>
              </template>
            </el-calendar>
          </div>
        </div>
        <div class="big_box_right_ones">
          <div class="big_box_right_ones_chick">
            <p v-for="(item, index) in arrALL" :key="index">
              <input type="checkbox" @change="checkalls(item, index)" />{{
                item.name
              }}
            </p>
          </div>
        </div>
        <div class="big_box_right_ones">
          <p v-for="(item, index) in stata.arresLL" :key="index">
            <input type="checkbox" />{{ item.name }}
          </p>
        </div>
        <div class="big_box_right_ones">
          <div class="textOne">相差{{stata.someO}}</div>
          <div class="demo-range">
            <el-time-picker
              v-model="value1"
              is-range
              range-separator=""
              class="timeOne"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </div>
          <el-button type="primary" @click="Surenow" class="sureTrue"
            >确定</el-button
          >
        </div>
        <div class="big_box_right_ones"></div>
        <div class="big_box_right_ones"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Children from "./components/child.vue";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  components: {
    Children,
  },
  name: "father",
  setup() {
    let msg = "";
    let children_msg = ref(""); // ref的作用是实现响应式， 如果没有ref则不能实现响应式（引用数据类型用reactive）
    let listenToChildren = (val) => {
      children_msg.value = val; // 使用ref包裹的数据，需要通过.value的形式访问他的值
    };
    let checkAll = ref(false);
    let arrALL = [
      { name: "法拉利", isCheck: false },
      { name: "兰博基尼", isCheck: false },
      { name: "柯尼塞格", isCheck: false },
    ];
    const stata = reactive({
      arresLL: [],
       someO : ''
    });
    let checkalls = (a, b) => {
      a.isCheck = a.isCheck ? false : true;
      console.log(a.isCheck);
      if (a.isCheck) {
        stata.arresLL.push(a);
      } else {
        stata.arresLL.pop(a);
      }
      console.log(stata.arresLL);
    };
    const calendar = ref();
    const selectDate = (val) => {
      calendar.value.selectDate(val);
    };
    const value1 = ref([
      new Date(2016, 9, 10, 8, 40),
      new Date(2016, 9, 10, 9, 40),
    ]);
    
    let Surenow = () => {
      console.log(value1.value[1]-value1.value[0])
   
      stata.someO = value1.value[1]-value1.value[0]
    };
    return {
      msg,
      children_msg,
      checkAll,
      arrALL,
      stata,
      calendar,
      value1,
      selectDate,
      Surenow,
      listenToChildren,
      checkalls,
    };
  },
});
</script> 

<style lang="less" scoped>
.box {
  width: 100%;
}
.big_box {
  width: 89%;
  // height: 660px;
  // background: rgba(141, 239, 29, 0.533) 00;
  border: 1px solid #000;
  margin: 0 auto;
  display: flex;
  .big_box_left {
    flex: 2;
    // background: rgb(174, 89, 196);
    overflow: hidden;
  }
  .big_box_right {
    flex: 8;
    // background: rgb(62, 124, 33);
    border-left: 1px solid #000;
    display: flex;
    // justify-content: center;
    flex-wrap: wrap;
    // justify-content: space-between;
    // justify-content: center;
    .big_box_right_ones {
      width: 390px;
      height: 310px;
      background: rgb(134, 214, 231);
      border-radius: 5%;
      margin-left: 15px;
      margin-top: 10px;
      position: relative;
      .big_box_right_ones_Time {
        width: 100%;
        height: 100%;
        overflow: scroll;
        border-radius: 5%;
      }
      .demo-range {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
      }
      .sureTrue {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
      }
      .textOne {
        width: 300px;
        height: 100px;
        margin: 0 auto;
        text-align: center;
        line-height: 10px;
      }
    }
    // .big_box_right_ones:hover {
    //   z-index: 3;
    //   box-shadow: 0 0 10px 10px;
    //   transform: scale(1.05);
    //   width: 255px;
    //   height: 310px;
    //   background: rgb(238, 159, 159);
    //   border-radius: 5%;
    //   margin-left: 15px;
    //   margin-top: 10px;
    // }
  }
}
</style>
