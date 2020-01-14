<template>
    <div>
        <mt-header title="详情" style="background:linear-gradient(to bottom,rgb(227,232,242),rgb(219,222,224));font:18px;color:#fff;height:55px;color:#000;font-size:18px;" fixed>
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
                        <span class="possion_span">PUBG官方</span>
                    </div>
                    <span class="align_time">{{time}}</span>
                </div>
                <div class="recomd_text">
                    {{text}}  
                 </div>
                    <img class="recomd-img_2" :src="'http://127.0.0.1:5000/'+pic">
            </div>
               <div @click="zan" class="recomd_button"><img src="../../public/yemian/dzan.png" >{{nblikes}}</div>
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
               nblikes:"",
                flg:true,
                }
        },
        created(){          
            this.id = this.$router.history.current.params.id;
            //console.log(this.id)
            this.title = this.$router.history.current.params.title;
            //console.log(this.title)
            this.text = this.$router.history.current.params.text;
            //console.log(this.text)
             this.time = this.$router.history.current.params.time;
            //console.log(this.time)
             this.pic = this.$router.history.current.params.pic;
            //console.log(this.pic)
             this.nblikes = this.$router.history.current.params.nblikes;
            //console.log(this.nblikes)
        },
        methods:{
            zan: function(){
                if(this.flg){
                    this.nblikes++;
                    this.flg = false;
                    this.$toast("点赞成功"); 
                }else{
                    this.nblikes--;
                    this.flg = true;
                    this.$toast("点赞取消");
                }
                    var url="ussr";
                    var obj={nblikes:this.nblikes,id:this.id};
                    this.axios.get(url,{params:obj}).then(res=>{
                         var result = res.data;
                     if(result.code==-2){
                    this.$messagebox("信息","请登录"); 
                    this.$router.push("/Login");
                    }
                    })
            },
            more(){
				this.isShow = !this.isShow
				if(this.isShow){
					this.btnText = "显示"
				}else{
					this.btnText = "隐藏"
				}
			}  
        }
}
</script>
<style scoped>
.recomd_div{
    width:100%;
    height:100%;
    margin-top:50px
}

.recomd-img_2{
    width:250px;;
    height:180px;
    margin:10px 60px;
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
.align_time{
    width:40%;
    text-align:right;
    font-size:12px;
    padding-top:15px;
    padding-right:20px;
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
.cass{
    float:right;
    width:50px;
    position:absolute;
    top:40px;right:0px;
    background:#ce600f;
}
.cass1,.cass2{
    margin:0 auto;
     border:1px solid #000;
     text-align:center;
}
.cass2{
    border-top:0;
}
.recomd_button{
    width:100px;
    height:32px;
    margin-left:20px;
}
</style>