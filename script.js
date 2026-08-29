) {  

    alert(  
        "Resume preview is empty!"  
    );  

    return;  
}  

window.print();

}

// ==========================================
// PREMIUM PLAN
// ==========================================

function selectPlan(plan, price) {

alert(  
    "💎 " +  
    plan +  
    " Premium selected!\n\n" +  
    "Price: ₹" +  
    price +  
    "\n\n" +  
    "Payment system will be connected next."  
);

}

// ==========================================
// AUTOMATIC LIVE PREVIEW
// ==========================================

document.addEventListener(
"DOMContentLoaded",
function() {

updateLivePreview();  


    const inputIds = [  

        "name",  
        "email",  
        "phone",  
        "jobTitle",  
        "education",  
        "skills",  
        "experience",  
        "summary",  
        "projects",  
        "languages",  
        "github",  
        "linkedin",  
        "template"  

    ];  


    inputIds.forEach(function(id) {  

        const element =  
            document.getElementById(id);  

        if (!element) return;  


        element.addEventListener(  
            "input",  
            updateLivePreview  
        );  


        element.addEventListener(  
            "change",  
            updateLivePreview  
        );  

    });  


    const photo =  
        document.getElementById("photo");  


    if (photo) {  

        photo.addEventListener(  
            "change",  
            updateLivePreview  
        );  

    }  

}

);
