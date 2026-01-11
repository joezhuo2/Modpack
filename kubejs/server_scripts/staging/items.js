let stages = [
    "one",
    "two"
]

stages.forEach(stage => {
    AStages.addRestrictionForTag(`astages/items/${stage}`, `${stage}`, `kubejs:stage_${stage}_items`)
})