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
        default:
            return state
    }
}

export default todos