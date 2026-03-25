ServerEvents.recipes(event => {
    // ash brick
    event.shaped(Item.of('supplementaries:ash_brick', 3),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'supplementaries:ash',
            B: 'quark:clear_shard',
            C: 'kubejs:gravel_clump',
            D: 'ceramics:unfired_porcelain'
        }
    )
    // fine wood
    itemApplication(
        event,
        {item: 'honeycomb'},
        {tag: 'minecraft:logs' },
        {item: 'supplementaries:fine_wood'}
    )
    // daub
    event.shapeless(Item.of('supplementaries:daub', 3),
        ['gravel', 'sand', 'ceramics:unfired_porcelain_block', 'ceramics:porcelain_bricks']
    )
    kiln(event, 300, 0.2, {item: 'supplementaries:ash'}, 'supplementaries:ash_brick')
    // flower box
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
})