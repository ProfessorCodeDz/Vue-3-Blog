<template>
    <article class="container mx-auto flex-1 p-4">
        <input v-model="titleValue" v-if="edited" class="outline-none text-xl md:text-5xl font-bold w-full mb-3 bg-bg text-txt" type="text">
        <h1 v-else class="text-xl md:text-5xl font-bold mb-3">{{ post.title }}</h1>
        <div class="flex">
            <p class="w-fit text-bg bg-txt py-2 px-3 text-base md:text-xl font-bold mb-4">{{ post.date }}</p>
            <p class="flex-1 text-right text-txt py-2 px-3 w-fit text-base md:text-xl font-bold mb-4">
                <span v-if="edited" @click="saveNewPost" class="select-none border-2 border-txt p-2 cursor-pointer hover:bg-txt rounded-lg hover:text-bg text-sm">✔️</span>
                <span v-else @click="edited = !edited" class="select-none ml-4 border-2 border-txt p-2 cursor-pointer hover:bg-txt hover:text-bg rounded-lg text-sm">🖋️</span>
                <span @click="deletePost" class="select-none ml-4 border-2 border-txt p-2 cursor-pointer hover:bg-txt hover:text-bg rounded-lg text-sm">🗑️</span>
            </p>
        </div>
        <textarea v-model="contentValue" v-if="edited" class="text-base md:text-lg w-full h-2/3 bg-bg text-[#afafaf] outline-none"></textarea>
        <p v-else class="text-[#afafaf] text-base md:text-lg">&nbsp;&nbsp;&nbsp;&nbsp;{{ post.content }}</p>
    </article>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePostsStore } from '@/stores/posts'

const route = useRoute()
const router = useRouter()
const posts = usePostsStore()
const post = ref(posts.posts.find(p => p.id == route.params.id))
const edited = ref(false)
const contentValue = ref(post.value.content)
const titleValue = ref(post.value.title)

function saveNewPost(){
    edited.value = !edited.value
    posts.editPost(route.params.id,titleValue.value,contentValue.value)
}

function deletePost(){
    posts.deletePost(route.params.id)
    router.push('/')
}

</script>
