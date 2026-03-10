ServerEvents.recipes(event => {
    // kiln
    event.shaped(Item.of('ceramics:kiln', 1),
        [
            'ABA',
            'CDC',
            'FEF'
        ],
        {
            A: 'bricks',
            B: 'kubejs:gear_stone',
            C: 'ceramics:unfired_faucet',
            D: 'ceramics:unfired_cistern',
            E: 'farmersdelight:tatami',
            F: 'kubejs:plate_brick',
        }
    )
    // unfired porcelain
    transform(
        event, 
        'minecraft:water', 
        'ceramics:unfired_porcelain', 2, 
        ['bone_meal', 'clay_ball', 'supplementaries:ash'], 
        'fluid'
    )
    // clay plate
    event.campfireCooking('ceramics:clay_plate', 'ceramics:unfired_clay_plate', 0.2, 600)
    // porcelain brick
    event.shaped(Item.of('ceramics:porcelain_brick', 5),
        [
            'AAA',
            'CBC',
            'AAA'
        ],
        {
            A: 'ceramics:unfired_porcelain',
            B: 'supplementaries:ash_brick',
            C: 'honeycomb'
        }
    )
    // clay faucet
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
    // clay cistern
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
    // unfired faucet
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
    // ceramic shears
    event.shaped(Item.of('ceramicshears:ceramic_shears', 1),
        [
            'A ',
            'BA'
        ],
        {
            A: 'ceramics:clay_plate',
            B: 'kubejs:gear_clay'
        }
    )
    // clay bucket
    event.shaped(Item.of('ceramics:unfired_clay_bucket', 1),
        [
            'A A',
            ' A '
        ],
        {
            A: 'kubejs:plate_porcelain'
        }
    )
    // clay bucket
    event.campfireCooking('ceramics:empty_clay_bucket', 'ceramics:unfired_clay_bucket', 0.5, 2400)
})