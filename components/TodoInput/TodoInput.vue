<template>
  <div>
    <input type="text" v-model="newTodoItem" @keypress.enter="addTodo" placeholder="Enter your task">
    <!-- <button class="btn-add" v-on:click="addTodo" >add</button> -->    
    <span @click="addTodo">
        <i class="fas fa-plus addBtn" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem : '',
        }
    },
    methods: {
        addTodo() {
            console.log(this.newTodoItem)
            // localStorage.setItem(this.newTodoItem, this.newTodoItem)
            this.$store.commit('addTodo',this.newTodoItem)
            this.clearInput();           
            this.$emit('addTodoItem') // 이벤트를 todoinput 컴포넌트를 쓰는 부모컴포넌트로 올림
        },
        clearInput() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
    input {
        display:inline-block;
        border:1px solid #ddd;
        width:80%;
    }
</style>