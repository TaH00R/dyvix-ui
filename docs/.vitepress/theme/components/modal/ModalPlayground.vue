<script setup>
import { onMounted, ref } from 'vue';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ModalPlayground from './ModalPlayground';

const container = ref(null);

onMounted(() => {
  ReactDOM.createRoot(container.value).render(
    React.createElement(ModalPlayground)
  );
});
</script>

<template>
  <div ref="container"></div>
</template>
