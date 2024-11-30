import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js', () => { 
    test('getImagen debe de retornar una URL de la imagen', async() => { 
        const url = await getImagen();
        expect(url).toBe('No se encontró la imagen');
     })
 })