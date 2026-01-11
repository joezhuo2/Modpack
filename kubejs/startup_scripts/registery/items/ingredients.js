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
    
    // {id: 'dust_brass', name: "Brass Dust"},
    // {id: 'skies_dust', name: "Dust of the Skies"},

    // {id: 'construction_paste', name: "Construction Paste"},
    // {id: 'dense_construction_paste', name: "Dense Construction Paste"},
    // {id: 'livingrock_dust', name: "Livingrock Dust"},

    {id: 'mud_ball', name: "Ball of Mud"},
    {id: 'mud_brick', name: "Mud Brick"},

    // {id: 'blank_rune', name: "Blank Rune"},

    // {id: 'quantum_wire', name: "QV Wire"},

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
    {id: 'cut_leather', name: 'Cut Leather'},
    {id: 'handle', name: 'Simple Handle'}
]

StartupEvents.registry('item', event => {
    for (let item of items) {
        event.create(item.id).displayName(item.name)
    }
})
