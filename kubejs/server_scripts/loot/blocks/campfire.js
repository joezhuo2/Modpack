LootJS.modifiers(event => {
    event
    .addBlockLootModifier('campfire')
    .matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    .removeLoot(Ingredient.all)
    .addLoot('campfire')

    event
    .addBlockLootModifier('campfire')
    .not(n => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
    .removeLoot(Ingredient.all)
    .addWeightedLoot(
        [2, 9],
        [
            Item.of('supplementaries:ash').withChance(0.9),
            Item.of('minecraft:stick').withChance(0.7),
            Item.of('born_in_chaos_v1:scorched_log').withChance(0.5)
        ]
    )
})
