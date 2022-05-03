import React from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
import '../index.css'

const dummy_quotes = [
  {id: 'q1', author: 'Rob', text: 'blahblahblah'},
  {id: 'q2', author: 'bob', text: 'blahblahblah'},
  {id: 'q3', author: 'jim', text: 'blahblahblah'}
]

const QuoteDetail = () => {
  const match = useRouteMatch()
    const params = useParams()
      console.log(match)
    const quote = dummy_quotes.find((quote) => {
        return quote.id === params.quoteId
    })

    if (!quote) {return <p>No quote found</p>}
  return (
      <>
       <HighlightedQuote text={quote.text} author={quote.author} />
       <Route exact path={match.path}>

       </Route>
       <div className="centered">
         <Link className="btn--flat" to={`${match.url}/comments`}>
           Load Comments
         </Link>
       </div>
        <Route path={`${match.path}/comments`}>
            <Comments />
        </Route>
      </>
  )
}

export default QuoteDetail