import { rest } from 'msw'

const handlers = [
    rest.get('https://fakestoreapi.com/products', (req, res, ctx) => {
        const mockApiResponse = {
            species: {
                name: 'someuser',
            }
        }
        return res(ctx.json(mockApiResponse))
    }),
]

export { handlers }
