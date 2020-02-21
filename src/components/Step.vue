<template>
  <draggable class="list-group" group="candidatures" v-model="list" @start="drag = true" @end="drag = false" v-bind="dragOptions" >
      <div v-for="c in list" v-bind:key="c.id">
        <transition-group tag="div" type="transition" :name="!drag ? 'flip-list' : null" >
          <Card :data="c" v-bind:key="c.id"/>
        </transition-group>
      </div>
    <button slot="footer">Add</button>
    <scroll-loader :loader-method="handleLoad" :loading="loading"/>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import ScrollLoader from "./ScrollLoader";
import Card from "./Card";

export default {
  name: "Step",
  props: {
    step: Object
  },
  components: {
    draggable,
    ScrollLoader,
    Card
  },
  data() {
    return {
      drag: false
    };
  },
  computed: {
    list: {
      get() {
        return this.$store.state.candidatures[this.step.id];
      },
      set(data) {
        this.$store.commit("updateCandidatures", { id: this.step.id, data });
      }
    },
    loading() {
      return this.$store.state.loadings[this.step.id];
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    handleLoad(evt) {
      this.$store.dispatch("getCandidatures", { id: this.step.id });
    }
  }
};
</script>

<style scoped>
.list-group {
  width: 250px;
  height: 100vh;
  overflow: auto;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
