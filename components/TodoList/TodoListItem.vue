<template>
  <div>
    <li >
        <i class="fa-solid fa-check checkBtn" @click="chkTodo = !chkTodo " :class="{done:chkTodo}"></i>
        <p v-show="!edit" :class="{done:newText.done}">{{ text }}</p>
        <input v-show="edit" v-model="newText" type="text">
        <div class="btn-area">
            <span class="btn-edit" @click="editTodo(text)" v-show="!edit"> 
                <i class="fa-solid fa-pen"></i>
            </span>
            <span class="btn-done" @click="editDone()" v-show="edit">
                <i class="fa-solid fa-circle-check"></i>
            </span>
            <span class="btn-remove" @click="removeTodo(item)">
                <i class="fas fa-trash-alt"></i>
            </span>            
        </div>        
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
        },
    },
    data() {
        return {
            editTodoItem:'',
            edit: false,
            chkTodo: false,
        }
    },
    computed: {
        newText: {
            get() {
                // console.log('get')
                return this.text;
            },
            set (editTodoItem) {
                this.editTodoItem = editTodoItem
            }
        }
    },
    methods: {
        removeTodo(item) {
            this.$store.commit('removeTodo',item)         
        },      
        editTodo() {
            this.edit = true;
        },
        editDone() {
            this.edit = false;
            const editItem = this.editTodoItem;
            console.log(editItem)
            // this.$emit('edit-item',editItem)
            this.$store.commit('editDone',editItem)           
        },
        
    }
}
</script>

<style>
    .todo-list li {
        position:relative;
        list-style: none;
        padding-right:50px;
    }
    .todo-list li input[type="checkbox"] {
        display:inline-block;
        vertical-align: middle;
    }
    .todo-list li input[type="text"] {
        display:inline-block;
        vertical-align: middle;
        border:1px solid #ccc;
        width:90%;
    }
    .todo-list li p {
        display:inline-block;
    }
    .todo-list li .checkBtn {
        cursor: pointer;
    }
    .todo-list li .checkBtn.done {
        font-weight:900;
        color:#000;
    }
    .todo-list li .checkBtn.done + p {
        font-weight:900;
        color:#000;
        text-decoration:line-through
    }
    .btn-area {
        position:absolute; 
        right:0; 
        top:0;
    }
    .btn-area span {
        cursor:pointer;
        padding:0 2px;
    }
    
</style>