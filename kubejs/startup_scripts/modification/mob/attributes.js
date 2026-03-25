let attrMods = [
    {id: 'hunters_return:hunter', health: 80, armor: 6, toughness: 4, speed: 0.15, damage: 8}
]

EntityJSEvents.attributes(event => {
    attrMods.forEach(mod => {
        event.modify(mod.id, attr => {
            if (mod.health !== undefined) attr.add("minecraft:generic.max_health",       mod.health)
            if (mod.armor !== undefined) attr.add("minecraft:generic.armor",             mod.armor)
            if (mod.toughness !== undefined) attr.add("minecraft:generic.armor_toughness",   mod.toughness)
            if (mod.speed !== undefined) attr.add("minecraft:generic.movement_speed",    mod.speed)
            if (mod.damage !== undefined) attr.add("minecraft:generic.attack_damage",     mod.damage)
        })
    })
})
