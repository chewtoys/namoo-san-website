<template>
<article>
  <section class="container">
    <div>
      <h1 class="title">
        🎧 🔧 📷
      </h1>
      <h2 class="subtitle">
        nakashun.com
      </h2>
      <div class = "contents">
        <div class="links">
          <nuxt-link to="/works" class="button is-link is-large is-block">Works</nuxt-link>
          <!-- <nuxt-link to="/worklog" class = "button is-info is-large is-block">Worklog</nuxt-link> -->
          <!-- <nuxt-link to="/resume" class = "button is-success is-large is-block">Resume</nuxt-link> -->
          <nuxt-link to="/events" class="button is-warning is-large is-block">DJ Events</nuxt-link>
          <a href="https://github.com/namoo-san" class="button is-dark is-large is-block">GitHub</a>
          <a href="https://www.flickr.com/photos/namoo-san" class="button is-dark is-large is-block">Flickr</a>
        </div>
      </div>
    </div>
  </section>
</article>
</template>
<script>

export default {
  head: {
    title: '🎧 🔧 📷'
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.button{
  margin-top: 10px;
}
</style>
