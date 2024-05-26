<template>
  <footer id="contact" class="bg-slate-50 flex flex-col gap-10 items-center px-8 py-8 2xl:text-xl">
    <div class="flex flex-col items-center gap-3">
        <div class="w-max bg-slate-200 text-gray-500 text-lg font-medium tracking-widest px-4 p-2 rounded">İLETİŞİM</div>
        <p class="text-center">Benimle iletişime geçmek için aşağıdaki iletişim yöntemlerini kullanabilirsiniz.</p>
    </div>
    <div class="flex flex-col items-center gap-3">
        <div class="text-xl">
            <font-awesome-icon :icon="['fas', 'envelope']" class="me-2 text-gray-600"/>
            mtlcnclk98@gmail.com
        </div>
        <div class="text-xl">
            <font-awesome-icon :icon="['fas', 'phone']" class="me-2 text-gray-600"/>
            0552 328 60 54
        </div>
        
    </div>
    <div class="flex flex-col gap-3 text-center">
       <span>
         Aşağıdaki sosyal medya hesaplarımdan bana ulaşabilirsiniz.
       </span>
       <div class="flex gap-4 text-xl justify-center"> 
           <a href="#">
            <font-awesome-icon :icon="['fab', 'instagram']" class="text-gray-600"/>
           </a>
           <a href="#">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" class="text-gray-600"/>
           </a>
           <a href="#">
            <font-awesome-icon :icon="['fab', 'youtube']" class="text-gray-600"/>
           </a>
       </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>