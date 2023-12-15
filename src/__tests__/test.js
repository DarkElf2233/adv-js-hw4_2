
import { sortHeroesByHealth } from '../sort_heroes.js'

test.each([
    [
        [
            {name: 'Лучник', health: 50},
            {name: 'Маг', health: 95},
            {name: 'Маг', health: 13}
        ],
        [
            {name: 'Маг', health: 95},
            {name: 'Лучник', health: 50},
            {name: 'Маг', health: 13}
        ],
    ]
])('test sortHeroesByHealth with character %s', (characters, expected) => {
    const result = sortHeroesByHealth(characters);
    expect(result).toEqual(expected);
});
