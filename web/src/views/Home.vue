<template>
  <div id="home">
    <a-layout>
      <a-layout-header>
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content>
        <Carousel />
        <Card />
        <div>
          <video-player :options="videoOptions" />
        </div>
      </a-layout-content>
      <a-layout-footer>
        <GlobalFooter />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import GlobalHeader from "@/components/GlobalHeader";
import Carousel from "@/components/Carousel";
import GlobalFooter from "@/components/GlobalFooter";
import Card from "@/components/Card";
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  name: "Home",
  components: {
    GlobalHeader,
    Carousel,
    Card,
    VideoPlayer,
    GlobalFooter
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        fluid: true,
        loop:true,
        sources: [
          {
            src: "https://www.bilibili.com/video/BV1jE411p7im/",
            type: "video/mp4"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
#home .ant-layout-header {
  background: #fff;
  color: #fff;
  text-align: left;
}
#home .ant-layout-footer {
  background: #fff;
  color: #fff;
  text-align: center;
}
#home .ant-layout-footer {
  line-height: 1.5;
}
#home .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 960px;
  line-height: 120px;
}
#home > .ant-layout {
  margin-bottom: 48px;
}
#home > .ant-layout:last-child {
  margin: 0;
}
</style>