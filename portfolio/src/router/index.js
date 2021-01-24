import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ProjectView from '../views/ProjectView.vue';
import Projects from '../views/Projects.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/p/:id',
    name: 'Project View',
    component: ProjectView,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Ido's Portfolio - ${to.name}`;
  next();
});

export default router;
