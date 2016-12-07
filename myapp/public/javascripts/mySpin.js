var spinner = null;

function showSpinner(){
    $('#spinner-light-box').show();

    var opts = {
        lines: 15,
        length: 0,
        width: 8,
        radius: 30,
        rotate: 8,
        direction: 1,
        color: '#BCC1C1',
        speed: 1,
        trail: 60,
        scale: 1.0,
        top: '50%',
        left: '50%'
    };

    spinner = new Spinner(opts).spin(document.getElementById('spinner-light-box'));
}

function hideSpinner(){
    $('#spinner-light-box').hide();
    spinner.stop();
}