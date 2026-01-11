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
    // flower pot
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
    // flower box
    event.remove({output: 'supplementaries:flower_box'})
    event.shaped(Item.of('supplementaries:flower_box', 1),
        [
            'ABA'
        ],
        {
            A: 'kubejs:plate_fine_wood',
            B: 'ceramics:unfired_channel'
        }
    )
    // planter
    event.remove({output: 'supplementaries:planter'})
    event.shaped(Item.of('supplementaries:planter', 1),
        [
            'A A',
            'BCB',
            'DED'

        ],
        {
            A: 'kubejs:plate_ash',
            B: 'kubejs:plate_brick',
            C: 'farmland',
            D: 'supplementaries:fine_wood',
            E: 'supplementaries:flower_box'
        }
    )
    // unfired faucet
    event.remove({output: 'ceramics:unfired_faucet'})
    event.shaped(Item.of('ceramics:unfired_faucet', 1),
        [
            'A A',
            ' B '
        ],
        {
            A: 'kubejs:plate_porcelain',
            B: 'ceramics:clay_faucet'
        }
    )
    // unfired channel
    event.remove({output: 'ceramics:unfired_channel'})
    event.shaped(Item.of('ceramics:unfired_channel', 1),
        [
            ' A ',
            'BBB',
            ' A '
        ],
        {
            A: 'supplementaries:daub',
            B: 'ceramics:unfired_faucet'
        }
    )
    // unfired cistern
    event.remove({output: 'ceramics:unfired_cistern'})
    event.shaped(Item.of('ceramics:unfired_cistern', 1),
        [
            'B B',
            'C C',
            'BAB'
        ],
        {
            A: 'ceramics:clay_channel',
            B: 'kubejs:plate_porcelain',
            C: 'supplementaries:daub'
        }
    )
})