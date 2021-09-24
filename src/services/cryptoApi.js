import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-key': '164c482a8bmsh489dca93f24465dp10e1d2jsnfae51eff4cd7',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptosHistory: builder.query({
            query: ({coinId, timeperiod}) => createRequest(`/coin/${coinId}/history/${timeperiod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          })
       
    })
});

export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetCryptosHistoryQuery, useGetExchangesQuery } = cryptoApi;





// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '164c482a8bmsh489dca93f24465dp10e1d2jsnfae51eff4cd7'
//     }
//   };