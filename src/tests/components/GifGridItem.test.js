import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {
  const title = 'Hola mundo'
  const url = 'https://localhost/image.jpg'
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test('debe de mostrar el componente correctamente', () => {
    // se valida que el componente sea igual al del snapshot existente
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de tener un párrafo con el title', () => {
    // buscar el elemento p en el wrapper
    const p = wrapper.find('p')
    // evaluar que el texto del párrafo sea igual
    expect(p.text().trim()).toBe(title)
  })

  test('deben ser iguales los atributos de la imagen a las propiedades', () => {
    const img = wrapper.find('img')
    // evaluando que sean iguales las propiedades de la imagen a las constantes
    // con el objeto completo de propiedades
    expect(img.props().src).toBe(url)
    // con una propiedad específica
    expect(img.prop('alt')).toBe(title)
    // console.log(img.props())
  })

  test('debe de tener la clase animate__rollIn en el div', () => {
    const div = wrapper.find('div')

    const className = div.prop('className')
    expect(className.includes('animate__rollIn')).toBe(true)

    // no funcionó
    // expect(div).toHaveClass('animate__rollIn')
  })
})
