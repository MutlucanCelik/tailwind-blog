<template>
  <header class="bg-slate-50 flex justify-between w-full items-center sticky z-10 top-0 px-12 py-6">
    <h1 class="text-2xl font-semibold">Mutlucan Çelik</h1>
    <nav class="flex justify-between items-center gap-3 hidden lg:flex">
        <ul class="text-lg text-gray-600 flex justify-between gap-8">
            <li class="hover:text-stone-900 hover:scale-105 transition duration-300">
                <a href="#home">Anasayfa</a>
            </li>
            <li class="hover:text-stone-700 hover:scale-105 transition duration-300">
                <a href="#about">Hakkımda</a>
            </li>
            <li class="hover:text-stone-700 hover:scale-105 transition duration-300">
                <a href="#skills">Yeteneklerim</a>
            </li>
            <li class="hover:text-stone-700 hover:scale-105 transition duration-300">
                <a href="#experiences">Deneyimlerim</a>
            </li>
            <li class="hover:text-stone-700 hover:scale-105 transition duration-300">
                <a href="#projects">Projeler</a>
            </li>
            <li class="hover:text-stone-700 hover:scale-105 transition duration-300">
                <a href="#contact">İletişim</a>
            </li>
        </ul>
        <span class="w-px bg-gray-400 h-6"></span>
        <button class="px-4 py-2 text-sm text-white font-medium bg-gray-600 rounded hover:scale-105 transition duration-300">
           <font-awesome-icon :icon="['fas', 'download']"  class="me-2"/>
            Cv İndir
            </button>
    </nav>
  </header>
</template>

<script>
export default {
    name:'Header'

}
</script>

<style>

</style>