ServerEvents.recipes(event => {
    // cutting board
    event.shaped(Item.of('farmersdelight:cutting_board', 1),
        [
            'BC',
            'AA'
        ],
        {
            A: 'kubejs:plate_wood',
            B: '#kubejs:bark_mushrooms',
            C: 'farmersdelight:straw'
        }
    )
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
    // worm farm
    event.shaped(Item.of('aquaculture:worm_farm', 1),
        [
            'A A',
            'BCB',
            'AEA'
        ],
        {
            A: 'regions_unexplored:cyan_painted_planks',
            B: 'sugar_cane',
            C: 'composter',
            E: 'kubejs:gear_bone'
        }
    )
    // drying rack
    event.shaped(Item.of('hexerei:herb_drying_rack', 1),
        [
            ' A ',
            'B B',
            'CDC'
        ],
        {
            A: 'kubejs:gear_porcelain',
            B:'string',
            C: 'kubejs:plate_fine_wood',
            D: 'supplementaries:daub'
        }
    )
    // crude kiln
    event.shaped(Item.of('ceramics:kiln', 1),
        [
            'ABA',
            'CDC',
            'FEF'
        ],
        {
            A: 'bricks',
            B: 'kubejs:gear_stone',
            C: 'ceramics:unfired_faucet',
            D: 'ceramics:unfired_cistern',
            E: 'farmersdelight:tatami',
            F: 'kubejs:plate_brick',
        }
    )
    // primitive chest
    event.shaped(Item.of('primitivechests:primitive_chest', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'kubejs:plate_fine_wood',
            B: 'farmersdelight:half_tatami_mat',
            C: 'red_dye',
            D: 'kubejs:gear_brick'
        }
    )
    // primitive chest
    event.shaped(Item.of('primitivechests:advanced_primitive_chest', 1),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'farmersdelight:half_tatami_mat',
            B: 'farmersdelight:canvas',
            C: 'lime_wool',
            D: 'primitivechests:primitive_chest'
        }
    )
})