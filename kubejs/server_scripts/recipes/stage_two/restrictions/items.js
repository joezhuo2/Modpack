const stageTwoRestrictedItems = [
    'hexerei:pestle_and_mortar',
    'integrateddynamics:squeezer',
    'minecraft:furnace',
    'minecraft:blast_furnace',
    'minecraft:smoker',
    'farmersdelight:cooking_pot',
    'immersiveengineering:alloybrick',

    'minecraft:tnt',
    'kubejs:rough_andesite_alloy',
    'thermal:bronze_ingot',
    'minecraft:ender_pearl',
    'minecraft:copper_ingot',
    'thermal:tin_ingot',

    'create_sa:copper_helmet',
    'create_sa:copper_chestplate',
    'create_sa:copper_leggings',
    'create_sa:copper_boots',
    'create_sa:copper_pickaxe',
    'create_sa:copper_axe',
    'create_sa:copper_shovel',
    'create_sa:copper_sword',
    'create_sa:copper_hoe',
    'iceandfire_curios:copper_amulet',
    'spartanshields:copper_basic_shield',
    'spartanshields:copper_tower_shield',
]

ServerEvents.tags('item', event => {
    stageTwoRestrictedItems.forEach(item => {
        event.add('kubejs:stage_two_items', item)
    })
})

AStages.addRestrictionForTag(`astages/items/two`, 'two', 'kubejs:stage_two_items')
