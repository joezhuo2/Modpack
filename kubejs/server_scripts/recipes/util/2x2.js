// priority: 900

const twoByTwoCompactingItems = [
    {raw: 'kubejs:sand_clump', compact: 'minecraft:sand'},
    {raw: 'kubejs:gravel_clump', compact: 'minecraft:gravel'},
    {raw: 'kubejs:dirt_clump', compact: 'minecraft:dirt'},
    {raw: 'kubejs:mud_ball', compact: 'minecraft:mud'}
]

ServerEvents.recipes(event => {
    twoByTwoCompactingItems.forEach(item => {
        event.shaped(Item.of(item.compact, 1), 
        [
            'XX',
            'XX'
        ],
        { X: item.raw })
    })
})  
