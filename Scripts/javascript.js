var currTab = 0;
showTab(currTab);

$("#submitBtn").click(function () {
    
});

function test() {
    alert("checking");
    var uname = $("#uname").val();
    var pass = $("#upass").val();

    var d = { "username": uname, "password": pass };

    var settings = {
        type: "POST",
        dataType: "json",
        url: '/Challan/Submit',
        data: d,
        success: function (resp) {
            if (resp.valid == "true") {
                location.href = resp.urlToRedirect;
            } else {
                alert("Invalid Login");
            }
        },
        error: function () {
            alert("error");
        }
    };
    $.ajax(settings);
    return false;
}
function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    }
    else {
        document.getElementById("prevBtn").style.display = "inline";
    }

    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    //if (!validateForm())
      //  return false;
    x[currTab].style.display = "none";
    currTab = currTab + n;
    if (currTab >= x.length) {
        test();
    }
    showTab(currTab);
}
function validateForm() {
    alert("Validating");
    var x, y, i, valid = true;
    x = $(".tab");

    y = x[currTab].getElementsByTagName("input");

    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " has-error";
            valid = false;
        }

    }
    return valid; // return the valid status
}