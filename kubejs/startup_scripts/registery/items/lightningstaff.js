StartupEvents.registry('item', event => {
    event.create('stormbound_twig')
        .displayName('Stormbound Twig')
        .maxStackSize(1)
        .useAnimation('bow')
        .useDuration(() => 60)
        .use((level, player, hand) => true)
        .finishUsing((itemStack, level, entity) => {
            if (!level.isClientSide()) {
                const player = entity
                level.server.runCommandSilent(`execute at ${player.username} run summon minecraft:lightning_bolt ~ ~ ~`)
                level.server.runCommandSilent(`effect give ${player.username} cofh_core:shocked 15 1`)
                level.server.runCommandSilent(`effect give ${player.username} minecraft:blindness 15 0`)
                level.server.runCommandSilent(`effect give ${player.username} minecraft:slowness 15 1`)
            }
            return itemStack
        })
    
    event.create('storm_staff')
        .displayName('Storm Staff')
        .maxStackSize(1)
        .useAnimation('bow')
        .useDuration(() => 35)
        .use((level, player, hand) => true)
        .finishUsing((itemStack, level, entity) => {
            if (!level.isClientSide()) {
                const player = entity
                level.server.runCommandSilent(`effect give ${player.username} minecraft:resistance 1 255`)
                level.server.runCommandSilent(`effect give ${player.username} minecraft:fire_resistance 1 255`)
                level.server.runCommandSilent(`execute at ${player.username} run summon minecraft:lightning_bolt ~ ~ ~`)
            }
            return itemStack
        })
})