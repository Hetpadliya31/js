function month() {

    let usermonth=document.getElementById("usermonth").value
    let mon=String(usermonth).toLowerCase()
    switch(mon){
        case "january":
        document.getElementById('ans').innerHTML=31
        break;
    
        case "february":
            document.getElementById('ans').innerHTML=29
        break;
    
        case "march":
            document.getElementById('ans').innerHTML=31
        break;
    
        case "april":
            document.getElementById('ans').innerHTML=30
        break;
    
        case "may":
            document.getElementById('ans').innerHTML=31
        break;
    
        case "june":
            document.getElementById('ans').innerHTML=30
        break;
    
        case "july":
            document.getElementById('ans').innerHTML=31
        break;
    
        case "august":
            document.getElementById('ans').innerHTML=31
        break;
    
        case "september":
            document.getElementById('ans').innerHTML=30
        break;
    
        case "october":
            document.getElementById('ans').innerHTML=31
        break;
    
        case "november":
            document.getElementById('ans').innerHTML=30
        break;
    
        case "december":
            document.getElementById('ans').innerHTML=31
        break;
    }
    
    }