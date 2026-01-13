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
        <button @click="decrement">Decrement</button>
        <button @click ="increment">Increment</button>
    </div>
</template>