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

    // plates
    event.add('forge:plates/clay', 'ceramics:unfired_clay_plate')
    event.add('forge:plates/terracotta', 'ceramics:clay_plate')

    // bark mushroom
    event.add('kubejs:bark_mushrooms', 'projectvibrantjourneys:light_brown_bark_mushroom')
    event.add('kubejs:bark_mushrooms', 'projectvibrantjourneys:bark_mushroom')
    event.add('kubejs:bark_mushrooms', 'projectvibrantjourneys:orange_bark_mushroom')

    // leather
    event.removeAll('forge:leather')
    event.add('forge:leather', 'leather')
    event.add('forge:leather', 'totemic:buffalo_hide')
    event.add('forge:leather', 'immersiveengineering:ersatz_leather')

    // gears
    event.remove('forge:gears/wood', 'enderio:wood_gear')
    event.remove('forge:gears/stone', 'enderio:stone_gear')

    // hammers
    event.add('forge:tools/hammers', '#forbidden_arcanus:blacksmith_gavel')
})