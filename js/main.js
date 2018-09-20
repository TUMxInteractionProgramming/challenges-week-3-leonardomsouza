console.log('app is alive')

function switchChannel(channelName) {
    // Changes the name on the top of the app bar depending on choosen channel
    
    $('#chat div').html('Tuning into channel' + channelName);
}
