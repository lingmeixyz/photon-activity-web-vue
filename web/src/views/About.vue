<template>
  <div class="about">
    <a-layout>
      <a-layout-header><GlobalHeader /></a-layout-header>
      <a-layout-content></a-layout-content>
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import GlobalHeader from "@/components/GlobalHeader";

export default {
  name: "About",
  components: {
    GlobalHeader
  }
};
</script>