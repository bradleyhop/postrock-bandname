<template>

  <div class="app">

    <div v-for="(query, index) in questionImport" :key="index">
      <div v-if="index === questionIndex">
        <div class="question-form">
            <SelectGenerator @childClick="addToBandName" :qIndex="index" />
        </div>
      </div>
    </div>

    <div v-if="questionIndex === questionImport.length">

      <div class="top-wrapper">
        <div class="result-copy">
          <i>&#40; your band name is &#41;</i>
        </div>
        <div class="band-name">
          {{ userBandName }}
        </div>
        <button @click="reset" type="reset" class="band-button">
          <i class="fas fa-redo"></i>
          reset generator
        </button>
      </div>

      <div class="bottom-wrapper">
        <social-sharing
          url="https://bradleyhop.github.io/postRockBandName"
          :title="userBandName"
          description="Post-Rock Band Name Generator"
          :quote="userBandName"
          hashtags="vue.js, postrock, freecodcamp"
          twitter-user="bradleyhop1"
          inline-template
          >
          <div class="media-bar">
            <network network="facebook" class="media-link">
            <i class="fab fa-facebook-f"></i> Facebook
            </network>
            <network network="twitter" class="media-link">
            <i class="fab fa-twitter"></i> Twitter
            </network>
            <network network="reddit" class="media-link">
            <i class="fab fa-reddit-alien"></i> Reddit
            </network>
            <network network="email" class="media-link">
            <i class="fa fa-envelope"></i> Email
            </network>
          </div>
        </social-sharing>
      </div>

    </div><!-- end v-if statement -->

  </div><!-- end app -->
</template>

<script>
import SocialSharing from 'vue-social-sharing';
import SelectGenerator from './components/SelectGenerator.vue';
import questionArray from './postRock';

export default {
  name: 'App',
  components: {
    SelectGenerator,
    SocialSharing,
  },
  data() {
    return {
      questionImport: questionArray,
      questionIndex: 0,
      userBandName: '',
    };
  },
  methods: {
    addToBandName(val) {
      if (val) {
        this.userBandName += ` ${val}`;
        this.questionIndex += 1;
      }
    },
    reset() {
      this.questionIndex = 0;
      this.userBandName = '';
    },
  },
};
</script>

<style lang="scss">

$big-font: 'Varela Round', roboto, arial, sans-serif;
$little-font: 'Open Sans', sans-serif;
$responsive-breakpoint: 768px;
$tablet-breakpoint: 801px;
$light-blue: #cfecf8;
$light-purple: #f6d0fe;

html {
  font-size: 18px;
  height: 100%;
}

body {
  background: {
    color: #000;
    image:
      linear-gradient(
        rgba(0, 0, 0, 0.45),
        rgba(0, 0, 0, 0.45)
      ),
      url('../public/assests/jpeg/jeremy-thomas-4dpAqfTbvKA-unsplash-EDIT-Smaller.jpg'),
      url('../public/assests/jpeg/jeremy-thomas-4dpAqfTbvKA-unsplash-EDIT.webp');
    position: center top;
    repeat: repeat;
    size: cover;
  }

  font-family: $big-font;
  margin: auto;
  padding: 0;
  text-align: center;
  width: 100%;
}

.welcome {
  margin-top: 2rem;

  h1 {
    letter-spacing: 0.1rem;
    margin-block: 0;
    font: {
      size: 1.5rem;
      weight: bold;
    }
    a {
      color: $light-purple;
      text-decoration: none;

      &:hover {
        color: $light-blue;
      }
    }
  }

  @media only screen and (min-width: $responsive-breakpoint) {
    h1 {
      font-size: 2.75rem;
    }
  }
}

.app {
  color: #fff;
  margin: auto;
  width: 100%;

  @media only screen and (min-width: $responsive-breakpoint) {
    width: 80%;
  }
}

.question-form,
.result-copy {
  font: {
    family: $little-font;
    size: 1.25rem;
  }

  padding: 1rem 0;

  @media only screen and (min-width: $responsive-breakpoint) {
    font-size: 2rem;
    padding: 2rem 0 1rem;
  }
}

.band-name {
  color: $light-blue;
  letter-spacing: 0.25rem;
  padding: 0.5rem 0;
  font: {
    family: $big-font;
    size: 2.5rem;
    weight: bold;
  }

  @media only screen and (min-width: $responsive-breakpoint) {
    font-size: 3.5rem;
    padding: 1rem 0.5rem;
  }
}

.band-button {
  background: $light-blue;
  border: none;
  border-radius: 5px;
  color: #000;
  cursor: pointer;
  font-family: $little-font;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;

  &:hover {
    background-color: #000;
    color: $light-blue;
  }
}

.media-bar {
  color: $light-purple;
  cursor: pointer;
  display: grid;
  font-size: 1.25rem;
  grid-row-gap: 0.5rem;
  grid-template-columns: repeat(2, auto);
  justify-content: space-around;
  margin: 0 auto;
  padding: 1rem;
  text-decoration: none;

  @media only screen and (min-width: $tablet-breakpoint) {
    display: block;
    font-size: 2rem;
  }
}

.media-link {
  display: inline-block;
  margin: 0.25rem;

  &:hover {
    color: #fff;
  }
}
</style>
