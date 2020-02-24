<template>
  <div class='formSelector'>
    <form>
      <select v-model="chosen">
        <option value="" disabled selected="selected">Select answer</option>
        <option v-for="el in choiceList" :key="el.id"
                :value="el.val">{{ el.key }}</option>
      </select>
    </form>
    <button @click="sendSelected" type="submit">
      Submit
    </button>
  </div>
</template>

<script>
import questionArray from '../postRock';

export default {
  name: 'FormGenerator',
  props: {
    qIndex: Number,
  },
  data() {
    return {
      choiceList: questionArray[this.qIndex],
      chosen: null,
    };
  },
  methods: {
    sendSelected() {
      this.$emit('childClick', this.chosen);
      // reset chosen select option
      this.chosen = null;
    },
  },
};
</script>

<style scoped lang="scss">
.formSelector {
  text-align: center;
}
button {
  margin: 10px;
}
</style>
