//% color="#ED755E"
namespace Fuzzyiot {
    let flag = true;

    // -------------- 1. Initialization ----------------
    //%blockId=Fuzzy_iniciar_wifi
    //%block="Inicia shield wifi"
    //% weight=90
    //% blockGap=7

    export function iniciaWifi(): void {
        //serial.redirect(SerialPin.P16,SerialPin.P8,BaudRate.BaudRate115200);
    }

    //% blockId=fuzzy_configura_wifi
    //% block="Configura wifi para %ssid| senha %pwd"
    //% weight=80
    //% blockGap=7
    export function configuraWifi(ssid: string, pwd: string): void {
        //.  serial.writeLine("(AT+wifi?ssid="+ssid+"&pwd="+pwd+")");
    }
    //% blockId=fuzzy_configura_thingspeak
    //% block="Envia chave thingspeak %key| campo1 %field1| campo2 %field2"
    //% weight=70
    //% blockGap=7
    export function enviaThingspeak(key: string, field1: number, field2: number): void {
        //.  serial.writeLine("(AT+thingspeak?key=" + key+"&field1="+field1+"&field2="+field2+")");
    }
    //% blockId=fuzzy_configura_ifttt
    //% block="Envia chave IFTTT %key|nome_do_evento %event|valor1 %value1|valor2 %value2"
    //% weight=60
    export function enviaIFTTT(key: string, eventname: string, value1: number, value2: number): void {
        //.serial.writeLine("(AT+ifttt?key=" + key+"&event="+eventname+"&value1="+value1+"&value2="+value2+")");
    }
    //% blockId=fuzzy_configura_wifi_hotspot
    //% block="Configura hotspot para o nome %ssid| senha %pwd"
    //% weight=58
    //% blockGap=7
    export function configuraWifiHotspot(ssid: string, pwd: string): void {
        serial.writeLine("(AT+wifi_hotspot?ssid="+ssid+"&pwd="+pwd+")");
    }
    //%blockId=fuzzy_start_server
    //%block="Começa receber informação da web"
    //% weight=55
    export function infoweb(): void {
        flag = true
        //.serial.writeLine("(AT+startWebServer)")
        //.while(flag) {
        //.serial.writeLine("(AT+write_sensor_data?p0=" + pins.analogReadPin(AnalogPin.P0) + "&p1=" + pins.analogReadPin(AnalogPin.P1) + "&p2=" + pins.analogReadPin(AnalogPin.P2) + ")")
        //.basic.pause(500)
        //.if(!flag)
        //.	break;
    }
    //%subcategory=More
    //% blockId=muselab_general_mqtt
    //% block="Conecta CloudMQTT servidor %host| port %port| client id %clientId| username %username| password %pwd"
    //% weight=43
    //% blockGap=7
    export function conCloudMQTT(host: string, port: string, clientId: string, username: string, pwd: string): void {
        //.serial.writeLine("(AT+startMQTT?host="+host+"&port="+port+"&clientId="+clientId+"&username="+username+"&password="+pwd+")");
    }
    //%subcategory=More
    //%blockId=fuzzy_mqtt_publicar
    //% block="MQTT publicar no topico %topic| informação %payload"
    //% weight=42
    //% blockGap=7
    export function mqttPublCloudmqtt(topic: string, payload: string): void {
        //.serial.writeLine("(AT+mqttPub?topic="+topic+"&payload="+payload+")");
    }
    //%blockId=fuzzy_mqtt_subscribe
    //% block="MQTT subscribe no topico %topic"
    //% weight=41
    export function mqttsubscribe(topic: string): void {
        //.serial.writeLine("(AT+mqttSub?topic="+topic+")");
    }
    //%blockId=fuzzy_bateria
    //%block="Mostrar nivel de bateria"
    //% weight=40
    //% blockGap=7

    export function infobattery(): void {
        //.serial.writeLine("(AT+battery)");
    }
    //%blockId=fuzzy_version
    //%block="Mostrar versão do firmware"
    //% weight=39
    //% blockGap=7
    export function enviaversion(): void {
        //.serial.writeLine("(AT+version)");
    }
    //%blockId=fuzzy_at
    //%block="Envia comando AT %command"
    //% weight=30
    //% blockGap=7
    export function enviaAT(command: string): void {
        //.serial.writeLine(command);
        flag = false
    }
    //%blockId=fuzzy_teste
    //%block="Teste wifi shield"
    //% weight=20
    //% blockGap=7
    export function enviaTeste(): void {
        //.serial.writeLine("(AT+testing)");
    }
    //%blockId=fuzzy_deep_sleep
    //%block="Configura o tempo de baixa energia %second| second"
    //% weight=15
    export function setDeepSleep(second: number): void {
        //.serial.writeLine("(AT+deepsleep?time="+second+")");
    }
}
