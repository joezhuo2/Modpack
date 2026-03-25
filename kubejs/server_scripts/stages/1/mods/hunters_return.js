ServerEvents.recipes(event => {
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
})