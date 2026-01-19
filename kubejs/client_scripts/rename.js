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
    
    {id: "iceandfire:armor_silver_metal_helmet", name: "Tin Helmet"},
    {id: "iceandfire:armor_silver_metal_chestplate", name: "Tin Chestplate"},
    {id: "iceandfire:armor_silver_metal_leggings", name: "Tin Leggings"},
    {id: "iceandfire:armor_silver_metal_boots", name: "Tin Boots"},

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
]

ClientEvents.lang('en_us', event => {
    for (let item of itemsToName) {
        event.renameItem(item.id, item.name)
    }
})
