let gems = [
    {id: 'diamond', color: 0xFFFFFF},
    {id: 'emerald', color: 0xFFFFFF},
    {id: 'lapis', color: 0xFFFFFF},
    {id: 'nether_quartz', color: 0xFFFFFF},
    {id: 'amethyst', color: 0xFFFFFF},
    {id: 'black_quartz', color: 0xFFFFFF},
    {id: 'certus_quartz', color: 0xFFFFFF},
    {id: 'moonstone', color: 0xFFFFFF},
    {id: 'pyrope', color: 0xFFFFFF},
    {id: 'aquite', color: 0xFFFFFF},
    {id: 'diopside', color: 0xFFFFFF},
    {id: 'charoite', color: 0xFFFFFF},
    {id: 'dragonstone', color: 0xFFFFFF},
    {id: 'skyjade', color: 0xFFFFFF},
    {id: 'dark', color: 0xFFFFFF},
    {id: 'arcane', color: 0xFFFFFF},
    {id: 'fluorite', color: 0xFFFFFF},
    {id: 'peridot', color: 0xFFFFFF},
    {id: 'zanite', color: 0xFFFFFF},
    {id: 'regalium', color: 0xFFFFFF},
    {id: 'cinnabar', color: 0xFFFFFF},
    {id: 'niter', color: 0xFFFFFF},
    {id: 'sulfur', color: 0xFFFFFF},
    {id: 'ruby', color: 0xFFFFFF},
    {id: 'sapphire', color: 0xFFFFFF},
    {id: 'soulstone', color: 0xFFFFFF},
    {id: 'blazing_quartz', color: 0xFFFFFF},
    {id: 'natural_quartz', color: 0xFFFFFF},
    {id: 'apatite', color: 0xFFFFFF}
]

let gemType = [
    'raw',
    'crushed_raw',
    'gravel',
    'chunk',
    'shard'
]

// StartupEvents.registry('item', event => {
//     gems.forEach(gem => {
//         gemType.forEach(type => {
//             let itemId = `${type}_${gem.id}`
//             let itemName = displayName(type, gem.id);
//             let colorHex = gem.color ?? 0xFFFFFF
//             let blacklist = []

//             if (!blacklist.includes(itemId)) {
//                 event.create(itemId)
//                 .displayName(itemName)
//                 .color(0, colorHex)
//                 // .texture(`kubejs:item/gem_${type}_template`)
//             }
//         })
//     })
// })
