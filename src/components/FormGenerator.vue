<template>
    <div class='formSelector'>
      <form>
        <select v-model="chosen">
          <option value="" disabled selected="selected">Select answer</option>
          <option v-for="el in choiceList" :key="el.id"
            v-bind:value="el.val">{{ el.key }}</option>
        </select>
      </form>
      <button @click="sendSelected">Submit</button>
    </div>
</template>

<script>
import questionArray from '../postRock';

export default {
  name: 'FormGenerator',
  data() {
    return {
      choiceList: questionArray[0],
      chosen: null,
    };
  },
  methods: {
    sendSelected() {
      this.$emit('childClick', this.chosen);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.formSelector {
  text-align: center;
}
button {
  margin: 10px;
}
</style>
