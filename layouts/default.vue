<template>
  <main class="min-h-screen flex flex-col justify-between font-text">
    <div>
      <AppHeader />
      <slot />
    </div>
    <AppFooter />
  </main>
</template>