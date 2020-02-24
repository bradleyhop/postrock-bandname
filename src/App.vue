<template>
  <div id="app">
    <div id="welcome">Instrumental Post Rock Band Name Generator</div>
    <div v-for="(query, index) in questions" :key="index">
      <div v-if="index === questionIndex">
        <div class="query">{{ query }}</div>
        <FormGenerator @childClick="addToBandName" :qIndex="index" />
      </div>
    </div>
    <div v-if="questionIndex === questions.length">
      <div class="resultCopy">
        <i>Your band name is: </i>
      </div>
      <div class="bandName">{{ userBandName }}</div>
      <button @click="reset" type="reset" value="Reset">
        Reset Generator
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
      userBandName: '',
      questions: [
        'What is your birth month?',
        'First letter of your last name?',
        'Color of your shirt?',
        'Last number of the year you were born?',
      ],
      questionIndex: 0,
    };
  },
  methods: {
    addToBandName(val) {
      this.userBandName += ` ${val}`;
      this.questionIndex++;
    },
    reset() {
      this.questionIndex = 0;
      this.userBandName = '';
    },
  },
};
</script>

<style lang="scss">
#app {
  color: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;
}

#welcome {
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem;
}

.query {
  font-size: 2rem;
}

.resultCopy {
  font-size: 2rem;
  margin: 15px;
}

.bandName {
  font-size: 4rem;
  margin: 25px;
}
</style>
