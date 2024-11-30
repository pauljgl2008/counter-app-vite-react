import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objecto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        // expect(user).toStrictEqual(testUser);
        expect(user).toEqual(testUser);
    });

    test('getUsuarioActivo debe retonar un objeto', () => {
        const name = 'Paúl';
        const user = getUsuarioActivo(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });

    })
})