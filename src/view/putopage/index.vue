<template>
  <div class="box">
    <div class="big_box">
        <div class="big_box_left">

        </div>
        <div class="big_box_right">
            <div class="big_box_right_ones"></div>
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
export default {};
</script>

<style lang="less" scoped>
.box{
    width: 100%;
}
.big_box{
    width: 91%;
    height: 660px;
    background:rgba(64, 150, 219, 0.533)00;
    margin: 0 auto;
    display: flex;
    .big_box_left{
        flex: 2;
        background: rgb(174, 89, 196);
    }
    .big_box_right{
        flex: 8;
        background: rgb(62, 124, 33);
        display: flex;
        // justify-content: center;
        flex-wrap: wrap;
        .big_box_right_ones{
            width: 260px;
            height: 310px;
            background: rgb(90, 51, 51);
            border-radius:5%;
            margin-left: 15px;
            margin-top: 10px;
        }
        .big_box_right_ones:hover{
            z-index: 3;
            box-shadow: 0 0 10px 10px;
            transform: scale(1.05);
            width: 260px;
            height: 310px;
            background: rgb(238, 159, 159);
            border-radius:5%;
            margin-left: 15px;
            margin-top: 10px;
        }
    }
}
</style>
