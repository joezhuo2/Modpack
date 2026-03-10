ServerEvents.recipes(event => {
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
    // advanced primitive chest
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