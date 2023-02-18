<template>
<div class="loader">
    <span class="loader__spinner"></span>
    <p class="loader__text">
        Loading options...
    </p>
</div>
  
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loader{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 80vh;
    &__spinner {
        margin: 0 auto;
        width: 48px;
        height: 48px;
        border: 2px solid #06f;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;

        &::after {
            content: '';  
            box-sizing: border-box;
            position: absolute;
            left: 50%;
            top: 0;
            background: #06f;
            width: 3px;
            height: 24px;
            transform: translateX(-50%);
        }
    }

    &__text{
        font-size: 0.8em;
    }

}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>