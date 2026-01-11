ServerEvents.tags('fluid', event => {
    // water
    event.removeAll('minecraft:water')
    event.remove('minecraft:water', 'minecraft:water')

    // lava
    event.removeAll('minecraft:lava')
    event.add('minecraft:lava', 'minecraft:lava')
})