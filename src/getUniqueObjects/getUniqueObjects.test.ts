import { getUniqueObjects } from './getUniqueObjects';

test('removes duplicate objects from the array', () => {
    const objects = [
        { id: 1, text: 'lorem ipsum' },
        { id: 2, text: 'lorem ipsum' },
        { id: 3, text: 'lorem ipsum' },
        { id: 4, text: 'lorem ipsum' },
        { id: 1, text: 'lorem ipsum' },
        { id: 5, text: 'lorem ipsum' },
        { id: 6, text: 'lorem ipsum' },
        { id: 3, text: 'lorem ipsum' },
        { id: 6, text: 'lorem ipsum' },
        { id: 17, text: 'lorem ipsum' },
        { id: 61, text: 'lorem ipsum' },
        { id: 18, text: 'lorem ipsum' },
    ];

    const uniqueobjects = getUniqueObjects(objects, 'id');

    expect(uniqueobjects).toHaveLength(9);

    expect(uniqueobjects).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ id: expect.any(Number) }),
        ])
    );
});
