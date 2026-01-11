const fluids = [
    {id: 'enchanted_water', type: 'thin', color: 0x1782DE, name: 'Enchanted Water'},
    {id: 'lunar_water', type: 'thin', color: 0xA196FF, name: 'Lunar Water'},
    {id: 'celestial_water', type: 'thin', color: 0x591CFF, name: 'Celestial Water'},
    {id: 'molten_rubber', type: 'thin', color: 0xD0C7B6, name: 'Molten Rubber'},
    {id: 'glimmering_fluid', type: 'thin', color: 0x2B9447, name: 'Glimmering Fluid'}
]

StartupEvents.registry('fluid', event => {
    for (let fluid of fluids) {
        if (fluid.type === 'thin') {
            event.create(fluid.id)
            .thinTexture(fluid.color)
            .displayName(fluid.name)
        }
        else {
            event.create(fluid.id)
            .thickTexture(fluid.color)
            .displayName(fluid.name)
        }
    }  
})