const items = [
    {id: 'thermal_blend', name: "Thermal Blend"},
    // {id: 'fiery_blend', name: "Fiery Blend"},
    // {id: 'smoldering_blend', name: "Smoldering Blend"},
    // {id: 'scorching_blend', name: "Scorching Blend"},
    // {id: 'blazing_blend', name: "Blazing Blend"},
    // {id: 'infernal_blend', name: "Infernal Blend"},
    // {id: 'hellfire_blend', name: "Hellfire Blend"},
    // {id: 'apoc_blend', name: "Apocalyptic Blend"},
    // {id: 'supernova_blend', name: "Supernova Blend"},

    {id: 'magic_clay', name: "Magical Clay"},
    // {id: 'spirit_clay', name: "Spirit Clay"},
    // {id: 'enchanted_clay', name: "Enchanted Clay"},
    // {id: 'spellbound_clay', name: "Spellbound Clay"},
    // {id: 'soul_clay', name: "Soulforged Clay"},
    // {id: 'arcane_clay', name: "Arcane Clay"},
    // {id: 'mystic_clay', name: "Mystic Clay"},
    // {id: 'celestial_clay', name: "Celestial Clay"},
    // {id: 'heavenly_clay', name: "Heavenly Clay"},

    {id: 'dirt_clump', name: "Dirt Clump"},
    {id: 'gravel_clump', name: "Gravel Clump"},
    {id: 'sand_clump', name: "Sand Clump"},

    // {id: 'bait_blaze', name: "Blaze Bait"},

    {id: 'construction_paste', name: "Construction Paste"},
    {id: 'dense_construction_paste', name: "Dense Construction Paste"},

    {id: 'mud_ball', name: "Ball of Mud"},
    {id: 'mud_brick', name: "Mud Brick"},

    {id: 'blank_rune', name: "Blank Rune"},

    // {id: 'wonder_chunk', name: 'Wonder Chunk'},
    
    // {id: 'raw_latex', name: 'Raw Latex Sheet'},
    // {id: 'unrefined_plastic', name: 'Unrefined Plastic Sheet'},
    // {id: 'processed_plastic', name: 'Processed Plastic Sheet'},
    // {id: 'processed_latex', name: 'Processed Latex Sheet'},
    // {id: 'rubber_sheet', name: 'Rubber Sheet'},

    // {id: 'glimmerdust', name: 'Glimmerdust'},
    // {id: 'dreamdust', name: 'Dreamdust'},
    
    {id: 'salt', name: 'Salt Dust'},
    {id: 'plant_fiber', name: 'Plant Fiber'},
    // {id: 'handle', name: 'Rough Handle'},
    // {id: 'handle_10', name: 'Simple Handle'},
    {id: 'cooling_components', name: 'Machine Cooling Components'},
    {id: 'heating_components', name: 'Machine Heating Components'},
    {id: 'molten_remains', name: 'Molten Remains'},
    {id: 'kiln_brick', name: 'Kiln Brick'},
    {id: 'kiln_blend', name: 'Kiln Blend'},
    {id: 'blast_brick', name: 'Blast Brick'},
    {id: 'blast_blend', name: 'Blast Blend'},
    {id: 'coke_brick', name: 'Coke Brick'},
    {id: 'coke_blend', name: 'Coke Blend'},
    {id: 'explosive_fuse', name: 'Explosive Fuse'},
    {id: 'rough_andesite_alloy', name: 'Rough Andesite Alloy'},
    {id: 'rusted_machine_components', name: 'Rusted Machine Components'},
    {id: 'weathered_hide', name: 'Weathered Hide'},
    {id: 'fallen_star', name: 'Fallen Star'},
    {id: 'reforge_scrap', name: 'Reforging Scrap'},
    {id: 'brilliant_dust', name: 'Brilliant Dust'},
    {id: 'wonder_chunk', name: 'Wonder Chunk'},
    {id: 'ice_cube', name: 'Ice Cube'},
]

StartupEvents.registry('item', event => {
    for (let item of items) {
        event.create(item.id).displayName(item.name)
    }
})
