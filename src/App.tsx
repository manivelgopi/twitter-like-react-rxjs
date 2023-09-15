import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import './scss/App.scss';

const Home = React.lazy(() => import('./pages/home/HomePage'));
const Profile = React.lazy(() => import('./pages/profile/ProfilePage'));
const Layout = React.lazy(() => import('./pages/layout/LayoutPage'));
// const ErrorPage = React.lazy(() => import('./pages/404'));

export default function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
          </Route>

          <Route path="/profile" element={<Layout />} >
            <Route index element={<Profile />} />
          </Route>

          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route path="*" element={<Layout />} >
            <Route element={<Home />} />
          </Route>
        </Routes>
      </React.Suspense>

    </div>
  );
}
