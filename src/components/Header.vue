<template>
    <header class="flex p-4 items-center">
      <RouterLink to='/' class="flex-1" >
        <h2 class="cursor-pointer font-extrabold text-xl">&lt;&nbsp;&nbsp;BuG POsT&nbsp;&nbsp;/&gt;</h2>
      </RouterLink>
      <ul class="flex list-none">
        <RouterLink to="/add">
          <li class="px-3 font-bold cursor-pointer">
            Add Post
          </li>  
        </RouterLink>
        <li class="px-3 font-bold cursor-pointer">
          <a href="https://riadz.pages.dev/" target="_blank">Riad.Z</a>
        </li>
      </ul>
  </header>
</template>