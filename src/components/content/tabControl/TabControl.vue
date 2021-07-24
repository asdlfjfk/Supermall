<template>
    <div class="tabcontrol">
      <div v-for="(item,index) in titles" class="tabcontrol-item" :class="{active: index == currentIndex}">
        <span @click="clickactive(index)">{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
            titles:{
              type:Array,
              default(){
                return []
              }
            }
        },
      data(){
          return{
           currentIndex:0,
          }
      },
      methods:{
        clickactive(index){
          this.currentIndex = index
          //子传父
          this.$emit('tabClick',index)
        }
      },
    }
</script>

<style scoped>
.tabcontrol{
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}

  .tabcontrol-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }

  .active{
    color: deepskyblue;
  }

  .active span{
    border-bottom: 3px solid deepskyblue
  }

.tabcontrol-item span{
  padding: 4px;
}
</style>
