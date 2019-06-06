# pxt-fuzzyiot



## TODO

Extensão criada para uso dos kits da Fuzzy Makers.
comandos por Java script:

## Palavra chave: Fuzzyiot
EX: Fuzzyiot.iniciaWifi();

### iniciaWifi();
 Inicia comunicação com o shield wifi.

### configuraWifi(ssid,pwd);
Configura o nome e a senha da rede wifi.

### enviaThingspeak(key, campo de info 1, campo de info 2);

Envia chave ThingSpeak  e dos campos para enviar informações.

### enviaIFTTT(chaveIFTTT, nome_do_evento, campo de info 1, campo de info 2);

Envia chave para conexão ao IFTTT nome do evento e campo para enviar informações.

### configuraWifiHotspot(ssid, pwd);
Configura nome e senha de um access point com o shield WiFi.

### infoweb();

Recebe informações da internet

### conCloudMQTT(hostname, port clientId, username, pwd);

Conectar ao CloudMQTT com as informações do servidor CloudMQTT.

### mqttPublCloudmqtt(topic, payload);
Faz publicação ao servidor com tópico e payload específico.

### mqttsubscribe(topic);
Faz inscrição em tópico específico.

### infobattery();
Informa porcentagem da bateria.

### enviaversion();
Versão do firmware.

### enviaAT();
Eniva comando AT para o shield WiFi.

### enviaTeste();
Teste WiFi shield.

### setDeepSleep(tempo em s);
Tempo em economia de energia.

## License



## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

