<template>
  <div id="globaheader">
    <a-menu theme="light">
      <a-menu-item key="home">
        <router-link to="/"><h3>PhotonActivity.com</h3></router-link>|
      </a-menu-item>
      <!--
      <a-menu-item key="about" disabled>
        <router-link to="/about">About</router-link>
      </a-menu-item>
      -->
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "GlobaHeader"
};
</script>