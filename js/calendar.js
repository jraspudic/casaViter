var eventDates = {};
Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}
$.datepicker.regional.hr = {
    closeText: "Zatvori",
    prevText: "&#x3C;",
    nextText: "&#x3E;",
    currentText: "Danas",
    monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj",
        "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
    monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip",
        "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
    dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
    dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
    dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
    weekHeader: "Tje",
    dateFormat: "yy-mm-dd",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ""
};
$.datepicker.regional.en = {
    closeText: "Done",
    prevText: "Prev",
    nextText: "Next",
    currentText: "Today",
    monthNames: ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    weekHeader: "Wk",
    dateFormat: "yy-mm-dd",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ""
};
$.datepicker.regional.de = {
    closeText: "Schließen",
    prevText: "&#x3C;Zurück",
    nextText: "Vor&#x3E;",
    currentText: "Heute",
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"],
    monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
        "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    weekHeader: "KW",
    dateFormat: "yy-mm-dd",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ""
};
function Save() {
    var s = "";
    $.each(eventDates, function (index, value) {
        s = s + (s == "" ? "" : ",") + index + ":" + value;
    });
    var apartment = $("#apartment").val();
    $.ajax({
        type: "POST",
        url: "https://med-irishcentre.com/webservice/datasource.asmx/spiCalendarSet",
        data: "{dates:'" + s + "',id:" + apartment + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $(".success").html((new Date()).toLocaleTimeString() + " - Označeni datumi su uspješno spremljeni!");
            $(".error").html("");
        }
        , error: function (xhr, ajaxOptions, thrownError) {
            $(".success").html("");
            $(".error").html((new Date()).toLocaleTimeString() + " s- Označeni datumi nisu uspješno spremljeni!");
        }
    });
}
function onApartmentSelected() {
    var isCalendarPage = $("#apartment").length;
    var apartment;
    var div = document.querySelector("#calendar");
    if (isCalendarPage == 1)
        apartment = $("#apartment").val();
    else if (div.dataset.id > 0) {
        apartment = div.dataset.id;
    } else {
        var url = new URL(window.location.href);
        apartment = url.searchParams.get("id");
    }
    //isCalendarPage = 0;
    $.ajax({
        type: "GET",
        url: "https://med-irishcentre.com/webservice/datasource.asmx/spiCalendarGet?id=" + apartment,
        contentType: "application/json; charset=utf-8",
        //async: false,
        dataType: "json",
        success: function (data) {
            //console.log(data.d);
            var a = eval(data.d);
            eventDates = {};
            for (var i = 0; i < a.length; i++) {
                eventDates[(new Date(a[i])).toISOString().slice(0, 10)] = "False";
            }
            $('#calendar').datepicker({
                numberOfMonths: [1, 3],
                beforeShowDay: fBeforeShowDay
                ,onSelect: function (date) {
                    if (isCalendarPage == 1) {
                        var aDate = eventDates[(new Date(date)).toISOString().slice(0, 10)];
                        if (!aDate || aDate == "True") {
                            eventDates[(new Date(date)).toISOString().slice(0, 10)] = "False";
                        } else if (aDate == "False") {
                            eventDates[(new Date(date)).toISOString().slice(0, 10)] = "True";
                        }
                        $("#calendar").datepicker("refresh");
                    }
                }
            });
            $("#calendar").datepicker("refresh");
        }
        , error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
}
function Login() {
    $.ajax({
        type: "POST",
        url: "https://med-irishcentre.com/webservice/datasource.asmx/spiCasaViterLogin",
        data: "{username:'" + $("#username").val() + "',password:'" + $("#password").val() + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.d == true) {
                $("#login").hide();
                $("#calendar_wrapper").show();
            }
        }
        , error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
}
function fBeforeShowDay(date) {
    var aDate = eventDates[date.addDays(1).toISOString().slice(0, 10)];
    return [true, aDate == "False" ? 'event' : '', ''];
}
function calRefresh() {
    if ($(window).width() > 991) {
        $("#calendar").datepicker({ numberOfMonths: [1, 3], beforeShowDay: fBeforeShowDay });
    }
    else if ($(window).width() > 576 && $(window).width() <= 991) {
        $("#calendar").datepicker({ numberOfMonths: [1, 2], beforeShowDay: fBeforeShowDay });
    }
    else {
        $("#calendar").datepicker({ numberOfMonths: [1, 1], beforeShowDay: fBeforeShowDay });
    }
}
$(document).ready(function () {
    if (document.cookie.includes("languageCasaViter=de"))
        $.datepicker.setDefaults($.datepicker.regional.de);
    else if (document.cookie.includes("languageCasaViter=hr"))
        $.datepicker.setDefaults($.datepicker.regional.hr);
    else
        $.datepicker.setDefaults($.datepicker.regional.en);
    if (window.location.href.includes("calendar.html") > 0)
        $.datepicker.setDefaults($.datepicker.regional.en);
    onApartmentSelected();
});
calRefresh();
$(window).resize(function () {
    $("#calendar").datepicker("destroy");
    calRefresh();
    $("#calendar").datepicker("refresh");
});
/*$.ajax({
    type: "POST",
    url: "https://med-irishcentre.com/webservice/datasource.asmx/spiCasaViterEmailSend",
    data: "{subject:'Test subject',body:'Test body', mailto: 'boris.slokar@gmail.com'}",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
        console.log("Contact us email sent successfully!");
    }
    , error: function (xhr, ajaxOptions, thrownError) {
        console.log("Contact us email sent error!");
        console.log(xhr.status);
        console.log(thrownError);
    }
});*/