const skillMap = {
  mining: 'MINING',
  gathering: 'GATHERING',
  attack: 'ATTACK',
  defense: 'DEFENSE',
  building: 'BUILDING',
  farming: 'FARMING',
  agility: 'AGILITY',
  magic: 'MAGIC'
}

ItemEvents.rightClicked(event => {
    const { item, player, level } = event
    if (level.isClientSide() || !item?.id) return

    const match = Object.keys(skillMap).find(
        s => item.id === `kubejs:${s}_level_orb`
    )

    if (!match) return

    level.server.runCommandSilent(
        `skills add ${player.username} ${skillMap[match]} 1`
    )

    if (!player.isCreative()) item.shrink(1)
    player.playSound('minecraft:entity.experience_orb.pickup', 1, 1)
    // particles
})
