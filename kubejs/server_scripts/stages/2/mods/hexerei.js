ServerEvents.recipes(event => {
    // pestle and mortar
    event.shaped(Item.of('hexerei:pestle_and_mortar', 1),
        [
            ' D ',
            'ACA',
            'BAB'
        ],
        {
            A: 'kubejs:plate_smooth_stone',
            B: 'kubejs:plate_diorite',
            C: 'thermal_extra:tin_rod',
            D: 'kubejs:handle'
        }
    )
})