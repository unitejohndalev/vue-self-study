<script setup lang="ts">
import { MessageProps } from '../types/message'

const props = defineProps<MessageProps>();

</script>

<template>
    <h1>{{ props.message }}</h1>
</template>