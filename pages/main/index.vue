<template>
    <div>
      <div class="main-page">
         <TodoInput @addTodoItem="requestTodo"></TodoInput> <!-- todoinput 자식 컴포넌트에서 올라온 이벤트 받아서 연결하고 requestTodo 를 실행함 -->
         <TodoList ref="todoList"></TodoList>
         <br></br>
         <button @click="clearAll" class="btn-clear">clear all</button>
      </div>    
    </div>
  </template>
  
  <script>
  import TodoInput from '../../components/TodoInput/TodoInput.vue';
  import TodoList from '../../components/TodoList/TodoList.vue';
  export default {
      data(){
        return {

        }
      },
      components: {TodoInput,TodoList},
      methods: {
        clearAll() {
            this.$store.commit('clearAll')
            this.requestTodo()
        },
        requestTodo() {
            // this.$refs.todoList.getTodo();
            return this.$store.getters.getTodoList
        }
      }
  }
  </script>
  
  <style scoped>      
      .main-page {
        width:380px; 
        margin:0 auto;
        min-height:500px;
        background:#fff;
        padding:20px; 
        text-align:center;
        box-sizing: border-box;
      }
      .btn-clear {
        width:100%;
        border:1px solid #ddd;
        background:#eee;
        padding:0 20px;
        box-sizing:border-box;
      }
  </style>