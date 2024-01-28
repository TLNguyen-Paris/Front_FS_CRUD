<template>
  <div>
    <HeaderView />
    <h1>Read User Page</h1>
    <main>
      {{ Users }}
    </main>
  </div>
</template>

<script setup>
import HeaderView from "./../components/Header.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const Users = ref([]);

const fetchUsers = () => {
  axios
    .get(`${import.meta.env.VITE_APP_BACKEND_URL}fs/api/get-user`)
    .then((res) => {
      console.log(res);
      Users.value = res.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(() => {
  fetchUsers();
});
</script>
