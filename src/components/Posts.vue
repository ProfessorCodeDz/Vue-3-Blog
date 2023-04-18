<template>
    <div v-if="posts.posts.length" class="h-2/3 mt-1 relative">
        <div class="z-20 absolute top-0 w-full h-1/3 bg-gradient-to-b from-bg to-transparent"></div>
        <div class="z-20 absolute bottom-0 w-full h-1/3  bg-gradient-to-t from-bg to-transparent"></div>
        <div ref="postsRoot" class=" overflow-x-scroll h-full w-full">
            <div class="afterBeforePosts cursor-default w-[80%] mx-auto snap-center z-10 post bg-[#201e1f] h-[30%] my-1 flex justify-between items-center px-"></div>
            <Post v-for="post in posts.posts" :key="post.id" :post="post" :id="post.id"/>
            <div class="afterBeforePosts cursor-default w-[80%] mx-auto snap-center z-10 post bg-[#201e1f] h-[30%] my-1 flex justify-between items-center px-"></div>
        </div>
    </div>
    <h1 v-else class="text-[100px] leading-[90px] font-bold mr-8">
        <div class=" py-2 my-4 flex md:flex-col text-5xl md:text-8xl ml-4 border-b-8 border-txt">
            <div>&</div>
            <div>No</div>
            <div>Posts.</div>            
        </div>
    </h1>
    <audio ref="sliderAudio" autoplay>
        <source src="../assets/slider.mp3" type="audio/mpeg">
    </audio>
</template>
<script setup>
import { onMounted, ref } from "vue"
import Post from "./Post.vue"
import { usePostsStore } from '@/stores/posts'
const posts = usePostsStore()
const sliderAudio = ref(null)
// handle scrolling
onMounted(()=> {
    const postsRoot = ref()
    let posts = document.querySelectorAll(".post")
    
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry => {
            entry.target.classList.toggle("activePost",entry.isIntersecting)
            // play slider audio
            if(sliderAudio.value){
                var playPromise = sliderAudio.value.play();
            }
            if (playPromise !== undefined) {
                playPromise.then(_ => {/* audio played */})
                .catch(error => {/* on error */});
            }
        })
    },{
        root: postsRoot.value,
        threshold: 1,
    })
    
    posts.forEach(post => {
        observer.observe(post)
    })
})

</script>