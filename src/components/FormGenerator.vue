<template>
    <div class='formSelector'>
      <form>
        <select id="" name="" v-model="chosen" v-on:change="sendSelected">
          <option v-for="el in choiceList" :key="el.id"
            v-bind:value="el.val">{{ el.key }}</option>
        </select>
      </form>
      <div>{{chosen}}</div>
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
      console.log(this.chosen);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.formSelector {
  text-align: center;
}
</style>
