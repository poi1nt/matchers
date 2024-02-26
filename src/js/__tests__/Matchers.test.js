import sortByHealth from "../Matchers"

test("Возвращает отсортированный список в порядке убывания", () => {
    let heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]

      expect(sortByHealth(heroes)).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 }
      ])
})