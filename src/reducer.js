import data from './data.json'

export function reducer(state, action) {
    const comment = state.byId[action.id]

    switch (action.type) {
        case 'CREATE_REPLY':
            const newId = Math.max.apply(null, state.allId) + 1
            const clonedState = structuredClone(state)
            const comment = clonedState.byId[action.id]

            if (!comment.parentId) {
                clonedState.byId[newId] = {
                    content: 'A new reply!',
                    score: 0,
                    replies: null,
                    id: newId,
                    parentId: action.id,
                    replyingTo: action.username,
                    createdAt: 'just now',
                    user: data.currentUser
                }

                clonedState.byId[action.id].replies.push(newId)
                clonedState.allId.push(newId)
            }

            return clonedState

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