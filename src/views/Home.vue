<template>
  <div class="container">
    <header>
      <h1>网易云音乐热评</h1>
    </header>
    <main>
      <div :key="$index" v-for="(item,$index) in dataList">
        <div class="content">{{item.content}}</div>
        <div class="source">————《{{item.source}}》</div>
      </div>
    </main>
    <footer>
      <Button size="large" type="info" @click="getData">再来一条</Button>
      <div class="me" @click="onEgg">作者：@夏天夏</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
      count: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    onEgg() {
      this.count++;
      if (this.count > 15) {
        alert("恭喜你发现了彩蛋");
        alert("送给我在意的人haf，希望你")
        this.count = 0;
      }
    },
    getData() {
      this.$axios({
        method: "get",
        url: "http://api.tianapi.com/txapi/hotreview/index",
        params: {
          key: "0b9dfe37535393f5279bff62d87d6d31"
        }
      })
        .then(response => {
          if (response.status == "200") {
            this.dataList = response.data.newslist;
          }
        })
        .catch(error => console.log(error, "error")); // 失败的返回
    }
  }
};
</script>
<style lang="less" scoped>
@text_color: #fff;
@background_color: rgba(0, 0, 0, 0.5);
.container {
  color: @text_color;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: relative;
  // background: #fbe3e3;
}
.container:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("../assets/asdww.jpg") center/80% no-repeat;
  background-size: cover;
  // opacity: 0.5;
  z-index: -1;
}
header {
  text-align: center;
  padding-top: 1rem;
  height: 20%;
}
main {
  background: @background_color;
  border-radius: 0.1rem;
  padding: 0.1rem;
  .content {
    font-size: 0.36rem;
  }
  .source {
    font-size: 0.24rem;
    text-align: right;
    margin-top: 0.5rem;
  }
  overflow-y: auto;
  height: 40%;
}
footer {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .me {
    font-size: 0.2rem;
    text-align: right;
    padding: 0.2rem 0;
  }
}
</style>