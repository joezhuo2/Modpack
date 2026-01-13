ServerEvents.recipes(event => {
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
    // flint knife
    event.shaped(Item.of('farmersdelight:flint_knife', 1),
        [
            ' C',
            'AB'
        ],
        {
            A: '#forge:rods/wooden',
            B: 'projectvibrantjourneys:rocks',
            C: 'flint'
        }
    )
    // tinker hammer
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
    // earplugs
    event.shapeless(Item.of('iceandfire:earplugs', 1),
        [
            '#minecraft:buttons',
            '#minecraft:buttons'
        ]
    )
    // flint shears
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
    event.shaped(Item.of('wooden_pickaxe', 1),
        [
            'AAB',
            ' CA',
            'D A'
        ],
        {
            A: 'kubejs:plate_ash',
            B: 'kubejs:gear_flint',
            C: 'kubejs:handle',
            D: 'kubejs:rod_fine_wood'
        }
    )
    // crude pick
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
    // wooden shield
    event.shaped(Item.of('spartanshields:wooden_basic_shield', 1),
        [
            ' AB',
            'ACA',
            'BA '
        ],
        {
            A: 'supplementaries:fine_wood',
            B: 'kubejs:plate_stone',
            C: 'kubejs:rod_wood'
        }
    )
    // wooden blacksmith gavel
    event.shaped(Item.of('forbidden_arcanus:wooden_blacksmith_gavel', 1),
        [
            ' AB',
            'ECA',
            'DE '
        ],
        {
            A: 'kubejs:plate_wood',
            B: 'forbidden_arcanus:blacksmith_gavel_head',
            C: 'kubejs:gear_fine_wood',
            D: 'kubejs:handle',
            E: 'mekanism:sawdust'
        }
    )
    // clay bucket
    event.shaped(Item.of('ceramics:unfired_clay_bucket', 1),
        [
            'A A',
            ' A '
        ],
        {
            A: 'kubejs:plate_porcelain'
        }
    )
    // clay bucket
    event.campfireCooking('ceramics:empty_clay_bucket', 'ceramics:unfired_clay_bucket', 0.5, 2400)
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
    // boomerang
    event.shaped(Item.of('hunters_return:boomerang', 1),
        [
            'A ',
            'BC',
            'A '
        ],
        {
            A: 'kubejs:plate_fine_wood',
            B: 'leather',
            C: 'kubejs:rod_wood'
        }
    )
    // handheld crafting table
    event.shaped(Item.of('extendedcrafting:handheld_table', 1),
        [
            ' A',
            'B '
        ],
        {
            A: 'crafting_table',
            B: 'kubejs:handle'
        }
    )
    // spear
    event.shaped(Item.of('mowziesmobs:spear', 1),
        [
            '  A',
            ' CD',
            'B  '
        ],
        {
            A: 'kubejs:plate_porcelain',
            B: 'kubejs:rod_fine_wood',
            C: 'kubejs:handle',
            D: 'yellow_dye'
        }
    )
})