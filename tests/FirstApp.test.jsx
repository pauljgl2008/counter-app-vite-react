import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {
    test('debe de hacer match con el snapshot', () => {
        const title = 'Hola, soy Paúl';
        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    })
    test('debe mostrar el título en un h1', () => {
        const title = 'Hola, soy Paúl';
        const { container, getByText } = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1')
        expect(h1.innerHTML).toContain("Hola, soy Paúl")
    })
})