import './assets/main.css'; // Подключение основного CSS
import './style.css'; // Подключение других стилей

import { createApp } from 'vue'; // Импорт функции для создания приложения Vue
import App from './components/App.vue'; // Импорт основного компонента
import router from './router'; // Импорт маршрутизатора

// Создаем экземпляр приложения Vue
const app = createApp(App);

// Используем маршрутизатор
app.use(router);

// Ждем, пока вся страница загрузится, перед монтированием приложения
window.addEventListener('DOMContentLoaded', () => {
  app.mount('#app');
});



