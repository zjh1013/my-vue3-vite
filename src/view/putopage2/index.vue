<template>
  <div class="box">
    <div class="box_one">
      <div class="box_two">
        <div class="box_tow_top">
          <div class="box_two_top_min1">
            <p class="one" v-for="(item, index) in 10" :key="index">
              {{ item }}
            </p>
          </div>
          <div class="box_two_top_min1"></div>

          <div class="box_two_top_min1"></div>

          <!-- <div class="box_two_top_min2"></div>
                    <p class="Boders1"></p>
                    <div class="box_two_top_min3"></div> -->
        </div>
        <div class="box_tow_bottom">
          <div class="box_two_bottom_min1"></div>
          <div class="box_two_bottom_min1"></div>
          <div class="box_two_bottom_min1"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {sortList} from './index.js'
import _ from "lodash";
import Pinyin from "js-pinyin";
Pinyin.setOptions({ charCase: 1 });
// let arr = ["苹果", "西瓜", "葡萄"];
// let arr1 = [1, 2, 3];
// let arr2 = [];
// arr.forEach((item, index) => {
//   arr2.push({ name: item, type: arr1[index] });
// });
// console.log(arr2);
// let str= "abcdefghijklmnopqrstuvwxyz"
// let atr1 = str.toUpperCase().substring(0,1)
// console.log(atr1)
// let arr = [
//   {
//     name: "邓紫棋",
//   },
//   {
//     name: "蔡徐坤",
//   },
//   {
//     name: "孙红雷",
//   },
//   {
//     name: "戚薇",
//   },
// ];
// let arr1 = [];
// arr.forEach((item, index) => {
//   // console.log(item.name)
//   console.log(
//     Pinyin.getFullChars(item.name).toUpperCase().substring(0, 1),
//     index
//   );
//   arr1.push({
//     name: item.name,
//     letter: Pinyin.getFullChars(item.name).toUpperCase().substring(0, 1),
//   });
// });
// arr1.sort((a, b) => a.letter.charCodeAt(0) - b.letter.charCodeAt(0));
// console.log(arr1);

let citylist = [
  {
    cityName: "葫芦岛",
  },
  {
    cityName: "衡水",
  },
  {
    cityName: "沈阳",
  },
  {
    cityName: "唐山",
  },
  {
    cityName: "哈尔滨",
  },
  {
    cityName: "三亚",
  },
];
let cityAll = [];
let cityAll2 = [];
let StringName = []
// citylist.forEach((item,index)=>{
//   StringName.push(Pinyin.getFullChars(item.cityName).toUpperCase().substring(0, 1))
//   console.log(item[index])
//   if(Pinyin.getFullChars(item.cityName).toUpperCase().substring(0, 1) == StringName[index]){
//     if(Pinyin.getFullChars(item.cityName).toUpperCase().substring(0, 1)==Pinyin.getFullChars(item.cityName).toUpperCase().substring(0, 1)){

//     }
//   }
  
//   cityAll.push({zm:Pinyin.getFullChars(item.cityName).toUpperCase().substring(0, 1),children:[{cityName:item.cityName}]})
// })
for(let i = 0;i<citylist.length;i++){
  StringName.push(Pinyin.getFullChars(citylist[i].cityName).toUpperCase().substring(0, 1))
  console.log(StringName)
}

console.log(cityAll,StringName)
export default {};
</script>

<style lang="less" scoped>
.box {
  margin: 0;
  padding: 0;
}
.box_one {
  width: 100%;
  height: 500px;
  //   border: 1px solid #000;
  background: #ccc;
}
.box_two {
  width: 100%;
  height: 100%;
}
.box_tow_top {
  width: 100%;
  height: 250px;
  //   background: #ff8800;
  display: flex;
  .box_two_top_min1:last-child {
    border-right: 0px;
    // background: #ccc;
  }
  .box_two_top_min1 {
    // background: rgb(136, 132, 214);
    flex: 1;
    border-right: 5px solid rgb(63, 203, 231);
    box-shadow: 1px 2px 5px #b9b1b1;
    .one {
      width: 100%;
      height: 20px;
      background: blue;
    }
    .one:nth-child(odd) {
      background: red;
    }
  }
}
.box_tow_bottom {
  width: 100%;
  height: 250px;
  //   background: #df8a45;
  display: flex;
  .box_two_bottom_min1:last-child {
    border-right: 0px;

    // background: #ccc;
  }
  .box_two_bottom_min1 {
    flex: 1;
    border-right: 5px solid rgb(63, 203, 231);
    border-top: 5px solid rgb(63, 203, 231);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>