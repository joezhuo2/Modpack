const blockedLootItems = [
    'confluence:ranger_emblem',
    'confluence:rifle_scope',
    'minecraft:wither_skeleton_skull',
    'confluence:energy_bar',
    'confluence:sorcerer_emblem',
    'confluence:star_cloak',
    'confluence:magic_quiver',

    'endrem:black_eye',
    'endrem:cold_eye',
    'endrem:corrupted_eye',
    'endrem:lost_eye',
    'endrem:nether_eye',
    'endrem:old_eye',
    'endrem:rogue_eye',
    'endrem:cursed_eye',
    'endrem:evil_eye',
    'endrem:guardian_eye',
    'endrem:magical_eye',
    'endrem:wither_eye',
    'endrem:witch_eye',
    'endrem:undead_eye',
    'endrem:exotic_eye',
    'endrem:cryptic_eye',
    'endrem:witch_pupil',
    'endrem:undead_soul',
    
    'minecraft:leather',
    'untamedwilds:hide_brown',
    'untamedwilds:hide_brown',
    'untamedwilds:hide_gray',
    'untamedwilds:hide_beige',
    'untamedwilds:hide_golden',
    'untamedwilds:hide_white',
    'untamedwilds:hide_tan',
    'untamedwilds:hide_orange'
];

const loot_types = [
    LootType.UNKNOWN,
    LootType.BLOCK,
    LootType.ENTITY,
    LootType.CHEST,
    LootType.FISHING,
    LootType.GIFT
];

LootJS.modifiers(event => {
    loot_types.forEach(type => {
        event
        .addLootTypeModifier(type)
        .modifyLoot(Ingredient.all, itemStack => {
            if (blockedLootItems.includes(itemStack.getId())) {
                itemStack.setCount(0);
            }
            return itemStack;
        })
    })
})