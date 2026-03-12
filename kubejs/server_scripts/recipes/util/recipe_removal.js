// priority: 900

// const idRemovals = [
//     'minecraft:painting',
//     'apotheosis:torch',
//     'enderio:smelting/supplementaries/ash_brick',
//     'supplementaries:fine_wood',
//     'ceramics:porcelain_brick',
//     'supplementaries:daub',
//     'forbidden_arcanus:blacksmith_gavel_head',
//     'ceramics:clay_uncrafting',
//     'ceramics:clay_uncrafting_2',
//     'ceramics:clay_uncrafting_3',
//     'ceramics:clay_uncrafting_4'
// ]

// const outputRemovals = [
//     'confluence:copper_watch',
//     'confluence:tin_watch',
//     'confluence:silver_watch',
//     'confluence:tungsten_watch',
//     'confluence:gold_watch',
//     'confluence:platinum_watch',
//     'confluence:stopwatch',
//     'confluence:magic_mirror',
//     'wooden_axe',
//     'farmersdelight:flint_knife',
//     'embers:tinker_hammer',
//     'wooden_shovel',
//     'wooden_sword',
//     'iceandfire:earplugs',
//     'ceramicshears:ceramic_shears',
//     'wooden_pickaxe',
//     'constructionwand:stone_wand',
//     'spartanshields:wooden_basic_shield',
//     'forbidden_arcanus:wooden_blacksmith_gavel',
//     'ceramics:unfired_clay_bucket',
//     'ceramics:empty_clay_bucket',
//     'bundle',
//     'hunters_return:boomerang',
//     'extendedcrafting:handheld_table',
//     'mowziesmobs:spear',
//     'ceramics:clay_faucet',
//     'ceramics:clay_channel',
//     'actuallyadditions:tiny_torch',
//     'farmland',
//     'ceramics:clay_cistern',
//     'flower_pot',
//     'supplementaries:flower_box',
//     'supplementaries:planter',
//     'ceramics:unfired_faucet',
//     'ceramics:unfired_channel',
//     'ceramics:unfired_cistern',
//     'ceramics:unfired_porcelain',
//     'born_in_chaos_v1:scorched_log',
//     'ceramics:unfired_clay_plate',
//     'farmersdelight:canvas',
//     'farmersdelight:canvas_rug',
//     'farmersdelight:half_tatami_mat',
//     'farmersdelight:full_tatami_mat',
//     'farmersdelight:tatami',
//     'minecraft:leather',
//     'untamedwilds:hide_beige',
//     'untamedwilds:hide_white', 
//     'farmersdelight:cutting_board',
//     'minecraft:crafting_table',
//     'minecraft:composter',
//     'minecraft:campfire',
//     'aquaculture:worm_farm',
//     'hexerei:herb_drying_rack',
//     'ceramics:kiln',
//     'primitivechests:primitive_chest',
//     'primitivechests:advanced_primitive_chest',
//     'tiab:time_in_a_bottle'
// ]

const removeTypes = [
    // 'minecraft:crafting_shaped',
    // 'minecraft:crafting_shapeless',
    // 'minecraft:smelting',
    // 'minecraft:blasting',
    "hexerei:woodcutting"
]

ServerEvents.recipes(event => {
    // idRemovals.forEach(id => {
    //     event.remove({id: id})
    // })

    // outputRemovals.forEach(output => {
    //     event.remove({output: output})
    // })

    // Ingredient.of('#kubejs:remove_items').itemIds.forEach(itemID => {
    //     event.remove({output: itemID})
    // })
    removeTypes.forEach(type => {
        event.remove({type: type})
    })
})
