ServerEvents.recipes(event => {
    // cutting board
    event.remove({output: 'farmersdelight:cutting_board'})
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
    event.remove({output: 'crafting_table'})
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
    event.remove({output: 'composter'})
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
    event.remove({output: 'campfire'})
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
    event.remove({output: 'aquaculture:worm_farm'})
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
            E: 'regions_unexplored:gray_painted_planks'
        }
    )
})