namespace SpriteKind {
    export const Weapon = SpriteKind.create()
}
function useWeapon () {
    if (!(boolWeaponOut)) {
        AButtonLastPressedTime = game.runtime()
        boolWeaponOut = true
        mySprite2.setImage(arrayCurrentWeaponImages[1])
        timer.background(function () {
            pause(300)
            if (!(boolAttackOverride)) {
                mySprite2.setImage(arrayCurrentWeaponImages[0])
                boolWeaponOut = false
                AButtonLastPressedTime = 0
            }
        })
    } else if (game.runtime() - AButtonLastPressedTime < 200 && !(boolAttackOverride)) {
        boolAttackOverride = true
        mySprite2.setImage(arrayCurrentWeaponImages[2])
        timer.background(function () {
            pause(300)
            mySprite2.setImage(arrayCurrentWeaponImages[0])
            boolAttackOverride = false
            boolWeaponOut = false
            AButtonLastPressedTime = 0
        })
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    useWeapon()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Weapon, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.destroy()
    spawnEnemy()
})
function spawnEnemy () {
    mySprite3 = sprites.create(img`
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
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    mySprite3,
    [img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f f e . . . 
        . . e b f b 5 b b 5 b c b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e b e e f f f f b b e . . 
        . . . e b b e b b 5 5 f e e . . 
        . . . . c e e 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f e e . . . 
        . . e b c b 5 b b 5 b f b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . . . c 5 c . . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f e e f . . . 
        . . e b b f e e e e e b e . . . 
        . . e e f 5 5 b b e b b e . . . 
        . . . f 5 5 5 5 5 e e c . . . . 
        . . . . f f f f f f f . . . . . 
        `],
    200,
    true
    )
    mySprite3.setPosition(mySprite.x - randint(0, 12), 120)
    mySprite3.setVelocity(0, -50)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    spawnEnemy()
})
let mySprite3: Sprite = null
let boolAttackOverride = false
let mySprite2: Sprite = null
let mySprite: Sprite = null
let boolWeaponOut = false
let AButtonLastPressedTime = 0
let arrayCurrentWeaponImages: Image[] = []
let arrayWeapon1Images = [img`
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
    `, assets.image`sword D`, assets.image`wavy slash`]
arrayCurrentWeaponImages = arrayWeapon1Images
AButtonLastPressedTime = 0
boolWeaponOut = false
scene.setBackgroundColor(13)
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
mySprite2 = sprites.create(arrayCurrentWeaponImages[0], SpriteKind.Weapon)
scene.cameraFollowSprite(mySprite)
spawnEnemy()
game.onUpdate(function () {
    mySprite2.x = mySprite.x - 4
    mySprite2.top = mySprite.bottom - 4
})
