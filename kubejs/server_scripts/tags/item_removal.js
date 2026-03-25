// priority: 1000

const itemsToRemove = [
    'mysticalagriculture:inferium_ore',
    'mysticalagradditions:end_inferium_ore',
    'mysticalagradditions:nether_inferium_ore',
    'mysticalagriculture:deepslate_inferium_ore',

    'rootsclassic:healing_poultice',

    'actuallyadditions:wooden_aiot',
    'actuallyadditions:stone_aiot',
    'actuallyadditions:iron_aiot',
    'actuallyadditions:gold_aiot',
    'actuallyadditions:diamond_aiot',
    'actuallyadditions:netherite_aiot',

    'reliquary:mob_charm',
    'reliquary:mob_charm_fragment',

    'apotheosis:iron_mining_arrow',
    'apotheosis:diamond_mining_arrow',

    'mekanismtools:bronze_paxel', 
    'mysticalagradditions:awakened_supremium_paxel', 
    'mekanismtools:osmium_paxel', 
    'mysticalagradditions:inferium_paxel', 
    'mekanismtools:wood_paxel', 
    'mysticalagradditions:tertium_paxel', 
    'mekanismtools:netherite_paxel', 
    'mysticalagradditions:supremium_paxel', 
    'mekanismtools:diamond_paxel', 
    'mekanismtools:gold_paxel', 
    'mysticalagradditions:prudentium_paxel', 
    'mekanismtools:refined_obsidian_paxel', 
    'mekanismtools:refined_glowstone_paxel', 
    'mekanismtools:lapis_lazuli_paxel', 
    'mekanismtools:steel_paxel', 
    'mekanismtools:iron_paxel', 
    'mekanismtools:stone_paxel', 
    'mysticalagradditions:imperium_paxel',

    'embers:silver_sword',
    'embers:silver_shovel',
    'embers:silver_axe',
    'embers:silver_hoe',
    'embers:silver_pickaxe',
    
    'enderio:wood_gear',
    'enderio:stone_gear',
    'enderio:energized_gear',
    'enderio:vibrant_gear',
    'enderio:dark_bimetal_gear',
    'hammerlib:gears/wooden',
    'hammerlib:gears/stone',
    'pneumaticcraft:compressed_iron_gear',
    
    'mahoutsukai:pestle',
    'mahoutsukai:mortar',
    'mahoutsukai:mortar_and_pestle',
    'mahoutsukai:hammer',

    'rootsclassic:bark_knife',
    'rootsclassic:oak_bark',
    'rootsclassic:spruce_bark',
    'rootsclassic:birch_bark',
    'rootsclassic:jungle_bark',
    'rootsclassic:acacia_bark',
    'rootsclassic:dark_oak_bark',

    'minecraft:wooden_hoe',

    'supplementaries:timber_frame',
    'supplementaries:timber_brace',
    'supplementaries:timber_cross_brace',

    'ceramicshears:clay_shears_part',
    'ceramicshears:ceramic_shears_part',

    'suppsquared:daub_stairs',
    'suppsquared:daub_slab',
    'suppsquared:daub_frame_stairs',
    'suppsquared:daub_frame_slab',

    'hexerei:mahogany_drying_rack',
    'hexerei:willow_drying_rack',
    'hexerei:witch_hazel_drying_rack',
    'hexerei:mahogany_drying_rack',
    'hexerei:herb_drying_rack_full',

    'actuallyadditions:flax_seeds',
    'actuallyadditions:rice',
    'actuallyadditions:rice_seeds',
    'actuallyadditions:rice_dough',
    'actuallyadditions:rice_slimeball',

    'untamedwilds:hide_black',
    'untamedwilds:hide_ashen',

    'cb_microblocks:stone_rod',
    'createaddition:copper_rod',

    'embers:copper_nugget',
    'immersiveengineering:nugget_copper',
    'pneumaticcraft:copper_nugget',
    'thermal:copper_nugget',
    'malum:copper_nugget',
    'iceandfire:copper_nugget',

    'mekanism:tin_nugget',

    'embers:copper_plate',
    'immersiveengineering:plate_copper',
    
    'stone_shovel',
    'stone_axe',
    'stone_pickaxe',
    'stone_sword',
    'stone_hoe',

    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',

    'hexerei:mahogany_woodcutter',
    'hexerei:willow_woodcutter',
    'hexerei:witch_hazel_woodcutter',

    'extendedcrafting:black_iron_ingot',
    'extendedcrafting:black_iron_nugget',
    'extendedcrafting:black_iron_slate',
    'extendedcrafting:black_iron_block',

    'simpleores:tin_bricks',
    'simpleores:onyx_bricks',
    'simpleores:adamantium_bricks',
    'simpleores:mythril_bricks',
    'simpleores:tin_brick_slab',
    'simpleores:onyx_brick_slab',
    'simpleores:adamantium_brick_slab',
    'simpleores:mythril_brick_slab',
    'simpleores:tin_brick_stairs',
    'simpleores:onyx_brick_stairs',
    'simpleores:adamantium_brick_stairs',
    'simpleores:mythril_brick_stairs',
    'simpleores:copper_door',
    'simpleores:tin_door',
    'simpleores:onyx_door',
    'simpleores:adamantium_door',
    'simpleores:mythril_door',
    'simpleores:copper_bars',
    'simpleores:tin_bars',
    'simpleores:onyx_bars',
    'simpleores:adamantium_bars',
    'simpleores:mythril_bars',
    'simpleores:copper_pressure_plate',
    'simpleores:tin_pressure_plate',
    'simpleores:onyx_pressure_plate',
    'simpleores:adamantium_pressure_plate',
    'simpleores:mythril_pressure_plate',
    'simpleores:copper_shears',
    'simpleores:tin_shears',
    'simpleores:onyx_shears',
    'simpleores:adamantium_shears',
    'simpleores:mythril_shears',
    'simpleores:crushed_copper_ore',
    'simpleores:crushed_tin_ore',
    'simpleores:crushed_adamantium_ore',
    'simpleores:crushed_mythril_ore',
]

ServerEvents.tags('item', event => {
    itemsToRemove.forEach(itemID => {
        event.removeAllTagsFrom(itemID)
        event.add('kubejs:removed_items', itemID)
    })
})
