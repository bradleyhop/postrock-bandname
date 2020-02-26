<template>
  <div class="app">
    <div class="welcome">
      INSTRUMENTAL POST-ROCK<br>
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
      <button @click="reset" type="reset" class="band-button">
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
  /*
  background: rgba(0, 0, 0, 0.65);
  */
  background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%,
  rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0) 100%);
  color: #fff;
  font-family: $big-font;
  height: 100%;
  margin: auto;
  text-align: center;
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }
}

.welcome {
  color: #f6d0fe;
  font: {
    size: 3rem;
    weight: bold;
  }
  letter-spacing: 0.1rem;
  padding-top: 6rem;

  @media (max-width: 900px) {
    font-size: 2rem;
    padding-top: 2rem;
  }
}

.query,
.result-copy {
  font: {
    family: $little-font;
    size: 2rem;
  }
  padding: 3rem 0 2rem;

  @media (max-width: 900px) {
    padding: 1rem 0;
  }
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
  letter-spacing: 0.25rem;
  padding: 1rem 0.5rem;

  @media (max-width: 900px) {
    font-size: 3rem;
    padding: 0.5rem 0;
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
}
</style>
