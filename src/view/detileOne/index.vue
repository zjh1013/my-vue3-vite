<template>
  <div class="Bigbox">
    <div class="Bigbox_box">
      <div class="Bigbox_box_top">
        <div class="Bigbox_box_top_oneLas">
          <div class="Bigbox_box_top_oneLas_imgs">
            <img src="../../assets/images/detiles/fours.jpg" alt="" />
          </div>
        </div>
        <div class="Bigbox_box_top_twoLas">
          <div class="Bigbox_box_top_twoLas1">
            <p>你好</p>
            <p>好吗</p>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
            <p>你好</p>
          </div>
        </div>
      </div>
      <div class="Bigbox_box_main">
        <div class="Bigbox_box_main_allLast">
          <div class="Bigbox_box_main_allLast_left">
            <div class="Bigbox_box_main_allLast_left_img">
              <img src="../../assets/images/detiles/ones.jpg" alt="" />
            </div>
          </div>
          <div class="Bigbox_box_main_allLast_main">
            <div class="Bigbox_box_main_allLast_left_textTop">
              <!-- <div class="block text-center">
                <el-carousel height="260px">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </div> -->
              <div class="Bigbox_box_main_allLast_left_textTop_input">
                <input
                  type="text"
                  class="Bigbox_box_main_allLast_left_textTop_inputIn"
                  placeholder="  哈喽"
                />
                <div class="Bigbox_box_main_allLast_left_textTop_boxBtn">
                  <el-icon class="icpons"><Search /></el-icon>
                </div>
              </div>
              <div class="Bigbox_box_main_allLast_left_textTop_kab">
                <span
                  v-for="(item, index) in 10"
                  :key="index"
                  @click="heights(index)"
                  :class="active === index ? 'heightsNight' : ''"
                  style="cursor: pointer"
                  >{{ item }}</span
                >
              </div>
            </div>
            <div class="Bigbox_box_main_allLast_left_textBottom">
              <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="User" name="1" />
                <el-tab-pane label="Config" name="2" />
                <el-tab-pane label="Role" name="3" />
                <el-tab-pane label="Task" name="4" />
                <el-tab-pane label="nojsda" name="5" />
                <el-tab-pane label="ndoadsa" name="6" />
                <el-tab-pane label="ndoiads" name="7" />
              </el-tabs>
            </div>
          </div>
          <div class="Bigbox_box_main_allLast_right">
            <div class="Bigbox_box_main_allLast_left_img1">
              <img src="../../assets/images/detiles/twos.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeName == '1'">
        <div class="activeNameOne">
          <div class="activeNameOne_box"></div>
        </div>
      </div>
      <div v-if="activeName == '2'">Config</div>
      <div v-if="activeName == '3'">Role</div>
      <div v-if="activeName == '4'">Task</div>
      <div v-if="activeName == '5'">asdasd</div>
      <div v-if="activeName == '6'">Rdasdaole</div>
      <div v-if="activeName == '7'">Tadasdsk</div>
    </div>
  </div>
</template>
<script>
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
export default {
  components: {
    Search,
  },
  setup() {
    const active = ref(0);
    const activeName = ref("1");
    let heights = (index) => {
      active.value = index;
    };
    const handleClick = (tab, event) => {
      console.log(tab);
      console.log(activeName.value);
    };
    return {
      active,
      heights,
      activeName,
      handleClick,
    };
  },
};
</script>
<style lang="less" scoped>
.Bigbox {
  margin: 0;
  padding: 0;
}
.Bigbox_box {
  width: 100%;
  // height: 809px;
  background: rgb(19, 171, 221);
}
.Bigbox_box_top {
  width: 100%;
  height: 139px;
}
.Bigbox_box_top_oneLas {
  width: 100%;
  height: 109px;
  background: rgb(54, 82, 85);
  .Bigbox_box_top_oneLas_imgs {
    width: 78%;
    height: 260px;
    margin: 0 auto;
    // border: 1px solid #ccc;
    img {
      width: 100%;
      height: 42%;
      border-radius: 10px;
    }
  }
}
.Bigbox_box_top_twoLas {
  width: 100%;
  height: 30px;
  background: rgb(222, 238, 240);
}
.Bigbox_box_top_twoLas1 {
  width: 78%;
  height: 30px;
  margin: 0 auto;
  background: rgb(201, 213, 235);
  display: flex;
  justify-content: center;
  line-height: 20px;
  p:nth-child(1) {
    flex: 5;
    font-size: 9px;
    margin-left: 30px;
    border-right: 0px;
  }
  p:nth-last-child(1) {
    border-right: 0px;
  }
  p {
    width: 90px;
    height: 20px;
    text-align: center;
    // flex: 1;
    font-size: 8px;
    margin-top: 5px;
    border-right: 1px solid rgb(219, 42, 42);
    // line-height
    // justify-content: center;
  }
}
.Bigbox_box_main {
  width: 100%;
  // height: 260px;
  background: rgb(89, 1, 1);
}
.Bigbox_box_main_allLast {
  width: 78%;
  // height: 260px;
  margin: 0 auto;
  background: rgb(215, 95, 95);
  display: flex;
  .Bigbox_box_main_allLast_left {
    flex: 2;
    background: rgb(234, 133, 133);
    .Bigbox_box_main_allLast_left_img {
      width: 200px;
      // height: 200px;
      border: 1px solid #ccc;
      margin: 0 auto;
      margin-top: 30px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
  .Bigbox_box_main_allLast_main {
    flex: 6;
    background: rgb(228, 93, 79);
    .Bigbox_box_main_allLast_left_textTop {
      width: 100%;
      // height: 180px;
      padding: 110px 0 50px 0;
      background: rgb(252, 251, 251);
      .Bigbox_box_main_allLast_left_textTop_input {
        width: 80%;
        // height: 100px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .Bigbox_box_main_allLast_left_textTop_inputIn {
          flex: 1;
          height: 30px;
          border: none;
          outline: none;
          border: 3px solid red;
          size: 10px;
          // position: absolute;
          // top: 65px;
          // left: 0px;
        }
        .Bigbox_box_main_allLast_left_textTop_boxBtn {
          width: 55px;
          height: 30px;
          border: 3px solid red;
          background: red;
          // position: absolute;
          // top: 65px;
          // left: 480px;
          .icpons {
            width: 55px;
            height: 30px;
            text-align: center;
            color: white;
            font-size: 18px;
            size: 700;
          }
        }
      }
    }
    .Bigbox_box_main_allLast_left_textTop_kab {
      width: 80%;
      height: 25px;
      margin: 0 auto;
      background: rgb(252, 251, 251);
      display: flex;
      span {
        text-align: center;
        flex: 1;
        // background: red;
      }
    }
    .Bigbox_box_main_allLast_left_textBottom {
      width: 100%;
      // height: 30px;
      // background: blue;
      .el-tabs__content {
        padding: 0;
      }
    }
  }
  .Bigbox_box_main_allLast_right {
    flex: 2;
    background: rgb(234, 133, 133);
    .Bigbox_box_main_allLast_left_img1 {
      width: 100px;
      // height: 100px;
      border: 1px solid #ccc;
      margin: 0 auto;
      margin-top: 20px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
}
.heightsNight {
  color: rgb(235, 12, 12);
  // background-color: rgb(187, 187, 250);
}
.activeNameOne{
  width: 100%;
  .activeNameOne_box{
    width: 78%;
    height: 300px;
    background:#ff8800;
    margin: 0 auto;
  }
}
</style>
<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
