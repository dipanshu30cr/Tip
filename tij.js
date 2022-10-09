function calculateTip()
{
    var billamt= document.getElementById("billamt").value;
    var serviceQual= document.getElementById("serviceQual").value;
    var numOfPeople= document.getElementById("peopleamt").value;

    if (billamt==="" || serviceQual==" 0")
    {
        alert("please enter values");
        return;
    }

    if( numOfPeople==="" || numOfPeople<=1)
    {
    numOfPeople=1;
    document.getElementById("each").style.display= "none";
    } else
    {
        document.getElementById("each").style.display="block";
    }


    //calculate tip
    var total= (billamt*serviceQual)/numOfPeople;
    total= Math.round(total/10.0);
    total= total.toFixed(1);

    document.getElementById("totaltip").style.display="block";
    document.getElementById("tip").innerHTML= total;
    }

    //hide the tip amount next time after loading
    document.getElementById("totaltip").style.display="none";
    document.getElementById("each").style.display="none";
    
    //calling function
    document.getElementById("calculate").onclick= function()
    {
        calculateTip();
    };
