import { getGifs } from '../../helpers/getGifs'

describe('Pruebas de la función getGifts con Fetchw', () => {
  test('debe de traer 10 elementos', async () => {
    const gifs = await getGifs('goku')
    expect(gifs.length).toBe(10)
  })

  test('debe de traer 0 elementos', async () => {
    const gifs = await getGifs('')
    expect(gifs.length).toBe(0)
  })
})
