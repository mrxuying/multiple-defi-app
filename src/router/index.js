import React, { Suspense } from 'react'
import Loading from '../components/Loading'
import { useRoutes } from 'react-router-dom';

import { routes } from './routes';


export default function RouterView() {
  const elements = useRoutes(routes)
  return (
    <Suspense fallback={<Loading spinning={true} />}>
      {elements}
    </Suspense>
  )
}
