<template>
  <div class="sub-container">
    <div v-if="this.$store.state.languageMarker">
      <div class="annotation">
        «Strange posters»<br />Blueback, А0, 2018 <br /><br />A series of street posters (about 60 pieces of A0 format), which is, in fact, a brief manifesto for the project of
        <a href="/absurd_inscriptions">absurd inscriptions</a>.
      </div>
      <div v-for="(strange_posters, index) in strange_postersArray" :index="index" class="item item--full" :key="strange_posters.index">
        <h3>{{ strange_posters.title }}</h3>

        <div class="explication" v-html="strange_posters.ebody"></div>
        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="strange_posters.img" />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="annotation">
        Постеры «Странно»<br />Блюбэк, А0, 2018 <br />Серия уличных постеров (было расклеено порядка 60 штук формата А0), представляющая собой, по сути, краткий манифест проекта
        <a href="/absurd_inscriptions">абсурдных надписей.</a>
      </div>
      <div v-for="(strange_posters, index) in strange_postersArray" :index="index" class="item item--full" :key="strange_posters.index">
        <h3>{{ strange_posters.title }}</h3>

        <div class="explication" v-html="strange_posters.body"></div>

        <div class="img" v-lazy-container="{ selector: 'img' }">
          <img :data-src="strange_posters.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Kiuss — Strange Posters | Кюс — Постеры Странно',
      meta: [
        { property: 'og:title', content: 'Kiuss — Strange Posters | Кюс — Постеры Странно' },
        { property: 'og:image', content: '../images/projects/strange_posters/14.jpg' },
        { name: 'twitter:image', content: '../images/projects/strange_posters/14.jpg' },
      ],
    },
    data: function() {
      return {
        strange_postersArray: [
          { id: 1, title: null, body: null, img: '/images/projects/strange_posters/1.jpg' },
          {
            id: 2,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/2.jpg',
          },
          {
            id: 3,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/3.jpg',
          },
          {
            id: 4,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/4.jpg',
          },
          {
            id: 5,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/5.jpg',
          },
          {
            id: 6,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/6.jpg',
          },
          {
            id: 7,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/7.jpg',
          },
          {
            id: 8,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/8.jpg',
          },
          {
            id: 9,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/9.jpg',
          },
          {
            id: 10,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/10.jpg',
          },
          {
            id: 11,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/11.jpg',
          },
          {
            id: 12,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/12.jpg',
          },
          {
            id: 13,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/13.jpg',
          },
          {
            id: 14,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/14.jpg',
          },
          {
            id: 15,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/15.jpg',
          },
          {
            id: 16,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/16.jpg',
          },
          {
            id: 17,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/17.jpg',
          },
          {
            id: 18,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/18.jpg',
          },
          {
            id: 19,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/19.jpg',
          },
          {
            id: 20,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/20.jpg',
          },
          {
            id: 21,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/21.jpg',
          },
          {
            id: 22,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/22.jpg',
          },
          {
            id: 23,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/23.jpg',
          },
          {
            id: 24,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/24.jpg',
          },
          {
            id: 25,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/25.jpg',
          },
          {
            id: 26,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/26.jpg',
          },
          {
            id: 27,
            title: null,
            body: null,
            img: '/images/projects/strange_posters/27.jpg',
          },
        ],
      }
    },
  }
</script>

<style></style>
