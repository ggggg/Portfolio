<template>
  <div class="page-body container" v-if="item">
    <img v-if="item && item.image" :src="item.image" style="width:100%" />
    <h1 class="text-center">{{item.name}}</h1>
    <div class="row">
      <div class="col-8">
        <h3>
          <b>Description:</b>
        </h3>
        <br />
        <p>
          <span v-html="item.description" />
        </p>
      </div>
      <div class="col">
        <div class="col">
          <div class="row">
            <h3>
              <b>Tags:</b>
            </h3>
            <br />
            <div class="tag-container">
              <button
                v-for="tag in item.tags"
                :key="tag"
                class="btn btn-primary rounded-pill btn-tag"
              >{{tag}}</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h3>
              <b>Source:</b>
            </h3>
            <p v-if="item.private">
              <span style="color:red;">This Code base is private &nbsp;</span>
              <b-icon icon="question-circle-fill" id="why-private" />
              <b-tooltip target="why-private" triggers="hover">
                <b>Main reasons for code being private:</b>
                <!-- eslint-disable-next-line max-len -->
                <br />- Code might be currently in production and releaseing source may comprimise security
                <br />- Code still being work on
                <br />- Fears of valueable code being stolen and used for unintended purposes
              </b-tooltip>
            </p>
            <a v-else :href="item.github" target="_blank">{{item.github}}</a>
          </div>
        </div>
        <br />
        <div class="row">
          <div v-if="item.contributors && item.contributors.length > 0" class="col">
            <h3>
              <b>Other Contributors:</b>
            </h3>
            <a
              :key="contributor"
              :href="'https://github.com/'+contributor"
              v-for="contributor in item.contributors"
              style="margin-right:10px"
              target="_blank"
            >{{contributor}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import items from '../items';

export default {
  data() {
    return {
      item: undefined,
    };
  },
  mounted() {
    if (!this.$route.params || !this.$route.params.id) this.$router.push('/');
    const item = items.find((x) => x.id === this.$route.params.id);
    if (!item) this.$router.push('/');
    document.title = `Ido's Portfolio - ${item.name}`;
    this.item = item;
  },
};
</script>
<style>
.btn-tag {
  margin: 5px;
}
.tag-container {
  margin: -5px;
  margin-bottom: 10px;
}
</style>
