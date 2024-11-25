<template>
    <div class="input-group mb-4">
      <select class="form-select" v-model="type">
        <option value="name">Nombre</option>
        <option value="id">Número de INE</option>
        <option value="state">Entidad</option>
      </select>
  
      <input
        v-if="type !== 'state'"
        type="text"
        class="form-control"
        v-model="query"
        :placeholder="type === 'name' ? 'Buscar por nombre...' : 'Buscar por número de INE...'"
      />
  
      <select v-if="type === 'state'" class="form-select" v-model="state">
        <option value="">Seleccione un estado</option>
        <option v-for="entidad in entidades" :key="entidad" :value="entidad">
          {{ entidad }}
        </option>
      </select>
  
      <button class="btn btn-primary" @click="emitSearch">Buscar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        type: "name",
        query: "",
        state: "",
        entidades: [
          "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
          "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima",
          "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo",
          "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca",
          "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa",
          "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán",
          "Zacatecas"
        ],
      };
    },
    methods: {
      emitSearch() {
        this.$emit("search", {
          type: this.type,
          query: this.query,
          state: this.state,
        });
      },
    },
  };
  </script>
  