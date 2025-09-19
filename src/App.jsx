import data from './data.json'

const Card = ({
  item,
  replyDispatch,
  editDispatch
}) => {
  return (
    <div className="card">
      <div className="score-component">
        <button>
          <div className="icon-img">
            <img src="/images/icon-plus.svg" alt="" />
          </div>
        </button>

        <span>{item.score}</span>

        <button>
          <div className="icon-img">
            <img src="/images/icon-minus.svg" alt="" />
          </div>
        </button>
      </div>

      <div className="content">
        <div className="profile-header">
          <div className="user-profile">
            <div className="user-avatar">
              <img src={item.user.image.png} alt="" />
            </div>

            <h3>{item.username}</h3>
          </div>

          <span className="comment-date">{item.createdAt}</span>

          <div className="actions">
            <button onClick={() => replyDispatch(item)}>
              <div className="icon-img">
                <img src="/images/icon-reply.svg" alt="" />
              </div>

              Reply
            </button>

            <button onClick={() => editDispatch(item)}>
              <div className="icon-img">
                <img src="/images/icon-edit.svg" alt="" />
              </div>

              Edit
            </button>
          </div>
        </div>

        {item.replyingTo ? (
          <p>
            <span>@{item.replyingTo} </span>
            {item.content}
          </p>
        ) : (
          <p>{item.content}</p>
        )}
      </div>
    </div>
  )
}

const Comment = ({
  comment
}) => {
  const handleReplyDispatch = item => {
    if (comment.replies.find(reply => reply.id === item.id)) {
      console.log('Adds the new reply to the parent comment')
      return
    }

    console.log('Adds a new reply')
  }
  
  const handleEditDispatch = () => console.log('This triggers the edit functionality')

  return (
    <div className="comment">
      <Card
        item={comment}
        replyDispatch={handleReplyDispatch}
        editDispatch={handleEditDispatch}
      />

      <div className="replies-list">
        {comment.replies.map(reply => (
          <Card
            item={reply}
            replyDispatch={handleReplyDispatch}
            editDispatch={handleEditDispatch}
            key={reply.id}
          />
        ))}
      </div>
    </div>
  )
}

function App() {
  const {comments} = data

  return (
    <div className="App">
      {comments.map(comment => (
        <Comment
          comment={comment}
          key={comment.id}
        />
      ))}
    </div>
  )
}

export default App