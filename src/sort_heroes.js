
export function sortHeroesByHealth(characters) {
    return characters.sort((a, b) => { return b.health - a.health });
}
