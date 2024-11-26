import Staking from "../pages/Staking"
import DiscreteStaking from "../pages/DiscreteStaking"
import { Navigate } from "react-router-dom"

export const routes = [
  {
    path: 'staking',
    element: <Staking />
  },
  {
    path: 'discretestaking',
    element: <DiscreteStaking />
  },
  {
    path: '/',
    element: <Navigate to='/staking'/>
  },

]