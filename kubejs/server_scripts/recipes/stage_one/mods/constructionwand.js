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
            B: 'kubejs:handle',
            C: 'kubejs:rod_fine_wood'
        }
    )
})