let metals = [
    {id: 'iron', color: 0xFFFFFF},
    {id: 'copper', color: 0xFFFFFF},
    {id: 'gold', color: 0xFFFFFF},
    {id: 'hellforged', color: 0xFFFFFF},
    {id: 'falsite', color: 0xFFFFFF},
    {id: 'ventium', color: 0xFFFFFF},
    {id: 'horizonite', color: 0xFFFFFF},
    {id: 'zinc', color: 0xFFFFFF},
    {id: 'aluminum', color: 0xFFFFFF},
    {id: 'osmium', color: 0xFFFFFF},
    {id: 'uranium', color: 0xFFFFFF},
    {id: 'iesnium', color: 0xFFFFFF},
    {id: 'tungsten', color: 0xFFFFFF},
    {id: 'veridium', color: 0xFFFFFF},
    {id: 'gravitite', color: 0xFFFFFF},
    {id: 'cloggrum', color: 0xFFFFFF},
    {id: 'froststeel', color: 0xFFFFFF},
    {id: 'tin', color: 0xFFFFFF},
    {id: 'lead', color: 0xFFFFFF},
    {id: 'silver', color: 0xFFFFFF},
    {id: 'nickel', color: 0xFFFFFF},
    {id: 'draconium', color: 0xFFFFFF},
    {id: 'platinum', color: 0xFFFFFF}
]

let metalType = [
    'crushed_raw',
    'cluster',
    'chunk',
    'clump',
    'crystal',
    'shard'
]

// StartupEvents.registry('item', event => {
//     metals.forEach(metal => {
//         metalType.forEach(type => {
//             let itemId = `${type}_${metal.id}`
//             let itemName = displayName(type, metal.id);
//             let colorHex = metal.color ?? 0xFFFFFF

//             let blacklist = [
//                 'crushed_raw_iron', 'crushed_raw_gold', 'crushed_raw_copper', 'crushed_raw_zinc', 'crushed_raw_aluminum', 'crushed_raw_osmium', 'crushed_raw_osmium', 'crushed_raw_tungsten', 'crushed_raw_lead', 'crushed_raw_tin', 'crushed_raw_silver', 'crushed_raw_nickel',
//                 'clump_iron', 'clump_gold', 'clump_osmium', 'clump_copper', 'clump_tin', 'clump_lead', 'clump_uranium',
//                 'crystal_iron', 'crystal_gold', 'crystal_osmium', 'crystal_copper', 'crystal_tin', 'crystal_lead', 'crystal_uranium',
//                 'shard_iron', 'shard_gold', 'shard_osmium', 'shard_copper', 'shard_tin', 'shard_lead', 'shard_uranium'
//             ]

//             if (!blacklist.includes(itemId)) {
//                 event.create(itemId)
//                 .displayName(itemName)
//                 .color(0, colorHex)
//                 // .texture(`kubejs:item/templates/${type}_template`)
//             }
//         })
//     })
// })

