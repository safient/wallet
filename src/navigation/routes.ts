import { RouteProps } from 'react-router-dom';
import { NotificationsScreen } from 'screens/notifications/notifications.screen';
import {
  AccountScreen,
  WalletClaimScreen,
  CallBackScreen,
  HomeScreen,
  LoginScreen,
  NotFoundScreen,
  RegisterScreen,
  WelcomeScreen,
  CreateWalletScreen,
  WalletOverviewScreen,
  WalletSettingsScreen,
} from '../screens';
import { RouteName } from './route-name';
import { RoutePath } from './route-path';

export interface IRoute extends RouteProps {
  path: string;
  name: RouteName;
  exact: boolean;
  component: React.ComponentType<any>;
  props?: any;
  private?: boolean;
}

export const routes: IRoute[] = [
  {
    path: RoutePath.home,
    name: RouteName.home,
    exact: true,
    private: true,
    component: HomeScreen,
    props: { name: 'HomeScreen' },
  },
  {
    path: RoutePath.login,
    name: RouteName.login,
    exact: true,
    component: LoginScreen,
  },
  {
    path: RoutePath.register,
    name: RouteName.register,
    exact: true,
    private: true,
    component: RegisterScreen,
  },
  {
    path: RoutePath.account,
    name: RouteName.account,
    exact: true,
    private: true,
    component: AccountScreen,
  },
  {
    path: RoutePath.notFound,
    name: RouteName.notFound,
    exact: true,
    component: NotFoundScreen,
  },

  {
    path: RoutePath.welcome,
    name: RouteName.welcome,
    exact: true,
    component: WelcomeScreen,
  },

  {
    path: RoutePath.createWallet,
    name: RouteName.createWallet,
    exact: true,
    private: true,
    component: CreateWalletScreen,
  },
  {
    path: RoutePath.walletOverview,
    name: RouteName.walletOverview,
    exact: true,
    private: true,
    component: WalletOverviewScreen,
  },
  {
    path: RoutePath.walletClaim,
    name: RouteName.walletClaim,
    exact: true,
    private: true,
    component: WalletClaimScreen,
  },
  {
    path: RoutePath.walletSettings,
    name: RouteName.walletSettings,
    exact: true,
    private: true,
    component: WalletSettingsScreen,
  },
  {
    path: RoutePath.callback,
    name: RouteName.callback,
    exact: true,
    component: CallBackScreen,
  },
  {
    path: RoutePath.notifications,
    name: RouteName.notifications,
    exact: true,
    private: true,
    component: NotificationsScreen,
  },
];
