<template>
    <div class='formSelector'>
      <form>
        <select id="" name="" @change="itworks">
          <option value="a">a</option>
        </select>
      </form>
    </div>
</template>

<script>
export default {
  name: 'FormGenerator',
  methods: {
    itworks() {
      console.log('hello');
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
