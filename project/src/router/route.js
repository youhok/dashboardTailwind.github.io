import HomeView from '../views/HomeView.vue'


const route = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about', 
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/getApi',
      name: 'getApi', 
      component: () => import('../views/getApi.vue')
    },

    {
        path: '/Produst/:id',
        name: 'ProductDetail', 
        component: () => import('../views/ProdustDetail.vue')
    }
  ]


  export default route