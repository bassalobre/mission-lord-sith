<template>
  <div class="gif">
    <sui-card>
      <sui-dimmer-dimmable
        @mouseenter.native="active = true"
        @mouseleave.native="active = false"
        class="gif-content"
      >
        <sui-image :src="gif.images.original.url">
          <a
            v-if="gif.favorite"
            is="sui-label"
            color="red"
            icon="heart"
            slot="label"
            ribbon
          >
            Favorite
          </a>
        </sui-image>
        <sui-dimmer blurring :active="active">
          <sui-button
            v-if="!gif.favorite"
            inverted
            color="red"
            icon="heart"
            content="Favorite"
            @click="addGifToFavorites(gif)"
          />
          <sui-button
            v-else
            inverted
            color="red"
            icon="cancel"
            content="Remove favorite"
            @click="removeGifFromFavorites(gif)"
          />
        </sui-dimmer>
      </sui-dimmer-dimmable>
    </sui-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Gif",
  props: {
    gif: Object
  },
  data: () => ({
    active: false
  }),
  methods: {
    ...mapActions("gif", ["addGifToFavorites", "removeGifFromFavorites"])
  }
};
</script>

<style scoped>
.gif {
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  break-inside: avoid;
}
.gif-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
