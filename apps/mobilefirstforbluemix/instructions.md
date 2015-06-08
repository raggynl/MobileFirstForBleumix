This is a costum setup in order to run Mobile First frontend together with a nodeJS server on bluemix

Structure:
- apps (Main folder)
	- mobilefirstforbluemix (Project folder)
		- common (mobile first Front end web app)
		- legel (licenses)
		- lib (library dependecencies nodeJS/bluemix)
		- node_modules (node JS module dependencies)
	- application-description.xml (mobile first config)
	- app.js (starts nodejs server)
	- manifest.yml (bluemix deployment manifest)
	- package.json (nodejs depedency list for bleumix)
	
	
Rest Call to te server are done by using Jquery, angularJS or simular framework instead of using worklight packages

You can still create new mobile first envoirments Keep in mind that you need to point to the right server URL this is not handeld through mobilefirst deployment setup
	


Open Getting Started Guide
-----------------------------------------
Congratulations on your new Mobile Cloud application!

To use the Mobile Cloud application template as a starting point, [download the starter application package](https://console-classic-20150602-164059.eu-gb.bluemix.net:443/rest/../rest/apps/795cfa26-f989-48fb-839e-e38fb374b2da/starter-download)

If you already have a development environment set up, get started with these simple steps:

1. Download the [SDKs](https://www.eu-gb.bluemix.net/docs/#starters/mobile/index.html#index)
2. Download a [sample](https://hub.jazz.net/user/mobilecloud)
3. The IBMBluemix SDK requires an application id, secret, and route to communicate with Bluemix services.  Use the following values:
     - App ID: `795cfa26-f989-48fb-839e-e38fb374b2da`
     - App secret: Get from application overview page on your dashboard
     - Route: `mobilefirstonbluemix.eu-gb.mybluemix.net` 
4. Run the app in your mobile emulator