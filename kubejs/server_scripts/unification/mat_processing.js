// priority: 900

ServerEvents.recipes(event => {
    materialsList.forEach(mat => {
        var raw_resource = Ingredient.of(`#kubejs:resources/${mat.id}`).itemIds[0] ?? null
        var raw = Ingredient.of(`#forge:raw_materials/${mat.id}`).itemIds[0] ?? null
        // var ingot = Ingredient.of(`#forge:ingots/${mat.id}`).itemIds[0] ?? null
        var nugget = Ingredient.of(`#forge:nuggets/${mat.id}`).itemIds[0] ?? null
        // var block = Ingredient.of(`#forge:storage_blocks/${mat.id}`).itemIds[0] ?? null
        // var dust = Ingredient.of(`#forge:dusts/${mat.id}`).itemIds[0] ?? null
        // var gem = Ingredient.of(`#forge:gems/${mat.id}`).itemIds[0] ?? null

        var rod = Ingredient.of(`#forge:rods/${mat.id}`).itemIds[0] ?? null
        var gear = Ingredient.of(`#forge:gears/${mat.id}`).itemIds[0] ?? null
        var plate = Ingredient.of(`#forge:plates/${mat.id}`).itemIds[0] ?? null
        // var wire = Ingredient.of(`#forge:wires/${mat.id}`).itemIds[0] ?? null

        if (raw && nugget) {
            kiln(event, 300, 0.35, {item: raw}, nugget)

            event.remove([{output: nugget, type: 'minecraft:smelting'}, {input: raw, type: 'minecraft:smelting'}])
            smelting(event, raw, {item: nugget, count: 3}, 0.5, 200)

            event.remove([{output: nugget, type: 'minecraft:blasting'}, {input: raw, type: 'minecraft:blasting'}])
            blasting(event, raw, {item: nugget, count: 5}, 0.7, 100)
        }

        if (rod && plate) {
            event.remove({output: rod, type: 'minecraft:crafting_shaped'})
            event.shaped(Item.of(rod, 1), 
                [
                    'X',
                    'X'
                ],
                { X: plate }
            )
        }

        if (gear && plate) {
            event.remove({output: gear, type: 'minecraft:crafting_shaped'})
            event.shaped(Item.of(gear, 1), 
                [
                    ' X ',
                    'X X',
                    ' X '
                ],
                { X: plate }
            )
        }

        if (raw_resource && plate) {
            event.custom({
                type: 'farmersdelight:cutting',
                ingredients: [{item: raw_resource}],
                result: [{item: plate}],
                tool: { tag: 'forge:tools/hammers' }
            })
        }
    })
})