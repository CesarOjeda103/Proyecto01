<template>
    <div class="alert alert-info">
      Se encontraron {{ count }} registros.
    </div>
  </template>
  
  <script>
  export default {
    props: {
      count: Number,
    },
  };
  </script>
  