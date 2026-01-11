const durabilityChanges = [
    { id: 'embers:tinker_hammer', amount: 32}
]

ItemEvents.modification(event => {
    for (let item of durabilityChanges) {
        event.modify(item.id, i => {
            i.maxDamage = item.amount
        })
    }
})