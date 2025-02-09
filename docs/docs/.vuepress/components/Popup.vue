<template>
  <scene class="popup" @created="created"></scene>
</template>

<script lang="ts" setup>
import { Popup } from 'three-vue3'
import TrafficLight from './TrafficLight.vue'

const popup = new Popup([0, 0, 0], TrafficLight, {})
const created = (scene) => {
  scene.add(popup.scene)
  popup.moveTo([0, 0.5, 0], 10000)
}
</script>

<style>
.popup {
  margin-top: 10px;
  width: 100%;
  height: 300px;
}
</style>
