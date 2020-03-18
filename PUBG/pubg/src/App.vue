<template>
  <div id="app">
    <router-view />
    <mt-tabbar class="bottom" v-model="selected" fixed>
      <mt-tab-item @click.native="zixun" id="zixun">
        <img slot="icon" src="../public/dibu/zixun.png" />
       <span>首页</span>
      </mt-tab-item>
      <mt-tab-item @click.native="friend" id="mengyou">
        <img slot="icon" src="../public/dibu/mengyou.png" />
       <span>盟友</span>
      </mt-tab-item>
      <mt-tab-item @click.native="zhandou" id="zhandou">
        <img slot="icon" src="../public/dibu/zhandou.png" />
       <span>武器</span>
      </mt-tab-item>
      <mt-tab-item @click.native="zj" id="zhanji">
        <img slot="icon" src="../public/dibu/zhanji.png" />
        <router-link class="zt" to="/zjcx">战绩</router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style>
.bottom {
  background: linear-gradient(
    to bottom,
    rgb(227, 232, 242),
    rgb(219, 222, 224)
  );
}
.bottom span {
  font: 14px bold;

}
</style>
<script>
export default {
  data() {
    return {
      selected: "zixun",
      friendList: [],
      shenqing: [0]
    };
  },
  created() {
    //组件创建成功加载
  },
  methods: {
    zhandou(){
      this.$router.push("/Wqk")
    },
    zixun(){
      this.$router.push("/");
    },
    zj() {
      this.$router.push('/zjcx')
      var url = "chatRoom";
      this.axios.get(url).then(res => {
        if (res.data.code == -2) {
          this.$messagebox("信息", "请登录");
          this.$router.push("/Login");
        }
      });
    },
    friend() {
      
      var url = "shenqing";
      this.axios.get(url).then(res => {
        this.shenqing = res.data.data;
        
      });
      var url = "friend";
      this.axios.get(url).then(res => {
        if (res.data.code == -2) {
          this.$messagebox("信息", "请登录");
          this.$router.push("/Login");
        } else if (res.data.code == 2) {
        } else {
          this.friendList = res.data.data[0];
          this.$router.push("friend")
        }
      });
    }
  }
};
</script>
