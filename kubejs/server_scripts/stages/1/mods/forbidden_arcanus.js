ServerEvents.recipes(event => {
    // blacksmith gavel head
    event.shaped(Item.of('forbidden_arcanus:blacksmith_gavel_head', 1),
        [
            ' AB',
            'ECA',
            'DE '
        ],
        {
            A: 'ceramics:unfired_porcelain',
            B: 'kubejs:plate_porcelain',
            C: 'kubejs:gear_ash',
            D: 'kubejs:thermal_blend',
            E: 'ceramics:unfired_clay_plate'
        }
    )
    // wooden blacksmith gavel
    event.shaped(Item.of('forbidden_arcanus:wooden_blacksmith_gavel', 1),
        [
            ' AB',
            'ECA',
            'DE '
        ],
        {
            A: 'kubejs:plate_wood',
            B: 'forbidden_arcanus:blacksmith_gavel_head',
            C: 'kubejs:gear_fine_wood',
            D: 'betterend:leather_wrapped_stick',
            E: 'mekanism:sawdust'
        }
    )
})