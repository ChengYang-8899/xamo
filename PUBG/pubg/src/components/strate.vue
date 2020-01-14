<template>
    <div>
        <mt-header  fixed class="friend" title="详情">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header> 
            <div class="recomd_div">
            <div class="recomd_title">{{title}}</div>
                <div class="recomd_ke">
                <div class="recomd_div2">
                <img :src="pic" class="img_1">
                <span class="possion_span">大此埃及</span></div>
                <span class="align_time">{{time}}</span>
                </div>
                <div class="recomd_text">
                    {{text}}  
                 </div>
                    <img class="recomd-img_2" :src="'http://ddchlm.applinzi.com/'+pic">
            </div>
            </div>
            </div>
        </div>
</template>
<script>
    export default{
        data(){
            return{
                id:"",
                title:"",
                uid:"",
                time:"",
               text:"",
               pic:"",
               nblikes:""
                }
        },
        created(){          
            this.id = this.$router.history.current.params.id;
            //console.log(this.id)
            this.title = this.$router.history.current.params.title;
            //console.log(this.title)
            this.text = this.$router.history.current.params.text;
            //console.log(this.text)e)
             this.pic = this.$router.history.current.params.pic;
            //console.log(this.pic)
        },
        methods:{
        }
}
</script>
<style scoped>
.friend{
  background: linear-gradient(to bottom,rgb(227,232,242),rgb(219,222,224)) !important;
  font:18px;
  color:#fff;
  height:55px;
  color:#000;
  font-size:18px;
}
.recomd_div{
    width:100%;
    height:100%;
    margin-top:50px
}

.recomd-img_2{
    width:250px;;
    height:180px;
    margin:10px 60px;;
}
.recomd_title{
    font-size:20px;
    font-weight:600;
    text-align:center;
    margin-top:70px;
    margin-bottom:20px;
}
.recomd_ke{
    width:100%;
    height:30px;
    margin-bottom:20px;
    font-size:15px;
    color:#000;
    display:flex;
   justify-content: space-between;
   position: relative;
}
.img_1{
    width:30px;
    height:30px;
    border-radius:50%;
    margin-left:20px;
}
.recomd_div2{
    width:40%;
    height:30px;
    text-align:left;
}
.possion_span{
    position:absolute;
    left:55px;top:6px;
    font-size:15px;
    color:#000;
}
.recomd_text{
    text-align:left;
    font-size:13px;
    text-indent:12px;
    letter-spacing:2px;
    line-height:20px;
    color:rgb(77,77,77);
    margin-bottom:20px;
    padding:0 15px;
}
</style>