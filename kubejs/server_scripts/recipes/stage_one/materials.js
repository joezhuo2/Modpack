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
    // unfired porcelain
    event.remove({output: 'ceramics:unfired_porcelain'})
    transform(
        event, 
        'minecraft:water', 
        'ceramics:unfired_porcelain', 2, 
        ['bone_meal', 'clay_ball', 'supplementaries:ash'], 
        'fluid'
    )
    // first wood plate recipe
    itemBurn(
        event, 
        { item: 'born_in_chaos_v1:stripped_scorched_wood' }, 
        {
            type: "drop_item", 
            item: "kubejs:plate_wood", 
            count: 1
        }
    )
    // scorched log
    event.remove({output: 'born_in_chaos_v1:scorched_log'})
    itemBurn(event, 
        {
            tag: 'minecraft:logs', 
        },
        {
            type: 'drop_item', 
            item: 'born_in_chaos_v1:scorched_log'
        }
    )
    // remove original clay plate recipe
    event.remove({output: 'ceramics:unfired_clay_plate'})
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
    // sawdust
    cut(
        event,
        { item: 'farmersdelight:tree_bark' },
        'forge:tools/hammers',
        [{ item: 'mekanism:sawdust' }]
    )
    // canvas
    event.remove({output: 'farmersdelight:canvas'})
    event.shaped(Item.of('farmersdelight:canvas', 1),
        [
            'AB',
            'CA'
        ],
        {
            A: 'farmersdelight:straw',
            B: 'farmersdelight:tree_bark',
            C: '#forge:string'
        }
    )
    // removing crafting bone meal from bones
    event.remove({output: 'bone_meal', type: 'minecraft:crafting_shapeless'})
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
    // canvas rug
    event.remove({output: 'farmersdelight:canvas_rug'})
    event.shaped(Item.of('farmersdelight:canvas_rug', 1),
        [
            ' D ',
            'CAC',
            ' B '
        ],
        {
            A: 'moss_carpet',
            C: 'farmersdelight:canvas',
            B: 'kubejs:plate_wood',
            D: 'mekanism:sawdust'
        }
    )
    // sugar
    event.remove({output: 'sugar', type: 'minecraft:crafting_shapeless'})
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
    cut(
        event,
        { item: 'supplementaries:sugar_cube' },
        'forge:tools/hammers',
        [{ item: 'sugar' , count: 9}]
    )
    // glass
    event.campfireCooking('quark:dirty_shard', 'kubejs:sand_clump', 0.1, 600)
    transform(
        event,
        'minecraft:water',
        'quark:clear_shard', 1,
        ['quark:dirty_shard'],
        'fluid'
    )
    // ash brick
    event.remove({output: 'supplementaries:ash_brick', type: 'minecraft:smelting'})
    event.remove({id: 'enderio:smelting/supplementaries/ash_brick'})
    event.shaped(Item.of('supplementaries:ash_brick', 3),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'supplementaries:ash',
            B: 'quark:clear_shard',
            C: 'kubejs:gravel_clump',
            D: 'ceramics:unfired_porcelain'
        }
    )
    // clay plate
    event.campfireCooking('ceramics:clay_plate', 'ceramics:unfired_clay_plate', 0.2, 600)
    // stone
    event.campfireCooking('stone', 'cobblestone', 0.4, 1800)
    // brick
    event.remove({output: 'brick', type: 'minecraft:smelting'})
    transform(
        event,
        'minecraft:lava',
        'brick', 2,
        ['kubejs:plate_stone', 'supplementaries:ash_brick', 'kubejs:thermal_blend'],
        'fluid'
    )
})