import { graphql, rest } from 'msw'


export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.json({ name: 'Maria' }))
  }),

  graphql.query('GetUser', (req, res, ctx) => {
    return res(
      ctx.data({
        user: {
          name: 'John',
        },
      }),
    )
  }),
]