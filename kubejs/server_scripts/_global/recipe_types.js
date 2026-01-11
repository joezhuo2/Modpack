// priority: 1000

/**
 * Global Parameters explanation
 * 
 * @param {*} event kubejs event
 * 
 * ## Basic Input and Output ##
 * @param {object} output (single output) for single output items
 * @param {list} output (list of output items) for multiple output items
 * @param {object} input (single input) for single input items
 * @param {list} input (list of input items) for multiple input items
 * @param {*} list (multiple outputs/inputs) [{}] => {} represents an object
 * @param {*} object necessary information put inside {}, usually item and count
 * @param {type: id} item information for a single item object
 * @param {type} type (item type) can be 'item' or 'tag'
 * @param {type} type (output type) can be 'chance', 'count', or 'item'
 * @param {*} id item id ('modid:itemid') or ('mod:tagId')
 * @param {int} count number of items
 * @param {float} chance chance for additional items
 * 
 * ## Commonly Used ##
 * @param {'id'} fluid fluid tag
 * @param {int} amount fluid amount used (in mb)
 * @param {int} time time taken in ticks
 * @param {float} exp exp gained 
 * @param {int} energy energy needed
 * @param {String} recipeId recipe id
 * @param {'id'} base item used to activate the craft
 * @param {*} key describe which pattern symbol represents what item
 * @param {*} pattern pattern used for shaped recipes
 * 
 * ## Lychee Recipes
 * https://lycheetweaker.readthedocs.io/en/docs-1.20/recipe/
 * ### Post Action
 * @param {*} type one of the following types have to be chosen
 * #### Drop Item
 * @param {*} type 'drop_item'
 * @param {*} item item id
 * @param {*} tag item tag
 * @param {*} count number of items to be dropped (optional)
 * #### Place Block
 * @param {*} type 'place'
 * @param {*} block block id
 * @param {*} offsetX x offset
 * @param {*} offsetY y offset
 * @param {*} offsetZ z offset
 * #### Execute Command
 * @param {*} type 'execute'
 * @param {*} command the command to run
 * @param {boolean} hide whether this should be hidden in jei
 * #### Drop Experience
 * @param {*} type 'drop_xp
 * @param {int} amount amount of xp
 * ### Block Falling
 * @param {*} fallingBlock block that is falling (optional, defaults to anvils)
 * @param {*} landingBlock block that fallignBlock lands on (optional, default to all blocks)
 * 
 * ## Conditional Parameters ##
 * ### Rune Ritual
 * @param {*} center item in the center (item: 'id')
 * @param {*} runes a colletion of rune objects
 * @param {*} rune include the following parameters for each rune object
 * @param {*} consume whether rune is consumed
 * @param {*} rune (rune: {item: 'id'})
 * @param {*} x x offset relative to the center
 * @param {*} z z offset relative to the center
 * ### Dissolution Chamber
 * @param {*} fluid include 'Amount' and 'FluidName'
 * ### Soul Binding 
 * @param {*} entity entity required for soul bind ('modid:entityid')
 * ### Sag Mill
 * @param {*} output must include 'optional: false' inside output objects
 * ### Ritual
 * @param {*} color #hex code color
 * @param {*} level 0-3
 * @param {*} effect see https://github.com/Lothrazar/RootsClassic/tree/trunk/1.20/src/main/resources/data/rootsclassic/recipes/ritual
 * ### Clibano Combustion
 * @param {*} residue
 * ### Spirit Crucible
 * @param {*} spirits list of objects that must include 'type' and 'count'
 * @param {spirits} type 'infernal', 'arcane', 'aqueous', 'earthen', 'aerial', 'sacred', 'wicked', 'eldritch'
 * ### Metal press
 * @param {*} mold mold item to use 
 * ### Coke Oven
 * @param {*} creosote output creosote amount in mb
 * ### Thermopneumatic Processing Plant
 * @param {*} isExothermic
 * @param {*} temps specify min_temp and max_temp, 
 * @param {*} speed 
 * ### Fluid Mixer
 * @param {*} fluid 2 fluids are inputted
 * @param {*} type use 'pneumaticcraft:fluid'
 * ### Assembly
 * @param {*} program can be either 'drill' or 'laser'
 * ### Amadron Tablet
 * @param {*} type must be included in input and output objects, can be either 'ITEM' or 'FLUID'
 * @param {*} isStatic default 'true'
 * @param {*} level default 0
 * ### PRC
 * @param {*} gas this is the gas OUTPUT, the gas input is 'input' and item input is 'base'
 * ### Chemical Crystallizer 
 * @param {*} chemicalType can be 'gas'
 * ### Stamping
 * @param {item} stamp item used as the stamp
 * ### Boring
 * @param {*} dimensionList list of dimensions this is valid in
 * @param {*} maxHeight max y-level 
 * @param {*} reqBlock required block(s), must include amount and block_tag
 * @param {*} blockTag tag for usable blocks
 * @param {int} weight how common the drops are
 * ### Alchemy 
 * @param {*} aspects list of items that are valid aspects for the craft
 * ### Magic Workbench
 * @param {*} base string of 4 symbols, use key to link each item (put space for no item) (starts at top, goes clockwise)
 * ### Ritual Brazier
 * @param {*} focusItem item on the necrotic focus (can be null)
 * @param {*} healthReq min health required (will consume hp if inputted) (can be null)
 * @param {*} keepNbt keep nbt of original item (can be null)
 * ### Crucible
 * @param {*} steps basically just multiple lists of items => each list represents a step
 * @param {int} stirs can be included within a step object (format: stirs: (int) stir) 
 * ### Fusion Crafting
 * @param {*} tier can be either 'WYVERN' or 'DRACONIUM'
 * ### Tesla Coil Charging
 * @param {int} rate max charge rate
 * ### Sequenced Assembly
 * @param {int} loops number of times to repeat
 * @param {output} output can include multiple output objects for adding failed items with chance to tune each item's weight
 * @param {[Recipe]} sequence list of Creating Machine recipe objects with incomplete item as both input and output
 * @param {*} transitionItem failed item that transitions between crafts
 * ### Crushing WHeel
 * @param {*} tools tools are included as additional inputs, and keepTool enabled
 * ### Filling By Spout
 * @param {*} fluid fluid input is included as an object in input
 * ### Create Heating
 * @param {*} heat can be 'heated'or 'superheated'
 * ### Mechanical Crafting
 * @param {*} acceptMirrored whether the recipe can be mirrored
 * ### Fermenting Barrel
 * @param {*} input input fluid
 * @param {*} inAmount input fluid amount
 * @param {*} output output fluid
 * @param {*} outAmount output fluid amount
 * ### Item inside Block
 * @param {'id'} inputItem item thrown inside block
 * @param {{'id', state: {'state'}}} inputBlock block/fluid, optional state
 * @param {'id'} outputItem resulting item
 * @param {'id'} outputBlock resulting block
 * ### Inscriber
 * @param {*} top additional objects 
 * @param {*} middle additional objects 
 * @param {*} bottom additional objects 
 * @param {mode} mode can be either 'press' or 'inscribe'
 * ### Reaction Chamber
 * @param {*} type 'ae2:i' [item] or 'ae2:f' [fluid]
 * ### In-World Transformation
 * @param {*} type 'explosion' or 'fluid' => must specify fluid tag
 * ### Cutting Board ###
 * @param {'tag'} toolTag id of the tools that can be used
 * ### Tree Ritual ###
 * @param {'id'} sapling input sapling item
 * ### Empowerer ###
 * @param {int} color color of laser
 * ### Entropy Staff
 * @param {mode} mode can be either 'heat' or 'cool' (entropy)
 * ### Infusion Enchanting
 * @param {int} displayLevel display xp level cost
 * @param {*} minReq min 'eterna', 'quanta', and 'arcana' 
 * @param {*} maxReq max 'eterna', 'quanta', and 'arcana' 
 * ### Crush Glyph
 * @param {*} maxRange put this in the 'output' object
 * ### Enchanting Apparatus and Imbuement Chamber
 * @param {boolean} keepNbt does new item keep original item data
 * @param {int} source source cost
 * ### Bio-Forge, Decomposer and Bio-Lab
 * @param {int} nutrient nutrient cost
 * ### Decomposer
 * @param {output} countRange mandatory count ranges
 * @param {type} type type: 'uniform'
 * @param {int} max max items
 * @param {int} min min items
 * ### Alchemy Table
 * @param {int} blood blood cost
 * @param {int} level blood orb minimum level
 * ### Blood altar
 * @param {int} blood blood cost
 * @param {int} consumptionRate consumption rate
 * @param {int} drainRate drain rate
 * @param {int} level blood altar minimum level
 * ### ARC, Industrial Crusher
 * @param {int} inputCount number of input items
 * @param {{'type': 'id'}} tool id or tag of the tools that can be used
 * @param {input} secondaryOutput additional items (must include below additional parameters)
 * @param {float} chance chance of getting additional items
 * @param {float} mainChance ??? (default 0.0)
 * @param {boolean} consumeIngredient ??? (default true)
 * @param {float} mainoutputchance ??? (default 0.0)
 * ### Alchemy Ash
 * @param {*} texture see https://github.com/WayofTime/BloodMagic/tree/1.20.1/src/main/resources/assets/bloodmagic/textures/models/alchemyarrays
 * ### Hellfire Forge
 * @param {int} drain 
 * @param {int} minDrain 
 * @param {input} input{0-4} inputs (can be empty) 
 * ### Mana Pool
 * @param {*} catalyst catalyst block
 * @param {int} mana mana cost
 * ### Pure Daisy
 * @param {*} type can be 'tag' or 'block'
 * @param {*} output use 'name' for the output type
*/

