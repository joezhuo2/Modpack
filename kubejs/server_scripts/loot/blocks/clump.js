const clumpDrops = [
    {block: 'minecraft:gravel', clump: 'kubejs:gravel_clump', extra: {item: 'minecraft:flint', chance: 0.2}},
    {block: 'minecraft:dirt', clump: 'kubejs:dirt_clump'},
    {block: 'minecraft:grass_block', clump: 'kubejs:dirt_clump'},
    {block: 'minecraft:sand', clump: 'kubejs:sand_clump'},
    {block: 'minecraft:mud', clump: 'kubejs:mud_ball'},
    {block: 'minecraft:ice', clump: 'kubejs:ice_cube'},
    {block: 'minecraft:blue_ice', clump: 'kubejs:ice_cube'},
    {block: 'minecraft:packed_ice', clump: 'kubejs:ice_cube'},
    {block: 'minecraft:packed_ice', clump: 'kubejs:ice_cube'},
    {block: 'biomeswevegone:black_ice', clump: 'kubejs:ice_cube'},
    {block: 'biomeswevegone:packed_black_ice', clump: 'kubejs:ice_cube'},

]

const clumpChances = [
    0.2,
    0.5,
    0.85
]

LootJS.modifiers(event => {
    clumpDrops.forEach(entry => {
        event
        .addBlockLootModifier(entry.block)
        .matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
        .removeLoot(Ingredient.all)
        .addLoot(entry.block)

        let alternatives = [];

        if (entry.extra) {
            alternatives.push(
                LootEntry.of(entry.extra.item, 1)
                .when(c => c.randomChance(entry.extra.chance))
            )
        }

        alternatives.push(
            LootEntry.of(entry.clump, 4)
                .applyOreBonus("minecraft:fortune")
                .when(c => c.randomChance(clumpChances[0])),

            LootEntry.of(entry.clump, 3)
                .applyOreBonus("minecraft:fortune")
                .when(c => c.randomChance(clumpChances[1])),
            LootEntry.of(entry.clump, 2)
                .applyOreBonus("minecraft:fortune")
                .when(c => c.randomChance(clumpChances[2])),

            LootEntry.of(entry.clump, 1)
                .applyOreBonus("minecraft:fortune")
        )

        event
        .addBlockLootModifier(entry.block)
        .not(n => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(alternatives)
    })
})
