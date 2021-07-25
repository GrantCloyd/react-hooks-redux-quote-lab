import React from "react"
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice"
import { useDispatch } from "react-redux"

function QuoteCard({ content, author, id, votes }) {
   const dispatch = useDispatch()
   const handleDelete = id => dispatch(removeQuote(id))
   const handleUpvote = id => dispatch(upvoteQuote(id))
   const handleDownvote = id => dispatch(downvoteQuote(id))

   return (
      <div>
         <div className="card card-inverse card-success card-primary mb-3 text-center">
            <div className="card-block">
               <blockquote className="card-blockquote">
                  <p>{content}</p>
                  <footer>
                     - author <cite title="Source Title">{author}</cite>
                  </footer>
               </blockquote>
            </div>
            <div className="float-right">
               <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                  <button
                     onClick={() => handleUpvote(id)}
                     type="button"
                     className="btn btn-primary">
                     Upvote
                  </button>
                  <button
                     onClick={() => handleDownvote(id)}
                     type="button"
                     className="btn btn-secondary">
                     Downvote
                  </button>
                  <button onClick={() => handleDelete(id)} type="button" className="btn btn-danger">
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div>Votes: {votes}</div>
            </div>
         </div>
      </div>
   )
}

export default QuoteCard
