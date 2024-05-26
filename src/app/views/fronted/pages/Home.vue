<template>
    <Header/>
    <main class="h-96 h-max mb-12 flex flex-col gap-40">
        <section id="home" class="scroll-mt-32">
            <div class="flex justify-between flex-wrap gap-12 lg:gap-0 px-8 lg:px-16 py-12">
                <div class="lg:w-3/6 order-1 lg:order-none">
                    <h1 class="text-3xl sm:text-4xl 2xl:text-5xl font-medium">Merhaba, Ben Mutlucan 👋</h1>
                    <p class="my-2 2xl:text-2xl">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                    <div class="mt-8 flex flex-col gap-2">
                       <div class="2xl:text-xl">
                         <font-awesome-icon :icon="['fas', 'location-dot']" class="me-2"/> Tükiye/Elazığ
                       </div>
                       <div class="2xl:text-xl">
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
                <div class="lg:w-2/6 ">
                    <img class="w-full h-auto rounded" src="@/assets/img/profil-photo.jpeg" alt="">
                </div>
            </div>
        </section>
        <section id="about" class="scroll-mt-32">
            <h2 class="text-center text-3xl lg:text-4xl text-stone-600 tracking-widest mb-10 lg:mb-16 font-bold font-serif drop-shadow-lg">HAKKIMDA</h2>
            <div class="flex flex-col gap-8 lg:gap-0 lg:flex-row ">
                <div class="lg:w-1/2 px-8 xl:px-32">
                     <img class="w-full h-auto rounded" src="@/assets/img/mutlu.jpg" alt="">
                </div>
                <div class="lg:w-1/2 px-8 xl:pe-16">
                <h3 class="font-bold text-2xl 2xl:text-3xl mb-4">Curious about me? Here you have it:</h3>
                <p class="2xl:text-xl">
                    I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                    I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                    I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                    When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                </p>
                </div>
            </div>
        </section>
        <section id="skills" class="scroll-mt-32">
           <div class="mb-10 md:mb-16">
             <h2 class="text-center text-3xl md:text-4xl text-stone-600 tracking-widest font-bold font-serif drop-shadow-lg">YETENEKLER</h2>
             <p class="text-center mt-4">Gerçekten iyi olduğum beceriler, araçlar ve teknolojiler,</p>
           </div>
            <div class="flex flex-wrap px-8 gap-16 justify-center">
                <div class="flex flex-col justify-center items-center gap-3">
                    <img src="@/assets/img/svg/javascript-logo-svgrepo-com.svg" alt="logo" class="w-16">
                    <span>Javascript</span>
                </div>
                <div class="flex flex-col justify-center items-center gap-3">
                    <img src="@/assets/img/svg/jquery-svgrepo-com.svg" alt="logo" class="w-16">
                    <span>JQuery</span>
                </div>
                 <div class="flex flex-col justify-center items-center gap-3">
                    <img src="@/assets/img/svg/vue-svgrepo-com.svg" alt="logo" class="w-16">
                    <span>Vue.js</span>
                </div>
                <div class="flex flex-col justify-center items-center gap-3">
                    <img src="@/assets/img/svg/tailwind-svgrepo-com.svg" alt="logo" class="w-16">
                    <span>Tailwind CSS</span>
                </div>
                 <div class="flex flex-col justify-center items-center gap-3">
                    <img src="@/assets/img/svg/sass-svgrepo-com.svg" alt="logo" class="w-16">
                    <span>Sass/SCSS</span>
                </div>
                 <div class="flex flex-col justify-center items-center gap-3">
                    <img src="@/assets/img/svg/css-3-svgrepo-com.svg" alt="logo" class="w-16">
                    <span>CSS</span>
                </div>
                <div class="flex flex-col justify-center items-center gap-3">
                    <img src="@/assets/img/svg/html-5-svgrepo-com.svg" alt="logo" class="w-16">
                    <span>HTML</span>
                </div>
                <div class="flex flex-col justify-center items-center gap-3">
                    <img src="@/assets/img/svg/laravel-svgrepo-com.svg" alt="logo" class="w-16">
                    <span>Laravel</span>
                </div>
            </div>
        </section>
        <section id="experiences" class="scroll-mt-32">
           <div class="mb-10 md:mb-16">
             <h2 class="text-center text-3xl md:text-4xl text-stone-600 tracking-widest font-bold font-serif drop-shadow-lg">DENEYİMLERİM</h2>
             <p class="text-center mt-4">Gerçekten iyi olduğum beceriler, araçlar ve teknolojiler,</p>
           </div>
            <div class="flex flex-col justify-center gap-16 h-max px-32">
                <div class="flex shadow-xl w-1/2 p-3">
                    <div class="md:w-2/6">
                        <img src="@/assets/img/experience.jpeg" alt="">
                    </div>
                    <div class="md:w-4/6">
                        <div class="flex justify-between">
                            <h2 class="text-xl font-bold mb-6">Frontend Developer</h2>
                            <span>12.07.2023</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Ut pretium arcu et massa semper, id fringilla leo semper.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Sed quis justo ac magna.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex shadow-xl self-end w-1/2 p-3">
                    <div class="md:w-2/6">
                        <img src="@/assets/img/experience.jpeg" alt="">
                    </div>
                    <div class="md:w-4/6">
                        <div class="flex justify-between">
                            <h2 class="text-xl font-bold mb-6">Frontend Developer</h2>
                            <span>12.07.2023</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Ut pretium arcu et massa semper, id fringilla leo semper.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Sed quis justo ac magna.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex shadow-xl w-1/2 p-3">
                    <div class="md:w-2/6">
                        <img src="@/assets/img/experience.jpeg" alt="">
                    </div>
                    <div class="md:w-4/6">
                        <div class="flex justify-between">
                            <h2 class="text-xl font-bold mb-6">Frontend Developer</h2>
                            <span>12.07.2023</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Ut pretium arcu et massa semper, id fringilla leo semper.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Sed quis justo ac magna.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex shadow-xl self-end w-1/2 p-3">
                    <div class="md:w-2/6">
                        <img src="@/assets/img/experience.jpeg" alt="">
                    </div>
                    <div class="md:w-4/6">
                        <div class="flex justify-between">
                            <h2 class="text-xl font-bold mb-6">Frontend Developer</h2>
                            <span>12.07.2023</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Ut pretium arcu et massa semper, id fringilla leo semper.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Sed quis justo ac magna.</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'star']" class="text-gray-600" />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <section id="projects" class="scroll-mt-32">
            <h2 class="text-center text-3xl md:text-4xl mt-4 mb-12 lg:mb-20 text-stone-600 tracking-widest font-bold font-serif drop-shadow-lg">PROJELER</h2>
            <div class="px-8 lg:px-16 flex flex-col gap-24">
                <div class="flex flex-col items-center lg:flex-row lg:items-start gap-20 rounded shadow-lg p-8 lg:p-12">
                    <div class="lg:w-1/2">
                        <img class="mx-auto" src="@/assets/img/proje.png" alt="">
                    </div>
                    <div class="lg:w-1/2 w-full flex flex-col gap-4">
                            <h3 class="font-bold text-3xl">Fiskil</h3>
                            <p class="2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                            <div class="flex flex-wrap gap-4">
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Javascript</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">JQuery</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Vue</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Tailwind CSS</span>
                            </div>
                    </div>
                </div>
               <div class="flex flex-col items-center lg:flex-row lg:items-start gap-20 rounded shadow-lg p-8 lg:p-12">
                    <div class="lg:w-1/2 w-full flex flex-col order-1 lg:order-none gap-4">
                            <h3 class="font-bold text-3xl">Fiskil</h3>
                            <p class="2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                            <div class="flex flex-wrap gap-4">
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Javascript</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">JQuery</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Vue</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Tailwind CSS</span>
                            </div>
                    </div>
                     <div class="lg:w-1/2">
                        <img class="mx-auto" src="@/assets/img/proje.png" alt="">
                    </div>
                </div>
                <div class="flex flex-col items-center lg:flex-row lg:items-start  gap-20 rounded shadow-lg p-8 lg:p-12">
                    <div class="lg:w-1/2">
                        <img class="mx-auto" src="@/assets/img/proje.png" alt="">
                    </div>
                    <div class="lg:w-1/2 w-full flex flex-col gap-4">
                            <h3 class="font-bold text-3xl">Fiskil</h3>
                            <p class="2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                            <div class="flex flex-wrap gap-4">
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Javascript</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">JQuery</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Vue</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Tailwind CSS</span>
                            </div>
                    </div>
                </div>
                <div class="flex flex-col items-center lg:flex-row lg:items-start gap-20 rounded shadow-lg p-8 lg:p-12">
                    <div class="lg:w-1/2 w-full flex flex-col order-1 lg:order-none gap-4">
                            <h3 class="font-bold text-3xl">Fiskil</h3>
                            <p class="2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                            <div class="flex flex-wrap gap-4">
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Javascript</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">JQuery</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Vue</span>
                                <span class="rounded-lg bg-gray-200 text-sm lg:text-base p-3">Tailwind CSS</span>
                            </div>
                    </div>
                     <div class="lg:w-1/2">
                        <img class="mx-auto" src="@/assets/img/proje.png" alt="">
                    </div>
                </div>
            </div>
        </section>
         <section>
            <h2 class="text-center text-3xl md:text-4xl mt-4 mb-20 text-stone-600 tracking-widest font-bold font-serif drop-shadow-lg">REFERANSLAR</h2>
            <div class="flex flex-col md:flex-row justify-center gap-12 px-8 md:px-12">
                <div class="md:w-3/12 flex flex-col items-center gap-8 px-4 py-8 shadow-2xl">
                    <img src="@/assets/img/icon-avatar.png" alt="logo">
                    <p class="text-center">
                        “Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”
                    </p>
                    <div class="flex flex-col items-center gap-3">
                        <h4 class="font-bold">John Doe</h4>
                        <span>Founder - xyz.com</span>
                    </div>
                </div>
                <div class="md:w-3/12 flex flex-col items-center gap-8 px-4 py-8 shadow-2xl">
                    <img src="@/assets/img/icon-avatar.png" alt="logo">
                    <p class="text-center">
                        “Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”
                    </p>
                    <div class="flex flex-col items-center gap-3">
                        <h4 class="font-bold">John Doe</h4>
                        <span>Founder - xyz.com</span>
                    </div>
                </div>
                <div class="md:w-3/12 flex flex-col items-center gap-8 px-4 py-8 shadow-2xl">
                    <img src="@/assets/img/icon-avatar.png" alt="logo">
                    <p class="text-center">
                        “Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”
                    </p>
                    <div class="flex flex-col items-center gap-3">
                        <h4 class="font-bold">John Doe</h4>
                        <span>Founder - xyz.com</span>
                    </div>
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