<template>
  <nav class="navbar is-link">
    <div class="navbar-brand">
      <NuxtLink to="/" class="navbar-item">
        🎧 + 🔧
      </NuxtLink>
      <div
        class="navbar-burger burger"
        :class="{ 'is-active': menuActive }"
        @click="menuToggle()"
        role="button"
        aria-label="Toggle navigation menu"
        :aria-expanded="menuActive"
        aria-controls="burger-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div
      id="burger-menu"
      class="navbar-menu"
      :class="{ 'is-active': menuActive }"
    >
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Social & Services</a>
          <div class="navbar-dropdown is-boxed">
            <a
              class="navbar-item"
              href="https://github.com/nakashunsan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              class="navbar-item"
              href="https://www.facebook.com/ieto.sharu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook(Private)
            </a>
            <a
              class="navbar-item"
              href="https://soundcloud.com/djnm"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoundCloud
            </a>
            <a
              class="navbar-item"
              href="https://twitter.com/ietosharu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              class="navbar-item"
              href="https://qiita.com/nakashun"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qiita
            </a>
            <hr class="navbar-divider is-active">
            <a
              class="navbar-item"
              href="https://kokoiku.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ここ行く.com
            </a>
          </div>
        </div>
      </div>
      <div class="navbar-end"></div>
    </div>
  </nav>
</template>

<script setup>
const menuActive = ref(false)

const menuToggle = () => {
  menuActive.value = !menuActive.value
}
</script>

<style scoped>
</style>
