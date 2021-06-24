import home from '@/views/home/index'
import Layout from '@/layout'
export function map111(routes) {
  const maps = routes.map(item => {
    if (item.component === 'layout') {
      item.component = Layout
      // item.component = () => import('@/' + item.component)
    } else if (item.component === 'views/home/index') {
      item.component = home
    }

    if (item.children.length > 0) {
      map111(item.children)
    }

    return item
  })
  return maps
}

const map = {
  'views/login/index': () => import('@/views/login/index'),
  'layout': () => import('@/layout'),
  'views/shop/goods-manage': () => import('@/views/shop/goods-manage'),
  'views/home/index': home
}
//   {'views/login/index': () => import('@/views/login/index')},
//   {'views/login/index': () => import('@/views/login/index')},

export function mapComponent(serviceMap) {
  serviceMap.forEach(route => {
    route.component = map[route.component]
    if (route.children) {
    	route.children.map(child => mapComponent(child))
    }
  })
}
