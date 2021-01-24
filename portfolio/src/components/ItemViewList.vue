<template>
  <div @click="$router.push('/p/' + item.id)" class="project-item card mb-3">
    <div class="row no-gutters">
      <div v-if="item.image" class="col-md-4">
        <img :src="item.image" class="card-img" :alt="item.id" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <button
            v-for="tag in item.tags"
            :key="tag"
            class="btn btn-outline-primary rounded-pill btn-sm"
            style="margin-right: 5px"
          >{{tag}}</button>
          <p v-html="description" class="card-text"></p>
          <router-link :to="'/p/' + item.id" class="btn btn-primary">More Info</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  computed: {
    description() {
      return !this.item.description || this.item.description.length < 100
        ? this.item.description
        : `${this.item.description.substring(0, 100 - 3)}...`;
    },
  },
  name: 'ItemViewList',
};
</script>

<style scoped>
.project-item:hover {
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.274);
}
.project-item {
  transition: 0.5s;
}
</style>
