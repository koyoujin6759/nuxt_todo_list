<template>
  <div>
    <ul class="todo-list">
        <li v-for="(todoItem, idx) in todoItems" :key="idx">
            {{ todoItem }}
            <span class="btn-remove" @click="removeTodo(todoItem,idx)">
                <i class="fas fa-trash-alt"></i>
            </span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        todoItems() {
            return this.$store.getters.getTodoList;
        }
    },
    created() {
        
    },
    methods: {
        removeTodo(todoItem, idx) {
            this.$store.commit('removeTodo',idx)
            
        },
        
    }
}
</script>

<style scoped>
    .todo-list {
        text-align:left;
        padding:20px;
    }
    .todo-list li {
        font-size:13px;
        color:#999;
        padding-bottom:5px;
    }
</style>