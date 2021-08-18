<template>
   <div class="card">
      <img v-if="item.thumbnail" class="card-img-top" :src="item.thumbnail" :alt="item.title">
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text" v-html="item.description" />
        <a :href="item.link" target="_blank" class="btn btn-primary">Go somewhere</a>
      </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: ['item']
})
</script>
