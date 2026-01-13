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
        [1, 3],
        [
            Item.of('born_in_chaos_v1:scorched_log', 1).withChance(0.6), 
            Item.of('supplementaries:ash').withChance(0.8)
        ]
    )
})
