<template>
  <div class="form-selector">
    <form>
      <select v-model="chosen" required>
        <option value="" disabled>select answer</option>
        <option v-for="el in choiceList" :key="el.id" :value="el.val">{{ el.key }}</option>
      </select>
      <br />
      <input @click="sendSelected" type="submit" value="submit" class="band-button" />
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
  border-style: none;
  font-family: $little-font;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}
</style>
