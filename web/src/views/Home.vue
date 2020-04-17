<template>
  <div class="home">
    <a-layout>
      <a-layout-header>
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content>
        <Carousel />
        <Card />
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
import Card from "@/components/Card"

export default {
  name: "Home",
  components: {
    GlobalHeader,
    Carousel,
    Card,
    GlobalFooter
  }
};
</script>
