ServerEvents.recipes(event => {
    // crude hatchet
    event.remove({output: 'wooden_axe'})
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
    // flint knife
    event.remove({output: 'farmersdelight:flint_knife'})
    event.shaped(Item.of('farmersdelight:flint_knife', 1),
        [
            ' C',
            'A '
        ],
        {
            A: '#forge:rods/wooden',
            C: 'flint'
        }
    )
    // tinker hammer
    event.remove({output: 'embers:tinker_hammer'})
    event.shaped(Item.of('embers:tinker_hammer', 1),
        [
            'AB',
            'CA'
        ],
        {
            A: 'flint',
            B: 'projectvibrantjourneys:rocks',
            C: 'kubejs:rod_wood'
        }
    )
    // crude shovel
    event.remove({output: 'wooden_shovel'})
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
    event.remove({output: 'wooden_sword'})
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
    // earplugs
    event.remove({output: 'iceandfire:earplugs'})
    event.shapeless(Item.of('iceandfire:earplugs', 1),
        [
            '#minecraft:buttons',
            '#minecraft:buttons'
        ]
    )
    // flint shears
    event.remove({output: 'kubejs:flint_shears'})
    event.shaped(Item.of('kubejs:flint_shears', 1),
        [
            'A  ',
            'AB ',
            'CAA'
        ],
        {
            A: 'kubejs:plate_flint',
            B: 'ceramics:unfired_porcelain',
            C: 'kubejs:gear_wood'
        }
    )
    // ceramic shears
    event.remove({output: 'ceramicshears:ceramic_shears'})
    event.shaped(Item.of('ceramicshears:ceramic_shears', 1),
        [
            'A ',
            'BA'
        ],
        {
            A: 'ceramics:clay_plate',
            B: 'kubejs:gear_clay'
        }
    )
    // crude pick
    event.remove({output: 'wooden_pickaxe'})
    event.shaped(Item.of('wooden_pickaxe', 1),
        [
            'AAB',
            ' CA',
            'D A'
        ],
        {
            A: 'kubejs:ash_plate',
            B: 'kubejs:gear_flint',
            C: 'kubejs:handle',
            D: 'kubejs:rod_fine_wood'
        }
    )
    // crude pick
    event.remove({output: 'constructionwand:stone_wand'})
    event.shaped(Item.of('constructionwand:stone_wand', 1),
        [
            '  A',
            ' B ',
            'C  '
        ],
        {
            A: 'kubejs:plate_stone',
            B: 'kubejs:handle',
            C: 'kubejs:rod_fine_wood'
        }
    )
})