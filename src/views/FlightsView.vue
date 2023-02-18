<template>
  <div class="container">
    <div class="titleBlock">
      <h1 class="titleBlock__title">Flight Options</h1>
    </div>
    <template v-if="isLoading && !hasError">
      <Loader />
    </template>
    <template v-if="hasError">
      <Error />
    </template>
    <template v-if="!isLoading && !hasError">
      <FlightOption 
        v-for="(option, index) in options"
        :key="`flight-option-${index}`"
        :option="option"
        :optionIndex="index"
      />
    </template>
    
  </div>
</template>

<script setup>
// Component imports
import FlightOption from '../components/FlightOption.vue'
import Loader from '../components/Loader.vue'
import Error from '../components/Error.vue'

// Composable imports
import useFlightOptions from '../composables/useFlightOptions';

const {
  options,
  isLoading,
  hasError
} = useFlightOptions();

</script>

<style lang="scss" scoped>
.container{
  max-width: 700px;
  margin: 0 auto;
  min-height: 100vh;
}

.titleBlock{
  text-align: center;
}
</style>