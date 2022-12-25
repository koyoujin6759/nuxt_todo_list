
export const state = () => ({
    todoLists: [],
})

export const getters = {
    getTodoList:(state,getters) => {
        return state.todoLists;
    },
}

export const mutations = {
    addTodo(state,content) {
        state.todoLists.push(content)
    },
    removeTodo(state,index) {
        state.todoLists.splice(index,1)
    },
    clearAll(state) {
        state.todoLists = []
    },
    editDone(state,editItem) {
        state.todoLists.innerText = editItem
        console.log(state.todoLists)
    }
}

export const actions = {
    
}
