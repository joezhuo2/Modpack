ServerEvents.recipes(event => {
    // tinker hammer
    event.shaped(Item.of('embers:tinker_hammer', 1),
        [
            'AB',
            'CA'
        ],
        {
            A: 'flint',
            B: 'projectvibrantjourneys:rocks',
            C: 'kubejs:rod_wood'
        }
    )
})