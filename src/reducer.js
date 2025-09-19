export function reducer(state, action) {
    const comment = state.byId[action.id]

    switch (action.type) {
        case 'CREATE_REPLY':
            console.log(comment)

        case 'INCREMENT_SCORE':
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.id]: {
                        ...comment,
                        score: comment.score + 1
                    }
                }
            }

        default:
            return state
    }
  }