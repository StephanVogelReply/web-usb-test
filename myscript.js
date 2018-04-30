document.addEventListener('DOMContentLoaded', event => {
  let button = document.getElementById('connect')

  button.addEventListener('click', async() => {
    let device
    const VENDOR_ID = 1234
    	
    try {
	
});
    } catch (error) {
	console.log(error)    
    }
    
    try {
      device = await navigator.usb.requestDevice({
        filters: [{
          //vendorId: VENDOR_ID
        }]
      })
	    	navigator.usb.requestDevice().then(function(device){
   			console.log(device);
		});
		navigator.usb.getDevices().then(function(devices){
		    console.log(devices);
		});
	    
	    
      console.log(device)
      console.log('open')
      await device.open()
      console.log('opened:', device)
    } catch (error) {
      console.log(error)
    }
	  await device.close()
  })
})
