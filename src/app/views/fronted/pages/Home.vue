<template>
    <Header />
    <main class="h-96 h-max mb-12">
        <section id="home">
            <div class="flex justify-between flex-wrap gap-12 md:gap-0 px-8 py-12">
                <div class="md:w-3/6 order-1 md:order-none">
                    <h1 class="text-3xl sm:text-4xl font-medium">Merhaba, Ben Mutlucan 👋</h1>
                    <p class="my-2">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                    <div class="mt-8 flex flex-col gap-2">
                       <div>
                         <font-awesome-icon :icon="['fas', 'location-dot']" class="me-2"/> Tükiye/Elazığ
                       </div>
                       <div>
                        <font-awesome-icon :icon="['fas', 'circle']" class="me-2 text-green-300"/> Yeni projelere açık
                       </div>
                    </div>
                    <div class="flex gap-4 mt-6">
                       <a href="" class="transition duration-300 hover:scale-125">
                        <font-awesome-icon :icon="['fab', 'github']"  class="text-3xl"/>
                       </a>
                       <a href="" class="transition duration-300 hover:scale-125">
                        <font-awesome-icon :icon="['fab', 'linkedin']"  class="text-3xl"/>
                       </a>
                       <a href="" class="transition duration-300 hover:scale-125">
                        <font-awesome-icon :icon="['fab', 'instagram']" class="text-3xl" />
                       </a>
                    </div>
                </div>
                <div class="md:w-2/6 ">
                    <img class="w-full h-auto rounded" src="@/assets/img/profil-photo.jpeg" alt="">
                </div>
            </div>
        </section>
        <section id="about">
            <h2 class="text-center text-3xl md:text-4xl text-stone-600 tracking-widest my-10 md:my-16 font-bold font-serif">HAKKIMDA</h2>
            <div class="flex flex-col gap-8 md:gap-0 md:flex-row ">
                <div class="md:w-1/2 px-8 xl:px-32">
                     <img class="w-full h-auto rounded" src="@/assets/img/mutlu.jpg" alt="">
                </div>
                <div class="md:w-1/2 px-8 xl:px-20">
                <h3 class="font-bold text-2xl mb-4">Curious about me? Here you have it:</h3>
                <p>
                    I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                    I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                    I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                    When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                </p>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
</template>

<script>
import Header from '@/app/components/header/Header.vue'
import Footer from '@/app/components/footer/Footer.vue'

export default {
    components:{
        Header,
        Footer
    }

}
</script>

<style>

</style>