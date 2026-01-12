<script setup>
import { useCounter } from '@/composables/useCounter';
import {books} from '../db/data';
import { ref, onMounted } from 'vue';

const {
       isVisible,
       toggleVisible,
       show,
       hide} = useCounter()

const booksAPI = ref([])

const fetchBooks = async () => {
    try {
        const res = await fetch('https://gutendex.com/books')
        const data = await res.json()
        booksAPI.value = data.results
    } catch (err) {
        console.error('API error', err)
    }
}

onMounted(fetchBooks)



</script>

<template>

    <div>
    <div v-if="isVisible">
        Element is Show
    </div>
    <div v-else>
        Element is Hide
    </div>

    <button @click="toggleVisible">{{ isVisible ? "Hide" : "Show" }}</button>
    <div>
        <h2>Books from mock DATA</h2>
        <ul>
            <li v-for="(book, index) in books" :key="index">
                {{book.title}}
            </li>
        </ul>
    </div>
    <div>
        <h2>Books from API</h2>
        <ul>
            <li v-for="book in booksAPI" :key="book.id">
                {{book.title}}
            </li>
        </ul>
    </div>
    </div>

</template>