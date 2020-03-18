<template>
  <div>
  <mt-header class="c" title="海岛聊天室">  
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
    <div class="d">
      <div class="g"  v-for="(p,i) of list" :key="i">{{p}}</div>
    <div class="n"></div>
    <div class="a">
      <input class="b" v-model="shuru">
      <input class="bin" type='button' value='发送' @click='clickButton()'>
    </div>
  </div>
</div>
</template>
<style scoped>
.n{
  height:50px;
}
.g{
  padding-top:10px;
  height:30px;
  font-size:18px;
  font-family:KaiTi;
  border:2px solid #ccc;
  margin:7px auto;
  width:320px;
  color:#fff;
  border-radius:13px;
  letter-spacing:2px;
  padding-left:10px;
}
.d{
  width:100%;
  min-height:620px;
  margin-top:54px;
  background:url("../assets/bz.jpeg") no-repeat fixed;
  background-size:100%;
}
.c{
  position: fixed;
  width:100%;
  top:0;
  background: linear-gradient(to bottom,rgb(227,232,242),rgb(219,222,224));
  font:18px;
  color:#fff;
  height:55px;
  color:#000;
  font-size:18px;
}
  .a{
    height: 60px;
    width: 100%;
    position: fixed;
    bottom: 50px;
  }
  .b{
    border:1px solid rgb(242,245,242);
    height:40px;
    width:250px;
    border-radius:20px;
    margin:-8px 8px;
    box-shadow:0px 0px 5px  1px  rgb(242,245,242);
  }
  .bin{
    height:40px;
    width:100px;
    border-radius:20px;
    border:1px solid rgb(185,234,147);
    background:rgb(203,227,185);
  }
</style>
<script>
  export default {
    data() {
      return {
      list:[],
      shuru:"",
    }
  },
  sockets: {
   connect: function(){
        // 获取每台客服端生成的id
        this.websocketid = this.$socket.id;
        console.log('链接服务器');
      },
      // 监听断开连接，函数
      disconnect(){
        console.log('断开服务器连接');
	  },
	  // 服务端指定有msg监听的客服端，可接对应发来的收消息，data服务端传的消息
	    list(data){
       this.list.push(data)
	    },
      leave(data){
        this.list.push(data)
      }
    
  },
  created(){ //组件创建成功加载
  
  },
  methods: {
    clickButton() {
     // $socket is socket.io-client instance
      var url = "chatRoom";
        this.axios.get(url).then(res=>{
         if(res.data.code==-2){
          this.$messagebox("信息","请登录");
          this.$router.push("/Login");
         }else{
            this.$socket.emit('message', this.shuru);
            this.shuru="";
         }
        }) 
      }
    }
  }
</script>