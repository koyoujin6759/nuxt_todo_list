<template>
  <div>
    <li >
        {{ text }} 
        <span class="btn-remove" @click="removeTodo(item)">
            <i class="fas fa-trash-alt"></i>
        </span>
    </li> 
  </div>
</template>

<script>
export default {    
    props: {
        text: {
            type: String,
            required: true,
            default: "none"
        },
        item: {
            type: Number,
            required: true,
            default: null
        }
    },
    methods: {
        removeTodo(item) {
            this.$store.commit('removeTodo',item)         
        },        
    }
}
</script>

<style>

</style>