<template></template>

<script>
import Pinyin from "js-pinyin";
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const data = reactive({
      arr: [
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
      ],
      newarr: [],
    });
    // 遍历出首字母
    data.arr.map((item) => {
      item.pinyin = Pinyin.getFullChars(item.cityName);
      item.szm = item.pinyin.slice(0, 1);
    });
    // 从 a-z 进行排序
    data.arr.sort((a, b) => {
      return a.szm.charCodeAt(0) - b.szm.charCodeAt(0);
    });
    let arr = [];
    data.arr.map((item, index) => {
      let obj = {};
      obj.szm = item.szm;
      obj.children = [];
      arr.push(obj);
      arr.map((it) => {
        if (item.szm == it.szm) {
          it.children.push({ cityName: item.cityName });
        }
      });
    });
    let res = new Map();
    data.newarr = arr.filter(
      (item) => !res.has(item.szm) && res.set(item.szm),
      1
    );
    // console.log(data.arr, "datadata");
    console.log(data.newarr, "newarrnewarr");
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
</style>