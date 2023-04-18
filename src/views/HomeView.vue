<script setup>
import Posts from '../components/Posts.vue';
</script>

<template>
    <section class="flex flex-col md:flex-row flex-1 container mx-auto h-[500px]">
        <h1 class="text-[100px] leading-[90px] font-bold mr-8">
            <div class=" py-2 my-4 flex md:flex-col text-5xl md:text-8xl ml-4 border-b-8 border-txt">
                <div>No</div>
                <div>More</div>
                <div>Bugs.</div>            
            </div>
        </h1>
        <div class="flex-1 h-full flex flex-col">
            <Posts />
        </div>
    </section>
</template>
