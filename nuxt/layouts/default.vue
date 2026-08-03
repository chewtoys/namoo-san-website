<template>
  <div>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
          🎧 + 🔧
        </NuxtLink>
        <div
          class="navbar-burger burger"
          v-bind:class="{ 'is-active': menuActive }"
          v-on:click="menuToggle()"
          data-target="burger-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        id="burger-menu"
        class="navbar-menu"
        v-bind:class="{ 'is-active': menuActive }"
      >
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Social & Services</a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="https://github.com/nakashunsan">
                🔧 GitHub
              </a>
              <a class="navbar-item" href="https://www.facebook.com/ieto.sharu">
                😃 Facebook(Private)
              </a>
              <a class="navbar-item" href="https://soundcloud.com/djnm">
                🎧 SoundCloud
              </a>
              <a class="navbar-item" href="https://twitter.com/ietosharu">
                🐦 Twitter
              </a>
              <a class="navbar-item" href="https://qiita.com/nakashun">
                📝 Qiita
              </a>
              <a
                class="navbar-item"
                href="https://www.flickr.com/photos/namoo-san"
              >
                📷 Flickr
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-end"></div>
      </div>
    </nav>

    <NuxtPage />

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          nakashun.com - @nakashunsan
        </p>
        <p>Deploy on <strong>Nuxt.js + Netlify⚡</strong></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    menuToggle() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
