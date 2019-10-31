<template>
    <div>
        <Filters />
        <Products />
    </div>
</template>

<script>
import Filters from './SearchComponents/Filters'
import Products from './SearchComponents/Products'

export default {
    name: 'Search',
    components: {
        Filters,
        Products
    }
}
</script>