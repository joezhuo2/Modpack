ServerEvents.recipes(event => {
    stoneItems.forEach(type => {
        if (type.stair) event.stonecutting(type.stair, type.block)
        if (type.slab) event.stonecutting(type.slab, type.block)
        if (type.pressure_plate) event.stonecutting(type.pressure_plate, type.block)
        if (type.button) event.stonecutting(type.button, type.block)
        if (type.wall) event.stonecutting(type.wall, type.block)
    })
})