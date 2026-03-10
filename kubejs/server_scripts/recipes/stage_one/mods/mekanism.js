ServerEvents.recipes(event => {
    // sawdust
    cut(
        event,
        { item: 'farmersdelight:tree_bark' },
        'forge:tools/hammers',
        [{ item: 'mekanism:sawdust' }]
    )
})