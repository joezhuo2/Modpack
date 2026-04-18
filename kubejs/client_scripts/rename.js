const itemsToName = [
    {id: 'immersiveengineering:slag', name: "Raw Slag"},
    {id: 'the_deep_void:cinnabar', name: "Raw Cinnabar"},

    {id: 'thermal:cinnabar', name: "Crystallized Cinnabar"},
    {id: 'thermal:sulfur', name: "Crystallized Sulfur"},
    {id: 'thermal:sulfur_dust', name: "Crystallized Sulfur Dust"},
    {id: 'malum:processed_soulstone', name: "Crystallized Soulstone"},

    {id: 'forbidden_arcanus:cloth', name: "Luxurious Silk"},
    {id: 'mekanism:dye_base', name: "Builder's Clay"},
    {id: 'totemic:iron_bells', name: "Jingle Bells"},
    {id: 'malum:raw_soulstone', name: "Soulstone"},

    {id: 'createaddition:zinc_sheet', name: 'Zinc Plate'},
    {id: 'create_new_age:overcharged_iron_sheet', name: 'Overcharged Iron Plate'},
    {id: 'create_new_age:overcharged_golden_sheet', name: 'Overcharged Gold Plate'},
    
    {id: 'endrem:evil_eye', name: 'Sacred Eye'},

    {id: 'pneumaticcraft:plastic', name: 'Refined Plastic Sheet'},
    {id: 'industrialforegoing:tinydryrubber', name: 'Tiny Rubber Bits'},
    {id: 'industrialforegoing:plastic', name: 'Unprocessed Plastic Sheet'},
    
    {id: 'embers:ash', name: 'Alchemical Ash'},
    {id: 'create:cinder_flour', name: 'Netherrack Dust'},
    {id: 'actuallyadditions:wood_casing', name: 'Crude Casing'},

    {id: 'untamedwilds:hide_brown', name: 'Pelt'},
    {id: 'untamedwilds:hide_gray', name: 'Raw Hide'},
    {id: 'untamedwilds:hide_beige', name: 'Washed Hide'},
    {id: 'untamedwilds:hide_golden', name: 'Cleaned Hide'},
    {id: 'untamedwilds:hide_white', name: 'Prepared Hide'},
    {id: 'untamedwilds:hide_tan', name: 'Dried Hide'},
    {id: 'untamedwilds:hide_orange', name: 'Raw Leather'},
    
    {id: 'ceramics:kiln', name: 'Crude Kiln'},

    {id: 'mekanism:salt', name: 'Salt Clump'},

    {id: 'minecraft:wooden_axe', name: 'Crude Hatchet'},
    {id: 'minecraft:wooden_pickaxe', name: 'Crude Pick'},
    {id: 'minecraft:wooden_shovel', name: 'Crude Shovel'},
    {id: 'minecraft:wooden_sword', name: 'Crude Sword'},

    {id: 'mekanism:sawdust', name: 'Wood Chips'},

    {id: 'vampirism:pure_salt', name: 'Pure Salt Dust'},

    {id: 'thermal:flax', name: 'Hemp'},
    {id: 'thermal:flax_seeds', name: 'Hemp Seeds'},
    {id: 'thermal:flax_block', name: 'Hemp Bale'},

    {id: 'rootsclassic:mortar', name: 'Spellbound Mortar'},
    {id: 'rootsclassic:pestle', name: 'Arcane Pestle'},

    {id: "eidolon:silver_pickaxe", name: "Tin Pickaxe"},
    {id: "eidolon:silver_axe", name: "Tin Axe"},
    {id: "eidolon:silver_shovel", name: "Tin Shovel"},
    {id: "eidolon:silver_hoe", name: "Tin Hoe"},
    {id: "eidolon:silver_sword", name: "Tin Sword"},
    
    {id: "iceandfire:armor_silver_metal_helmet", name: "Stellarium Helmet"},
    {id: "iceandfire:armor_silver_metal_chestplate", name: "Stellarium Chestplate"},
    {id: "iceandfire:armor_silver_metal_leggings", name: "Stellarium Leggings"},
    {id: "iceandfire:armor_silver_metal_boots", name: "Stellarium Boots"},

    {id: 'alexscaves:pewen_sap', name: 'Sap'},
    {id: 'immersiveengineering:dust_wood', name: 'Fine Wood Dust'},

    {id: 'iceandfire:armor_copper_metal_helmet', name: 'Bronze Helmet'},
    {id: 'iceandfire:armor_copper_metal_chestplate', name: 'Bronze Chestplate'},
    {id: 'iceandfire:armor_copper_metal_leggings', name: 'Bronze Leggings'},
    {id: 'iceandfire:armor_copper_metal_boots', name: 'Bronze Boots'},
    {id: 'iceandfire:copper_sword', name: 'Bronze Sword'},
    {id: 'iceandfire:copper_pickaxe', name: 'Bronze Pickaxe'},
    {id: 'iceandfire:copper_axe', name: 'Bronze Axe'},
    {id: 'iceandfire:copper_shovel', name: 'Bronze Shovel'},
    {id: 'iceandfire:copper_hoe', name: 'Bronze Hoe'},

    {id: 'immersiveengineering:alloybrick', name: 'Kiln Bricks'},
    {id: 'immersiveengineering:cokebrick', name: 'Coke Bricks'},
    {id: 'immersiveengineering:blastbrick', name: 'Blast Bricks'},

    // {id: 'occultism:silver_ore_deepslate', name: 'Deepslate Titanium Ore'},
    // {id: 'simpleores:raw_tin_block', name: 'Raw Titanium Block'},
    // {id: 'simpleores:raw_tin', name: 'Raw Titanium'},
    // {id: 'simpleores:tin_ingot', name: 'Titanium Ingot'},
    // {id: 'simpleores:tin_nugget', name: 'Titanium Nugget'},
    // {id: 'simpleores:tin_block', name: 'Titanium Block'},
    // {id: 'simpleores:tin_dust', name: 'Titanium Dust'},
    // {id: 'simpleores:tin_sword', name: 'Titanium Sword'},
    // {id: 'simpleores:tin_pickaxe', name: 'Titanium Pickaxe'},
    // {id: 'simpleores:tin_axe', name: 'Titanium Axe'},
    // {id: 'simpleores:tin_shovel', name: 'Titanium Shovel'},
    // {id: 'simpleores:tin_hoe', name: 'Titanium Hoe'},
    // {id: 'simpleores:tin_helmet', name: 'Titanium Helmet'},
    // {id: 'simpleores:tin_chestplate', name: 'Titanium Chestplate'},
    // {id: 'simpleores:tin_leggings', name: 'Titanium Leggings'},
    // {id: 'simpleores:tin_boots', name: 'Titanium Boots'},

    {id: 'simpleores:copper_nugget', name: 'Orichalcum Nugget'},
    {id: 'simpleores:copper_dust', name: 'Orichalcum Dust'},
    {id: 'simpleores:copper_sword', name: 'Orichalcum Sword'},
    {id: 'simpleores:copper_pickaxe', name: 'Orichalcum Pickaxe'},
    {id: 'simpleores:copper_axe', name: 'Orichalcum Axe'},
    {id: 'simpleores:copper_shovel', name: 'Orichalcum Shovel'},
    {id: 'simpleores:copper_hoe', name: 'Orichalcum Hoe'},
    {id: 'simpleores:copper_helmet', name: 'Orichalcum Helmet'},
    {id: 'simpleores:copper_chestplate', name: 'Orichalcum Chestplate'},
    {id: 'simpleores:copper_leggings', name: 'Orichalcum Leggings'},
    {id: 'simpleores:copper_boots', name: 'Orichalcum Boots'},

    {id: 'eidolon:raw_silver', name: 'Raw Platinum'},
    {id: 'eidolon:deep_silver_ore', name: 'Deepslate Platinum Ore'},
    {id: 'eidolon:silver_ingot', name: 'Platinum Ingot'},
    {id: 'eidolon:silver_nugget', name: 'Platinum Nugget'},
    {id: 'eidolon:silver_block', name: 'Platinum Block'},
    {id: 'eidolon:raw_silver_block', name: 'Raw Platinum Block'},

    {id: 'theabyss:bone_armor_helmet', name: 'Titan Bone Helmet'},
    {id: 'theabyss:bone_armor_chestplate', name: 'Titan Bone Chestplate'},
    {id: 'theabyss:bone_armor_leggings', name: 'Titan Bone Leggings'},
    {id: 'theabyss:bone_armor_boots', name: 'Titan Bone Boots'},

    {id: 'immersiveengineering:armor_faraday_helmet', name: 'Aluminum Helmet'},
    {id: 'immersiveengineering:armor_faraday_chestplate', name: 'Aluminum Chestplate'},
    {id: 'immersiveengineering:armor_faraday_leggings', name: 'Aluminum Leggings'},
    {id: 'immersiveengineering:armor_faraday_boots', name: 'Aluminum Boots'},

    {id: 'ancient_elements:abyssal_helmet', name: 'Prismalium Helmet'},
    {id: 'ancient_elements:abyssal_chestplate', name: 'Prismalium Chestplate'},
    {id: 'ancient_elements:abyssal_leggings', name: 'Prismalium Leggings'},
    {id: 'ancient_elements:abyssal_boots', name: 'Prismalium Boots'},

    {id: 'ancient_elements:endrium_helmet', name: 'Melodium Helmet'},
    {id: 'ancient_elements:endrium_chestplate', name: 'Melodium Chestplate'},
    {id: 'ancient_elements:endrium_leggings', name: 'Melodium Leggings'},
    {id: 'ancient_elements:endrium_boots', name: 'Melodium Boots'},

    {id: 'naturesaura:gold_powder', name: 'Brilliant Powder'},

    {id: 'psi:cad_assembly_iron', name: 'Basic CAD assembly'},
    {id: 'psi:cad_assembly_gold', name: 'Advanced CAD assembly'},
    {id: 'psi:cad_assembly_psimetal', name: 'Elite CAD assembly'},

    {id: 'hexalia:silk_fiber', name: 'Silk Cocoon'}

]

ClientEvents.lang('en_us', event => {
    for (let item of itemsToName) {
        event.renameItem(item.id, item.name)
    }
})
