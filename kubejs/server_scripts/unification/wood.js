/*
This file is responsible for unifying wood types across mods.
This file is not to be copied by other modpacks, but can be used as a learning tool

woodTypes follows the following structure:
{
    log: 'modid:log_block',
    stripped_log: 'modid:stripped_log_block',
    plank: 'modid:plank_block',,
    stair: 'modid:stair_block',
    slab: 'modid:slab_block', 
    trapdoor: 'modid:trapdoor_block',
    pressure_plate: 'modid:pressure_plate_block',
    button: 'modid:button_item'
}

for 'content': put null if the item does not exist
*/
ServerEvents.recipes(event => {
    woodTypes.forEach(type => {
        // removal of existing recipes and addition of simple one
        if (type.plank && type.log) {
            event.remove({output: type.plank})
            event.shapeless(Item.of(type.plank, 1), [type.log])
        }
        if (type.stair) event.remove({output: type.stair})
        if (type.slab) event.remove({output: type.slab})
        if (type.trapdoor) event.remove({output: type.trapdoor})
        if (type.pressure_plate) event.remove({output: type.pressure_plate})
        if (type.button) event.remove({output: type.button})

        // log => stripped log
        if (type.stripped_log && type.log) {
            cut(
                event,
                { item: type.log },
                'forge:tools/axes',
                [
                    { item: type.stripped_log },
                    { item: 'farmersdelight:tree_bark', chance: 0.4 }
                ]
            )
        } 
        // fallback: log => plank (only if stripped log is missing AND plank exists)
        else if (type.plank && type.log) {
            cut(
                event,
                { item: type.log },
                'forge:tools/axes',
                [
                    { item: type.plank},
                    { item: type.plank, chance: 0.8 },
                    { item: type.plank, chance: 0.4 },
                    { item: 'farmersdelight:tree_bark', chance: 0.25 }
                ]
            )
        }

        // stripped log => plank
        if (type.stripped_log && type.plank) {
            cut(
                event,
                { item: type.stripped_log },
                'forge:tools/axes',
                [
                    { item: type.plank},
                    { item: type.plank, chance: 0.8 },
                    { item: type.plank, chance: 0.4 },
                    { item: 'mekanism:sawdust', chance: 0.15 }
                ]
            )
        }

        // plank => stair 
        if (type.plank && type.stair) {
            cut(
                event,
                { item: type.plank },
                'forge:tools/hammers',
                [
                    { item: type.stair, chance: 0.85},
                    { item: 'mekanism:sawdust', chance: 0.35 }
                ]
            )
        }
        // fallback: plank => slab (if no stairs, but plank and slab exist)
        else if (type.plank && type.slab) {
            cut(
                event,
                { item: type.plank },
                'forge:tools/hammers',
                [
                    { item: type.slab },
                    { item: type.slab, chance: 0.65 },
                    { item: 'mekanism:sawdust', chance: 0.4 }
                ]
            )
        }

        // stair => slab
        if (type.stair && type.slab) {
            cut(
                event,
                { item: type.stair },
                'forge:tools/axes',
                [
                    { item: type.slab },
                    { item: type.slab, chance: 0.4 },
                    { item: 'mekanism:sawdust', chance: 0.25 }
                ]
            )
        }

        // slab => trapdoor
        if (type.slab && type.trapdoor) {
            cut(
                event,
                { item: type.slab },
                'forge:tools/hammers',
                [
                    { item: type.trapdoor, chance: 0.85 },
                    { item: 'mekanism:sawdust', chance: 0.6 }
                ]
            )
        }
        // fallback: slab => pressure plate (if no trapdoor, but slab and pressure plate exist)
        else if (type.slab && type.pressure_plate) {
            cut(
                event,
                { item: type.slab },
                'forge:tools/hammers',
                [
                    { item: type.pressure_plate },
                    { item: type.pressure_plate , chance: 0.55 },
                    { item: type.pressure_plate , chance: 0.15 },
                    { item: 'mekanism:sawdust', chance: 0.3 }
                ]
            )
        }

        // trapdoor => pressure plate
        if (type.trapdoor && type.pressure_plate) {
            cut(
                event,
                { item: type.trapdoor },
                'forge:tools/hammers',
                [
                    { item: type.pressure_plate, chance: 0.95 },
                    { item: 'mekanism:sawdust', chance: 0.75 }
                ]
            )
        }
        // trapdoor => button (if no pressure plate, but trapdoor and button exist)
        else if (type.trapdoor && type.button) {
            cut(
                event,
                { item: type.trapdoor },
                'forge:tools/hammers',
                [
                    { item: type.button },
                    { item: type.button, chance: 0.4 },
                    { item: 'mekanism:sawdust', chance: 0.3 }
                ]
            )
        }

        // pressure plate => button
        if (type.trapdoor && type.pressure_plate) {
            cut(
                event,
                { item: type.trapdoor },
                'forge:tools/hammers',
                [
                    { item: type.pressure_plate, chance: 0.95 },
                    { item: 'mekanism:sawdust', chance: 0.75 }
                ]
            )
        }

        // pressure plate => button
        if (type.pressure_plate && type.button) {
            cut(
                event,
                { item: type.pressure_plate },
                'forge:tools/hammers',
                [
                    { item: type.button},
                    { item: 'mekanism:sawdust', chance: 0.3 }
                ]
            )
        }
    })
    event.remove({output: 'stick', type: 'minecraft:crafting_shapeless'})
    event.remove({output: 'stick', type: 'minecraft:crafting_shaped'})
    // sticks from planks
    cut(
        event, 
        { tag: 'forge:planks' },
        'forge:tools/axes',
        [{ item: 'stick' }]
    )
})