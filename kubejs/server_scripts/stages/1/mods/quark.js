ServerEvents.recipes(event => {
    // dirty glass shard
    event.campfireCooking('quark:dirty_shard', 'kubejs:sand_clump', 0.1, 600)
    // clear glass shard
    transform(
        event,
        'minecraft:water',
        'quark:clear_shard', 1,
        ['quark:dirty_shard'],
        'fluid'
    )
    // better clear shard recipe
    kiln(event, 300, 0.2, {item: 'kubejs:sand_clump'}, 'quark:clear_shard')
})