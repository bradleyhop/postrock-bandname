<template>
  <div id="app">
    <div id="welcome">Instrumental Post Rock Band Name Generator</div>
      <div class="month">
          <h1>What is your birth month?</h1>
            <FormGenerator @childClick="addToBandName"/>
      </div>
  </div>
</template>

<script>
import FormGenerator from './components/FormGenerator.vue';
import questionArray from './postRock';

export default {
  name: 'App',
  components: {
    FormGenerator,
  },
  data() {
    return {
      userBandName: '',
    };
  },
  methods: {
    tempMethod() {
      const monthChoice = questionArray[0].find((val) => val.month === 'june').val;
      // const initialLetter = firstInitial.find((val) => val.letter === 'I').val;
      // const shirt = shirtColor.find((val) => val.color === 'red').val;
      // const numb = lastNumber.find((val) => val.number === 'one').val;

      console.log(`${monthChoice}`);
    },
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
