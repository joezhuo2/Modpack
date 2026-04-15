var UUID = Java.loadClass('java.util.UUID')

const armorPiecesToChange = [
    { id: 'immersiveengineering:armor_faraday_helmet', armor: 2 },
    { id: 'immersiveengineering:armor_faraday_chestplate', armor: 5 },
    { id: 'immersiveengineering:armor_faraday_leggings', armor: 4 },
    { id: 'immersiveengineering:armor_faraday_boots', armor: 2 },
]

ItemEvents.modification(event => {
  armorPiecesToChange.forEach(piece => {
    event.modify(piece.id, item => {
      item.armorProtection = piece.armor

      if (piece.toughness) item.armorToughness = piece.toughness

      if (piece.hp) {
        let uuid = UUID.randomUUID()
        item.addAttribute(
            'minecraft:generic.max_health',
            uuid,
            'Health Bonus',
            piece.hp,
            'addition'
        )
      }
    })
  })
})
