<template>
  <div class="content">
    <div class="con_div1">
      <el-input
        class="el_input"
        placeholder="请输入"
        v-model="inputValue"
        @input="changeValue"
      ></el-input>
      <span>{{ inputValue }}</span>
    </div>
    <div class="con_div2">
      <el-button @click="editArr">修改</el-button>
      <span
        :class="fruitInd == index && 'active'"
        v-for="(item, index) in stata.fruitArr"
        @click="clickItem(item, index)"
        :key="index"
        >{{ item.name }}</span
      >
    </div>
    <div class="con_div2">
      <el-button @click="editInfo">修改</el-button>
      <p>姓名: {{ stata.infoObj.name }}</p>
      <p>年龄: {{ stata.infoObj.age }}</p>
      <p>性别: {{ stata.infoObj.sex }}</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";

export default {
  setup() {
    const inputValue = ref("ref定义基本数据类型值");
    const fruitInd = ref(0);
    const stata = reactive({
      fruitArr: [],
      infoObj: {
        name: "左家辉",
        age: 15,
        sex: "男",
      },
    });
    const clickItem = (item, index) => {
      console.log(item, index);
      inputValue.value = item.name;
      fruitInd.value = index;
    };
    // 修改个人信息
    const editInfo = () => {
      let newInfo = {
        name: "123",
        age: 100,
        sex: "女",
      };
      stata.infoObj = newInfo;
    };
    // 修改水果信息
    const editArr = () => {
      let newArr = [
        { name: "葡萄" },
        { name: "老铁" },
        { name: "桑葚" },
        { name: "车厘子" },
      ];
      stata.fruitArr = newArr;
    };
    const changeValue = () => {
      fruitInd.value = inputValue.value;
    };
    // 生命周期初始化
    onMounted(() => {
      stata.fruitArr = [
        { name: "香蕉" },
        { name: "橘子" },
        { name: "苹果" },
        { name: "西瓜" },
      ];
    });
    return {
      clickItem,
      editInfo,
      editArr,
      changeValue,
      inputValue,
      fruitInd,
      stata,
    };
  },
};
</script>

<style lang="less" scoped>
.active {
  color: #b05923;
}
.content {
  padding: 30px;
  .con_div1 {
    display: flex;
    align-items: center;
    .el_input {
      width: 200px;
    }
  }
  .con_div2 {
    margin-top: 30px;
    > span {
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>