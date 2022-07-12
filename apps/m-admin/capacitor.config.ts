import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.m_admin.app',
  appName: 'm-admin',
  webDir: 'dist/apps/m-admin',
  bundledWebRuntime: false,
  android: { path: 'android/m-admin' },
  ios: { path: 'ios/m-admin' },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: false,
      backgroundColor: '#ffffffff',
    },
  },
};

export { config };
