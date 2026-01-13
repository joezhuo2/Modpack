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

    event.create('astrological_device')
        .displayName('Astrological Device')
        .maxStackSize(1)

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

    event.create('nether_device')
        .displayName('Perception Device')
        .maxStackSize(1)
        
    event.create('sky_wand')
        .displayName('Wand of the Skies')
        .maxStackSize(1)
        .useAnimation('bow')
        .useDuration(() => 80)
        .use((level, player, hand) => true)
        .finishUsing((itemStack, level, entity) => {
            if (!level.isClientSide()) {
                const player = entity
                level.server.runCommandSilent(`execute in aether:the_aether run tp ${player.username} ~ 300 ~`)
                level.server.runCommandSilent(`effect give ${player.username} minecraft:slow_falling 20 0`)
                level.server.runCommandSilent(`effect give ${player.username} minecraft:blindness 20 0`)
            }
            return itemStack
        })
})