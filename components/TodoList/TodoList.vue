<template>
    <div>    
        <TodoInput ></TodoInput>
        <h2>해야될 일 {{ noDoneItems.length }}</h2>
        <ul>
            <TodoListItem v-for="(todoItem, index) in noDoneItems" :key="todoItem.i" :item="todoItem" :index="index" class="todo-list" ></TodoListItem>
        </ul>   
        <br/>
        <h2>완료한 일 {{ doneItems.length }}</h2>
        <ul>
            <TodoListItem v-for="(doneItem, index) in doneItems" :key="doneItem.i" :item="doneItem" :index="index" class="todo-list" ></TodoListItem>
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
    computed: {
        todoItems() {
            return this.$store.getters.getTodoList;
        },
        doneItems() {
            return this.todoItems.filter((item) => 
                item.clear === true
            )
        },
        noDoneItems() {
            return this.todoItems.filter((item) => 
                item.clear === false
            )
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
    h2 {
        text-align:left;
        font-size:15px;
        margin:10px 0;
    }
    
</style>