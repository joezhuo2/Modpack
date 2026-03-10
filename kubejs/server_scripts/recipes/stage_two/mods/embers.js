ServerEvents.recipes(event => {
    // caminite blend
    pestleMortar(
        event,
        [
            { item: 'ceramics:unfired_porcelain' },
            { item: 'ceramics:unfired_porcelain' },
            { item: 'ceramics:unfired_porcelain' },
            { item: 'kubejs:dust_calcite' },
            { item: 'kubejs:dust_granite' }
        ],
        { item: 'embers:caminite_blend', count: 3}
    )
})