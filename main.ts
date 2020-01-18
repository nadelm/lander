namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    angle = "left"
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark4, function (sprite, location) {
    lander.destroy()
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLightMoss, function (sprite, location) {
    if (angle == "straight") {
        game.over(true, effects.confetti)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (angle == "straight") {
        lander.setVelocity(0, -20)
    } else if (angle == "left") {
        lander.setVelocity(-6, -20)
    } else {
        lander.setVelocity(6, -20)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    angle = "right"
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    angle = "straight"
})
let angle = ""
let lander: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000505050505050505050500000000000000000000000000000000000000000000000000000000000000000000000000000000000005050000000005000005050505000000050005050505050505050507`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.floorDark5,sprites.dungeon.floorDark4,sprites.dungeon.floorLight2,sprites.dungeon.floorLightMoss],
            TileScale.Sixteen
        ))
lander = sprites.create(img`
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . b b b d d d b b b . . . 
. . . . b d d d b d d d b . . . 
. . . . b d d d b d d d b . . . 
. . . b d d d b b b d d d b . . 
. . . b d d b b b b b d d b . . 
. . . b d b b b b b b b d b . . 
. . . . b d b d d d b d b . . . 
. . . . b b d b d b d b b . . . 
. . . . . b d b b b d b . . . . 
. . . . . b d d b d d b . . . . 
. . . . b b 5 2 5 2 5 b b . . . 
. . . b b 5 2 5 2 5 2 5 b b . . 
. . b b 5 2 5 2 5 2 5 2 5 b b . 
`, SpriteKind.Player)
lander.setPosition(7, 105)
lander.setFlag(SpriteFlag.StayInScreen, true)
lander.ay = 30
angle = "straight"
