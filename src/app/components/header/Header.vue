<template>
  <header class="bg-slate-50 flex justify-between w-full items-center sticky z-10 top-0 px-6 sm:px-12 py-6">
    <h1 class="text-xl sm-text-2xl font-semibold">Mutlucan Çelik</h1>
    <nav class="flex justify-between items-center gap-3 hidden xl:flex">
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
    <font-awesome-icon :icon="['fas', 'bars']" class="xl:hidden text-3xl cursor-pointer z-10" @click="mobilNavActive"/>
    <div ref="mobilNav" class="mobil-nav">
         <ul ref="mobilList" class="mobil-list text-lg text-gray-600 flex flex-col justify-between bg-gray-300">
            <li class="hover:text-stone-900 mt-6 border-b-2 border-gray-200 py-4">
                <a class="block w-full text-center" @click="mobilNavClose" href="#home">Anasayfa</a>
            </li>
            <li class="hover:text-stone-700 border-b-2 border-gray-200 py-4">
                <a class="block w-full text-center" @click="mobilNavClose" href="#about">Hakkımda</a>
            </li>
            <li class="hover:text-stone-700 border-b-2 border-gray-200 py-4">
                <a class="block w-full text-center" @click="mobilNavClose" href="#skills">Yeteneklerim</a>
            </li>
            <li class="hover:text-stone-700 border-b-2 border-gray-200 py-4">
                <a class="block w-full text-center" @click="mobilNavClose" href="#experiences">Deneyimlerim</a>
            </li>
            <li class="hover:text-stone-700 border-b-2 border-gray-200 py-4">
                <a class="block w-full text-center" @click="mobilNavClose" href="#projects">Projeler</a>
            </li>
            <li class="hover:text-stone-700 border-b-2 border-gray-200 py-4">
                <a class="block w-full text-center" @click="mobilNavClose" href="#contact">İletişim</a>
            </li>
        </ul>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
export default {
    name:'Header',
    setup(){
        const mobilNav = ref(null);
        const mobilList = ref(null);

        function mobilNavActive(){
            mobilList.value.classList.toggle('active')
        }

        function mobilNavClose(){
            mobilList.value.classList.remove('active')
        }

        return{
            mobilNavActive,
            mobilNavClose,
            mobilNav,
            mobilList
        }
    }

}
</script>

<style lang='scss'>
    .mobil-nav{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .mobil-list{
        max-height: 0;
        overflow: hidden;
        transition: all 0.4s ease;
    }
    .mobil-list.active{
     max-height: 500px;
    }

</style>