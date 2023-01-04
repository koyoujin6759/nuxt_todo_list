<template>
  <div>
    <input v-model="newTodoItem" placeholder="Enter your task" type="text" @keypress.enter="addTodo" >
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
            const data = {
                text:this.newTodoItem,
                clear:false
            }
            this.$store.commit('addTodo',data)
            this.clearInput();           
            // this.$emit('addTodoItem') // 이벤트를 todoinput 컴포넌트를 쓰는 부모컴포넌트로 올림
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