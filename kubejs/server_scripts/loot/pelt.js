const peltMobs = [
    {mob: 'mooshroom', min: 1, max: 3, chance: 0.8},
    {mob: 'horse', min: 1, max: 4, chance: 0.75},
    {mob: 'cow', min: 1, max: 3, chance: 0.7},
    {mob: 'sheep', min: 1, max: 2, chance: 0.7},
    {mob: 'pig', min: 1, max: 2, chance: 0.7},
    {mob: 'goat', min: 1, max: 3, chance: 0.65},
    {mob: 'wolf', min: 1, max: 3, chance: 0.6},
    {mob: 'fox', min: 1, max: 2, chance: 0.5},
    {mob: 'rabbit', min: 1, max: 2, chance: 0.5},
    {mob: 'chicken', min: 1, max: 2, chance: 0.45}
]

const leatherMobs = [
    'minecraft:cow',
    'minecraft:horse',
    'minecraft:donkey',
    'minecraft:mule',
    'minecraft:llama',
    'minecraft:trader_llama',
    'minecraft:mooshroom'
]

LootJS.modifiers(event => {
    peltMobs.forEach(entry => {
        event
        .addEntityLootModifier(`${entry.mob}`)
        .randomChance(entry.chance)
        .addWeightedLoot(
            [entry.min, entry.max],
            Item.of('untamedwilds:hide_brown')
        )
    })

    leatherMobs.forEach(mob => {
        event
        .addEntityLootModifier(`${mob}`)
        .removeLoot('minecraft:leather')
    })
})
