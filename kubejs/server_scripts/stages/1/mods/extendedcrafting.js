ServerEvents.recipes(event => {
    // handheld crafting table
    event.shaped(Item.of('extendedcrafting:handheld_table', 1),
        [
            ' A',
            'B '
        ],
        {
            A: 'crafting_table',
            B: 'betterend:leather_wrapped_stick'
        }
    )
})