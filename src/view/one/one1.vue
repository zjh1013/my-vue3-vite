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
      <el-button type="primary" @click="editArr">修改</el-button>
      <span
        :class="fruitInd == index && 'active'"
        v-for="(item, index) in stata.fruitArr"
        @click="clickItem(item, index)"
        :key="index"
        >{{ item.name }}</span
      >
    </div>
    <div class="con_div2">
      <el-button type="primary" @click="editInfo">修改</el-button>
      <p>姓名: {{ stata.infoObj.name }}</p>
      <p>年龄: {{ stata.infoObj.age }}</p>
      <p>性别: {{ stata.infoObj.sex }}</p>
    </div>
    <div class="con_div3">
      <div>
        {{ checkAll ? "取消全选" : "全选" }}
        <el-checkbox @change="changeCheck" v-model="checkAll"></el-checkbox>
        <div>
          <el-checkbox
            v-for="(item, index) in stata.carList"
            :key="item.name"
            v-model="item.isCheck"
            :label="item.name"
            @change="checkItem(item, index)"
          ></el-checkbox>
        </div>
        <div>
          <span v-for="(item, index) in stata.xzCheck" :key="index">{{
            item.name
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";

export default {
  setup() {
    const checkAll = ref(false);
    const inputValue = ref("ref定义基本数据类型值");
    const fruitInd = ref(0);
    const stata = reactive({
      fruitArr: [],
      infoObj: {
        name: "左家辉",
        age: 15,
        sex: "男",
      },
      carList: [
        { name: "法拉利", isCheck: false },
        { name: "兰博基尼", isCheck: false },
        { name: "柯尼塞格", isCheck: false },
      ],
      xzCheck: [],
    });
    const clickItem = (item, index) => {
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
    // 输入框事件
    const changeValue = () => {
      fruitInd.value = inputValue.value;
    };
    // 全选反选
    const changeCheck = () => {
      if (checkAll.value) {
        stata.carList.map((item) => {
          return (item.isCheck = true);
        });
        stata.xzCheck = stata.carList;
      } else {
        stata.carList.map((item) => {
          return (item.isCheck = false);
        });
        stata.xzCheck = [];
      }
      console.log(stata.xzCheck);
    };
    // 点击每一个checkbox
    const checkItem = (item, index) => {
      let flag = stata.carList.every((item) => {
        return item.isCheck;
      });
      if (flag) {
        checkAll.value = true;
      } else {
        checkAll.value = false;
      }
      if (stata.carList[index].isCheck) {
        stata.carList[index].isCheck = true;
        stata.xzCheck.push(item);
      } else {
        stata.xzCheck = stata.xzCheck.filter((item) => {
          return item.isCheck;
        });
      }
      console.log(stata.xzCheck);
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
      changeCheck,
      checkItem,
      inputValue,
      fruitInd,
      stata,
      checkAll,
    };
  },
};
</script>

<style lang="less" scoped>
.active {
  color: #b05923;
}
.content {
  display: flex;
  flex-direction: column;
  .con_div3 {
    margin-top: 20px;
  }
  .con_div1 {
    display: flex;
    align-items: center;
    .el_input {
      width: 200px;
    }
    > span {
      margin-left: 20px;
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