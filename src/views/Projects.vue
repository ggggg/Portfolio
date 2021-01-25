<template>
  <div class="page-body container">
    <h1 class="text-center">My Projects</h1>
    <div class="row">
      <div class="col-sm-8">
        <ItemViewList v-for="item in items" :item="item" :key="item.id" />
      </div>
      <div class="col-sm-4 filter">
        <form herf="#" class="form-inline">
          <div class="form-group">
            <label for="tags">Search by tag:</label>
            <span style="white-space: nowrap" />
            <select v-model="tag" class="form-control" name="tags" id="tags">
              <option value="none" :key="tag"></option>
              <option v-for="(tag, i) in tags" :value="tag" :key="i">{{tag}}</option>
            </select>
          </div>
          <br />
          <br />
          <div class="form-group">
            <label for="tags">Search by string:</label>
            <input placeholder="search" type="text" v-model="search" />
          </div>
          <br />
          <br />
          <div class="form-group">
            <label for="only-open">Only open source?</label>
            <input id="only-open" v-model="openSource" type="checkbox" />
          </div>
        </form>
      </div>
    </div>
    <ul class="text-center pagination">
      <li :class="{'page-item':true, disabled: page == 1}">
        <a class="page-link" @click="changePage(page-1)">Previous</a>
      </li>
      <li
        :class="{'page-item': true, active: page === pageNum}"
        v-for="pageNum in pages"
        :key="pageNum"
      >
        <a class="page-link" @click="changePage(pageNum)">{{pageNum}}</a>
      </li>
      <li :class="{'page-item':true, disabled: page == pages}">
        <a class="page-link" @click="changePage(page+1)">Next</a>
      </li>
    </ul>
  </div>
</template>

<script>
import ItemViewList from '../components/ItemViewList.vue';
import items from '../items';

export default {
  components: { ItemViewList },
  data() {
    return {
      search: '',
      tag: '',
      page: 1,
      itemsPerAPage: 5,
      openSource: false,
    };
  },
  computed: {
    getItems() {
      return !this.search && !this.tag && !this.openSource
        ? items
        : items.filter(
          (x) => (!this.search
                || x.name.toLowerCase().includes(this.search.toLowerCase())
                || x.description
                  .toLowerCase()
                  .includes(this.search.toLowerCase()))
              && (!this.tag
                || this.tag === 'none'
                || (x.tags && x.tags.includes(this.tag)))
              && (!this.openSource || !x.private),
        );
    },
    items() {
      return this.getItems.slice(
        (this.page - 1) * this.itemsPerAPage,
        (this.page - 1) * this.itemsPerAPage + this.itemsPerAPage,
      );
    },
    pages() {
      return Math.ceil(this.getItems.length / this.itemsPerAPage);
    },
    tags() {
      const arr = [];
      items.forEach((x) => {
        if (!x.tags) return;
        x.tags.forEach((tag) => {
          if (!arr.includes(tag)) arr.push(tag);
        });
      });
      return arr;
    },
  },
  mounted() {
    if (this.$route.query && this.$route.query.page) {
      // eslint-disable-next-line radix
      this.page = parseInt(this.$route.query.page);
    }
  },
  methods: {
    changePage(page) {
      this.$router.push({ path: '/projects', query: { page } });
      window.scrollTo(-1000, -1000);
      this.page = page;
    },
  },
  watch: {
    tag() {
      this.changePage(1);
    },
    search() {
      this.changePage(1);
    },
    openSource() {
      this.changePage(1);
    },
  },
};
</script>
<style scoped>
.filter label {
  padding-right: 20px;
}
</style>
