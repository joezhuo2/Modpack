// priority: 1000

const keepOnlyItemFromTag = [
    { tag: 'forge:nuggets/copper', item: 'thermal:copper_nugget' },
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

    // bark mushroom
    event.add('kubejs:bark_mushrooms', 'projectvibrantjourneys:light_brown_bark_mushroom')
    event.add('kubejs:bark_mushrooms', 'projectvibrantjourneys:bark_mushroom')
    event.add('kubejs:bark_mushrooms', 'projectvibrantjourneys:orange_bark_mushroom')

    // leather
    event.removeAll('forge:leather')
    event.add('forge:leather', 'leather')
    event.add('forge:leather', 'totemic:buffalo_hide')
    event.add('forge:leather', 'immersiveengineering:ersatz_leather')

    // hammers
    event.add('forge:tools/hammers', '#forbidden_arcanus:blacksmith_gavel')

    keepOnlyItemFromTag.forEach(entry => {
        event.removeAll(entry.tag)
        event.add(entry.tag, entry.item)
    })
})