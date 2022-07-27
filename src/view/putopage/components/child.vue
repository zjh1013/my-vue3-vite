<template>
  <div class="childe_Back">
    <!-- <div style="color: brown"></div> -->
    <!-- 父传子使用方法和vue2相同 -->
    <el-button type="danger" @click="sayToFather" class="butonw">Come on</el-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "children",
  props: {
    title: {
      type: String,
    },
  },
  //   emits:["listen"],
  setup(props, { emit }) {
    // context作用是获取上下文对象，
    // 如果setup写法为setup(props, { emit })的方式的话，下面的context可以省略
    const sayToFather = () => {
      // const ask = "let's go crazy";
      //   context.emit("listen", ask)
      ElMessage({
        message: "let's go crazy",
        type: "success",
      });
      // emit("listen", ElMessage); emit 是传输对应的值，如果传入的是方法或者是对象，将字符串的形势展现出来 ，传入的本身是什么展示的就是什么
    };
    
    return {
      sayToFather,
    };
  },
});
</script>
<style lang="less" scoped>
.childe_Back {
  background: url("@assets/images/login/login_bg.png");
  background-size: cover;
  height: 100%;
  position: relative;
}
.butonw{
  position: absolute;
  transform: translate(-50%,-50%);
  top: 30%;
  left: 50%;
}
</style>


