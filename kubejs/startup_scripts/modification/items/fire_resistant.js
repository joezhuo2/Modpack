const fireResItems = [
    'kubejs:thermal_blend',
    'kubejs:plate_stone',
    'supplementaries:ash_brick',
    'brick'
]

ItemEvents.modification(event => {
    for (let item of fireResItems) {
        event.modify(item, i => {
            i.fireResistant = true
        })
    }
})