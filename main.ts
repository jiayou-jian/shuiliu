/**
 * NO5:你要设置的值
 * 
 * 1010：徽标被按下的次数
 */
pins.onPulsed(DigitalPin.P13, PulseValue.High, function () {
    if (pins.pulseDuration() >= 10) {
        num += 1
        reg = num
    }
})
let reg = 0
let num = 0
let _1010 = 0
music.setVolume(0)
let NO3 = 0
num = 0
let NO6 = 0
let NO8 = 0
let _0101 = 0
let NO5 = 4
pins.digitalWritePin(DigitalPin.P12, 0)
music.setVolume(0)
basic.forever(function () {
    serial.redirectToUSB()
    serial.writeLine("" + (reg))
    if (reg >= NO5) {
        serial.redirectToUSB()
        serial.writeLine("Alert!Alert!Water volume is full! Water volume is full! ")
        music.setVolume(127)
        music.ringTone(262)
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
    if (input.buttonIsPressed(Button.A)) {
        NO3 += 1
        if (NO3 % 2 == 0) {
            NO6 = 1
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (NO6 % 2 == 0) {
            NO8 += 1000
            basic.showNumber(NO8)
        } else {
            NO8 += 100
            basic.showNumber(NO8)
        }
    }
    if (input.logoIsPressed()) {
        basic.showNumber(NO8)
        _1010 += 1
        NO5 = NO8 * 5.26
        music.setVolume(255)
        music.ringTone(523)
        music.setVolume(0)
    }
    if (_1010 >= 2) {
        NO5 = 1500 * 5.26
        basic.showNumber(1)
        if (reg >= NO5) {
            serial.redirectToUSB()
            serial.writeLine("Alert!Alert!Water volume is full! Water volume is full! ")
            music.setVolume(255)
            music.ringTone(523)
            pins.digitalWritePin(DigitalPin.P12, 1)
        }
    }
})
