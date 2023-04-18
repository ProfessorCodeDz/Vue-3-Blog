<template>
    <RouterLink :to="{name:'post',params: {id: id}}">
        <div class="relative w-[80%] mx-auto snap-center z-10 post bg-[#201e1f] h-[51%] my-1 flex justify-between items-center px-8">
            <h2 class="md:text-3xl text-base font-bold">{{ post.title }}</h2>
            <p class="absolute bottom-2 right-2">{{ post.date }}</p>
        </div>
    </RouterLink>
</template>

<script setup>
defineProps({
    post:{ 
        type: Object,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})
</script>