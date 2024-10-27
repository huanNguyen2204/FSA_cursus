import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components importing
// import ScrollToTop from '@/components/shared/ScrollToTop/scrollToTop';
import { ENV_URL, ENV_LAYOUT, ENV_FIRSTCOME, ENV_SUBLIST } from './env/envs';


const Routers = () => {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        {/* Redirect the / to SETTING_FIRSTCOME */}
        <Route path="/" element={<Navigate to={ENV_FIRSTCOME?.url} />} />

        {/* Setting FIRSTCOME */}
        <Route path={ENV_FIRSTCOME?.url} element={ENV_FIRSTCOME?.page} />

        {/* Setting SubList */}
        <Route path={ENV_URL + '/layout'} element={ENV_LAYOUT}>
          {ENV_SUBLIST.map((item, index) => (
            <Route key={index} path={item.url} element={item.page} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
