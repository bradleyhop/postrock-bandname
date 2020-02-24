<template>
  <div class="app">
    <div class="welcome">
      INSTRUMENTAL POST ROCK<br>
      BAND NAME GENERATOR
    </div>
    <div v-for="(query, index) in questions" :key="index">
      <div v-if="index === questionIndex">
        <div class="query">{{ query }}</div>
        <FormGenerator @childClick="addToBandName" :qIndex="index" />
      </div>
    </div>
    <div v-if="questionIndex === questions.length">
      <div class="result-copy">
        <i>&#40; your band name is &#41;</i>
      </div>
      <div class="band-name">{{ userBandName }}</div>
      <button @click="reset" type="reset">
        reset generator
      </button>
    </div>
  </div>
</template>

<script>
import FormGenerator from './components/FormGenerator.vue';

export default {
  name: 'App',
  components: {
    FormGenerator,
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
        this.questionIndex++;
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
$big-font: 'Varela Round', Roboto, Arial, sans-serif;
$little-font: 'Open Sans', sans-serif;

.app {
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-family: $big-font;
  height: 100%;
  margin: auto;
  text-align: center;
  width: 70%;

  @media (max-width: 900px) {
    width: 100%;
  }
}

.welcome {
  color: #f6d0fe;
  font: {
    size: 2.5rem;
    weight: bold;
  }
  padding-top: 6rem;
}

.query,
.result-copy {
  font: {
    family: $little-font;
    size: 2rem;
  }
  padding: 3rem 0 2rem 0;
}

button {
  font-family: $little-font;
}

.band-name {
  color: #cfecf8;
  font: {
    family: $big-font;
    size: 4rem;
    weight: bold;
  }
  letter-spacing: 0.2rem;
  padding: 1rem 0.5rem 1rem 0.5rem;
}
</style>
