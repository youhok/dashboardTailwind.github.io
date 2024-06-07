<template>
  <!-- main content page -->
  <div class="w-full p-4">
    <label for="inputname" class="block text-gray-800 font-semibold text-sm"
      >Name</label
    >
    <div class="mt-2">
      <input
        type="text"
        name="inputname"
        v-model="student.name"
        class="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
      />
    </div>
    <label class="pt-1 block text-gray-500 text-sm">gender</label>
    <select
      v-model="student.gender"
      id="currency"
      name="currency"
      class="rounded-md border-0 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
    >
      <option>Male</option>
      <option>Girl</option>
    </select>

    <label for="inputname" class="block text-gray-800 font-semibold text-sm"
      >phone</label
    >
    <input
      type="number"
      v-model="student.phone"
      name="inputname"
      class="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
    />

    <div class="mt-2">
      <label class="pt-1 block text-gray-500 text-sm">Address</label>
      <textarea
        rows="4"
        v-model="student.address"
        name="comment"
        id="comment"
        class="lu tn adu afa arq axv bbn bbt bbx bcf bgd bne bnf bnr cid cif w-full"
      ></textarea>
    </div>

    <!-- button -->
    <button class="btn-17" @click="saveOrUpdate">
      <span class="text-container">
        <span class="text">{{ isUpdateMode ? "Update" : "Save" }}</span>
      </span>
    </button>

    <!-- table -->

    <table class="content-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Gender</th>
          <th>phone</th>
          <th>address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in studentList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.gender }}</td>
          <td>{{ student.phone }}</td>
          <td>{{ student.address }}</td>
          <td class="">
            <button
              @click="edit(student)"
              class="middle none center rounded-lg bg-orange-500 py-2 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Edit
            </button>
            <button
              @click="remove(index)"
              class="middle none center mr-4 rounded-lg bg-red-500 py-2 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            > 
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const student = ref({
  id: "",
  name: "",
  gender: "",
  phone: "",
  address: "",
});

const studentList = ref([]);
const isUpdateMode = ref(false);
let selectedIndex = null;

const saveOrUpdate = () => {
  if (isUpdateMode.value) {
    studentList.value[selectedIndex] = { ...student.value };
    isUpdateMode.value = false;
  } else {
    student.id = studentList.value.length + 1;
    studentList.value.push({ ...student.value });
  }

  student.value = {
    id: "",
    name: "",
    gender: "",
    phone: "",
    address: "",
  };
};

const edit = (selectedStudent) => {
  student.value = { ...selectedStudent };
  isUpdateMode.value = true;
  selectedIndex = studentList.value.indexOf(selectedStudent);
};

const remove = (index) => {
  studentList.value.splice(index, 1);
};


</script>



<style scope>
/* button */
.btn-17,
.btn-17 *,
.btn-17 :after,
.btn-17 :before,
.btn-17:after,
.btn-17:before {
  border: 0 solid;
  box-sizing: border-box;
}

.btn-17 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
  text-transform: uppercase;
}

.btn-17:disabled {
  cursor: default;
}

.btn-17:-moz-focusring {
  outline: auto;
}

.btn-17 svg {
  display: block;
  vertical-align: middle;
}

.btn-17 [hidden] {
  display: none;
}

.btn-17 {
  border-radius: 99rem;
  border-width: 2px;
  padding: 0.8rem 3rem;
  z-index: 0;
}

.btn-17,
.btn-17 .text-container {
  overflow: hidden;
  position: relative;
}

.btn-17 .text-container {
  display: block;
  mix-blend-mode: difference;
}

.btn-17 .text {
  display: block;
  position: relative;
}

.btn-17:hover .text {
  -webkit-animation: move-up-alternate 0.3s forwards;
  animation: move-up-alternate 0.3s forwards;
}

@-webkit-keyframes move-up-alternate {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(80%);
  }

  51% {
    transform: translateY(-80%);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes move-up-alternate {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(80%);
  }

  51% {
    transform: translateY(-80%);
  }

  to {
    transform: translateY(0);
  }
}

.btn-17:after,
.btn-17:before {
  --skew: 0.2;
  background: #fff;
  content: "";
  display: block;
  height: 102%;
  left: calc(-50% - 50% * var(--skew));
  pointer-events: none;
  position: absolute;
  top: -104%;
  transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
  transition: transform 0.2s ease;
  width: 100%;
}

.btn-17:after {
  --progress: 0%;
  left: calc(50% + 50% * var(--skew));
  top: 102%;
  z-index: -1;
}

.btn-17:hover:before {
  --progress: 100%;
}

.btn-17:hover:after {
  --progress: -102%;
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
