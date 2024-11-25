<template>
    <div>
      <h1>Firestore Data</h1>
      <ul v-if="data.length">
        <li v-for="item in data" :key="item.id">
          {{ item.nombre }} - {{ item.numero_ine }} - {{ item.entidad }}
        </li>
      </ul>
      <p v-else>No data found.</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { collection, getDocs } from 'firebase/firestore';
  import { db } from '../firebase';
  
  export default {
    name: 'FirestoreData',
    setup() {
      const data = ref([]);
  
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'credenciales'));
          if (!querySnapshot.empty) {
            data.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log(data.value); // Log the data for debugging
          } else {
            console.log('No documents found');
          }
        } catch (error) {
          console.error('Error getting documents:', error);
        }
      };
  
      onMounted(fetchData);
  
      return {
        data,
      };
    },
  };
  </script>
  