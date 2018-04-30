document.addEventListener('DOMContentLoaded', event => {
  let button = document.getElementById('connect')

  button.addEventListener('click', async() => {
    let device
    const VENDOR_ID = 1234
    	
    try {
	navigator.usb.getDevices().then(function(devices){
		console.log(devices);
		devices.forEach(function (device) {
			navigator.usb.openDevices(device, function (connection) {
				if (connection) connections.push(connection);
				pendingAccessRequests--;
				if (pendingAccessRequests == 0) {
				  callback(connections);
				}
			});
		});
	});
	
	
    } catch (error) {
	console.log(error)    
    }
    /*
    try {
      device = await navigator.usb.requestDevice({
        filters: [{
          //vendorId: VENDOR_ID
        }]
      })
		
	
	    
	//next
	    
      console.log(device)
      console.log('open')
      await device.open()
      console.log('opened:', device)
    } catch (error) {
      console.log(error)
    }
	  await device.close()
	*/
  })
})
