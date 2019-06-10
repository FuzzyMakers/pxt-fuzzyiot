// tests go here; this will not be compiled when this package is used as a library
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), () => {
    OLED.showString(serial.readLine())
})
input.onButtonPressed(Button.AB, () => {
    fuzzyiot.configuraWifi("muselab", "12345678")
})
input.onButtonPressed(Button.A, () => {
    Fuzzyiot.enviaThingspeak("XXXXXXXXXXXXXX", 80, 0)
})
input.onButtonPressed(Button.B, () => {
    Fuzzyiot.enviaIFTTT(
    "XXXXXXXXXXXXXXXXXX",
    "email",
    0,
    0
    )
})
input.onPinPressed(TouchPin.P0, () => {
    Fuzzyiot.enviar()
})
input.onPinPressed(TouchPin.P1, () => {
    Fuzzyiot.enviaTeste()
})

basic.showIcon(IconNames.Angry)
OLED.init(32, 128)
basic.forever(() => {

})
