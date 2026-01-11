BlockEvents.rightClicked(event => {
    const { player, block, level, item } = event
    
    if (level.isClientSide()) return
    if (!item || item.id !== 'kubejs:nether_device') return
    if (block.id !== 'the_deep_void:primordial_stone') return
    
    level.server.runCommandSilent(`execute in minecraft:the_nether run tp ${player.username} 0 150 0`)
    level.server.runCommandSilent(`effect give ${player.username} minecraft:slow_falling 20 0`)
    level.server.runCommandSilent(`effect give ${player.username} minecraft:blindness 20 0`)
})
