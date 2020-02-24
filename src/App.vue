<template>
  <div id="app">
    <transition name="slide-right">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.slide-right-enter-active {
  transition: all 0.2s cubic-bezier(0.5, 0.5, 0.8, 1);
}
.slide-right-leave-active {
  transition: all 0.2s cubic-bezier(0.5, 0.5, 0.8, 1);
}
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(1000px);
  opacity: 0;
}
</style>
