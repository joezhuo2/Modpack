ServerEvents.recipes(event => {
    // thermal blend
    transform(
        event, 
        'minecraft:water', 
        'kubejs:thermal_blend', 1, 
        ['orange_dye', 'ceramics:unfired_porcelain', 'mekanism:sawdust'], 
        'fluid'
    )
    // mud ball
    transform(
        event,
        'minecraft:water',
        'kubejs:mud_ball', 1,
        ['kubejs:dirt_clump'],
        'fluid'
    )
    // mud brick
    itemBurn(
        event,
        { item: 'kubejs:mud_ball' },
        {
            type: "drop_item",
            item: "kubejs:mud_brick",
            count: 1
        }
    )
    // first wood plate recipe
    itemBurn(
        event, 
        { item: 'born_in_chaos_v1:scorched_planks' }, 
        {
            type: "drop_item", 
            item: "kubejs:plate_wood", 
            count: 1
        }
    )
    // salt dust from clump
    cut(
        event,
        { item: 'mekanism:salt' },
        'forge:tools/hammers',
        [
            { item: 'kubejs:salt' }, 
            { item: 'kubejs:salt' , chance: 0.5},
            { item: 'kubejs:salt' , chance: 0.15}
        ]
    )
    // cut leather
    cut(
        event,
        { item: 'leather' },
        'forge:tools/knives',
        [
            { item: 'kubejs:cut_leather' }, 
            { item: 'kubejs:cut_leather' , chance: 0.75},
            { item: 'kubejs:cut_leather' , chance: 0.4}
        ]
    )
    // handle
    event.shaped(Item.of('kubejs:handle', 1),
        [
            'ABC'
        ],
        {
            A: 'kubejs:cut_leather',
            B: 'kubejs:rod_wood',
            C: 'feather'
        }
    )
    // plant fiber from leaves
    cut(
        event,
        { tag: 'minecraft:leaves' },
        'forge:tools/knives',
        [
            { item: 'kubejs:plant_fiber' }, 
            { item: 'kubejs:plant_fiber' , chance: 0.7},
            { item: 'kubejs:plant_fiber' , chance: 0.4}
        ]
    )
    // plant fiber from saplings
    cut(
        event,
        { tag: 'minecraft:saplings' },
        'forge:tools/knives',
        [
            { item: 'kubejs:plant_fiber' }, 
            { item: 'kubejs:plant_fiber' , chance: 0.5},
            { item: 'kubejs:plant_fiber' , chance: 0.2}
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
})