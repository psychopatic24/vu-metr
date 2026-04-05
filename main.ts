// Inicializace Bluetooth UART
bluetooth.startUartService()

input.onButtonPressed(Button.A, function () {
    // Pošle signál pro změnu módu
    bluetooth.uartWriteString("m\n")
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.clearScreen()
})

basic.forever(function () {
    // Snímání hlasitosti
    let volume = input.soundLevel()
    // Posílání hodnoty přes BT UART
    bluetooth.uartWriteString("v:" + volume + "\n")
    basic.pause(50)
})

// Volitelné: Ikona "B" po připojení k Arduinu
bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
