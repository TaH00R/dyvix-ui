import DefaultTheme from 'vitepress/theme';
import ButtonPlayground from './components/button/ButtonPlayground.vue';
import ModalPlayground from './components/modal/ModalPlayground.vue';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ButtonPlayground', ButtonPlayground);
    app.component('ModalPlayground', ModalPlayground);
  }
};
