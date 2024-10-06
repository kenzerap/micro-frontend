const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'dashboard',

  exposes: {
    './DashboardApp': './src/components/dashboard/dashboard.component.ts',
    './BootstrapApp': './src/bootstrapExternal.ts',
    './DashboardAppRoutes': './src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
