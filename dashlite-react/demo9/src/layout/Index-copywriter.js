import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/SidebarCopywriter";
import Head from "./head/Head";
import Header from "./header/HeaderCopywriter";
import Footer from "./footer/Footer";
import AppRoot from "./global/AppRoot";
import AppMain from "./global/AppMain";
import AppWrap from "./global/AppWrap";

import FileManagerProvider from "../pages/app/file-manager/components/Context";

const Layout = ({title, ...props}) => {
  return (
    <FileManagerProvider>
      <Head title={!title && 'Loading'} />
      <AppRoot>
        <AppMain>
          <Sidebar fixed />
          <AppWrap>
            <Header fixed />
              <Outlet />
            <Footer />
          </AppWrap>
        </AppMain>
      </AppRoot>
    </FileManagerProvider>
  );
};
export default Layout;
