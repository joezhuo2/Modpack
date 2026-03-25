ServerEvents.recipes(event => {
    // drying rack
    event.shaped(Item.of('hexerei:herb_drying_rack', 1),
        [
            ' A ',
            'B B',
            'CDC'
        ],
        {
            A: 'kubejs:gear_porcelain',
            B:'string',
            C: 'kubejs:plate_fine_wood',
            D: 'supplementaries:daub'
        }
    )
})