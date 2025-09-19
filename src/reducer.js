export function reducer(state, action) {
    const comment = state.byId[action.id]

    switch (action.type) {
        case 'CREATE_REPLY':
            if (comment.parentId) {
                const parentComment = state.byId[comment.parentId]
                console.log(parentComment)
            }

            console.log(comment)

            return state

        case 'INCREMENT_SCORE': {
            const clonedState = structuredClone(state)
            
            clonedState.byId[action.id] = {
                ...comment,
                score: comment.score == action.currentScore ? comment.score + 1 : action.currentScore
            }

            return clonedState
        }

        case 'DECREMENT_SCORE': {
            const clonedState = structuredClone(state)

            clonedState.byId[action.id] = {
                ...comment,
                score: comment.score === action.currentScore ? comment.score - 1 : action.currentScore
            }

            return clonedState
        }

        default:
            return state
    }
  }