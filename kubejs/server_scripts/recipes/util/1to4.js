// priority: 900

const decompactingItems = [
    {raw: 'kubejs:sand_clump', compact: 'minecraft:sand', tool: 'shovel'},
    {raw: 'kubejs:gravel_clump', compact: 'minecraft:gravel', tool: 'shovel'},
    {raw: 'kubejs:dirt_clump', compact: 'minecraft:dirt', tool: 'shovel'},
    {raw: 'kubejs:mud_ball', compact: 'minecraft:mud', tool: 'shovel'}
]

ServerEvents.recipes(event => {
    decompactingItems.forEach(item => {
        cut(
            event,
            { item: item.compact },
            `forge:tools/${item.tool}s`,
            [
                { item: item.raw, count: 2},
                { item: item.raw, chance: 0.8 },
                { item: item.raw, chance: 0.65 }
            ]
        )
    })
})  
