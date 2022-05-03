import React from 'react'
import { useParams, Route } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'

const dummy_quotes = [
  {id: 'q1', author: 'Rob', text: 'blahblahblah'},
  {id: 'q2', author: 'bob', text: 'blahblahblah'},
  {id: 'q3', author: 'jim', text: 'blahblahblah'}
]

const QuoteDetail = () => {
    const params = useParams()

    const quote = dummy_quotes.find((quote) => {
        return quote.id === params.quoteId
    })

    if (!quote) {return <p>No quote found</p>}
  return (
      <>
       <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments />
        </Route>
      </>
  )
}

export default QuoteDetail