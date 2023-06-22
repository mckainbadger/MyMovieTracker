import { rest } from 'msw'
import { setupWorker } from 'msw'
// JSON response data
import popularMovies from '../data/popularMovies'


// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
  rest.get('https://api.themoviedb.org/3/movie/popular', (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(popularMovies)) // respond using a mocked JSON body
  }),
)