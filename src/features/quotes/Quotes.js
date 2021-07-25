import React from "react"
import QuoteCard from "./QuoteCard"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

function Quotes() {
   const quotesData = useSelector(state => state.quotes)
   const [quotesArr, setQuotes] = useState([])

   useEffect(() => {
      if (quotesData.length > 0) {
         setQuotes(quotesData.map(quote => <QuoteCard key={quote.id} {...quote} />))
      } else {
         setQuotes([])
      }
   }, [quotesData])

   return (
      <div>
         <hr />
         <div className="row justify-content-center">
            <h2>Quotes</h2>
         </div>
         <hr />
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  {/*
              TODO:

              Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */}
                  {quotesArr}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Quotes
