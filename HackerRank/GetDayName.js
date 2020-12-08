function getDayName(dateString) {
    let dayName;
    const date = new Date(dateString);
    console.log(date.getDay());
    switch(date.getDay()) {
        case 0:
            dayName = 'Sunday';
            break;
        case 1: 
            dayName = 'Monday';
            break;
        case 2: 
            dayName = 'Tuesday';
            break;
        case 3: 
            dayName = 'Wednesday';
            break;
        case 4: 
            dayName = 'Thursday';
            break;
        case 5: 
            dayName = 'Friday';
            break;
        case 6: 
            dayName = 'Saturday';
            break;
        default: 
        break;
    }
    return dayName;
}

getDayName('10/11/2009');
getDayName('11/10/2010');