const defaultState = [
    {
        id: 0,
        tast: 'Test this Todo Page',
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
        default:
            return state
    }
}

export default todos