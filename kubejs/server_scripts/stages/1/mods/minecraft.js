ServerEvents.recipes(event => {
    // crafting table
    event.shaped(Item.of('crafting_table', 1),
        [
            'AB',
            'CD'
        ],
        {
            A: '#forge:stripped_wood',
            B: 'kubejs:rod_wood',
            C: 'farmersdelight:canvas',
            D: 'kubejs:plate_flint'
        }
    )
    // composter
    event.shaped(Item.of('composter', 1),
        [
            'A A',
            'A A',
            'BCB'
        ],
        {
            A: '#forge:fences/wooden',
            B: 'kubejs:plate_mud',
            C: 'ceramics:clay_cistern'
        }
    )
    // campfire
    event.shaped(Item.of('campfire', 1),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'moss_carpet',
            B: '#minecraft:leaves',
            C: 'kubejs:thermal_blend',
            D: 'born_in_chaos_v1:scorched_wood',
            E: 'rootsclassic:old_root'
        }
    )
    // leather
    event.campfireCooking('leather', 'untamedwilds:hide_orange', 0.05, 600)
    // utility flint recipe
    event.shaped(Item.of('flint', 1), 
        [
            'AB',
            'BA'
        ],
        {
            A: 'projectvibrantjourneys:rocks',
            B: 'kubejs:gravel_clump'
        }
    )
    // sugar
    cut(
        event,
        { item: 'sugar_cane' },
        'forge:tools/hammers',
        [
            { item: 'sugar' , count: 1},
            { item: 'sugar' , chance: 0.3},
            { item: 'sugar' , chance: 0.15}
        ]
    )
    // sugar from sugar cube
    cut(
        event,
        { item: 'supplementaries:sugar_cube' },
        'forge:tools/hammers',
        [{ item: 'sugar' , count: 9}]
    )
    // brick
    transform(
        event,
        'minecraft:lava',
        'brick', 2,
        ['kubejs:plate_stone', 'supplementaries:ash_brick', 'kubejs:thermal_blend'],
        'fluid'
    )
    // flower pot
    event.shaped(Item.of('flower_pot', 1),
        [
            'A A',
            ' B '
        ],
        {
            A: 'kubejs:plate_brick',
            B: 'ceramics:unfired_faucet'
        }
    )
    // farmland
    event.shapeless(Item.of('farmland'),
        ['dirt', 'bone_meal']
    )
    // torch
    event.campfireCooking('torch', 'actuallyadditions:tiny_torch', 0.15, 900)
    // crude hatchet
    event.shaped(Item.of('wooden_axe', 1),
        [
            'CA',
            'AB'
        ],
        {
            A: '#forge:rods/wooden',
            B: 'farmersdelight:straw',
            C: 'flint'
        }
    )
    // crude shovel
    event.shaped(Item.of('wooden_shovel', 1),
        [
            ' AB',
            ' CA',
            'C  '
        ],
        {
            A: 'mekanism:sawdust',
            B: 'kubejs:plate_flint',
            C: 'kubejs:rod_wood'
        }
    )
    // crude sword
    event.shaped(Item.of('wooden_sword', 1),
        [
            '  B',
            'AB ',
            'CA '
        ],
        {
            A: 'mekanism:sawdust',
            B: 'kubejs:plate_bone',
            C: 'kubejs:rod_wood'
        }
    )
    // crude pick
    event.shaped(Item.of('wooden_pickaxe', 1),
        [
            'AAB',
            ' CA',
            'D A'
        ],
        {
            A: 'kubejs:plate_ash',
            B: 'kubejs:gear_flint',
            C: 'betterend:leather_wrapped_stick',
            D: 'kubejs:rod_fine_wood'
        }
    )
    // bundle
    event.shaped(Item.of('bundle', 1),
        [
            ' C ',
            'A A',
            'ABA'
        ],
        {
            A: 'leather',
            B: 'farmersdelight:half_tatami_mat',
            C: 'string'
        }
    )
})