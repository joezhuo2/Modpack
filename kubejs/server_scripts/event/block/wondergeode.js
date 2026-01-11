BlockEvents.rightClicked(event => {
    const { player, block, level, item } = event
    
    if (level.isClientSide()) return
    if (!item || item.id !== 'kubejs:astrological_device') return
    if (block.id !== 'kubejs:ore_replacement') return

    block.set('minecraft:cobblestone')
    player.give(Item.of('kubejs:wonder_chunk'))
})