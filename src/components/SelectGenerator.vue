<template>
  <div class="form-selector">
    <form>
      <label>{{ questions[qIndex] }}
        <br />
        <select v-model="chosen" required>
          <option value="" disabled>select answer</option>
          <option v-for="el in choiceList" :key="el.key" :value="el.val">{{ el.key }}</option>
        </select>
        <br />
        <input @click="sendSelected" type="submit" value="submit" class="band-button" />
      </label>
    </form>
  </div>
</template>

<script>
import questionArray from '../postRock';

export default {
  name: 'SelectGenerator',
  props: {
    qIndex: Number,
  },
  data() {
    return {
      questions: [
        'what is your birth month?',
        'first letter of your last name?',
        'color of your shirt?',
        'last number of the year you were born?',
      ],
      choiceList: questionArray[this.qIndex],
      chosen: undefined,
    };
  },
  methods: {
    sendSelected() {
      if (this.chosen) {
        this.$emit('childClick', this.chosen);
        // reset chosen select option in each iteration for quiz reload
        this.chosen = undefined;
      }
    },
  },
};
</script>

<style scoped lang="scss">
$little-font: 'Open Sans', sans-serif;

.form-selector {
  font-family: $little-font;
  text-align: center;
}

select {
  // next four rules restyles the arrow for the drop select element
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='28' viewBox='0 0 28 28' width='28' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 0.5rem;
  border-style: none;
  border-radius: 3px;
  font-family: $little-font;
  font-size: 1rem;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
}
</style>
