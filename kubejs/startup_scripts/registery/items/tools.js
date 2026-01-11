let tools = [
    {id: 'flint_shears', type: 'shears',name: 'Flint Shears', durability: 32}
]

StartupEvents.registry('item', event => {
    tools.forEach(tool => {
        event.create(tool.id, tool.type)
            .displayName(tool.name)
            .maxDamage(tool.durability)
            .tag(`forge:tools/${tool.type}s`)
    })
})