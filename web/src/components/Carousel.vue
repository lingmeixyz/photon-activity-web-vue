<template>
  <div id="carousel">
    <a-carousel arrows autoplay="true">
      <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div>
        <h3><img src='../assets/img/bandwidth-close-up-computer-connection-1148820.jpg' alt="logo" /></h3>
      </div>
      <div>
        <h3><img src='../assets/img/interior-of-office-building-325229.jpg' alt="logo" /></h3>
      </div>
      <div>
        <h3><img src='../assets/img/abstract-art-blur-board-270549.jpg' alt="logo" /></h3>
      </div>
      <div>
        <h3><img src='../assets/img/lines-of-code-2653362.jpg' alt="logo" /></h3>
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    }
  }
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 320px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.ant-carousel .slick-slide h3  img{
   width:100%;
   height:100%;
}
</style>