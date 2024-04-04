#include <ArduinoIoTCloud.h>
#include <Arduino_ConnectionHandler.h>

const char SSID[]     = SECRET_SSID;    // Network SSID (name)
const char PASS[]     = SECRET_OPTIONAL_PASS;    // Network password (use for WPA, or use as key for WEP)


CloudTemperatureSensor temperature_C;
CloudTemperatureSensor temperature_F;
CloudLuminance light;
CloudRelativeHumidity humidity;
CloudPressure pressure;

void initProperties(){
  ArduinoCloud.addProperty(temperature_C, READ, 1 * SECONDS, NULL);
  ArduinoCloud.addProperty(temperature_F, READ, 1 * SECONDS, NULL);
  ArduinoCloud.addProperty(light, READ, 1 * SECONDS, NULL);
  ArduinoCloud.addProperty(humidity, READ, 1 * SECONDS, NULL);
  ArduinoCloud.addProperty(pressure, READ, 1 * SECONDS, NULL);
}

WiFiConnectionHandler ArduinoIoTPreferredConnection(SSID, PASS);