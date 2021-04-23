<template>
  <div>
    <h1>Create Events, {{ user.name }}</h1>
    <p>Events will be created by {{ user.name }}</p>
    <span>Total Categories {{ catLength }}</span>
    <ul>
      <li v-for="category of categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    catLength() {
      return this.$store.getters.categoryLength;
    },
    ...mapState(['user', 'categories'])
  }
};
</script>
