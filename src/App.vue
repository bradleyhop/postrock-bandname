<template>
  <div id="app">
    <div id="welcome">Instrumental Post Rock Band Name Generator</div>
    <div v-for="(query, index) in questions" :key="index">
      <h1>{{ query }}</h1>
      <FormGenerator @childClick="addToBandName" :qIndex="index" />
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
        'Last number of the year you were born?',
        'Color of your shirt?',
      ],
    };
  },
  methods: {
    addToBandName(val) {
      this.userBandName += ` ${val}`;
      console.log(this.userBandName);
    },
  },
};
</script>

<style lang="scss">
body {
  background-image: url('../public/jeremy-thomas-4dpAqfTbvKA-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
  margin: 0;
  min-height: 100%;
}

#app {
  color: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  margin-top: 60px;
  text-align: center;
}

#welcome {
  font-size: 3rem;
  font-weight: bold;
}
</style>
