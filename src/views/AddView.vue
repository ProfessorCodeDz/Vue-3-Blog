<template>
    <input v-model="title" placeholder="Title ..." class="px-2 container mx-auto outline-none text-xl md:text-5xl font-bold w-full h-28 mb-3 bg-bg text-txt" type="text">
    <textarea v-model="content" placeholder="Content ..." class="px-2 container mx-auto text-base md:text-lg w-full h-full bg-bg text-[#afafaf] outline-none"></textarea>
    <button @click="addPost" class="bg-txt text-bg w-fit mx-auto py-2 px-3 rounded-lg m-2 font-bold">Add Post</button>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { usePostsStore } from '@/stores/posts'
import { uid } from 'uid';

const router = useRouter()
const posts = usePostsStore()

const title = ref('')
const content = ref('')

function addPost(){
    posts.addPost(uid(),title.value,content.value,new Date().toLocaleDateString())
    router.push('/')
}
</script>