import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '164c482a8bmsh489dca93f24465dp10e1d2jsnfae51eff4cd7'
}
// REACT_APP_NEWS_API_URL = 'https://bing-news-search1.p.rapidapi.com'
// REACT_APP_NEWS_RAPIDAPI_HOST = 'bing-news-search1.p.rapidapi.com'

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
        getCryptosNews : builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),

        }),
    }),
});





export const { useGetCryptosNewsQuery } = cryptoNewsApi;

