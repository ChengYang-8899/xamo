<template>
<div>
  <mt-header class="score" title="战绩查询" fixed>
  </mt-header>
  <mt-navbar v-model="selected" class="gd" fixed>
    <mt-tab-item id="1">能力</mt-tab-item>
    <mt-tab-item id="2"><div @click="loadMore">战绩</div></mt-tab-item>
  </mt-navbar>
  <mt-tab-container v-model="selected" class="dbmar">
   <mt-tab-container-item id="2">
    <table class="map">
      <tr>
        <td>地图</td>
        <td>击杀</td>
        <td>时间</td>
      </tr>
    </table>
    <table  v-for="(item,i) of list" :key="i" @click="xs" class="tt">
    <tr>
      <td>
      <img style="margin-right:15px;" :src="'http://127.0.0.1:5050/record/'+item.pic" />
      {{item.wname}}
      {{item.atias}}
      </td>
      <td>{{item.killq}}</td>
      <td>{{item.time}}</td>
    </tr>
    
        <div v-show="pno==-1" class="bg">
      
          <h3>击杀数:{{item.killq}}</h3>
          <h3>治疗量:{{item.killq}}</h3>
          <h3>游戏时间:{{item.time}}</h3>
        </div>
     
   </table> 
   
   <div class="null"></div>
   </mt-tab-container-item>
     <mt-tab-container-item id="1">
     <div class="aaa">
      <h3>绝地求生战力图</h3>
      <div id="myChart"></div>
     </div>
     <div class="cj">
      <h3  style="color:rgb(224,196,33);">总战斗力:{{zdl}}</h3>
      <h1  style="color:rgb(224,196,33);">大吉大利，今晚吃鸡!</h1>
     </div>
     </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>
<style scoped>
.cj{text-align:center;color:red;}
.aaa{
  text-align:center;
  width:100%;
}
.map{
  font-size:13px;
  margin-top:20px;
  width:100%;
  padding-left:20px;
}
.image{
  width:63px;
}
.score{
  background: linear-gradient(to bottom,rgb(227,232,242),rgb(219,222,224));
  font:18px;
  color:#fff;
  height:55px;
  color:#000;
  font-size:18px;
}
.bg{
  background:rgb(229,234,234);
  width:350px;
  float:right;
  margin:0 auto;
}
.gd{margin-top:55px}
.dbmar{margin-top:86px}
.tt{
  width:100%;
  border:1px solid #eee;
  text-align:center;
  background:rgb(250,252,252);
  height:100px;
}
.tt td:first-child{
  width:62px;
}
.tt td:nth-child(2){
  width:50px;
}
.tt  img{
  width:60px;
  height:55px;
  }
#myChart{ margin:0 auto; width: 300px; height: 300px}
 .null{
    width:100%;
    height:60px;
}
</style>
<script>
  export default{
    data(){
      return{
        selected:"1",
        list:[],
        pno:1,
        zdl:500
      }
    },
    created(){
    },
    mounted(){
      this.drawLine();
    },
    methods:{
      loadMore(){
        // var uid=4;
        // var obj={uid};
        var url="record";
        this.axios.get(url).then(res=>{
          // if(res.data.code==-999){
          //   this.$messagebox("宇智波提示","请登录")
          //   this.$router.push("/Login")
          // }else{
            var zjcx=res.data.msg;
            this.list=zjcx;
            this.zdl=this.list[0].killq*100;
          // }
        })
      },
      xs(){
        this.pno*=-1;
      },
     drawLine(){
       var a=Math.random()*90;
       var b=Math.random()*90;
       var c=Math.random()*90;
       var d=Math.random()*90;
       var e=Math.random()*90;
       
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
        title: { text: '' },
        tooltip: {trigger: 'axis'},
        legend: {
        x: 'center',
        data:['战力']
        },
        radar: [
          {
            indicator: [
                {text: '治疗量', max: 100},
                {text: '击杀数', max: 100},
                {text: '生存时间', max: 100},
                {text: '造成伤害', max: 100},
                {text: 'KDA', max: 100}
            ],
            radius: 80,
            center: ['50%','60%'],
          }
        ],
        series: [{
           type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
              
                {
                    value: [a,b,c,d,e],
                    name: '战斗力'
                }
            ]
             
            }]
        });
    }
    }
  }
</script>
