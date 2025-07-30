function menu(params) {
    let menu = document.getElementById('lines').className;
    if (menu == "ri-menu-line") {
        document.getElementById('lines').className="ri-close-fill";
        document.getElementById('media-menu').style.display = "block";
        document.getElementById('nav-menu').style.borderRadius = '0px';
        document.getElementById('nav-menu').style.border = '0px';

    } else {
        document.getElementById('lines').className="ri-menu-line";
        document.getElementById('media-menu').style.display = "none";
        document.getElementById('nav-menu').style.borderRadius = '100px';
        document.getElementById('nav-menu').style.border = '1px';
        
    }
}




function boxes(val) {
    // document.getElementById("arrow").className;
    if(val == "1"){
        document.getElementById("arrow").className = "ri-arrow-right-up-line";
        document.getElementById("arrow").style.color =' #c6fca6'
        document.getElementById('box-p').style.color =" #d8fdc4"
    }
    else if(val == "2"){
        document.getElementById("arrow").className = "ri-arrow-right-line";
        document.getElementById("arrow").style.color =' #FFFFFF'
        document.getElementById("box-p").style.color =' #FFFFFF'

    }
    if(val == "3"){
        document.getElementById("arrow-2").className = "ri-arrow-right-up-line";
        document.getElementById("arrow-2").style.color =' #c6fca6';
        document.getElementById('box-p-2').style.color =" #d8fdc4"

    }
    else if(val == "4"){
        document.getElementById("arrow-2").className = "ri-arrow-right-line";
        document.getElementById("arrow-2").style.color =' #FFFFFF'
        document.getElementById("box-p-2").style.color =' #FFFFFF'

    }
    if(val == "5"){
        document.getElementById("arrow-3").className = "ri-arrow-right-up-line";
        document.getElementById("arrow-3").style.color =' #c6fca6'
        document.getElementById("box-p-3").style.color = " #d8fdc4" ;

    }
    else if(val == "6"){
        document.getElementById("arrow-3").className = "ri-arrow-right-line";
        document.getElementById("arrow-3").style.color =' #FFFFFF';
        document.getElementById("box-p-3").style.color =' #FFFFFF';
    }
}
function questions(value) {
    if (value == "show-1") {
        document.getElementById('para-1').style.display = "block";
        document.getElementById('last-arrow').className = 'ri-arrow-up-line';
    }
    else if(value == "show1"){
        document.getElementById('para-1').style.display = "none";
        document.getElementById('last-arrow').className = 'ri-arrow-down-line';

    }
    else if(value == "show-2")
    {
        document.getElementById('para-2').style.display = "block";
        document.getElementById('last-arrow-2').className = 'ri-arrow-up-line';

    }
    else if(value == "show2"){
        document.getElementById('para-2').style.display = "none";
        document.getElementById('last-arrow-2').className = 'ri-arrow-down-line';
    }
    else if(value == "show-3")
    {
        document.getElementById('para-3').style.display = "block";
        document.getElementById('last-arrow-3').className = 'ri-arrow-up-line';
    }
    else if(value == "show3"){
        document.getElementById('para-3').style.display = "none";
        document.getElementById('last-arrow-3').className = 'ri-arrow-down-line';

    }
}
