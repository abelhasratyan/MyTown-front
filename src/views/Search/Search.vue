<template>
  <div>
    <div class="container">
      <div class="row my-3">
        <Filters />
        <Products />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "./SearchComponents/Filters";
import Products from "./SearchComponents/Products";

export default {
  name: "Search",
  components: {
    Filters,
    Products
  }
};
</script>