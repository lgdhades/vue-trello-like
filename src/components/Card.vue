<template>
  <div class="card">
    <img class="avatar" :src="data.avatar" alt="Avatar" style="width:100%">
    <div class="container">
      <h4>
        <b>{{data.name}}</b>
      </h4>
      <i>{{data.id}}</i>
      <p>{{data.jobs}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: Object
  }
};
</script>

<style scoped>
.card {
  box-shadow: 3px 5px 7px 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 5px;
  padding-top: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 25% !important;
  border-radius: 50%;
}
.container {
  padding: 2px 16px;
}
</style>
