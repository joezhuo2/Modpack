const metalsToUnify = [
    {id: 'tin', color: 0xDCE7E9},
]

const metal_types = [
    {type: 'crushed_raw', tag: 'kubejs:crushed_raw/'},
    {type: 'fragment', tag: 'bloodmagic:fragments/'},
    {type: 'dirty_dust', tag: 'mekanism:dirty_dusts/'},
    {type: 'gravel', tag: 'bloodmagic:gravels/'},
    {type: 'clump', tag: 'mekanism:clumps/'},
    {type: 'crystal', tag: 'mekanism:crystals/'},
    {type: 'shard', tag: 'mekanism:shards/'}
]

const metalIdBlacklist = [
    'crushed_raw_tin', 'dirty_dust_tin', 'clump_tin', 'crystal_tin', 'shard_tin'
]

StartupEvents.registry('item', event => {
    metalsToUnify.forEach(metal => {
        metal_types.forEach(metalType => {
            let itemId = `${metalType.type}_${metal.id}`
            let itemName = displayName(metalType.type, metal.id);
            let colorHex = metal.color ?? 0xFFFFFF

            if (!metalIdBlacklist.includes(itemId)) {
                event.create(itemId)
                .displayName(itemName)
                .color(0, colorHex)
                .tag(`${metalType.tag}${metal.id}`)
                .texture(`kubejs:item/templates/${metalType.type}_template`)
            }
        })
    })
})

