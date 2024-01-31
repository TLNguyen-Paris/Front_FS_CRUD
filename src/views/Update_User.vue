<template>
  <div>
    <HeaderView />
    <h1>Update User Page {{ this.$route.params.id }}</h1>
    <p>{{ route.params }}</p>
    <p>{{ user }}</p>
  </div>
</template>

<script setup>
import HeaderView from "./../components/Header.vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const route = useRoute();

const user = ref();

const fetchUser = () => {
  axios
    .get(
      `${import.meta.env.VITE_APP_BACKEND_URL}fs/api/find-user/${
        route.params.id
      }`
    )
    .then((res) => {
      console.log(res.data);
      user.value = res.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

onMounted(() => {
  fetchUser();
});
</script>
