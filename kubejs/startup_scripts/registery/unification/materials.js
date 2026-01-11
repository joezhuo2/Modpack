const materials = [
    {id: 'wood', color: 0xB58868},
    {id: 'flint', color: 0x808080},
    {id: 'clay', color: 0xCFE2F3},
    {id: 'porcelain', color: 0xF5FFFE},
    {id: 'terracotta', color: 0xD6A77A},
    {id: 'stone', color: 0x888888},
    {id: 'bone', color: 0xE3DAC9},
    {id: 'mud', color: 0xDCBFA7},
    {id: 'fine_wood', color: 0xF9CB9C},
    {id: 'ash', color: 0xDEDEDE},
    {id: 'brick', color: 0xB1440E}
]

const types = [
    'gear',
    'plate',
    'rod',
    'wire'
]

const id_blacklist = [
    'wire_wood',
    'wire_flint',
    'wire_terracotta',
    'wire_clay',
    'wire_porcelain',
    'wire_stone',
    'wire_bone',
    'wire_mud',
    'wire_fine_wood',
    'wire_ash',
    'wire_brick',

    'plate_clay',
    'plate_terracotta'
]

StartupEvents.registry('item', event => {
    materials.forEach(material => {
        types.forEach(type => {
            let itemId = `${type}_${material.id}`
            let itemName = displayName(type, material.id)
            let colorHex = material.color ?? 0xFFFFFF

            if (!id_blacklist.includes(itemId)) {
                event.create(itemId)
                .displayName(itemName)
                .color(0, colorHex)
                .tag(`forge:${type}s/${material.id}`)
                .texture(`kubejs:item/templates/${type}_template`)
            }
        })
    })
})
