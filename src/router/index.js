import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 * 侧边栏信息
 */
export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/
  // tableRouter,
  // nestedRouter,
  // chartsRouter,
  // 层次管理
  {
    path: '/arrange',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/openManageSystem/arrange/index'),
        name: 'arrange',
        meta: { title: 'arrange',
          icon: 'international'
        }
      }
    ]
  },
  // 专业管理
  {
    path: '/major',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/openManageSystem/major/index'),
        name: 'major',
        meta: { title: 'major',
          icon: 'international'
        }
      }
    ]
  },
  // 学习形式
  {
    path: '/study',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/openManageSystem/study/index'),
        name: 'study',
        meta: { title: 'study',
          icon: 'international'
        }
      }
    ]
  },
  // 学制管理
  {
    path: '/educate',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/openManageSystem/educate/index'),
        name: 'educate',
        meta: { title: 'educate',
          icon: 'international'
        }
      }
    ]
  },
  // 课程类别管理
  {
    path: '/course',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/openManageSystem/course/index'),
        name: 'course',
        meta: { title: 'course',
          icon: 'international'
        }
      }
    ]
  },
  // 资源分类管理
  {
    path: '/resource',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/openManageSystem/resource/index'),
        name: 'resource',
        meta: { title: 'resource',
          icon: 'international'
        }
      }
    ]
  },
  // 用户管理
  {
    path: '/openuser',
    component: Layout,
    children: [
      {
        path: 'openuser',
        component: () => import('@/views/openManageSystem/user/index'),
        name: 'opeuser',
        meta: { title: 'openuser',
          icon: 'international'
        }
      }
    ]
  },
  // 角色管理
  {
    path: '/role',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/openManageSystem/role/index'),
        name: 'role',
        meta: { title: 'role',
          icon: 'international'
        }
      }
    ]
  },
  // 字典管理
  {
    path: '/dictionary',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/openManageSystem/dictionary/index'),
        name: 'dictionary',
        meta: { title: 'dictionary',
          icon: 'international'
        }
      }
    ]
  },
  // 日志管理
  {
    path: '/log',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/openManageSystem/log/index'),
        name: 'log',
        meta: { title: 'openlog',
          icon: 'international'
        }
      }
    ]
  }

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'I18n',
  //   meta: {
  //     title: 'i18n',
  //     icon: 'international'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'createArticle', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'editArticle', noCache: true, activeMenu: '/example/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'articleList', icon: 'list' }
  //     }
  //   ]
  // },
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/error-page/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/error-page/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/export-excel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'exportExcel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/select-excel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'selectExcel' }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import('@/views/excel/merge-header'),
  //       name: 'MergeHeader',
  //       meta: { title: 'mergeHeader' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/upload-excel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'uploadExcel' }
  //     }
  //   ]
  // }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
