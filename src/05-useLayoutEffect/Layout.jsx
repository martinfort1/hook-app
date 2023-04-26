


import { useState } from 'react';
import { useFetch, useCounter} from '../hooks'
import { LoadingQuote, Quote } from '../03-examples'

export const Layout = () => {

    const { counter, increment, decrement, reset } = useCounter(1);

    const {data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`)
    console.log({data, isLoading, hasError});
    
    const { author, quote } = !!data && data[0];// doble negacion "!!"(convierte el undefined inicial en true y despues en false)

    return (
        <>
            <h1> BreakingBad Quotes</h1>
            <hr />

            {
                isLoading?
                <LoadingQuote/>
                :
                <Quote data={ data }/>
            }
            
            <button 
            className='btn btn-primary'
            disabled={ isLoading }  
            onClick={ () => increment(1)}>Next quote</button>

        </>
    )
}
