<template>
  <div class="app">
    <div v-for="(query, index) in questions" :key="index">
      <div v-if="index === questionIndex">
        <div class="query">{{ query }}</div>
        <SelectGenerator @childClick="addToBandName" :qIndex="index" />
      </div>
    </div>
    <div v-if="questionIndex === questions.length" class="result-wrapper">
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
    </div><!-- end result-wrapper -->
  </div><!-- end app -->
</template>

<script>
import SocialSharing from 'vue-social-sharing';
import SelectGenerator from './components/SelectGenerator.vue';

export default {
  name: 'App',
  components: {
    SelectGenerator,
    SocialSharing,
  },
  data() {
    return {
      questions: [
        'what is your birth month?',
        'first letter of your last name?',
        'color of your shirt?',
        'last number of the year you were born?',
      ],
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

html {
  font-size: 18px;
  height: 100%;
}

body {
  background: {
    color: #000;
    image:
      linear-gradient(
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0.55)
      ),
      url('../public/assests/jpeg/jeremy-thomas-4dpAqfTbvKA-unsplash-EDIT.jpg');
    position: center top;
    repeat: repeat-y;
    size: cover;
  }

  font-family: $big-font;
  height: 100%;
  margin: auto;
  padding: 0;
  text-align: center;
  width: 100%;
}

.welcome {
  h1 {
    color: #f6d0fe;
    letter-spacing: 0.1rem;
    margin-block: 0;
    font: {
      size: 1.5rem;
      weight: bold;
    }
  }

  @media only screen and (min-width: $responsive-breakpoint) {
    h1 {
      font-size: 3rem;
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

.query,
.result-copy {
  font: {
    family: $little-font;
    size: 1.25rem;
  }

  padding: 1rem 0;

  @media only screen and (min-width: $responsive-breakpoint) {
    font-size: 2rem;
    padding: 3rem 0 2rem;
  }
}

button {
  font-family: $little-font;
}

.result-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.band-name {
  color: #cfecf8;
  letter-spacing: 0.25rem;
  padding: 0.5rem 0;
  font: {
    family: $big-font;
    size: 2.5rem;
    weight: bold;
  }

  @media only screen and (min-width: $responsive-breakpoint) {
    font-size: 4rem;
    padding: 1rem 0.5rem;
  }
}

.band-button {
  background: rgba(255, 255, 255, 0.45);
  border: rgb(255, 255, 255) solid 1px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #000;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;

  &:hover {
    color: #000;
  }
}

.media-bar {
  color: #f6d0fe;
  cursor: pointer;
  display: grid;
  font-size: 1.25rem;
  grid-row-gap: 0.5rem;
  grid-template-columns: repeat(2, auto);
  justify-items: start;
  left: 0;
  letter-spacing: 0.1rem;
  margin: 0 auto;
  padding: 1rem;
  text-decoration: none;

  @media only screen and (min-width: $responsive-breakpoint) {
    display: block;
    font-size: 2rem;
  }
}

.media-link {
  padding: 0.25rem;

  &:hover {
    color: #fff;
  }
}
</style>
