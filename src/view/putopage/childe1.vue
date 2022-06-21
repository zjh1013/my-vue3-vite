<template>
  <div>子组件:{{ childers1 }}</div>
  <button @click="newTalk">向父组件说话</button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    childers1: {
        type:String
    },
  },
  setup(props,{emit}){
    const newTalk = ()=>{
        console.log('ewergtyuyi');
        const talk = ''
        emit('listen1',talk)
    }
    return {newTalk}
  }
});
</script>

<style>
</style>
