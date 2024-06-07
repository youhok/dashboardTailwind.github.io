<template>
    <div>
        {{ productId }}
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const productId = ref();

onMounted(() => {
  // Fetch product details based on the ID from the route params
  productId.value = router.currentRoute.value.params.id;
  // Example: Fetch product details from API using productId
  // FetchProductDetails(productId.value);
}); 

</script>

<style  scoped>

</style>