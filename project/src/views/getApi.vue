<template>
  <table class="content-table">
    <thead>
      <tr>
        <th>#</th>
        <th>photo</th>
        <th>Name</th>
        <th>description</th>
        <th>title</th>
        <th>price</th>
        <th>more detail</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td><img :src="product.image" alt="" class="image" /></td>
        <td>{{ product.category }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>
          
          <button
            class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true" @click="goToProductDetail(product.id)">
            More Detail
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const products = ref();
const router = useRouter();
onMounted(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      products.value = json;
      console.log(products.value); // Log data inside the then block
    });
});

const goToProductDetail = (productId) => {
  router.push({ name: "ProductDetail", params: { id: productId } });
};

</script>

<style scoped>
.image {
  height: 70px;
  width: auto;
  border-radius: 5px;
}

/* table */
.content-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  /* min-width: 400px; */
  width: 100%;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.content-table thead tr {
  background-color: #5465ff;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.content-table tbody tr:last-of-type {
  border-bottom: 2px solid #5465ff;
}

.content-table tbody tr.active-row {
  font-weight: bold;
  /* color: #009879; */
}
</style>