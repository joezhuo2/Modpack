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
            C: 'betterend:leather_wrapped_stick',
            D: 'yellow_dye'
        }
    )
})