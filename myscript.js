document.addEventListener('DOMContentLoaded', event => {
  let button = document.getElementById('connect')

  button.addEventListener('click', async() => {
    let device
    const VENDOR_ID = 0x1A61
    
    try {
      device = await navigator.usb.requestDevice({
        filters: [{
          //vendorId: VENDOR_ID
        }]
      })
	
			var usbConnection = null;
			var onOpenCallback = function(connection) {
				if (connection) {
					usbConnection = connection;
					console.log("Device opened.");
				} else {
					console.log("Device failed to open.");
				}
			};
	    
			navigator.usb.openDevice(device, onOpenCallback);
	    
	    
      console.log('open')
			console.log(device)
      await device.open()
      console.log('opened:', device)
    } catch (error) {
      console.log(error)
    }
	  await device.close()
  })
})
