<script setup>
import { useCounter } from '@/composables/useCounter';

const {
  count,
  increment,
  decrement,
  isVisible,
  toggleVisible,
  show,
  hide
} = useCounter();

</script>

<template>
    <div>
        <p>{{ count }}</p>
        <button @click ="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>