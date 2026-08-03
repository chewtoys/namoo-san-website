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
          <a href="https://works.nakashun.com" class="button is-link is-large is-block">Works</a>
          <!-- <NuxtLink to="/worklog" class = "button is-info is-large is-block">Worklog</NuxtLink> -->
          <!-- <NuxtLink to="/resume" class = "button is-success is-large is-block">Resume</NuxtLink> -->
          <NuxtLink to="/events" class="button is-warning is-large is-block">DJ Events</NuxtLink>
          <a href="https://github.com/nakashunsan" class="button is-dark is-large is-block">GitHub</a>
          <a href="https://www.flickr.com/photos/namoo-san" class="button is-dark is-large is-block">Flickr</a>
        </div>
      </div>
    </div>
  </section>
</article>
</template>
<script setup>
useHead({
  title: 'nakashun.com - DJ, Engineer & Photographer',
  meta: [
    { name: 'description', content: 'DJ、エンジニア、フォトグラファーとして活動するnakashunのポートフォリオサイト' },
    { name: 'og:title', content: 'nakashun.com - DJ, Engineer & Photographer' },
    { name: 'og:description', content: 'DJ、エンジニア、フォトグラファーとして活動するnakashunのポートフォリオサイト' },
    { name: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
  ]
})
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

.links .button {
  display: block;
  width: 100%;
  height: 60px;
  padding: 12px 24px;
  margin-top: 10px;
  font-size: 24px;
  line-height: 1.5;
}
</style>
