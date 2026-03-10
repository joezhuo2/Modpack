ServerEvents.recipes(event => {
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
})