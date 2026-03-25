ServerEvents.recipes(event => {
    // spear
    event.shaped(Item.of('mowziesmobs:spear', 1),
        [
            '  A',
            ' CD',
            'B  '
        ],
        {
            A: 'kubejs:plate_porcelain',
            B: 'kubejs:rod_fine_wood',
            C: 'kubejs:handle',
            D: 'yellow_dye'
        }
    )
})