function transform(event, fluid, output, count, input, type) {
    var ing = input.map(function(item) {
        return { item: item }
    })
    var conditions = {type: type}
    if (type === 'fluid') {
        conditions.tag = fluid
    }
    event.custom({
        type: 'ae2:transform',
        circumstance: conditions,
        ingredients : ing,
        result: {
            count: count,
            item: output
        }
    })
}
global.transform = transform
function cook(event, time, exp, output, count, input) {
    var ing = input.map(function(item) {
        return { item: item }
    })
    event.custom({
        type: 'farmersdelight:cooking',
        cookingtime: time,
        experience: exp,
        ingredients : ing,
        result: {
            count: count,
            item: output
        }
    })
}
global.cook = cook
function cut(event, input, toolTag, output) {
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [input],
        result: output.map(function(output) {
            if (output.item) {
                return {
                    item: output.item,
                    chance: output.chance || 1.0,
                    count: output.count || 1
                }
            }
            else if (output.tag) {
                return {
                    tag: output.tag,
                    chance: output.chance || 1.0,
                    count: output.count || 1
                }
            }
        }),
        tool: {
            tag: toolTag
        }
    })
}
global.cut = cut
function treeRitual(event, output, count, input, sapling, time) {
    var ing = input.map(function(item) {
        return { item: item }
    })
    var ritualRecipe = {
        type: 'naturesaura:tree_ritual',
        ingredients: ing,
        output: {
            item: output,
            count: count
        },
        time: time
    }
    if (sapling) {
        ritualRecipe.sapling = { item: sapling }
    }
    event.custom(ritualRecipe)
}
global.treeRitual = treeRitual
function spiritFire(event, input, output, count) {
    event.custom({
        type: 'occultism:spirit_fire',
        ingredient: {
            item : input
        },
        result : {
            count: count,
            item: output
        }
    })
}
global.spiritFire = spiritFire
function enchantingApparatus(event, inputs, base, output, count, source, keepNbt) {
    event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        keepNbtOfReagent : keepNbt,
        pedestalItems : inputs,
        reagent: {
            item: base
        },
        result: {
            count: count,
            id: output
        },
        sourceCost: source
    })
}
global.enchantingApparatus = enchantingApparatus
function imbuement(event, input, output, count, source) {
    var inputs = pedestalInputs.slice(0, 8).map(function(input) {
    if (input.tag) {
      return { tag: input.tag }
    } 
    else if (input.item) {
      return { item: input.item }
    }
    return {}
  })
    event.custom({
        type: "ars_nouveau:imbuement",
        input: input, 
        output: {
            count: count,
            id: output
        },
        pedestalItems: inputs,
        source: source
    })
}
global.imbuement = imbuement
function crusher(event, input, output) {
    var result = output.map(function(output) {
        return {
            chance: output.chance || 1.0,
            result: {
                Count: output.count || 1,
                id: output.id
            }
        }
    })
    event.custom({
        type: 'actuallyadditions:crushing',
        input: input,
        output: result
    })
}
global.crusher = crusher
function empower(event, base, color, energy, input, output, time) {
    var inputs = input.slice(0, 4).map(function(modifier) {
        if (modifier.tag) {
            return { tag: modifier.tag }
        } 
        else if (modifier.item) {
            return { item: modifier.item }
        }
        return {}
    })
    event.custom({
        type: "actuallyadditions:empowering",
        base: {
            item: base
        },
        color: color, 
        energy: energy, 
        modifiers: inputs,
        result: {
            item: output
        },
        time: time 
    })
}
global.empower = empower
function reconstruct(event, energy, input, output) {
    event.custom({
        type: "actuallyadditions:laser",
        energy: energy, 
        ingredient: input,
        result: {
        item: output
        }
    })
}
global.reconstruct = reconstruct
function reaction(event, energy, fluid, input, output, type, count) {
    var formattedInput = input.map(function(item) {
        return {
            amount: item.amount,
            ingredient: item.ingredient
        }
    })
    var recipe = {
        type: "advanced_ae:reaction",
        energy: energy,
        input_items: formattedInput,
        output: {
            "#": count,
            "#c": type,
            id: output
        }
    }
    if (fluid) {
        recipe.fluid = fluid
    }
    event.custom(recipe)
}
global.reaction = reaction
function charger(event, input, output) {
    event.custom({
        type: 'ae2:charger',
        ingredient: {
            item: input
        },
        reuslt: {
            item: output
        }
    })
}
global.charger = charger
function inscriber(event, top, middle, bottom, mode, output) {
    var ing = {}
    if (top) ing.top = {item: top}
    if (middle) ing.middle = {item: middle}
    if (bottom) ing.bottom = {item: bottom}
    event.custom({
        type: 'ae2:inscriber',
        ingredients: ing,
        mode: mode,
        result: {item: output}
    })
}
global.inscriber = inscriber
function entropy(event, input, output, mode) {
    function parseIO(io) {
        if (io.block) {
            return { block: { id: io.block } }
        } 
        else if (io.fluid) {
            return { fluid: { id: io.fluid } }
        } 
        else if (io.tag) {
            return { tag: io.tag }
        }
    }
    event.custom({
        type: 'ae2:entropy',
        input: parseIO(input),
        output: parseIO(output),
        mode: mode
    })
}
global.entropy = entropy
function accessoryFreeze(event, input, output) { 
    event.custom({
        type: 'aether:accessory_freezable',
        ingredient: {
            block: input,
            properties: {
                level: 0
            }
        },
        result: {
            block: output
        }
    })
}
global.accessoryFreeze = accessoryFreeze
function enchanting(event, category, time, exp, input, output) {
    event.custom({
        type: 'aether:enchanting',
        category: category,
        cookingtime: time,
        experience: exp,
        ingredient: {
            item: input
        },
        result: output
    })
}
global.enchanting = enchanting
function freezing(event, category, time, exp, input, output) {
    event.custom({
        type: 'aether:freezing',
        category: category,
        cookingtime: time,
        experience: exp,
        ingredient: {
            item: input
        },
        result: output
    })
}
global.freezing = freezing
function infusion(event, input, output, count, displayLevel, minReq, maxReq) {
    const recipe = {
        type: 'apotheosis:enchanting',
        conditions: [{
            type: 'apotheosis:module',
            module: 'enchantment'
        }],
        input: {
            item: input
        },
        requirements: {
            eterna: minReq.eterna,
            quanta: minReq.quanta,
            arcana: minReq.arcana
        },
        display_level: displayLevel,
        result: {
            item: output,
            count: count
        }
    }
    if (maxReq) {
        recipe.max_requirements = {
            eterna:maxReq.eterna,
            quanta: maxReq.quanta,
            arcana: maxReq.arcana
        }
    }
    event.custom(recipe)
}
global.infusion = infusion
function fletching(event, input, output, count) {
    var ing = input.map(function(item) {
        return { item: item }
    })
    event.custom({
        type: "apotheosis:fletching",
        conditions: [{
            type: "apotheosis:module",
            module: "village"
        }],
        ingredients: ing,
        result: {
            item: output,
            count: count
        }
    })
}
global.fletching = fletching
function itemInBlock(event, inputItem, inputBlock, outputItem, outputBlock) {
    var postActions = []
    if (outputItem) {
        postActions.push({
            type: 'drop_item',
            item: outputItem
        })
    }
    if (outputBlock) {
        postActions.push({
            type: 'place',
            block: outputBlock
        })
    }
    event.custom({
        type: 'lychee:item_inside',
        item_in: {
            item: inputItem
        },
        block_in: {
            blocks: [inputBlock.id],
            state: inputBlock.state || {}
        },
        post: postActions
    })
}
global.itemInBlock = itemInBlock
function lightning(event, input, output) {
    event.custom({
        type: 'lychee:lightning_channeling',
        item_in: input,
        post: {
            type: 'drop_item',
            item: output
        }
    })
}
global.lightning = lightning
function ferment(event, input, inAmount, output, outAmount, time) {
    event.custom({
        type: 'actuallyadditions:fermenting',
        ingredient: {
            Amount: inAmount,
            FluidName: input
        },
        result: {
            Amount: outAmount,
            FluidName: output
        }, 
        time: time
    })
}
global.ferment = ferment
function buddingConversion(event, input, output) {
    event.custom({
        type: 'ars_nouveau:budding_conversion',
        input: input, 
        result: output
    })
}
global.buddingConversion = buddingConversion
function crushGlyph(event, input, output) {
    event.custom({
        type: 'ars_nouveau:crush',
        input: input,
        output: output
    })
}
global.crushGlyph = crushGlyph
function bioLab(event, input, nutrient, time, base, output) {
    event.custom({
        type: 'biomancy:bio_brewing',
        ingredients: input,
        nutrientsCost: nutrient,
        processingTime: time,
        reactant: base,
        result: {
            item: output
        }
    })
}
global.bioLab = bioLab;
function bioForge(event, tab, input, output, nutrient) {
    event.custom({
        type: 'biomancy:bio_forging',
        bio_forge_tab: `biomancy:${tab}`,
        ingredients: input,
        nutrientsCost: nutrient,
        result: {
            item: output
        }
    })
}
global.bioForge = bioForge
function decompose(event, input, nutrient, time, output) {
    event.custom({
        type: 'biomancy:decomposing',
        ingredient: input,
        nutrientsCost: nutrient,
        processingTime: time,
        results: output
    })
}
global.decompose = decompose
function digest(event, input, nutrient, time, output, count) {
    event.custom({
        type: 'biomancy:digesting',
        ingredient: input,
        nutrientsCost: nutrient, 
        processingTime: time,
        result: {
            count: count,
            item: output
        }
    })
}
global.digest = digest
function alchemyTable(event, input, output, blood, time, level) {
    event.custom({
        type: 'bloodmagic:alchemytable',
        input: input,
        output: {
            item: output
        },
        syphon: blood,
        ticks: time, 
        upgradeLevel: level
    })
}
global.alchemyTable = alchemyTable
function bloodAltar(event, blood, consumptionRate, drainRate, input, output, level) {
    event.custom({
        type: 'bloodmagic:altar',
        altarSyphon: blood,
        consumptionRate: consumptionRate,
        drainRate: drainRate,
        input: input,
        output: output,
        upgradeLevel: level
    })
}
global.bloodAltar = bloodAltar
function bloodArc(event, extraOutput, consumeIngredient, input, inputFluid, inputCount, mainOutputCount, output, tool) {
    event.custom({
        type: 'bloodmagic:arc',
        addedoutput: extraOutput,
        consumeIngredient: consumeIngredient,
        input: input, 
        inputFluid: inputFluid,
        inputSize: inputCount,
        mainoutputchance: mainOutputCount,
        output: output,
        tool: tool
    })
}
global.bloodArc = bloodArc
function arcaneAsh(event, input, base, output, texture) {
    event.custom({
        type: 'bloodmagic:array',
        addedInput: input,
        baseinput: base,
        output: output,
        texture: texture
    })
}
global.arcaneAsh = arcaneAsh
function hellfire(event, drain, input0, input1, input2, input3, minDrain, output) {
    event.custom({
        type: 'bloodmagic:soulforge',
        drain: drain,
        input0: input0,
        input1: input1,
        input2: input2,
        input3: input3,
        minimumDrain: minDrain,
        output: output
    })
}
global.hellfire = hellfire
function elven(event, input, output) {
    event.custom({
        type: 'botania:elven_trade',
        ingredients: input,
        output: output
    })
}
global.elven = elven
function manaPool(event, catalyst, input, mana, output) {
    event.custom({
        type: 'botania:mana_infusion',
        catalyst: catalyst,
        input: input,
        mana: mana,
        output: output
    })
}
global.manaPool = manaPool
function petalApothecary(event, input, output, base) {
    event.custom({
        type: 'botania:petal_apothecary',
        ingredients: input, 
        output: output,
        reagent: base
    })
}
global.petalApothecary = petalApothecary
function pureDaisy(event, input, output) {
    event.custom({
        type: 'botania:pure_daisy',
        input: input, 
        output: output
    })
}
global.pureDaisy = pureDaisy
function runicAltar(event, input, mana, output) {
    event.custom({
        type: 'botania:runic_altar',
        ingredients: input,
        mana: mana, 
        output: output
    })
}
global.runicAltar = runicAltar
function terraPlate(event, input, mana, output) {
    event.custom({
        type: 'botania:terra_plate',
        ingredients: input, 
        mana: mana,
        result: output
    })
}
global.terraPlate = terraPlate;
function gaiaPlate(event, input, mana, output) {
    event.custom({
        type: 'botanicadds:gaia_plate',
        ingredients: input, 
        mana: mana,
        result: output
    })
}
global.gaiaPlate = gaiaPlate;
function kiln(event, time, exp, input, output) {
    event.custom({
        type: 'ceramics:kiln',
        category: 'misc',
        cookingtime: time, 
        experience: exp,
        ingredient: input, 
        result: output
    })
}
global.kiln = kiln
function compacting(event, input, output, heat) {
    let recipe = {
        type: 'create:compacting',
        ingredients: input,
        results: output
    }
    if (heat) recipe.heat = heat
    event.custom(recipe)
}
global.compacting = compacting;
function crushingWheel(event, input, time, output) {
    event.custom({
        type: 'create:crushing',
        ingredients: input, 
        processingTime: time,
        results: output
    })
}
global.crushingWheel = crushingWheel
function deploy(event, input, keepTool, output) {
    event.custom({
        type: 'create:deploying',
        ingredients: input,
        keepHeldItem: keepTool,
        results: output
    })
}
global.deploy = deploy
function fillBySpout(event, input, output) {
    event.custom({
        type: 'create:filling',
        ingredients:input,
        results: output
    })
}
global.fillBySpout = fillBySpout
function haunt(event, input, output) {
    event.custom({
        type: 'create:haunting',
        ingredients: input, 
        results: output
    })
}
global.haunt = haunt
function itemApplication(event, input, inputBlock, outputBlock) {
    event.custom({
        type: 'create:item_application',
        ingredients: [ input, inputBlock ],
        results: [ outputBlock ]
    })
}
global.itemApplication = itemApplication
function mechanicalCrafting(event, acceptMirrored, key, pattern, output) {
    event.custom({
        type: 'create:mechanical_crafting',
        acceptMirrored: acceptMirrored,
        key: key,
        pattern: pattern,
        result: output
    })
}
global.mechanicalCrafting = mechanicalCrafting
function mill(event, input, time, output) {
    event.custom({
        type: 'create:milling',
        ingredients: input,
        processingTime: time,
        results: output
    })
}
global.mill = mill
function mix(event, input, output, heat) {
    let recipe = {
        type: 'create:mixing',
        ingredients: input,
        results: output
    }
    if (heat) recipe.heat = heat;
    event.custom(recipe)
}
global.mix = mix
function press(event, input, output) {
    event.custom({
        type: 'create:pressing',
        ingredients: input,
        results:output
    })
}
global.press = press
function sandpaper(event, input, output) {
    event.custom({
        type: 'create:sandpaper_polishing',
        ingredients: input,
        results: output
    })
}
global.sandpaper = sandpaper
function sequencedAssembly(event, base, loops, sequence, outputs, transitionItem) {
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: base,
        loops: loops,
        results: outputs,
        sequence: sequence,
        transitionalItem: transitionItem
    })
}
global.sequencedAssembly = sequencedAssembly
function bulkWash(event, input, output) {
    event.custom({
        type: 'create:splashing',
        ingredients: input,
        results: output
    })
}
global.bulkWash = bulkWash
function energizing(event, energy, input, output) {
    event.custom({
        type: 'create_new_age:energising',
        energy_needed: energy, 
        ingredients: input,
        results: output
    })
}
global.energizing = energizing
function teslaCoil(event, input, output, energy, rate) {
    event.custom({
        type: 'createaddition:charging',
        input: input,
        result: output,
        energy: energy,
        maxChargeRate: rate
    })
}
global.teslaCoil = teslaCoil
function roll(event, input, output) {
    event.custom({
        type: 'createaddition:rolling',
        input: input, 
        result: output
    })
}
global.roll = roll
function combine(event, exp, input, output, count, time) {
    event.custom({
        type: 'deep_aether:combining',
        category: 'combinable_misc',
        experience: exp,
        ingredients: input, 
        output: {
            count: count,
            id: output
        },
        processing_time: time
    })
}
global.combine = combine;
function fusionCrafting(event, input, base, output, tier, energy) {
    event.custom({
        type: 'draconicevolution:fusion_crafting',
        catalyst: base,
        ingredients: input, 
        result: output,
        tier: tier, 
        total_energy: energy
    })
}
global.fusionCrafting = fusionCrafting
function crucible(event, input, output) {
    event.custom({
        type: 'eidolon:crucible',
        steps: input,
        result: output
    })
}
global.crucible = crucible
function ritualBrazier(event, focusItem, healthReq, keepNbt, output, input, base) {
    let recipe = {
        type: 'eidolon:ritual_brazier_crafting',
        pedestalItems: input,
        output: output,
        base: base
    }
    if (focusItem != null) recipe.focusItems = focusItem
    if (healthReq != null) recipe.healthRequirement = healthReq
    if (keepNbt != null) recipe.keepNbtOfReagent = keepNbt
    event.custom(recipe)
}
global.ritualBrazier = ritualBrazier
function magicWorkbench(event, pattern, base, key, output) {
    event.custom({
        type: 'eidolon:worktable',
        pattern: pattern, 
        reagents: base,
        key: key,
        result: output
    })
}
global.magicWorkbench = magicWorkbench
function alchemy(event, aspects, input, output, tablet) {
    event.custom({
        type: 'embers:alchemy',
        aspects: aspects,
        inputs: input,
        output: output,
        tablet: tablet
    })
}
global.alchemy = alchemy
function boil(event, input, output) {
    event.custom({
        type: 'embers:boiling',
        input: input,
        output: output
    })
}
global.boil = boil
function excavation(event, dimensionList, maxHeight, output, blockTag, blockCount, weight) {
    event.custom({
        type: 'embers:boring',
        dimensions: dimensionList,
        max_height: maxHeight,
        output: output,
        required_block: {
            amount: blockCount,
            block_tag: blockTag
        },
        weight: weight
    })
}
global.excavation = excavation
function melt(event, input, output) {
    event.custom({
        type: 'embers:melting',
        input: input,
        output: output
    })
}
global.melt = melt
function emberMix(event, input, output) {
    event.custom({
        type: 'embers:mixing',
        inputs: input,
        output: output
    })
}
global.emberMix = emberMix
function stamp(event, input, fluid, output, stamp) {
    let recipe = {
        type: 'embers:stamping',
        output: output
    }
    if (input != null) recipe.input = input
    if (stamp != null) recipe.stamp = stamp
    if (fluid != null) recipe.fluid = fluid
    event.custom(recipe)
}
global.stamp = stamp
function combiner(event, base, input, output) {
    let recipe = {
        type: 'mekanism:combining',
        mainInput: base,
        output: output
    }
    if (input != null) recipe.extraInput = input
    event.custom(recipe)
}
global.combiner = combiner
function chemicalCrystallizer(event, chemicalType, input, output) {
    event.custom({
        type: 'mekanism:crystallizing',
        chemicalType: chemicalType,
        input: input,
        output: output
    })
}
global.chemicalCrystallizer = chemicalCrystallizer
function osmiumCompressor(event, input, base, output) {
    event.cusstom({
        type: 'mekanism:compressing',
        chemicalInput: input,
        itemInput: base,
        output: output
    })
}
global.osmiumCompressor = osmiumCompressor
function mekCrusher(event, input, output) {
    event.custom({
        type: 'mekanism:crushing',
        input: input,
        output: output
    })
}
global.mekCrusher = mekCrusher
function enricher(event, input, output) {
    event.custom({
        type: 'mekanism:enriching',
        input: input,
        output: output
    })
}
global.enricher = enricher
function chemicalInjection(event, base, input, inAmount, output) {
    event.custom({
        type: 'mekanism:injecting',
        chemicalInput: {
            amount: inAmount,
            gas: input
        },
        itemInput: base,
        output: output
    })
}
global.chemicalInjection = chemicalInjection
function metallurgicInfuser(event, base, input, inAmount, output) {
    event.cusstom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: {
            amount: inAmount,
            gas: input
        },
        itemInput: base,
        output: output
    })
}
global.metallurgicInfuser = metallurgicInfuser
function nucleoSynthesizer(event, time, input, inAmount, base, output) {
    event.custom({
        type: 'mekanism:nucleosynthesizing',
        duration: time,
        gasInput: {
            amount: inAmount,
            gas: input
        },
        itemInput: base,
        output: output
    })
}
global.nucleoSynthesizer = nucleoSynthesizer
function purificationChamber(event, input, base, output) {
    event.custom({
        type: 'mekanism:purifying',
        chemicalInput: input,
        itemInput: base,
        output: output
    })
}
global.purificationChamber
function pressurizedReactionChamber(event, time, energy, fluid, input, base, output, gas) {
    event.custom({
        type: 'mekanism:reaction',
        duration: time, 
        energyRequired: energy,
        fluidInput: fluid,
        gasInput: input, 
        gasOutput: gas,
        itemInput: base,
        itemOutput: output
    })
}
global.pressurizedReactionChamber = pressurizedReactionChamber
function precisionSawmill(event, input, output, secondaryChance, secondaryOutput) {
    let recipe = {
        type: 'mekanism:sawing',
        input: input,
        mainOutput: output
    }
    if (secondaryChance != null && secondaryOutput != null) {
        recipe.secondaryChance = secondaryChance
        recipe.secondaryOutput = secondaryOutput
    }
    event.custom(recipe)
}
global.precisionSawmill = precisionSawmill
function evaporationChamber(event, input, inAmount, output, outAmount) {
    event.custom({
        type: 'mekanism:evaporating',
        input: {
            amount: inAmount,
            fluid: input
        },
        output: {
            amount: outAmount,
            fluid: output
        }
    })
}
global.evaporationChamber = evaporationChamber
function amadron(event, recipeID, input, level, output, isStatic) {
    event.custom({
        type: 'pneumaticcraft:amadron',
        id: recipeID,
        input: input,
        level: level,
        output: output,
        static: isStatic
    })
}
global.amadron = amadron
function assembly(event, input, program, output) {
    let recipe = {
        input: input,
        result: output
    }
    if (program === 'drill') {
        recipe.type = 'pneumaticcraft:assembly_drill'
        recipe.program = 'drill'
    }
    else if (program === 'laser') {
        recipe.type = 'pneumaticcraft:assembly_laser'
        recipe.program = 'laser'
    }
    event.custom(recipe)
}
global.assembly = assembly
function fluidMixer(event, fluid1, fluid2, pressure, time, output) {
    event.custom({
        type: 'pneumaticcraft:fluid_mixer',
        input1: fluid1,
        input2: fluid2,
        item_output: output,
        pressure: pressure,
        time: time
    })
}
global.fluidMixer = fluidMixer
function pressureChamber(event, input, pressure, output) {
    event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: input,
        pressure: pressure,
        results: output
    })
}
global.pressureChamber = pressureChamber
function thermoPlant(event, isExothermic, input, fluidIn, output, fluidOut, temps, speed) {
    let recipe = {
        type: 'pneumaticcraft:thermo_plant',
        fluid_input: fluidIn
    }
    if (isExothermic != null) recipe.exothermic = isExothermic
    if (fluidOut != null) recipe.fluid_output = fluidOut
    if (input != null) recipe.item_input = input
    if (speed != null) recipe.speed = speed
    if (temps != null) recipe.temperature = temps
    if (output != null) recipe.item_output = output
    event.custom(recipe)
}
global.thermoPlant = thermoPlant
function alloySmelter(event, base, input, output, time) {
    event.custom({
        type: 'immersiveengineering:alloy',
        input0: base,
        input1: input,
        result: output,
        time: time
    })
}
global.alloySmelter = alloySmelter
function arcFurnace(event, base, input, energy, output, time, secondaryOutput, slag) {
    let recipe = {
        type: 'immersiveengineering:arc_furnace',
        additives: input,
        energy: energy,
        input: base,
        results: output,
        time: time
    }
    if (slag != null) recipe.slag = slag
    if (secondaryOutput != null) recipe.secondaries = secondaryOutput
    event.custom(recipe)
}
global.arcFurnace = arcFurnace
function blastFurnace(event, input, output, slag, time) {
    event.custom({
        type: 'immersiveengineering:blast_furnace',
        input: input,
        result: output,
        slag: slag,
        time: time
    })
}
global.blastFurnace = blastFurnace
function bottleMachine(event, input, fluid, output) {
    event.custom({
        type: 'immersiveengineering:bottling_machine',
        fluid: fluid,
        inputs: input,
        results: output
    })
}
global.bottleMachine = bottleMachine
function cokeOven(event, creosote, input, output, time) {
    event.custom({
        type: 'immersiveengineering:coke_oven',
        creosote: creosote,
        input: input,
        result: output,
        time: time
    })
}
global.cokeOven = cokeOven
function industrialCrusher(event, energy, input, output, secondaryOutput) {
    let recipe = {
        type: 'immersiveengineering:crusher',
        energy: energy,
        input: input,
        output: output
    }
    if (secondaryOutput != null) recipe.secondaries = secondaryOutput
    event.custom(recipe)
}
global.industrialCrusher = industrialCrusher
function industrialFermenter(event, energy, fluid, input, output) {
    event.custom({
        type: 'immersiveengineering:fermenter',
        energy: energy,
        fluid: fluid,
        input: input,
        result: output
    })
}
global.industrialFermenter = industrialFermenter
function metalPress(event, energy, input, mold, output) {
    let recipe = {
        type: 'immersiveengineering:metal_press',
        energy: energy,
        input: input,
        result: output
    }
    if (mold != null) recipe.mold = mold
    event.custom(recipe)
}
global.metalPress = metalPress
function industrialMixer(event, energy, fluid, input, output) {
    event.custom({
        type: 'immersiveengineering:mixer',
        energy: energy,
        fluid: fluid,
        inputs: input,
        result: output
    })
}
global.industrialMixer = industrialMixer
function industrialRefinery(event, base, energy, input0, input1, output) {
    let recipe = {
        type: 'immersiveengineering:refinery',
        energy: energy,
        input0: input0,
        result: output
    }
    if (base != null) recipe.catalyst = base
    if (input1 != null) recipe.input1 = input1
    event.custom(recipe)
}
global.industrialMixer = industrialMixer
function industrialSawmill(event, energy, input, output, secondaryOutput) {
    let recipe = {
        type: 'immersiveengineering:sawmill',
        energy: energy,
        input: input,
        result: output
    }
    if (secondaryOutput != null) recipe.secondaries = secondaryOutput
    event.custom(recipe)
}
global.industrialSawmill = industrialSawmill
function industrialSqueezer(event, energy, input, output) {
    event.custom({
        type: 'immersiveengineering:squeezer',
        energy: energy,
        fluid: output,
        input: input
    })
}
global.industrialSqueezer = industrialSqueezer
function weepingWell(event, input, output) {
    event.custom({
        type: 'malum:favor_of_the_void',
        input: input,
        output: output
    })
}
global.weepingWell = weepingWell
function runicWorkbench(event, base, input, output) {
    event.custom({
        type: 'malum:runeworking',
        output: output,
        primaryInput: base,
        secondaryInput: input
    })
}
global.runicWorkbench = runicWorkbench
function spiritCrucible(event, durabilityCost, input, output, spirits, time) {
    event.custom({
        durabilityCost: durabilityCost,
        input: input,
        output: output,
        spirits: spirits,
        time: time
    })
}
global.spiritCrucible = spiritCrucible
function spiritInfusion(event, base, input,  output, spirits) {
    event.custom({
        type: 'malum:spirit_infusion',
        extra_items: input,
        input: base,
        output: output,
        spirits: spirits
    })
}
global.spiritInfusion = spiritInfusion
function spiritTransmutation(event, input, output) {
    event.custom({
        type: 'malum:spirit_transmutation',
        input: input,
        output: output
    })
}
global.spiritTransmutation = spiritTransmutation
function bloodInfuser(event, input, fluid, output, time, xp, tier) {
    event.custom({
        type: 'evilcraft:blood_infuser',
        input_item: input,
        input_fluid: fluid,
        output_item: output,
        duration: time,
        xp: xp,
        tier: tier
    })
}
global.bloodInfuser = bloodInfuser
function orbEnergizing(event, input, energy, output) {
    event.custom({
        type: 'powah:energizing',
        ingredients: input,
        energy: energy,
        result: output
    })
}
global.orbEnergizing = orbEnergizing
function clibano(event, time, exp, type, input, output, residue) {
    let recipe = {
        type: 'forbidden_arcanus:clibano_combustion',
        cooking_time: time,
        experience: exp,
        input: input,
        output: output,
        residue: residue
    }
    if (type != null) recipe.fire_type = type
    event.custom(recipe)
}
global.clibano = clibano
function ritual(event, color, level, effect, base, input, output) {
    event.custom({
        type: 'rootsclassic:ritual',
        effect: effect,
        level: level,
        color: color,
        ingredients: input,
        incenses: base,
        result: output
    })
}
global.ritual = ritual
function blockFall(event, input, fallingBlock, landingBlock, postAction) {
    let recipe = {
        type : 'lychee:block_crushing',
        item_in: input,
        post: postAction
    }
    if (fallingBlock != null) recipe.falling_block = fallingBlock
    if (landingBlock != null) recipe.landing_block = landingBlock,
    event.custom(recipe)
}
global.blockFall = blockFall
function blockExplode(event, input, postAction) {
    event.custom({
        type: 'lychee:block_exploding',
        block_in: input,
        post: postAction
    })
}
global.blockFall = blockFall
function itemBurn(event, input, postAction) {
    event.custom({
        type: 'lychee:item_burning',
        item_in: input,
        post: postAction
    })
}
global.itemBurn = itemBurn
function dryingBasin(event, fluid, fluidAmount, time, output) {
    event.custom({
        type: 'integrateddynamics:drying_basin',
        input_fluid: {
            FluidName: fluid,
            Amount: fluidAmount
        },
        duration: time,
        output_item: output
    })
}
global.dryingBasin = dryingBasin
function mechanicalDryingBasin(event, fluid, fluidAmount, time, output) {
    event.custom({
        type: 'integrateddynamics:mechanical_drying_basin',
        input_fluid: {
            FluidName: fluid,
            Amount: fluidAmount
        },
        duration: time,
        output_item: output
    })
}
global.mechanicalDryingBasin = mechanicalDryingBasin
function squeezer(event, input, output, count) {
    event.custom({
        type: 'integrateddynamics:squeezer',
        input_item: input,
        output_fluid: {
            FluidName: output,
            Amount: count
        }
    })
}
global.squeezer = squeezer
function mechanicalSqueezer(event, input, fluid, output, time) {
    event.custom({
        type: 'integrateddynamics:mechanical_squeezer',
        input_item: input,
        output_fluid: fluid,
        output_items: output,
        duration: time
    })
}
global.mechanicalSqueezer = mechanicalSqueezer
function alloySmelting(event, energy, exp, input, output) {
    event.custom({
        type: 'enderio:alloy_smelting',
        energy: energy,
        experience: exp,
        inputs: input, 
        result: output
    })
}
global.alloySmelting = alloySmelting
function sagMill(event, energy, input, output) {
    event.custom({
        type: 'enderio:sag_milling',
        energy: energy,
        input: input,
        outputs: output
    })
}
global.sagMill = sagMill
function sliceDice(event, energy, input, output) {
    event.custom({
        type: 'enderio:slicing',
        energy: energy,
        inputs: input,
        output: output
    })
}
global.sliceDice = sliceDice
function soulBind(event, entity, energy, exp, input, output) {
    event.custom({
        type: 'enderio:soul_binding',
        energy: energy,
        entity_type: entity,
        exp: exp,
        input: input,
        output: output
    })
}
global.soulBind = soulBind
function dissolutionChamber(event, input, fluid, output, time) {
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: input,
        inputFluid: fluid,
        output: output,
        processingTime: time
    })
}
global.dissolutionChamber = dissolutionChamber
function fluidExtract(event, breakChance, input, fluidOutput, output) {
    event.custom({
        type: 'industrialforegoing:fluid_extractor',
        breakChance: breakChance,
        defaultRecipe: false,
        input: input,
        output: fluidOutput,
        result: output
    })
}
global.fluidExtract = fluidExtract
function manaInfusionPlate(event, inColor, input, mana, output, outColor) {
    event.custom({
        type: 'mythicbotany:infuser',
        fromColor: inColor,
        group: 'infuser',
        ingredients: input,
        mana: mana,
        output: output,
        toColor: outColor
    })
}
global.manaInfusionPlate = manaInfusionPlate
function runeRitual(event, center, input, mana, runes, output, time) {
    event.custom({
        type: 'mythicbotany:rune_ritual',
        center: center,
        group: 'rune_rituals',
        inputs: input,
        mana: mana,
        runes: runes,
        outputs: output,
        ticks: time
    })
}
global.runeRitual = runeRitual
function naturalAltar(event, input, output, base, aura, time) {
    let recipe = {
        type: 'naturesaura:altar',
        input: input,
        output: output,
        aura: aura,
        time: time
    }
    if (base) recipe.catalyst = base
    event.custom(recipe)
}
global.naturalAltar = naturalAltar
function godOffering(event, base, input, output) {
    event.custom({
        type: 'naturesaura:offering',
        input: input,
        start_item: base,
        output: output
    })
}
global.godOffering = godOffering
function dryingRack(event, input, output, time) {
    event.custom({
        type: 'hexerei:drying_rack',
        ingredients: [input],
        output: output,
        dryingTimeInTicks: time
    })
}
function mixingCauldron(event, liquid, input, output, liquidOutput, fluidAmount) {
    event.custom({
        type: 'hexerei:mixingcauldron',
        liquid: { fluid: liquid },
        ingredients: input,
        output: output,
        liquidOutput: { fluid: liquidOutput },
        fluidLevelsConsumed: fluidAmount
    })
}
function pestleMortar(event, input, output, time) {
    event.custom({
        type: 'hexerei:pestle_and_mortar',
        ingredients: input,
        output: output,
        grindingTime: time
    })
}
global.pestleMortar = pestleMortar
function fluidEncapsulator(event, input, output, exp) {
    event.custom({
        type: 'thermal:bottler',
        ingredients: input,
        result: output,
        experience: exp
    })
}
global.fluidEncapsulator = fluidEncapsulator
function ALCHIMBUER() {}
function centrifugalSeperator(event, input, output, energy) {
    event.custom({
        type: 'thermal:centrifuge',
        ingredient: input,
        result: output,
        energy: energy
    })
}
global.centrifugalSeperator = centrifugalSeperator
function blastChiller(event, input, output, energy) {
    event.custom({
        type: 'thermal:chiller',
        ingredients: input,
        result: output,
        energy: energy
    })
}
global.blastChiller = blastChiller
function magmaCrucible(event, input, output, energy) {
    event.custom({
        type: 'thermal:crucible',
        ingredient: input,
        result: output,
        energy: energy
    })
}
global.magmaCrucible = magmaCrucible
function crystallizer(event, input, output) {
    event.custom({
        type: 'thermal:crystallizer',
        ingredients: input,
        result: output
    })
}
global.crystallizer = crystallizer
function redstoneFurnace(event, input, output, exp, energyModifier) {
    event.custom({
        type: 'thermal:furnace',
        ingredient: input,
        result: output,
        experience: exp,
        energy_mod: energyModifier
    })
}
global.redstoneFurnace = redstoneFurnace
function multiservoPress(event, input, output, energy) {
    event.custom({
        type: 'thermal:press',
        ingredients: input,
        result: output,
        energy: energy
    })
}
global.multiservoPress = multiservoPress
function pulverizer(event, input, output) {
    event.custom({
        type: 'thermal:pulverizer',
        ingredient: input,
        result: output
    })
}
global.pulverizer = pulverizer
function pyrolyzer(event, input, output, exp) {
    event.custom({
        type: 'thermal:pyrolyzer',
        ingredient: input,
        result: output,
        experience: exp
    })
}
global.pyrolyzer = pyrolyzer
function fractioningStill(event, input, output, energy, exp) {
    event.custom({
        type: 'thermal:refinery',
        ingredient: input,
        result: output,
        energy: energy,
        experience: exp
    })
}
global.fractioningStill = fractioningStill
function TSawmill(event, input, output, energy, exp) {
    event.custom({
        type: 'thermal:sawmill',
        ingredient: input,
        result: output,
        energy: energy,
        experience: exp
    })
}
global.TSawmill = TSawmill
function inductionSmelter(event, input, output, energy) {
    event.custom({
        type: 'thermal:smelter',
        ingredients: input,
        result: output,
        energy: energy
    })
}
global.inductionSmelter = inductionSmelter
function advancedRefinery(event, energy, input, output) {
    event.custom({
        type: 'thermal_extra:advanced_refinery',
        energy: energy,
        ingredients: input,
        result: output
    })
}
global.advancedRefinery = advancedRefinery
function componentAssembler(event, input, output, energy) {
    event.custom({
        type: 'thermal_extra:component_assembly',
        energy: energy,
        ingredients: input,
        result: output
    })
}
global.componentAssembler = componentAssembler
function endothermicDehydrator(event, input, output, energy) {
    event.custom({
        type: 'thermal_extra:endothermic_dehydrator',
        energy: energy,
        ingredients: input,
        result: output
    })
}
global.endothermicDehydrator = endothermicDehydrator
function TFluidMixer(event, energy, input, output) {
    event.custom({
        type: 'thermal_extra:fluid_mixer',
        energy: energy,
        ingredients: input,
        result: output
    })
}
global.TFluidMixer = TFluidMixer
function nitraicIgniter(event, energy, exp, input, output) {
    event.custom({
        type: 'thermal_extra:nitratic_igniter',
        energy: energy,
        experience: exp,
        ingredients: input,
        result: output
    })
}
global.nitraicIgniter = nitraicIgniter
function lootBag(event, name, rarity, rolls, entries) {
    event.custom({
        type: 'lootbags:loot',
        name: name,
        rarity: rarity,
        output: {
            rolls: rolls,
            entries: entries
        }
    })
}
global.lootBag = lootBag
function liquidFuel(event, fluid, amount, burnTime, totalEnergy) {
    event.custom({
        type: 'actuallyadditions:liquid_fuel',
        ingredient: {   
            amount: amount,
            fluid: fluid
        },
        result: {
            burn_time: burnTime,
            total_energy: totalEnergy
        }
    })
}
global.liquidFuel = liquidFuel 
function miningLens(event, block, output, weight) {
    event.custom({
        type: 'actuallyadditions:mining_lens',
        ingredient: block,
        result: { item: output }, 
        weight: weight
    })
}
global.miningLens = miningLens
function solidFuel(event, burnTime, input, energy) {
    event.custom({
        type: 'actuallyadditions:solid_fuel',
        burn_time: burnTime,
        item: input,
        total_energy: energy
    })
}
global.solidFuel = solidFuel
function canolaPress(event, input, output, amount) {
    event.custom({
        type: "actuallyadditions:canola_pressing",
        ingredient: input,
        result: {
            amount: amount,
            fluid: output
        }
    })
}
global.canolaPress = canolaPress

