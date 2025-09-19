export function reducer(state, action) {
    switch (action.type) {
      case 'addReply':
        const targetId = state.allId.find(id => id === action.id)
        console.log(state.byId[targetId])

      default:
        return state
    }
  }