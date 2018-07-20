<template>
    <example-component></example-component>
</template>

<script>
    import ExampleComponent from '../components/ExampleComponent.vue'
    
    export default {
        components: {
            ExampleComponent
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
