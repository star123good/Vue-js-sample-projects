import Router, { RouteConfig } from 'vue-router';
import { LoginPage } from './pages/login';
import { RecipeListPage } from './pages/recipe/list';

const routes: RouteConfig[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/recipe', component: RecipeListPage },
];

export const router = new Router({
  routes
});
