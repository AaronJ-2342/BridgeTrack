<script setup></script>

<template>
  <main>
    <img id="mainImg" src="@/assets/studentsStudying.jpg" alt="Students in class" />

    <form id="formBox">
      <h2>
        Welcome to Bridge Track <br />
        Prepritory school!
      </h2>

      <label class="Lbl">Username:</label>
      <input type="text" id="name" placeholder="Username example" />
      <!-- change this later -->

      <label id="pswd_Lbl" class="Lbl">Password:</label>
      <input type="text" id="pswd" />

      <br /><br />
      <input type="submit" value="Login" id="login" />

      <a href="/register" alt="Create Account" id="act">Create Account</a>
    </form>
  </main>
</template>

<style scoped>
#mainImg {
  object-fit: cover;
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
}

#formBox {
  background: white;
  padding: 20px;
  width: 350px;
  border-radius: 8px;
  box-shadow: 0 0 15px gray;
  position: absolute;
  top: 30%;
  left: 38%;
}

#name {
  border-radius: 8px;
  font-size: 20px;
}

#pswd {
  border-radius: 8px;
  position: relative;
  left: 3px;
  top: 4px;
  font-size: 20px;
}

#pswd_Lbl {
  position: relative;
  top: 4px;
}

#login {
  border-radius: 8px;
  font-size: 17px;
  position: relative;
  left: 280px;
}

#act {
  position: relative;
  right: 60px;
  text-decoration: none;
}

.Lbl {
  font-size: 20px;
}
</style>
