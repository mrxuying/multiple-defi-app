import React, { Suspense } from 'react'
import Loading from '../components/Loading'
import { Routes, Route, useNavigate, useSearchParams, useLocation, useParams } from 'react-router-dom';

import { routes } from './routes';

//统一路由配置
function Element(props) {

  let { component: Component, meta } = props;

  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();

  //修改页面title
  let { title = 'Title' } = meta || {};
  document.title = title;

  return (
    <>
      <Component navigate={navigate} location={location} params={params} usp={usp} />
    </>

  )
};

export default function RouterView() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {
          routes.map((item) => {
            let { name, path } = item;
            return <Route key={name} path={path} element={<Element {...item} />} />;
          })
        }
      </Routes>
    </Suspense>
  )
}
