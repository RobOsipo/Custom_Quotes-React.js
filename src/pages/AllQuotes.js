import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const dummy_quotes = [
  {id: 'q1', author: 'Rob', text: 'blahblahblah'},
  {id: 'q2', author: 'bob', text: 'blahblahblah'},
  {id: 'q3', author: 'jim', text: 'blahblahblah'}
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={dummy_quotes} />
  )
}

export default AllQuotes