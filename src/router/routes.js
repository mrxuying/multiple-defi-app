import { lazy } from "react"
import Staking from '../views/Staking'

const DiscreteStaking = lazy(()=>import('../views/DiscreteStaking'));
const CandidateList = lazy(()=>(import('../views/Voting/CandidateList')));
const Register = lazy(()=>(import('../views/Voting/Register')));
const Page404 = lazy(() => import('../views/Page404'));
const Voting = lazy(() => import('../views/Voting'));
const VoterList = lazy(() => import('../views/Voting/VoterList'));

export const routes = [
  {
    path: '/',
    name: 'home',
    element: <Staking />,//组件缓存
    meta: {title: 'Staking'}
  },{
    path: '/staking',
    name: 'staking',
    element: <Staking />,
    meta: {title: 'staking'}
  },{
    path: '/discretestaking',
    name: 'discretestaking',
    element: <DiscreteStaking />,
    meta: {title: 'DiscreteStaking'}
  },{
    path: '/voting',
    name: 'voting',
    element: <Voting />,
    meta: {title: 'CandidateList'},
    children:[
      {
        path: 'register',
        name: 'register',
        element: <Register />,
        meta: {title: 'Register'},
      },
      {
        path: 'voters',
        name: 'voters',
        element: <VoterList />,
        meta: {title: 'Voters'},
      },
    ]
  },
  // {
  //   path: '/register',
  //   name: 'register',
  //   element: <Register />,
  //   meta: {title: 'Register'},
  // },{
  //   path: '/voters',
  //   name: 'voters',
  //   element: <Register />,
  //   meta: {title: 'Voters'},
  // },
  {
    path: '*',
    name: '404',
    element: <Page404 />,
    meta: {
      title: 'PageNotFound',
    },
  },

]