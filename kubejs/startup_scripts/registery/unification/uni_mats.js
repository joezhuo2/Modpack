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
    {id: 'brick', color: 0xB1440E},
    {id: 'ancient_wood', color: 0xC27BA0},
    {id: 'coal', color: 0x5B5B5B},
    {id: 'smooth_stone', color: 0xEEEEEE},
    {id: 'dripstone', color: 0xD9BEA3},
    {id: 'tin', color: 0xDCE7E9},
    {id: 'kivi', color: 0x656565},
    {id: 'caminite', color: 0xEAE1C4},
    {id: 'granite', color: 0xB6745C},
    {id: 'diorite', color: 0xE0E0E0},
    {id: 'andesite', color: 0xADADAD},
    {id: 'limestone', color: 0xEBDFC7},
    {id: 'marble', color: 0xE3E3E3},
    {id: 'scoria', color: 0x693E30},
    {id: 'basalt', color: 0x565C6B},
    {id: 'calcite', color: 0xF0F0F0},
    {id: 'deepslate', color: 0x4D4D4D}
]

const types = [
    'gear',
    'plate',
    'rod',
    'wire',
    'dust'
]

const mat_id_blacklist = [
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
    'wire_coal',
    'wire_dripstone',
    'wire_kivi',
    'wire_caminite',
    'wire_smooth_stone',
    'wire_kivi',
    'wire_granite',
    'wire_diorite',
    'wire_andesite',
    'wire_limestone',
    'wire_marble',
    'wire_scoria',
    'wire_basalt',
    'wire_calcite',
    'wire_deepslate',

    'dust_wood',
    'dust_flint',
    'dust_terracotta',
    'dust_clay',
    'dust_porcelain',
    'dust_mud',
    'dust_fine_wood',
    'dust_ash',
    'dust_brick',
    'dust_coal',
    'dust_caminite',
    'dust_tin',

    'plate_clay',
    'plate_terracotta',
    'wire_ancient_wood',
    'plate_tin',

    'gear_tin',
    'gear_kivi',
    'gear_granite',
    'gear_diorite',
    'gear_andesite',
    'gear_limestone',
    'gear_marble',
    'gear_scoria',
    'gear_basalt',
    'gear_calcite',
    'gear_deepslate',

    'rod_tin',
    'rod_kivi',
    'rod_granite',
    'rod_diorite',
    'rod_andesite',
    'rod_limestone',
    'rod_marble',
    'rod_scoria',
    'rod_basalt',
    'rod_calcite',
    'rod_deepslate',
]

StartupEvents.registry('item', event => {
    materials.forEach(material => {
        types.forEach(type => {
            let itemId = `${type}_${material.id}`
            let itemName = displayName(type, material.id)
            let colorHex = material.color ?? 0xFFFFFF

            if (!mat_id_blacklist.includes(itemId)) {
                event.create(itemId)
                .displayName(itemName)
                .color(0, colorHex)
                .tag(`forge:${type}s/${material.id}`)
                .texture(`kubejs:item/templates/${type}_template`)
            }
        })
    })
})
