<template>
  <RSSList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RSSList from './components/RSSList.vue';

import 'bootstrap/dist/css/bootstrap.css'

export default defineComponent({
  name: 'App',
  components: {
    RSSList
  }
});
</script>

