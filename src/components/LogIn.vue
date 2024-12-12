
<template>
  <router-link style="display: flex" to="/">
    <button style="margin: 15px; margin-left: auto;" type="button" class="btn btn-warning">Registration</button>
  </router-link>
  <center>
    <div style="background-color: gray; width: 300px; border-radius: 20px; padding: 10px" class="entry-content">
      <div class="LogIn">
        <h1>Вход</h1>
        <form @submit.prevent="LogIn">
          <p>
            <input type="text" v-model="username" placeholder="Логин" required />
          </p>
          <p>
            <input type="password" v-model="password" placeholder="Пароль" required />
          </p>
          <p class="remember_me">
            <label><input type="checkbox" name="remember_me" />Запомнить меня</label>
          </p>
          <p class="submit">
            <button style="padding: 10px; background-color: blue; border-radius: 10px" type="submit">Войти</button>
          </p>
        </form>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </div>
      <div class="clearfix"></div>
    </div>
  </center>

</template>

<script>
export default {
  name: "API2Vue",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    async LogIn() {
      try {
        const response = await fetch("http://localhost:8000/api/user/LogIn", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.username,
            password: this.password,
          }),
        });

        if (!response.ok) {
          // Если ответ не успешен, выведем соответствующее сообщение
          const errorData = await response.json();
          this.errorMessage = errorData.message || "Ошибка входа"; // Предполагается, что API возвращает сообщение об ошибке
          return;
        }

        const data = await response.json();
        this.token = data.token; // Сохраняем токен
        localStorage.setItem("token", this.token); // Сохраняем токен в локальном хранилище
        this.$router.push('/pays');//перенос на др. страницу
        // Дополнительные дейсвия после успешного входа, например, перенаправление
      } catch (error) {
        this.errorMessage = "Ошибка входа";
        console.error(this.errorMessage, error);
      }
    },
  },
};
</script>

<style>
/* Вы можете добавить стили для компонента здесь */
.error {
  color: red;
}
</style>
