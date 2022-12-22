
export const state = () => ({
    todoLists: [],

})

export const getters = {
    getTodoList:(state,getters) => {
        return state.todoLists;
    }
}

export const mutations = {
    addTodo(state,content) {
        state.todoLists.push(content)
    },
    removeTodo(state,idx) {
        state.todoLists.splice(idx,1)
    },
    clearAll(state) {
        state.todoLists = []
    }
}

