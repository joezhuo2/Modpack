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
    // canvas
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
    // canvas rug
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
    // half tatami mat
    event.shaped(Item.of('farmersdelight:half_tatami_mat', 2),
        [
            'BAB',
            'CDC'
        ],
        {
            A: 'farmersdelight:canvas_rug',
            B: 'string',
            C: 'farmersdelight:straw',
            D: 'kubejs:plate_porcelain'
        }
    )
    // full tatami mat
    event.shaped(Item.of('farmersdelight:full_tatami_mat', 1),
        [
            ' A ',
            'BBB',
            ' C '
        ],
        {
            A: 'supplementaries:flax',
            B: 'farmersdelight:half_tatami_mat',
            C: 'betterend:leather_stripe'
        }
    )
    // tatami block
    event.shaped(Item.of('farmersdelight:tatami', 3),
        [
            'BBB',
            'BCB',
            'BBB'
        ],
        {
            B: 'farmersdelight:full_tatami_mat',
            C: '#minecraft:wool'
        }
    )
    // better canvas recipe
    event.shaped(Item.of('farmersdelight:canvas', 6),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: '#forge:string',
            B: 'farmersdelight:straw',
            C: 'supplementaries:flax',
            D: 'farmersdelight:half_tatami_mat'
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
})