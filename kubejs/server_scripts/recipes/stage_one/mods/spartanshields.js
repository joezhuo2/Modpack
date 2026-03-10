ServerEvents.recipes(event => {
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
})