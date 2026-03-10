PlayerEvents.loggedIn(event => {
    const { level, player } = event
    const stage = 'first_spawn'

    const item = 'dirt'

    if (!AStages.playerHasStage(stage, player)) {
        AStages.addStageToPlayer(stage, player)
        level.server.runCommandSilent(`clear ${player.username}`)
        level.server.runCommandSilent(`give ${player.username} ${item}`)
    }
})

AStages.customizeStage('first_spawn')
    .setStay(0) 
