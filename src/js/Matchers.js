export default function sortByHealth(character) {
    let characterSortByHealth = character
    return characterSortByHealth.sort((a, b) => {
        return b.health - a.health;
    })
}
