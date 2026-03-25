let oresToHide = [
    'eidolon:silver_ore',
    'occultism:silver_ore',
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:redstone_ore',
    'minecraft:diamond_ore',
    'minecraft:emerald_ore',
    'minecraft:deepslate_emerald_ore',
    'minecraft:deepslate_coal_ore',
    'simpleores:tin_ore',
    'simpleores:deepslate_tin_ore',
    'simpleores:mythril_ore',
    'simpleores:deepslate_mythril_ore',
    'simpleores:adamantium_ore',
    'simpleores:deepslate_adamantium_ore',
    'simpleores:onyx_ore'
]

let oreReplacement = Block.getBlock("kubejs:ore_replacement").defaultBlockState()

oresToHide.forEach(ore => {
    AStages.addRestrictionForOre(
        `remove/ores/${ore.split(":")[1]}`, 
        "disabled", 
        Block.getBlock(ore).defaultBlockState(), 
        oreReplacement
    )
})

ServerEvents.tags('item', event => {
    oresToHide.forEach(ore => {
        event.removeAllTagsFrom(ore)
        event.add('kubejs:removed_items', ore)
    })
})
