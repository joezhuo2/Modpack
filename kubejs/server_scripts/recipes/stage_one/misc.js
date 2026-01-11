ServerEvents.recipes(event => {
    // painting must use canvas
    event.remove({id: 'minecraft:painting'})
    // clay faucet
    event.remove({output: 'ceramics:clay_faucet'})
    event.shaped(Item.of('ceramics:clay_faucet', 1),
        [
            'A A',
            'BAB'
        ],
        {
            A: 'ceramics:unfired_clay_plate',
            B: 'clay_ball'
        }
    )  
    // clay channel
    event.remove({output: 'ceramics:clay_channel'})
    event.shaped(Item.of('ceramics:clay_channel', 1),
        [
            ' A ',
            'BBB',
            ' A '
        ],
        {
            A: 'ceramics:unfired_clay_plate',
            B: 'ceramics:clay_faucet'
        }
    )
    // tiny torch
    event.remove({output: 'actuallyadditions:tiny_torch'})
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
    // farmland
    event.remove({output: 'farmland'})
    event.shapeless(Item.of('farmland'),
        ['dirt', 'bone_meal']
    )
    // clay cistern
    event.remove({output: 'ceramics:clay_cistern'})
    event.shaped(Item.of('ceramics:clay_cistern', 1),
        [
            'C C',
            'A A',
            'BAB'
        ],
        {
            A: 'ceramics:unfired_clay_plate',
            B: 'light_blue_dye',
            C: 'kubejs:plate_bone'
        }
    )
    // torch
    event.remove({output: 'torch', type: 'minecraft:crafting_shaped'})
    event.remove({id: 'apotheosis:torch'})
    event.campfireCooking('torch', 'actuallyadditions:tiny_torch', 0.15, 900)
    // clay cistern
    event.remove({output: 'flower_pot'})
    event.shaped(Item.of('flower_pot', 1),
        [
            'A A',
            ' B '
        ],
        {
            A: 'kubejs:plate_brick',
            B: 'ceramics:unfired_faucet'
        }
    )
})