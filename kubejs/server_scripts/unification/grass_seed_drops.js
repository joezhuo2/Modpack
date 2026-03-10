// priority: 800

const seeds = [
	// 'actuallyadditions:crystallized_canola_seed',
	// 'actuallyadditions:empowered_canola_seed',
	// 'actuallyadditions:flax_seeds',
	// 'actuallyadditions:rice_seeds',
	'blue_skies:fiery_bean_seeds',
	'blue_skies:pine_fruit_seeds',
	'blue_skies:scalefruit_seeds',
	'blue_skies:winter_leaf_seeds',
	// 'born_in_chaos_v1:seedof_chaos',
	// 'botania:dry_seeds',
	// 'botania:golden_seeds',
	// 'botania:infused_seeds',
	// 'botania:mutated_seeds',
	// 'botania:mycelium_seeds',
	// 'botania:overgrowth_seed',
	// 'botania:podzol_seeds',
	// 'botania:scorched_seeds',
	// 'botania:vivid_seeds',
	// 'botania:world_seed',
	// 'createaddition:seed_oil_bucket',
	'deep_aether:golden_grass_seeds',
	'deep_aether:squash_seeds',
	// 'ecologics:coconut_seedling',
	// 'eidolon:sildrian_seed',
	// 'embers:aluminum_crystal_seed',
	// 'embers:copper_crystal_seed',
	// 'embers:dawnstone_crystal_seed',
	// 'embers:dwarven_mithril_crystal_seed',
	// 'embers:gold_crystal_seed',
	// 'embers:iron_crystal_seed',
	// 'embers:lead_crystal_seed',
	// 'embers:nickel_crystal_seed',
	// 'embers:platinum_crystal_seed',
	// 'embers:silver_crystal_seed',
	// 'embers:tin_crystal_seed',
	// 'embers:uranium_crystal_seed',
	// 'embers:zinc_crystal_seed',
	// 'enderio:cloud_seed_bucket',
	// 'enderio:cloud_seed_concentrated_bucket',
	// 'farmersdelight:tomato_seeds',
	// 'forbidden_arcanus:golden_orchid_seeds',
	// 'goety:poison_quill_seed',
	// 'goety:quick_growing_seed',
	// 'hexalia:ancient_seed',
	// 'hexalia:mandrake_seeds',
	// 'hexalia:rabbage_seeds',
	// 'hexalia:sunfire_tomato_seeds',
	// 'hexerei:sage_seed',
	// 'hexerei:seed_mixture',
	// 'immersiveengineering:seed',
	// 'minecraft:beetroot_seeds',
	// 'minecraft:melon_seeds',
	// 'minecraft:pumpkin_seeds',
	// 'minecraft:torchflower_seeds',
	// 'minecraft:wheat_seeds',
	// 'mowziesmobs:foliaath_seed',
	// 'occultism:datura_seeds',
	// 'quark:seed_pouch',
	// 'supplementaries:flax_seeds',
	// 'thermal:amaranth_seeds',
	// 'thermal:barley_seeds',
	// 'thermal:bell_pepper_seeds',
	// 'thermal:coffee_seeds',
	// 'thermal:corn_seeds',
	// 'thermal:eggplant_seeds',
	// 'thermal:flax_seeds',
	// 'thermal:frost_melon_seeds',
	// 'thermal:green_bean_seeds',
	// 'thermal:hops_seeds',
	// 'thermal:onion_seeds',
	// 'thermal:peanut_seeds',
	// 'thermal:radish_seeds',
	// 'thermal:rice_seeds',
	// 'thermal:sadiroot_seeds',
	// 'thermal:spinach_seeds',
	// 'thermal:strawberry_seeds',
	// 'thermal:tea_seeds',
	// 'thermal:tomato_seeds',
	// 'undergarden:gloomgourd_seeds',
]

const seedItems = [
    'botania:grass_seeds',
    'farmersdelight:cabbage_seeds',
    'farmersdelight:tomato_seeds',
    'hexerei:sage_seed',
    'minecraft:wheat_seeds',
    'supplementaries:flax_seeds',
    'thermal:bell_pepper_seeds',
    'thermal:coffee_seeds',
    'thermal:green_bean_seeds',
    'thermal:hops_seeds',
    'thermal:onion_seeds',
	'thermal:peanut_seeds',
	'thermal:radish_seeds',
    'thermal:rice_seeds',
    'thermal:sadiroot_seeds',
	'thermal:spinach_seeds',
	'thermal:strawberry_seeds',
	'thermal:tea_seeds',
	'thermal:tomato_seeds',
	'actuallyadditions:canola_seeds',
    'minecraft:beetroot_seeds',
    'minecraft:melon_seeds',
    'minecraft:pumpkin_seeds',
    'minecraft:wheat_seeds',
    'thermal:amaranth_seeds',
    'thermal:barley_seeds',
    'thermal:corn_seeds',
	'thermal:eggplant_seeds',
    'thermal:flax_seeds',
    'thermal:frost_melon_seeds',
    'kubejs:plant_fiber'
]

const grassBlocks = [
	'biomesoplenty:dead_grass',
	'biomesoplenty:desert_grass',
	'biomesoplenty:dune_grass',
	'biomesoplenty:high_grass',
	'biomesoplenty:high_grass_plant',
	'biomesoplenty:watergrass',
	'ferdinandsflowers:beach_grass',
	'minecraft:grass',
	'minecraft:short_dry_grass',
	'minecraft:tall_dry_grass',
	'minecraft:tall_grass',
	'projectvibrantjourneys:beach_grass',
	'projectvibrantjourneys:short_grass',
	'projectvibrantjourneys:watergrass',
	'regions_unexplored:ashen_grass',
	'regions_unexplored:bladed_grass',
	'regions_unexplored:bladed_tall_grass',
	'regions_unexplored:frozen_grass',
	'regions_unexplored:medium_grass',
	'regions_unexplored:mycotoxic_grass',
	'regions_unexplored:sandy_grass',
	'regions_unexplored:sandy_tall_grass',
	'regions_unexplored:steppe_grass',
	'regions_unexplored:steppe_tall_grass',
	'regions_unexplored:windswept_grass',
	'untamedwilds:flora_eelgrass',
	'untamedwilds:flora_junegrass',
	'untamedwilds:flora_pampas_grass',
	'upgrade_aquatic:beachgrass',
	'upgrade_aquatic:tall_beachgrass'
]
const seedChance = 0.05

LootJS.modifiers(event => {
    grassBlocks.forEach(blockID => {
        event
        .addBlockLootModifier(blockID)
        .matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
        .removeLoot(Ingredient.all)
        .addLoot(blockID)

        let alternatives = [];

        seedItems.forEach(seedID => {
            alternatives.push(
                LootEntry.of(seedID, 1)
                .when(c => c.randomChance(seedChance))
            )
        })

        event
        .addBlockLootModifier(blockID)
        .not(n => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(alternatives)
    })
})