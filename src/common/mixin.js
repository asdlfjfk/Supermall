import BackTop from "components/content/backtop/BackTop"
export const backTopMixin = {
  data(){
    return{
      isShowBacktop:false
    }
  },
  methods:{
    showbacktop(position){
      this.isShowBacktop = (-position.y) > 2000
    },
  },
  components:{
    BackTop
  }
}
