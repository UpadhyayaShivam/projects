function calculate(){
    const getDob = document.getElementById('dob').value;// taking date from input
    const dob = new Date(getDob);// converting input date to date object using date function
    const today = new Date();
    const output =  document.getElementById('output_show');

    if(isNaN(dob.getTime())){
        output.innerHTML = "plz enter valid date";
        return;
    }

    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if ( monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        output.innerHTML = "you r " + (age -1) + " years old."
    }else{
        output.innerHTML = " you r " + age + " years old.";
    }


}

// function calculate(){
//     const getDob = document.getElementById('dob').value;// taking date from input
//     const dob = new Date(getDob);// converting input date to date object using date function
//     const today = new Date();

//     if(isNaN(dob.getTime())){
//         document.getElementById('output_show').innerHTML = "plz enter valid date";
//         return;
//     }

//     let age = today.getFullYear() - dob.getFullYear();
//     const monthDiff = today.getMonth() - dob.getMonth();

//     if ( monthDiff<0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
//         age--;
//     }

//     document.getElementById('output_show').innerHTML = "you are " + age + "years olds.";

// }