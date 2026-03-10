ServerEvents.recipes(event => {
    // tiny torch
    event.shaped(Item.of('actuallyadditions:tiny_torch', 2),
        [
            'A',
            'B'
        ],
        {
            A: 'supplementaries:ash',
            B: '#forge:rods/wooden'
        }
    )
})