<template>
    <div>    
        <TodoInput ></TodoInput>
        <ul>
            <TodoListItem v-for="(todoItem, index) in todoItems" :key="todoItem.i" :item="todoItem" :index="index" class="todo-list" ></TodoListItem>
        </ul>   
    </div>
</template>

<script>
import TodoInput from '../TodoInput/TodoInput.vue';
import TodoListItem from './TodoListItem.vue';
export default {
    components: {
        TodoListItem,TodoInput
    },  
    data() {
        return {
            
        }
    },
    watch: {
        todoItems:{
            deep:true,
            handler(){
                console.log('aaa')
            }
            
        }
    },  
    computed: {
        todoItems() {
            return this.$store.getters.getTodoList;
        },
        
    },
    methods: {
       
    }
}
</script>

<style scoped>
    .todo-list {
        text-align:left;
        padding:20px;
        font-size:13px;
        color:#999;
        padding-bottom:5px;
    }
    
</style>