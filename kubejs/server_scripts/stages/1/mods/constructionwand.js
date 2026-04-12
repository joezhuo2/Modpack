ServerEvents.recipes(event => {
    // stone wand
    event.shaped(Item.of('constructionwand:stone_wand', 1),
        [
            '  A',
            ' B ',
            'C  '
        ],
        {
            A: 'kubejs:plate_stone',
            B: 'betterend:leather_wrapped_stick',
            C: 'kubejs:rod_fine_wood'
        }
    )
})