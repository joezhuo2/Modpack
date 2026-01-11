ServerEvents.recipes(event => {
    materialsList.forEach(mat => {
        event.shaped(Item.of(`#forge:rods/${mat.id}`, 1), 
            [
                'X',
                'X'
            ],
            { X: `#forge:plates/${mat.id}` }
        )

        event.shaped(Item.of(`#forge:gears/${mat.id}`, 1), 
            [
                ' X ',
                'X X',
                ' X '
            ],
            { X: `#forge:plates/${mat.id}` }
        )

        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [Item.of(`#kubejs:resources/${mat.id}`, 1)],
            result: [Item.of(`#forge:plates/${mat.id}`, 1)],
            tool: { tag: 'forge:tools/hammers' }
        })
    })
})