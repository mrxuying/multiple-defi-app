import { lazy } from "react"
import { withKeepAlive } from "keepalive-react-component"

import Staking from '../views/Staking'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: withKeepAlive(Staking, {cacheId: 'staking', scroll: true}),//组件缓存
    meta: {title: 'staking'}
  },{
    path: '/staking',
    name: 'staking',
    component: withKeepAlive(Staking, {cacheId: 'staking', scroll: true}),
    meta: {title: 'staking'}
  },
  {
    path: '/discretestaking',
    name: 'discretestaking',
    component: lazy(()=>import('../views/DiscreteStaking')),
    meta: {title: 'staking'}
  },{
    path: '/voting',
    name: 'voting',
    component: lazy(()=>(import('../views/Voting'))),
    meta: {title: 'voting'}
  },{
    path: '*',
    name: '404',
    component: lazy(() => import('../views/Page404')),
    meta: {
      title: 'Page not found 404',
    },
  },

]