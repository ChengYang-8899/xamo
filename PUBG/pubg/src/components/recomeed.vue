<template>
    <div>
       <mt-header title="详情" style="background:linear-gradient(to bottom,rgb(227,232,242),rgb(219,222,224));font:18px;color:#fff;height:55px;color:#000;font-size:18px;" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click="more">
            </mt-button>
        </mt-header>
        <div v-show="isShow" class="cass">
            <div class="cass1">收藏</div><div class="cass2">发送</div>
        </div>
        <div class="recomd_div">
            <div class="recomd_title">{{title}}</div>
                <div class="recomd_ke">
                    <div class="recomd_div2" v-for="(s,i) of list" :key="i">
                        <img :src="'http://127.0.0.1:5000/'+s.avatar" class="img_1">
                        <span class="possion_span">{{s.uname}}</span></div>
                        <span class="align_time">{{time}}</span>
                    </div>
                    <div class="recomd_text">
                        {{text}} 
                    </div>
                    <img class="recomd-img_2" :src="'http://127.0.0.1:5000/'+pic">
                </div>
             <div @click="zan" class="recomd_button"><img src="../../public/yemian/dzan.png" >{{nblikes}}
             </div>
             <div>
                <van-cell-group>
                        <van-field  v-model="message" @blur="field" label-width="40px" label-align="center" size="large" autosize  maxlength="60" rows="1"  label="评论" type="textarea" placeholder="评论字数不得超过30个字" is-link  clearable />
                </van-cell-group>
              </div>
              <div  v-for="(e,i) of lisk" :key="i">
                <div>
                    <div>
                        <div>
                            <img :src="'http://127.0.0.1:5000/'+e.avatar" class="img_1">
                            <span class="uname">{{e.uname}}</span>
                        </div>
                            <div class="talk">{{e.text}}</div>
                        </div>
                        <div class="talk1">{{e.time}}</div>
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
               nblikes:"",
               flg:true,
               nblikes:"10",
               isShow:false,
               list:[],
               lisk:[],
               message:""
                }
        },
        created(){          
            this.id = this.$router.history.current.params.id;
            //console.log(this.id)
            this.title = this.$router.history.current.params.title;
            //console.log(this.title)
            this.uid = this.$router.history.current.params.uid;
            //console.log(this.uid)
            this.text = this.$router.history.current.params.text;
            //console.log(this.text)
             this.time = this.$router.history.current.params.time;
            //console.log(this.time)
             this.pic = this.$router.history.current.params.pic;
            //console.log(this.pic)
             this.nblikes = this.$router.history.current.params.nblikes;
            //console.log(this.pic)
            this.mooe();
            // this.moe();
            this.cmmon();
        },
        methods:{
                field(){
                    if(this.message!==""){
                            this.message;
                            var uid=this.uid;
                            var ifnid=this.id;
                            var text=this.message;
                            var time = new Date().toLocaleString();
                            console.log(time)
                            var url="informationus";
                            var obj={uid:this.uid,text:this.message,ifnid:this.id,time:time};
                            //console.log(obj);
                            this.axios.get(url,{params:obj}).then(res=>{
                            var result = res.data;
                            //console.log(res.data.data) 
                            if(result.code==-2){
                                this.$messagebox("信息","请登录"); 
                                this.$router.push("/Login");
                                }else{    
                                    this.$toast("评论成功");     
                                    this.message="";
                                    }
                                })
                            }else{
                         this.$toast("内容不能为空");  
                        }
                },
                cmmon(){
                   var ifnid=this.id;
                    var url="informationrs";
                     //console.log(url);
                    var obj={ifnid:this.id};
                     //console.log(obj);
                    this.axios.get(url,{params:obj}).then(res=>{
                            var rows=this.lisk.concat(res.data.data);
                            //console.log(res);
                            this.lisk=rows;
                           // console.log(rows);
                    })
                },
                mooe(){
                    this.uid;
                    var url="userList";
                    var obj={fid:this.uid};
                    this.axios.get(url,{params:obj}).then(res=>{
                        this.list.push(res.data.data[0]);
                        //console.log(res.data.data[0])
                     })
                },
        		zan: function(){
                if(this.flg){
                    this.nblikes++;
                    this.flg = false;
                    var url="usercell";
                    var obj={nblikes:this.nblikes,id:this.id};
                    this.axios.get(url,{params:obj}).then(res=>{
                         var result = res.data;
                     if(result.code==-2){
                    this.$messagebox("信息","请登录"); 
                    this.$router.push("/Login");
                    }else{
                        this.$toast("点赞成功"); 
                    }
                    })
                }else{
                    this.nblikes--;
                    this.flg = true;
                    var url="usercell";
                    var obj={nblikes:this.nblikes,id:this.id};
                    this.axios.get(url,{params:obj}).then(res=>{
                         var result = res.data;
                     if(result.code==-2){
                    this.$messagebox("信息","请登录"); 
                    this.$router.push("/Login");
                    }else{
                        this.$toast("点赞取消");
                    }
                    })
                }
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
.uname{
position:relative;
top:-3px;
}
.talk{
    font:13px;
    padding-left:20px;
    color:rgb(77,77,77);
    margin:12px;
}
.talk1{
    float:right;
    padding-right:20px;
    font:10px;
    color:rgb(77,77,77);
    position:relative;
    top:-40px;
}
.recomd_div{
    width:100%;
    height:100%;
    margin-top:50px
}

.recomd-img_2{
    width:250px;;
    height:180px;
    margin:10px 40px;;
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
}
.possion_span{
    position:absolute;
    left:55px;top:6px;
    font-size:15px;
    color:#000
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
    top:60px;right:7px;
    background:rgb(201,201,198);
}
.cass1,.cass2{
    margin:0 auto;
    text-align:center;
    font-size:15px;
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