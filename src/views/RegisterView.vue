<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function returnHome() {
  router.push('/')
}
</script>
<template>
  <img id="mainImg" src="@/assets/Forest.jpg" alt="Forest background" />

  <form id="formBox">
    <div class="main">
      <h1 id="acnt">Create Account</h1>
      <input class="innerMain" type="text" placeholder="First Name" />
      <input class="innerMain" type="text" placeholder="Last Name" />
      <input class="innerMain" type="text" placeholder="email" />
      <input class="innerMain" type="text" placeholder="phone" />
      <h3>
        Are you 18 years or older? <span><input type="checkbox" /></span>
      </h3>
      <input class="innerMain" type="text" placeholder="birthdate" />
      <!--Needs a calendar or a scroll menu with the given month days and years, hide on load and only show if the checkbox above is checked-->
      <button @click="returnHome" id="return">Return</button>
      <input type="submit" value="Create" id="create" />
    </div>
  </form>
</template>

<style scoped>
#mainImg {
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

#formBox {
  background-color: white;
  padding: 20px;
  width: 400px;
  border-radius: 8px;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 50%;
  left: 50%;
  box-shadow: 0 0 15px gray;

  transform: translate(-50%, -50%);
}

#acnt {
  display: flex;
  justify-content: center;
}

#create {
  border-radius: 8px;
  font-size: 17px;
  width: 120px;
  position: relative;
  left: 130px;
  bottom: 20px;
}

#return {
  border-radius: 8px;
  font-size: 17px;
  width: 120px;
  position: relative;
  top: 6px;
}

.main {
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.innerMain {
  border-radius: 8px;
  font-size: 20px;
  position: relative;
  margin-bottom: 6px;
}
</style>
