<template>
  <div class="traffic-light">
    <div class="light red" :class="{ active: currentLight === 'red' }"></div>
    <div class="light yellow" :class="{ active: currentLight === 'yellow' }"></div>
    <div class="light green" :class="{ active: currentLight === 'green' }"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'TrafficLight',
  setup() {
    const currentLight = ref('red')
    let timer

    const changeLight = () => {
      if (currentLight.value === 'red') {
        currentLight.value = 'green'
      } else if (currentLight.value === 'green') {
        currentLight.value = 'yellow'
      } else if (currentLight.value === 'yellow') {
        currentLight.value = 'red'
      }
    }

    onMounted(() => {
      timer = setInterval(changeLight, 3000)
    })

    onUnmounted(() => {
      clearInterval(timer)
    })

    return {
      currentLight
    }
  }
}
</script>

<style scoped>
.traffic-light {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 20px;
  background-color: #333;
  border-radius: 4px;
  padding: 4px;
}

.light {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #555;
  transition: background-color 0.5s;
}

.red {
  background-color: #ff4d4d;
}

.yellow {
  background-color: #ffd700;
}

.green {
  background-color: #4caf50;
}

.active {
  background-color: white;
}
</style>
