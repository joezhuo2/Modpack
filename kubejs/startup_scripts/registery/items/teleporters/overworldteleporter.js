StartupEvents.registry('item', event => {
    event.create('return_wand')
        .displayName('Staff of Safe Returns')
        .maxStackSize(1)
        .useAnimation('bow')
        .useDuration(() => 80)
        .use((level, player, hand) => true)
        .finishUsing((itemStack, level, entity) => {
            if (!level.isClientSide()) {
                const player = entity
                level.server.runCommandSilent(`execute in minecraft:overworld run tp ${player.username} ~ 150 ~`)
                level.server.runCommandSilent(`effect give ${player.username} minecraft:slow_falling 20 0`)
                level.server.runCommandSilent(`effect give ${player.username} minecraft:blindness 20 0`)
            }
            return itemStack
        })
})