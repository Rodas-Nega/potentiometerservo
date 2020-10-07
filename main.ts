// Created By: Rodas N.
// Created On: Oct 7 2020
// 
// This program runs a code in which the angle rotated on the potentiometer is equivalent to the degree on the servo motor.
// 
let Servo = 0
let Potentiometer = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    Potentiometer = pins.analogReadPin(AnalogPin.P1)
    Servo = Potentiometer / 5.6
    robotbit.Servo(robotbit.Servos.S1, Servo)
    basic.showNumber(Potentiometer)
    pins.servoWritePin(AnalogPin.P1, 0)
})
