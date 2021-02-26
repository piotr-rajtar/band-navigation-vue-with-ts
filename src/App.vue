<template>
  <main class="layout">

    <aside class="menu">
      <side-menu />
    </aside>

    <router-view />

  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideMenu from './components/SideMenu.vue';

@Component({
  components: {
    SideMenu
  },
})

export default class App extends Vue {}
</script>

<style>
  .layout {
    display: flex;
  }

  .menu {
    flex: 30%;
  }

  .content {
    flex: 70%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  a {
    text-decoration: none;
  }
  .router-link-active, .router-link-exact-active  {
    color: red;
    font-size: 20px;
  }
</style>
