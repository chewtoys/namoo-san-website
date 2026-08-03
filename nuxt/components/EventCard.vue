<template>
  <div class="card">
    <div class="card-image" v-if="image">
      <figure class="image is-4by3">
        <img
          class="imgfix"
          :src="image"
          :alt="imageAlt || title"
          loading="lazy"
        >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
          <p class="subtitle is-6">{{ subtitle }}</p>
        </div>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  imageAlt: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.imgfix {
  object-fit: cover;
}

.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}
</style>
