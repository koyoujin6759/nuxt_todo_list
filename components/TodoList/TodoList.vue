<template>
    <div>    
        <TodoInput ></TodoInput>
        <ul>
            <TodoListItem v-for="(todoItem, index) in todoItems" ref="todoList" :key="index" :text="todoItem === '' ? undefined  : todoItem" :item="index" class="todo-list" @update="changeText"></TodoListItem>
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
            newData: '',
        }
    },
    computed: {
        todoItems() {
            return this.$store.getters.getTodoList;
        }
    },
    methods: {
        changeText() {
            console.log(this.newItem)
        }
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