const defaultState = [
    {
        id: 0,
        task: 'Test this Todo Page',
        completed: false
    },
    {
        id: 1,
        task: 'Learn Redux',
        completed: false
    },
    {
        id: 2,
        task: 'Learn React',
        completed: true
    }
]

function todos (state = defaultState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.todo]
        case 'TOGGLE_TODO':
            const newState = state.map(todo => {
                if(todo.id === action.id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
            return newState
        case 'DELETE_TODO':
            const deleteState = state.map(todo => {
                if(todo.id !== action.id) {
                    return todo;
                }
                
            })
            return deleteState
            
        default:
            return state
    }
}

export default todos