import { useReducer } from 'react'
import data from './data.json'
import { createContext } from 'react'
import Card from './components/Card'
import { reducer } from './reducer'
import { useContext } from 'react'

export const StateContext = createContext()

const Comment = ({
  comment
}) => {
  const {state} = useContext(StateContext)
  const replies = state.allId.filter(id => state.byId[id].parentId === comment.id)

  return (
    <div className="comment">
      <Card item={comment} />

      <div className="replies-list">
        {replies.map(id => (
          <Card
            item={state.byId[id]}
            key={id}
          />
        ))}
      </div>
    </div>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, data.comments)
  const comments = state.allId.filter(id => !state.byId[id].parentId)

  return (
    <div className="App">
      <StateContext.Provider value={{state, dispatch}}>
        {comments.map(id => (
          <Comment
            comment={state.byId[id]}
            key={id}
          />
        ))}
      </StateContext.Provider>
    </div>
  )
}

export default App