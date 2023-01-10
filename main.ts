joystickbit.initJoystickBit()
basic.showLeds(`
    # . . # .
    # . . # .
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        music.playTone(294, music.beat(BeatFraction.Half))
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        music.playTone(349, music.beat(BeatFraction.Half))
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        music.playTone(440, music.beat(BeatFraction.Half))
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        music.playTone(494, music.beat(BeatFraction.Half))
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
