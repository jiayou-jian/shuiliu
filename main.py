"""

NO5:你要设置的值

1010：徽标被按下的次数

"""

def on_pulsed_p13_high():
    global num, reg
    if pins.pulse_duration() >= 10:
        num += 1
        reg = num
pins.on_pulsed(DigitalPin.P13, PulseValue.HIGH, on_pulsed_p13_high)

reg = 0
num = 0
_1010 = 0
music.set_volume(0)
NO3 = 0
num = 0
NO6 = 0
NO8 = 0
_0101 = 0
NO5 = 4
pins.digital_write_pin(DigitalPin.P12, 0)
music.set_volume(0)

def on_forever():
    global NO3, NO6, NO8, _1010, NO5
    serial.redirect_to_usb()
    serial.write_line("" + str((reg)))
    if reg >= NO5:
        serial.redirect_to_usb()
        serial.write_line("Alert!Alert!Water volume is full! Water volume is full! ")
        music.set_volume(127)
        music.ring_tone(262)
        pins.digital_write_pin(DigitalPin.P12, 1)
    if input.button_is_pressed(Button.A):
        NO3 += 1
        if NO3 % 2 == 0:
            NO6 = 1
    if input.button_is_pressed(Button.B):
        if NO6 % 2 == 0:
            NO8 += 1000
            basic.show_number(NO8)
        else:
            NO8 += 100
            basic.show_number(NO8)
    if input.logo_is_pressed():
        basic.show_number(NO8)
        _1010 += 1
        NO5 = NO8 * 5.26
        music.set_volume(255)
        music.ring_tone(523)
        music.set_volume(0)
    if _1010 >= 2:
        NO5 = 1500 * 5.26
        basic.show_number(1)
        if reg >= NO5:
            serial.redirect_to_usb()
            serial.write_line("Alert!Alert!Water volume is full! Water volume is full! ")
            music.set_volume(255)
            music.ring_tone(523)
            pins.digital_write_pin(DigitalPin.P12, 1)
basic.forever(on_forever)
