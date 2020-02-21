<template>
  <div class="container">
    <div class="steps" v-for="step in steps" :key="step.id">
      <h2>{{step.label}}</h2>
      <Step :step="step"/>
    </div>
  </div>
</template>

<script>
import Step from "./Step";

export default {
  name: "Trello",
  components: {
    Step
  },
  computed: {
    steps() {
      return this.$store.state.steps;
    }
  },
  methods: {
    handleClick: ev => alert(ev.target.innerText)
  },
  created() {
    this.$store.dispatch("getSteps");
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}



h5 {
  cursor: grab;
}
</style>
