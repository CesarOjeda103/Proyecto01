<template>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="record.image" class="img-fluid rounded-start" alt="Foto de {{ record.name }}" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ record.name }}</h5>
            <p class="card-text"><strong>INE:</strong> {{ record.ineNumber }}</p>
            <p class="card-text"><strong>Entidad:</strong> {{ record.state }}</p>
            <p class="card-text"><small class="text-muted"><strong>Nacimiento:</strong> {{ record.birthdate }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      record: Object,
    },
  };
  </script>
  