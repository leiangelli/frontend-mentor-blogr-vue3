<template>
  <section
    class="intro"
    role="banner"
  >
    <header class="header l-inner">
      <div class="header-inner">
        <h1 class="logo">
          Blogr
        </h1>

        <Nav
          :class="{
            'is-show': navFlag
          }"
        />

        <div
          ref="hamburger"
          class="hamburger"
          @click="navFlag = !navFlag"
          :class="{
            'is-active': navFlag
          }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>

    <Hero />
  </section>

  <article class="box box-design"> 
    <div class="l-inner">
      <h2>Designed for the future</h2>

      <section class="box__img">
        <img
          :src="getImageUrl(`illustration-editor-${device.type === 'pc' ? 'desktop' : 'mobile'}.svg`)"
          alt="illustration-editor"
        />
      </section>

      <section class="box__desc">
        <h3>
          Introducing an extensible editor
        </h3>

        <p>
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
        </p>
      </section>

      <section class="box__desc">
        <h3>
          Robust content management
        </h3>

        <p>
          Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
        </p>
      </section>
    </div>
  </article>

  <article class="box box-infrastructure">
    <div class="l-inner">
      <section class="box__img">
        <img
          :src="getImageUrl('illustration-phones.svg')"
          alt="illustration-phones"
        />
      </section>

      <section class="box__desc">
        <h2>
          State of the Art Infrastructure
        </h2>

        <p>
          With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        </p>
      </section>
    </div>
  </article>

  <article class="box box-laptop">
    <div class="l-inner">
      <section class="box__img">
        <img
          :src="getImageUrl(`illustration-laptop-${device.type === 'pc' ? 'desktop' : 'mobile'}.svg`)"
          alt="illustration-laptop"
        />
      </section>
      
      <section class="box__desc">
        <h3>
          Free, open, simple
        </h3>

        <p>
          Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
        </p>
      </section>

      <section class="box__desc">
        <h3>
          Powerful tooling
        </h3>

        <p>
          Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
        </p>
      </section>
    </div>
  </article>

  <footer class="footer">
    <div class="footer-inner l-inner">
      <div class="footer__logo">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>

      <section class="sitemap">
        <section class="sitemap__item">
          <span>Product</span>

          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </section>

        <section class="sitemap__item">
          <span>Company</span>

          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </section>

        <section class="sitemap__item">
          <span>Connect</span>

          <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </section>
      </section>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/sass/style.scss';
</style>

<script setup lang="ts">
import { ref, computed } from 'vue'

// imports
import Nav from "@/components/Nav.vue"
import Hero from "@/components/Hero.vue"

// composables
import { deviceInfo } from './composables/device-info'

const device = deviceInfo()
const navFlag = ref<boolean>(false)

const getImageUrl = (name:string) => {
  return new URL(`./assets/${name}`, import.meta.url).href
}
</script>