
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
    editDone(state,editData) {
        const {index, item} = editData
        state.todoLists[index].text = item.text
        console.log(state.todoLists)
    },
    DoneTodo(state,index) {
        state.todoLists[index].clear = !state.todoLists[index].clear
    }
}

export const actions = {
    
}
