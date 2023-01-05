game.setScore(0)
let Target = game.createSprite(0, 4)
Target.set(LedSpriteProperty.Brightness, 50)
let Bullet = game.createSprite(2, 2)
Bullet.set(LedSpriteProperty.Brightness, 225)
basic.forever(function () {
    if (Bullet.isTouching(Target)) {
        game.addScore(1)
        Bullet.set(LedSpriteProperty.X, 2)
        Bullet.set(LedSpriteProperty.Y, 2)
    }
    if (game.score() > 10) {
        basic.showString("You killed it!")
        game.gameOver()
    }
})
basic.forever(function () {
    Target.set(LedSpriteProperty.X, randint(0, 4))
    Target.set(LedSpriteProperty.Y, randint(0, 4))
    basic.pause(5000)
})
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -60) {
        Bullet.set(LedSpriteProperty.X, 0)
    }
    if (input.rotation(Rotation.Roll) >= -60 && input.rotation(Rotation.Roll) < -30) {
        Bullet.set(LedSpriteProperty.X, 1)
    }
    if (input.rotation(Rotation.Roll) >= -30 && input.rotation(Rotation.Roll) < 30) {
        Bullet.set(LedSpriteProperty.X, 2)
    }
    if (input.rotation(Rotation.Roll) >= 30 && input.rotation(Rotation.Roll) < 60) {
        Bullet.set(LedSpriteProperty.X, 3)
    }
    if (input.rotation(Rotation.Roll) >= 60) {
        Bullet.set(LedSpriteProperty.X, 4)
    }
})
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -60) {
        Bullet.set(LedSpriteProperty.Y, 0)
    }
    if (input.rotation(Rotation.Pitch) >= -60 && input.rotation(Rotation.Pitch) < -30) {
        Bullet.set(LedSpriteProperty.Y, 1)
    }
    if (input.rotation(Rotation.Pitch) >= -30 && input.rotation(Rotation.Pitch) < 30) {
        Bullet.set(LedSpriteProperty.Y, 2)
    }
    if (input.rotation(Rotation.Pitch) >= 30 && input.rotation(Rotation.Pitch) < 60) {
        Bullet.set(LedSpriteProperty.Y, 3)
    }
    if (input.rotation(Rotation.Pitch) >= 60) {
        Bullet.set(LedSpriteProperty.Y, 4)
    }
})
