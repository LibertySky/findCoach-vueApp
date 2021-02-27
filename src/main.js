import { createApp } from 'vue';

import router from './router.js';
import store from './store/index';
import App from './App.vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const app = createApp(App);

// Automatic Global Registration of Base Components
const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  true,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );

  // Register component globally
  app.component(componentName, componentConfig.default || componentConfig);
});

// check&confirm components registration
// console.log(requireComponent.keys());

app.use(router);
app.use(store);

app.mount('#app');
