let blocks = [
  {id: 'construction_block', name: 'Construction Block', hardness: 10.0, resistance: 400.0, toolLevel: 3, tool: 'pickaxe'},
  {id: 'dense_construction_block',  name: 'Dense Construction Block', hardness: 14.0, resistance: 800.0, toolLevel: 4, tool: 'pickaxe'},
  {id: 'ore_replacement', name: 'Wonder Geode', hardness: 60000.0, resistance: 60000.0, toolLevel: 9, tool: 'pickaxe'},
  {id: 'polished_stone', name: 'Polished Stone', hardness: 5.0, resistance: 15.0, toolLevel: 4, tool: 'pickaxe'}
]

StartupEvents.registry('block', event => {
  blocks.forEach(block => {
    let newBlock = event.create(block.id)
      .displayName(block.name)
      .soundType(block.soundType ?? 'stone')
      .hardness(block.hardness)
      .resistance(block.resistance)
      .requiresTool(block.requiresTool ?? true)

    if (block.tool) {
      newBlock
        .tagBlock(`minecraft:mineable/${block.tool}`)
        .tagBlock(`hltweaker:needs_t${block.toolLevel}_tool`)
    }
  })
})