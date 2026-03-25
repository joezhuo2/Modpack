// priority: 1001

const keepOnlyItemFromTag = [
    { tag: 'forge:nuggets/tin', item: 'thermal:tin_nugget' },

    { tag: 'forge:rods/stone', item: 'kubejs:rod_stone' },
    
    { tag: 'forge:ingots/tin', item: 'thermal:tin_ingot' },

    {tag: 'forge:raw_materials/tin', item: 'thermal:raw_tin' },
]

ServerEvents.tags('item', event => {
    // materials
    materialsList.forEach(mat => {
        event.add(`kubejs:resources/${mat.id}`, mat.raw_resource)
    })

    // bones
    event.add('forge:bones', 'blue_skies:azulfo_horn')
    event.add('forge:bones', 'ars_nouveau:wilden_horn')
    event.add('forge:bones', 'cataclysm:koboleton_bone')
    event.add('forge:bones', 'irons_spellbooks:frozen_bone')
    event.add('forge:bones', 'untamedwilds:material_shark_tooth')
    event.add('forge:bones', 'undergarden:brute_tusk')
    event.add('forge:bones', 'aquaculture:fish_bones')
    event.add('forge:bones', 'aquaculture:fish_bones')
    event.add('forge:bones', 'aquaculture:fish_bones')
    event.add('forge:bones', 'alexsmobs:fish_bones')
    event.add('forge:bones', 'alexsmobs:fish_bones')
    event.add('forge:bones', 'upgrade_aquatic:thrasher_tooth')

    // strings
    event.add('forge:string', 'botania:red_string')
    event.add('forge:string', 'botania:mana_string')
    event.add('forge:string', 'evilcraft:golden_string')
    event.add('forge:string', 'kubejs:plant_fiber')

    // fix plates
    event.add('forge:plates/clay', 'ceramics:unfired_clay_plate')
    event.add('forge:plates/terracotta', 'ceramics:clay_plate')
    event.remove('forge:plates/brick', 'ceramics:clay_plate')
    event.add('forge:plates/caminite', 'embers:caminite_plate')
    event.add('forge:plates/raw_caminite', 'embers:raw_caminite_plate')

    // bark mushroom
    event.add('kubejs:bark_mushrooms', 'projectvibrantjourneys:light_brown_bark_mushroom')
    event.add('kubejs:bark_mushrooms', 'projectvibrantjourneys:bark_mushroom')
    event.add('kubejs:bark_mushrooms', 'projectvibrantjourneys:orange_bark_mushroom')

    // leather
    event.removeAll('forge:leather')
    event.add('forge:leather', 'leather')
    event.add('forge:leather', 'totemic:buffalo_hide')
    event.add('forge:leather', 'immersiveengineering:ersatz_leather')

    // tools
    event.add('forge:tools/hammers', '#forbidden_arcanus:blacksmith_gavel')
    event.add('kubejs:can_harvest_mystical_flowers', 'kubejs:botanists_shears')
    event.add('kubejs:can_harvest_mystical_flowers', 'botania:manasteel_shears')
    event.add('kubejs:can_harvest_mystical_flowers', 'botania:elementium_shears')
    event.add('kubejs:can_harvest_mystical_flowers', 'amethyst_tools:amethyst_shears')

    // ores
    event.add('forge:ores/tungsten', 'stalwart_dungeons:tungsten_ore')
    event.add('forge:ores/titanium', 'occultism:silver_ore_deepslate')
    event.remove('forge:ores/silver', 'occultism:silver_ore_deepslate')
    event.add('forge:ores/platinum', 'eidolon:deepslate_silver_ore')
    event.remove('forge:ores/silver', 'eidolon:deepslate_silver_ore')

    // raw materials
    event.add('forge:raw_materials/tungsten', 'stalwart_dungeons:raw_tungsten')
    event.add('forge:raw_materials/titanium', 'occultism:raw_silver')
    event.remove('forge:raw_materials/silver', 'occultism:raw_silver')
    event.add('forge:raw_materials/platinum', 'eidolon:raw_silver')
    event.remove('forge:raw_materials/silver', 'eidolon:raw_silver')
    
    // raw block
    event.add('forge:storage_blocks/raw_titanium', 'occultism:raw_silver_block')
    event.remove('forge:storage_blocks/raw_silver', 'occultism:raw_silver_block')
    event.add('forge:storage_blocks/raw_platinum', 'eidolon:raw_silver_block')
    event.remove('forge:storage_blocks/raw_silver', 'eidolon:raw_silver_block')

    // crushed raw
    event.add('kubejs:crushed_raw/copper', 'create:crushed_raw_copper')
    event.add('kubejs:crushed_raw/tin', 'create:crushed_raw_tin')

    // nuggets
    event.add('forge:nuggets/titanium', 'occultism:silver_nugget')
    event.remove('forge:nuggets/silver', 'occultism:silver_nugget')
    event.add('forge:nuggets/platinum', 'eidolon:silver_nugget')
    event.remove('forge:nuggets/silver', 'eidolon:silver_nugget')

    // ingots
    event.add('forge:ingots/tungsten', 'stalwart_dungeons:tungsten_ingot')
    event.add('forge:ingots/titanium', 'occultism:silver_ingot')
    event.remove('forge:ingots/silver', 'occultism:silver_ingot')
    event.add('forge:ingots/platinum', 'eidolon:silver_ingot')
    event.remove('forge:ingots/silver', 'eidolon:silver_ingot')

    // dust
    event.add('forge:dusts/titanium', 'occultism:silver_dust')
    event.remove('forge:dusts/silver', 'occultism:silver_dust')

    // block
    event.remove('forge:storage_blocks/silver', 'occultism:silver_block')
    event.add('forge:storage_blocks/titanium', 'occultism:silver_block')
    event.add('forge:storage_blocks/platinum', 'eidolon:silver_block')
    event.remove('forge:storage_blocks/silver', 'eidolon:silver_block')

    keepOnlyItemFromTag.forEach(entry => {
        event.removeAll(entry.tag)
        event.add(entry.tag, entry.item)
    })
})