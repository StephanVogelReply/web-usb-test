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
	    console.log(device.data)
	// check wheter selected device hold information
	if (device === undefined) {
		console.log('device undefined')
	}
			
	
      console.log('open')
			console.log(device)
			// try to open or get access to the selected device
      await device.open()
      console.log('opened:', device)
			
			// catch data stream from usb
			while (true) {
				let result = await dat
			}
    } catch (error) {
      console.log(error)
    }
	  await device.close()
  })
})
