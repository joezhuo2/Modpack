ServerEvents.recipes(event => {
    // scorched log
    itemBurn(event, 
        {
            tag: 'minecraft:logs', 
        },
        {
            type: 'drop_item', 
            item: 'born_in_chaos_v1:scorched_log'
        }
    )
})