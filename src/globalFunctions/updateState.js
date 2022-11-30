export default function updateState(state, newState) {
    return state(previousState=>{
        return {
            ...previousState,
            ...newState
        }
    })
}