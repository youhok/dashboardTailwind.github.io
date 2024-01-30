import HomeView from '../views/HomeView.vue'
const routes =[
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
      path:'/object',
      name: 'object',
      component:()=> import('../views/Object.vue')
    },
    {
      path:'/project',
      name: 'project',
      component: import('../views/Project.vue')
    },
    {
      path:'/produst',
      name: 'produst',
      component: import('../views/Produst.vue')
    },
    {
      path:'/document',
      name: 'document',
      component: import('../views/Document.vue')
    }
  ]

  export default routes