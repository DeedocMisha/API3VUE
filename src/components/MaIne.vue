<template>
  <router-link style="display: flex" to="/LogIn">
  <button style="margin:15px;margin-left: auto"  type="button" class="btn btn-primary" >LogIn</button>
  </router-link>
  <div class="entry-content">
    <div class="registration">
      <h1>Регистрация</h1>
      <form @submit.prevent="registration">
        <p>
          <input type="text" v-model="username" placeholder="Логин" />
        </p>
        <p>
          <input type="password" v-model="password" placeholder="Пароль" />
        </p>

        <p class="remember_me">
          <label><input type="checkbox" name="remember_me" />Запомнить меня</label>
        </p>
        <p class="submit">
          <input type="submit" value="Зарегистрироваться" />
        </p>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
export default {
  name: "API2Vue",
  data() {
    return {
      username: "",
      surname: "",
      password: "",
      token: null,
      errorMessage: null,
    };
  },
  methods: {
    async registration() {
      try {
        const response = await fetch("http://localhost:8000/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", //Важно чтобы не было undefind
          },
          body: JSON.stringify({
            //Преобразуем в json
            name: this.username,
            password: this.password,
          }),
        });

        const data = await response.json();
        this.token = data.token;
        console.log("Регистрация успешна!");
        // Дополнительные действия после успешной регистрации
      } catch (error) {
        this.errorMessage = "Ошибка регистрации";
        console.error(this.errorMessage);
      }
    },
  },
};
</script>
