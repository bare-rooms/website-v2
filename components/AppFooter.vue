<script setup>
  const storyblokApi = useStoryblokApi();
  const runtimeConfig = useRuntimeConfig();

  const { data } = await storyblokApi.get('cdn/stories/config', {
    version: runtimeConfig.public.VERSION,
    resolve_links: 'url',
  });
  
  const quickLinks = ref(null);
  quickLinks.value = data.story.content.quick_links;
  const ourServices = ref(null);
  ourServices.value = data.story.content.our_services;
  const contactUs = ref(null);
  contactUs.value = data.story.content.contact_us;

  const logo = data.story.content.footer_logo?.filename || null;
  const footer_color = data.story.content?.footer_color.color;
  const footer_text_color = data.story.content?.footer_text_color.color;

  const currentYear = new Date().getFullYear();
  const copyright = data.story.content?.copyright;
  const maxHeight = data.story.content?.footer_max_height || '100';
</script>

<template>
  <footer 
    class="bg-secondary shadow p-4 text-white" 
    :style="{backgroundColor: footer_color || null, color: footer_text_color || null}"
  >
    <div class="w-full container mx-auto p-4 md:py-8">
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <NuxtLink v-if="logo" to="/" class="flex items-center mb-4 sm:mb-0 col-span-full lg:col-span-1" :style="{maxHeight: maxHeight + 'px'}">
          <NuxtImg :src="logo" class="h-full" alt="Footer Logo" placeholder provider="storyblok" />
        </NuxtLink>
        <a href="/success" class="hidden">Success Link</a>
        <div>
          <h4 class="text-base font-semibold text-secondary">Contact Us</h4>
          <ul class="text-sm font-medium">
            <li v-for="item in contactUs" :key="item.text" class="my-3">
              <NuxtLink :to="item.url" class="mr-4 cursor-pointer hover:underline md:mr-6">{{ item.text }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-base font-semibold text-secondary">Open</h4>
          <ul class="text-sm font-medium">
            <li class="my-3">
              <p class="mr-4 md:mr-6 text-sm">Weekdays: 6am - 9pm</p>
            </li>
            <li class="my-3">
              <p class="mr-4 md:mr-6 text-sm">Saturday: 8am - 8pm</p>
            </li>
            <li class="my-3">
              <p class="mr-4 md:mr-6 text-sm">Sunday: 9am - 4pm</p>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-base font-semibold text-secondary">Legal</h4>
          <ul class="text-sm font-medium">
            <li v-for="item in quickLinks" :key="item.text" class="my-3">
              <NuxtLink :to="item.url" class="mr-4 cursor-pointer hover:underline md:mr-6">{{ item.text }}</NuxtLink>
            </li>
          </ul>
        </div>

      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="my-6">
        <img src="/assets/high-growth-innovation-fund.png" alt="">
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="flex flex-col sm:flex-row text-sm w-full">
        <div class="flex flex-wrap">
          <span class="border-r-2 pr-2">
            © {{ copyright }} {{currentYear}} 
          </span>
          <span class="border-r-2 px-2">All Rights Reserved</span>
          <span class="py-3 sm:py-0 pl-2">
            Website by <a class="underline hover:text-secondary" href="https://storyblok.gouldsonium.com" target="_blank">Gouldsonium</a> 
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>