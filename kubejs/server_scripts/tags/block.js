ServerEvents.tags('block', event => {
    event.removeAll('minecraft:needs_stone_tool')
    event.removeAll('minecraft:needs_iron_tool')
    event.removeAll('minecraft:needs_diamond_tool')
    
    event.removeAll('forge:needs_gold_tool')
    event.removeAll('forge:needs_netherite_tool')
    event.removeAll('forge:needs_wood_tool')
    
    event.removeAll('cucumber:mineable/paxel')
    event.removeAll('forge:mineable/paxel')
    event.removeAll('actuallyadditions:mineable/aio')
})