/*
// actuallyadditions:coffee_ingredient 
// actuallyadditions:color_change
ad_astra:alloying ***
ad_astra:compressing ***
ad_astra:cryo_freezing ***
ad_astra:nasa_workbench ***
ad_astra:oxygen_loading ***
ad_astra:refining ***
ad_astra:space_station_recipe ***
ae2:matter_cannon
aether:ambrosium_enchanting ***
aether:block_placement_ban
aether:icestone_freezable ***
aether:incubation
aether:item_placement_ban
aether:placement_conversion ***
aether:swet_ball_conversion
aether_redux:infusion
aether_redux:spore_blighting
alexscaves:nuclear_furnace
almostunified:client_recipe_tracker
amendments:cauldron_crafting ***
animus:imperfect_ritual ***
apotheosis:reforging
apotheosis:salvaging ***
apotheosis:spawner_modifier
ars_additions:bulk_scribing
ars_additions:charm_charging
ars_additions:imbue_scroll
ars_additions:locate_structure
ars_additions:source_spawner
ars_elemental:armor_upgrade
ars_elemental:head_cut
ars_elemental:netherite_upgrade
ars_nouveau:armor_upgrade
ars_nouveau:book_upgrade
ars_nouveau:caster_tome
ars_nouveau:dispel_entity
ars_nouveau:dye
ars_nouveau:enchantment
ars_nouveau:glyph
ars_nouveau:potion_flask
ars_nouveau:reactive_enchantment
ars_nouveau:scry_ritual
ars_nouveau:spell_write
ars_nouveau:summon_ritual ***
ars_technica:technomancer_armor_up
bloodmagic:livingdowngrade
bloodmagic:meteor ***
bloodmagic:potionflask
botania:brew
botania:marimorphosis
botania:orechid ***
botania:orechid_ignem ***
cataclysm:amethyst_bless
cataclysm:weapon_fusion
celestisynth:starlit_factory_type
confluence:workshop_type
create:basin
create:conversion
create:cutting
create:emptying
create:item_application
create_central_kitchen:cutting_board_deploying
createaddition:liquid_burning
deep_aether:glowing_spores_recipe
deep_aether:golden_swet_ball_recipe
deep_aether:poison_recipe
eidolon:athame_foraging
eidolon:chant
eidolon:chant_conversion
eidolon:command_chant
eidolon:dye
eidolon:ritual_brazier
eidolon:ritual_brazier_command
eidolon:ritual_brazier_location
eidolon:ritual_brazier_summoning
embers:catalysis_combustion
embers:dawnstone_anvil
embers:ember_activation
embers:excavation
embers:gaseous_fuel
embers:metal_coefficient
enderio:enchanting
enderio:fire_crafting
enderio:grinding_ball
enderio:painting
enderio:tank
endertanks:crafting
evilcraft:environmental_accumulator
expatternprovider:circuit_cutter
experienceobelisk:emptying
experienceobelisk:filling
experienceobelisk:infecting
experienceobelisk:molecular_metamorphosis
extendedcrafting:combination
extendedcrafting:compressor
extendedcrafting:ender_crafter
extendedcrafting:flux_crafter
extendedcrafting:table
forbidden_arcanus:combine_residues
framedblocks:frame
functionalstorage:custom_compacting
goety:brazier
goety:brewing
goety:cursed_infuser
goety:pulverize
goety:ritual
goety:soul_absorber
graveyard:ossuary_carving
// hammerlib:test_machine
hexerei:add_base_to_candle
hexerei:add_to_candle
hexerei:book_of_shadows
hexerei:cauldron_emptying
hexerei:cauldron_filling
hexerei:crow_amulet_apply
hexerei:crow_amulet_undo
hexerei:crow_flute_dye
hexerei:cut_candle
hexerei:dipper
hexerei:fill_waxing_kit
hexerei:fluid_mixing
hexerei:keychain_apply
hexerei:keychain_undo
hexerei:whistle_bind
hexerei:woodcutting
iceandfire:dragonforge
immersiveengineering:blast_furnace_fuel
immersiveengineering:blueprint
immersiveengineering:cloche
immersiveengineering:fertilizer
immersiveengineering:generator_fuel
immersiveengineering:mineral_mix
immersiveengineering:thermoelectric_source
immersiveengineering:windmill_biome
immersivepetroleum:cokerunit
immersivepetroleum:distillationtower
immersivepetroleum:hydrotreater
immersivepetroleum:reservoir
industrialforegoing:crusher
industrialforegoing:laser_drill_fluid
industrialforegoing:laser_drill_ore
industrialforegoing:stonework_generate
ironfurnaces:generator_blasting
libx:empty
lychee:anvil_crafting
lychee:block_clicking
lychee:block_crushing
lychee:dripstone_dripping
lychee:item_exploding
lychee:random_block_ticking
malum:spirit_focusing
malum:spirit_repair
mekanism:activating
mekanism:centrifuging
mekanism:chemical_infusing
mekanism:dissolution
mekanism:energy_conversion
mekanism:gas_conversion
mekanism:infusion_conversion
mekanism:oxidizing
mekanism:painting
mekanism:pigment_extracting
mekanism:pigment_mixing
mekanism:rotary
mekanism:separating
mekanism:smelting
mekanism:washing
minecraft:blasting
minecraft:campfire_cooking
minecraft:crafting
minecraft:smelting
minecraft:smithing
minecraft:smoking
minecraft:stonecutting
mob_grinding_utils:beheading
mob_grinding_utils:solidify
mysticalagriculture:awakening
mysticalagriculture:enchanter
mysticalagriculture:infusion
mysticalagriculture:reprocessor
mysticalagriculture:soul_extraction
mysticalagriculture:soulium_spawner
naturesaura:animal_spawner
occultism:crushing
occultism:miner
occultism:ritual
occultism:spirit_trade
paraglider:bargain
pneumaticcraft:assembly_drill
pneumaticcraft:assembly_drill_laser
pneumaticcraft:assembly_laser
pneumaticcraft:explosion_crafting
pneumaticcraft:fuel_quality
pneumaticcraft:heat_frame_cooling
pneumaticcraft:heat_properties
pneumaticcraft:refinery
productivebees:advanced_beehive
productivebees:bee_breeding
productivebees:bee_conversion
productivebees:bee_fishing
productivebees:bee_nbt_changer
productivebees:bee_spawning
productivebees:block_conversion
productivebees:bottler
productivebees:centrifuge
productivebees:incubation
productivebees:item_conversion
psi:trick_crafting
rftoolsutility:spawner
rftoolsutility:syringe
rootsclassic:component
sawmill:woodcutting
sfm:printing_press
// shetiphiancore:rgb16_colorize
sliceanddice:cutting
summoningrituals:altar
systeams:boiling
systeams:steam
systeams:upgrade_shapeless
thermal:brewer
thermal:compression_fuel
thermal:disenchantment_fuel
thermal:fisher_boost
thermal:gourmand_fuel
thermal:hive_extractor
thermal:insolator
thermal:insolator_catalyst
thermal:lapidary_fuel
thermal:magmatic_fuel
thermal:numismatic_fuel
thermal:potion_diffuser_boost
thermal:pulverizer_catalyst
thermal:pulverizer_recycle
thermal:rock_gen
thermal:smelter_catalyst
thermal:smelter_recycle
thermal:stirling_fuel
thermal:tree_extractor
thermal:tree_extractor_boost
thermal_extra:cold_fuel
thermal_extra:nitratic_igniter_cataylyst
// twilightforest:crumble_horn
twilightforest:transformation_powder
// twilightforest:uncrafting
vampirism:alchemical_cauldron
vampirism:alchemical_table
vampirism:weapontable_crafting
// waystones:warp_plate
xycraft_machines:extractor
xycraft_machines:extractor_catalyst
*/