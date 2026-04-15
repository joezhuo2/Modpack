// priority: 1000

const blockedLootItems = [
    'minecraft:wither_skeleton_skull',
    
    'minecraft:leather',
    'untamedwilds:hide_brown',
    'untamedwilds:hide_brown',
    'untamedwilds:hide_gray',
    'untamedwilds:hide_beige',
    'untamedwilds:hide_golden',
    'untamedwilds:hide_white',
    'untamedwilds:hide_tan',
    'untamedwilds:hide_orange',
    
    'paraglider:heart_container'
]

const modsToRemoveFrom = [
    'confluence',
    'endrem'
]

LootJS.modifiers(event => {
    let modifier = event.addLootTypeModifier(LootType.UNKNOWN, LootType.BLOCK, LootType.ENTITY, LootType.CHEST, LootType.FISHING, LootType.GIFT)

    modsToRemoveFrom.forEach(modid => {
        modifier.removeLoot(`@${modid}`)
    })

    blockedLootItems.forEach(itemId => {
        modifier.removeLoot(itemId)
    })

    modsToRemoveFrom.forEach(modid => {
        event.removeGlobalModifier(`@${modid}`)
    })
});