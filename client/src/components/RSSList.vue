<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12">
        <h1>RSS Feeds</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <form @submit.prevent="fetchFeed">
          <div class="mb-3">
            <input
              v-model="feedUrl"
              type="url"
              :class="['form-control', hasError && 'is-invalid']"
              placeholder="Enter RSS URL"
              required
              @focus="resetError"
            />
            <div v-if="hasError" id="validationServer03Feedback" class="invalid-feedback">
              {{message}}
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block" style="width: 100%">Search</button>
        </form>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12">
        <h1>Articles</h1>
      </div>
      <template v-for="(item, index) in items" v-bind:key="item.guid">
        <hr v-if="index" />
        <RSSItem :item="item" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RSSItem from "./RSSItem.vue";

const makePath = (url: string) =>
  `http://localhost:3000/rss?url=${encodeURIComponent(url)}`;
const fetchFeed = (url: string): Promise<RSSResponse> =>
  url ? fetch(makePath(url)).then((r) => r.json()) : Promise.resolve({});

export default defineComponent({
  name: "RSSList",
  components: { RSSItem },
  data(): RSSVue {
    return {
      hasError: false,
      feedUrl: "",
      items: [],
      message: ""
    };
  },
  methods: {
    async fetchFeed() {
      const res = await fetchFeed(this.feedUrl);

      if (res.status === "ok" && res.items) {
        this.items = res.items;
      } else if (res.status === "error") {
        this.hasError = true;
        this.message = res.message || 'Server Error';
      }
    },
    resetError() {
      this.hasError = false;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
