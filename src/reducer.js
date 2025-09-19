export function reducer(state, action) {
    switch (action.type) {
      case 'addReply':
        const comment = state.byId[action.id]
        console.log(comment)

      default:
        return state
    }
  }