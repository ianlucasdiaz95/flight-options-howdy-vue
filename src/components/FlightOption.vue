<template>
  <div class="flightOption">
    <Journey 
        v-for="(journey, index) in journeys" 
        :key="`flight-option-journey-${optionIndex}-${index}`"
        :journey="journey"
    />
  </div><!-- flightOption -->
</template>

<script setup>
import { computed } from 'vue'
import Journey from '../components/Journey.vue'

const props = defineProps({
    option: Object,
    optionIndex: Number
})

const journeys = computed(() => {
    return props.option.journeys
})
</script>

<style lang="scss" scoped>

.flightOption{
    background-color: #f3f3f3;
    padding: 6px;
    margin-bottom: 10px;
    border-radius: 15px;
}
</style>