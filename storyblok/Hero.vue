<script setup>
  const props = defineProps({ blok: Object });
</script>

<template>
  <section v-editable="blok" :style="{backgroundColor: blok.background_color?.color}">
    <video v-if="blok?.show_video" class="bg-video" autoplay muted loop src="/assets/background.mp4" :style="{maxHeight: `${blok.height}px`}"></video>
    <div class="image-box" :style="{minHeight: `${blok.height}px`}">
      <NuxtImg 
        v-if="blok?.background_image?.filename" 
        :src="blok?.background_image?.filename" 
        alt="Background Image" placeholder
        class="img-background" provider="storyblok"
        :class="{'brightness-50' : blok?.background_image_darken}"
        :style="{maxHeight: `${blok?.height}px`}"
      />
      <div class="grid grid-cols-1 lg:grid-cols-3 z-10 w-full py-6 sm:px-5 min-h-full container py-48">
        <div class="text-white font-bold flex flex-col justify-center px-8 sm:px-24 lg:col-span-full" :class="blok.text_position">
          <h1 class="mb-3 z-30 font-heading" :style="{color: blok.title_color?.color}" :class="{ 'text-center' : !!blok?.show_video }">
            {{ blok?.title || 'Page Title' }}
          </h1>
          <h5 class="font-light z-30" :style="{color: blok.text_color?.color}">{{ blok?.text }}</h5>
          <div class="mt-10 flex flex-wrap z-30" v-if="blok?.buttons" :class="{ 'justify-center items-center' : !!blok?.show_video }">
            <StoryblokComponent
              class="mr-3 mb-3 w-full sm:w-auto"
              v-for="blok in blok.buttons"
              :key="blok._uid"
              :blok="blok"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.image-box{
  width: 100%;
  display: flex;
  justify-content: center;
}

.img-background {
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 800px;
  object-fit: cover; /* Zoom in while preserving aspect ratio */
}

.bg-video {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -0%);
  min-width: 100%;
  width: auto;
  height: 100%;
  object-fit: cover; /* Ensures video covers entire space */
  z-index:10;
  filter: opacity(.5);
}
</style>
