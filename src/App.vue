<template>
  <div id="app" class="container">
    <h1 class="mt-5 text-center">Consulta de Credenciales INE</h1>

    <!-- Barra de búsqueda -->
    <div class="row mb-4">
      <div class="row justify-content-center mt-4">
        <div class="col-md-8">
          <input
            v-model="searchQuery"
            type="text"
            class="form-control"
            placeholder="Buscar por nombre, número de INE o entidad"
          />
        </div>
      </div>
    </div>

    <!-- Lista de resultados -->
    <ul v-if="filteredCredenciales.length > 0" class="list-group">
      <li
        v-for="(credencial, index) in filteredCredenciales"
        :key="index"
        class="list-group-item mb-3 shadow-sm"
      >
        <div>
          <strong>Nombre:</strong> {{ credencial.nombre }}
        </div>
        <div>
          <strong>Número de INE:</strong> {{ credencial.numero_ine }}
        </div>
        <div>
          <strong>Entidad:</strong> {{ credencial.entidad }}
        </div>
      </li>
    </ul>

    <!-- Mensaje si no hay resultados -->
    <div v-else class="text-center">
      <p>No se encontraron resultados.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default {
  name: 'App',
  setup() {
    // Reactividad usando ref
    const searchQuery = ref(''); // Valor para la búsqueda
    const credenciales = ref([]); // Datos de las credenciales obtenidos desde Firebase

    // Obtener credenciales desde Firebase
    const fetchCredenciales = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'credenciales'));
        credenciales.value = querySnapshot.docs.map(doc => doc.data());
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    // Computed para filtrar las credenciales según la búsqueda
    const filteredCredenciales = computed(() => {
      return credenciales.value.filter(credencial => {
        const query = searchQuery.value.toLowerCase();
        return (
          credencial.nombre.toLowerCase().includes(query) ||
          credencial.numero_ine.includes(query) ||
          credencial.entidad.toLowerCase().includes(query)
        );
      });
    });

    // Método de búsqueda (este solo está por si quieres agregar lógica adicional)
    const buscar = () => {
      // La búsqueda se realiza automáticamente con la propiedad computada
      console.log('Buscando...');
    };

    // Cargar las credenciales cuando el componente se monte
    onMounted(() => {
      fetchCredenciales();
    });

    return {
      searchQuery,
      filteredCredenciales,
      buscar,
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.input-group {
  display: flex;
  justify-content: space-between;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
}

strong {
  color: #007bff;
}
</style>
