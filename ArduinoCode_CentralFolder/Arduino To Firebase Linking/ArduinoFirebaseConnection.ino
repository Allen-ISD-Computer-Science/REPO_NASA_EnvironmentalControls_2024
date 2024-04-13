#include <FirebaseClient.h>
#include <WiFiNINA.h>
#include <Arduino_MKRENV.h>

#define WIFI_SSID ""
#define WIFI_PASSWORD ""

// Get from Firebase. Settings -> Project Settings -> Web API Key (copy this and paste it below)
#define API_KEY ""

// Get from Firebase. Build (In the side menu) -> Authentication -> Users.
#define USER_EMAIL "" // Get from Firebase
#define USER_PASSWORD "" // Get from Firebase

// Get from Firebase. Build (In the side menu) -> Realtime Database -> Copy link
#define DATABASE_URL "" // Get from Firebase

void printError(int code, const String &msg);

void asyncCB(AsyncResult &aResult);

DefaultNetwork network;  // Initilize with boolean parameter to enable/disable network reconnection

UserAuth user_auth(API_KEY, USER_EMAIL, USER_PASSWORD);

FirebaseApp app;

#include <WiFiSSLClient.h>
WiFiSSLClient ssl_client;

// In case the keyword AsyncClient using in this example was ambigous and used by other library, you can change
// it with other name with keyword "using" or use the class name AsyncClientClass directly.


using AsyncClient = AsyncClientClass;

AsyncClient aClient(ssl_client, getNetwork(network));

RealtimeDatabase Database;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("Connecting to Wifi");
  unsigned long ms = millis();
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  // Initialize environmental sensor
  if (!ENV.begin()) {
    Serial.println("Failed to initialize ENV sensor!");
    while (1)
      ;
  }
  Serial.println("ENV sensor initialized");
  Serial.println();

  Firebase.printf("Firebase Client v%s\n", FIREBASE_CLIENT_VERSION);

  Serial.println("Initializing app...");

  app.setCallback(asyncCB);

  initializeApp(aClient, app, getAuth(user_auth));

  ms = millis();

  while (app.isInitialized() && !app.ready() && millis() - ms < 120 * 1000)
    ;

  app.getApp<RealtimeDatabase>(Database);

  Database.url(DATABASE_URL);

  Serial.println("Synchronous Set... ");
}

void loop() {
  // put your main code here, to run repeatedly:

  app.loop();

  float temperature_C = ENV.readTemperature();
  float temperature_F = ENV.readTemperature(FAHRENHEIT);
  float humidity = ENV.readHumidity();
  float pressure = ENV.readPressure();
  float luminosity = ENV.readIlluminance();

  bool status = Database.set<float>(aClient, "/temperature_C", temperature_C);
  if (status)
    Serial.println("Set int is ok");
  else
    printError(aClient.lastError().code(), aClient.lastError().message());

  bool status2 = Database.set<float>(aClient, "/temperature_F", temperature_F);
  if (status2)
    Serial.println("Set int is ok");
  else
    printError(aClient.lastError().code(), aClient.lastError().message());

  bool status3 = Database.set<float>(aClient, "/humid", humidity);
  if (status3)
    Serial.println("Set int is ok");
  else
    printError(aClient.lastError().code(), aClient.lastError().message());

  bool status4 = Database.set<float>(aClient, "/pressure", pressure);
  if (status4)
    Serial.println("Set int is ok");
  else
    printError(aClient.lastError().code(), aClient.lastError().message());

  bool status5 = Database.set<float>(aClient, "/lumin", luminosity);
  if (status5)
    Serial.println("Set int is ok");
  else
    printError(aClient.lastError().code(), aClient.lastError().message());

  // Print data to serial monitor
  Serial.print("Temperature_C: ");
  Serial.print(temperature_C);
  Serial.println(" °C");

  Serial.print("Temperature_F: ");
  Serial.print(temperature_F);
  Serial.println(" °F");

  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");

  Serial.print("Pressure: ");
  Serial.print(pressure);
  Serial.println(" Pa");

  Serial.print("Luminosity: ");
  Serial.print(luminosity);
  Serial.println(" lux");

  delay(7500);
}

void asyncCB(AsyncResult &aResult) {
  if (aResult.appEvent().code() > 0) {
    Firebase.printf("Event msg: %s, code: %d\n", aResult.appEvent().message().c_str(), aResult.appEvent().code());
  }

  if (aResult.isDebug()) {
    Firebase.printf("Debug msg: %s\n", aResult.debug().c_str());
  }

  if (aResult.isError()) {
    Firebase.printf("Error msg: %s, code: %d\n", aResult.error().message().c_str(), aResult.error().code());
  }
}

void printError(int code, const String &msg) {
  Firebase.printf("Error, msg: %s, code: %d\n", msg.c_str(), code);
}