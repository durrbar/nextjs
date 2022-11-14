import PropTypes from 'prop-types';
// guards
import AuthGuard from '../guards/AuthGuard';
// components
import MainLayout from './main';
import DashboardLayout from './dashboard';
import LogoOnlyLayout from './LogoOnlyLayout';

// import MenuConfig from './main/MenuConfig';
import wwwDurrbarNavConfig from './main/wwwDurrbarNavConfig';

import dashboardNavConfig from './dashboard/navbar/DashboardNavConfig';
import accountsNavConfig from './dashboard/navbar/AccountsNavConfig'

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navVariant: PropTypes.oneOf(['wwwDurrbar', 'wwwTasfiaShopping', 'wwwNC', 'accountsDurrbar', 'docsDurrbar', 'supportDurrbar']),
  variant: PropTypes.oneOf(['dashboard', 'main', 'logoOnly']),
  siteName: PropTypes.oneOf([ 'tasfiashopping', 'nandonicchoya' ]),
};

export default function Layout({ variant = 'dashboard', navVariant = 'dashboardDurrbar', siteName, children }) {
  
  if (variant === 'logoOnly') {
    return <LogoOnlyLayout siteName={siteName}> {children} </LogoOnlyLayout>;
  }

  if (variant === 'main') {
    if (navVariant === 'wwwTasfiaShopping') {
      return <MainLayout siteName={siteName} navConfig={wwwDurrbarNavConfig}>{children}</MainLayout>;
    }

    if (navVariant === 'wwwNC') {
      return <MainLayout siteName={siteName} navConfig={wwwDurrbarNavConfig}>{children}</MainLayout>;
    }

    if (navVariant === 'wwwDurrbar') { 
      return <MainLayout navConfig={wwwDurrbarNavConfig}>{children}</MainLayout>;
    }
  }

  if (variant === 'dashboard') {
    if (navVariant === 'accountsDurrbar') {
      return (
        <AuthGuard>
          <DashboardLayout navConfig={accountsNavConfig}> {children} </DashboardLayout>
        </AuthGuard>
      )
    }

    if (navVariant === 'docsDurrabr') {
      return (
        <AuthGuard>
          <DashboardLayout navConfig={dashboardNavConfig}> {children} </DashboardLayout>
        </AuthGuard>
      )
    }

    if (navVariant === 'supportDurrabr') {
      return(
        <AuthGuard>
          <DashboardLayout navConfig={dashboardNavConfig}> {children} </DashboardLayout>
        </AuthGuard>
      )
    }
  };

  return (
    <AuthGuard>
      <DashboardLayout navConfig={dashboardNavConfig}> {children} </DashboardLayout>
    </AuthGuard>
  );
}
