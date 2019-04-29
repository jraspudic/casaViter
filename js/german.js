$(function() {
    	var de = document.getElementById("de");
  		var hr = document.getElementById("hr");
  		var en = document.getElementById("en");
    if(document.cookie.includes("languageCasaViter=de")){
    	de.style.display = "none";
    	hr.style.display = "inline-block";
    	en.style.display = "inline-block";

    	translateDE();
    }
    else if(document.cookie.includes("languageCasaViter=hr")){
    	de.style.display = "inline-block";
    	hr.style.display = "none";
    	en.style.display = "inline-block";

    	translateHR();
    }
});

var deLang = {
		//index.html

		'about' : 'Über',
		'aboutUs' : 'Über uns',
		'home'	: 'Startseite', 
		'trips' : 'Ausflüge',
		'priceList' : 'Preisliste',
		'gallery' : 'Galerie',
		'contact' : 'Kontakt',
		'apartments' : 'Wohnungen',
		'sa1' : 'Studio Wohnung 1',
		'sa2' : 'Studio Wohnung 2',
		'sa3' : 'Studio Wohnung 3',
		'loft' : 'Penthaus',
		'basementApartment' : 'Wohnung im Erdgeschoss',
		'whereAreWe' : "Wo sind wir",

		/**********Footer *****************/
		'dearGuests' : 'Liebe Gäste,',
		'footerText' : 'Unsere Familie wünscht Ihnen einen herzlichen Empfang und einen angenehmen Aufenthalt in unseren Apartments! Kommen Sie nach Zaostrog, einem kleinen Ort an der Adriaküste, wo alles in Reichweite ist, und genießen Sie die Sehenswürdigkeiten und Geräusche der Adria und die Natur, die sie umgibt.',
		'fastLinks' : 'Schnelle Links',
		'allRights' : 'Alle Rechte vorbehalten.',
		/*************************************/
		'welcomeTo' : 'Willkommen im ',
		'spop' : 'einem sonniges Stück Paradies',
		'inNature' : 'in einer ruhigen Seitenstraße',
		'casaViterIs' : 'Casa Viter ist ',
		'forYou' : 'für Sie da',
		'view' : 'Ansehen',
		'wideVariety' : 'Große Auswahl an ',
		'amazingTrips' : 'Erstaunliche Ausflüge',
		'explore' : 'Erkunden',
		'beautifulPlacesNearby' : 'Schöne Orte in der Nähe',
		'viewAllAps' : 'Alle Wohnungen anzeigen',
		'sunrise1' : 'Der einzige Ort auf der Erde,',  
		'sunrise2' : 'wo die Sonne zwei Mal aufgeht',
		'sunrise3' : 'Zaostrog ist der einzige Ort weltweit wo die Sonne im Sommer am selben Morgen zweimal aufgeht. Die Sonne geht erstmals über dem Berg Viter auf, hinter dessen schroffen Felsen sie dann für zwanzig Minuten wieder verschwindet, um sich anschließend erneut und für den Rest des Tages zu zeigen. Dieses Phänomen ist einzigartig, weshalb Sie es unbedingt erleben sollten!',
		'hotTrips' : 'Beliebte Ausflüge',
		'readMore' : 'Weiterlesen',
		'viewAll' : 'Alle ansehen',
		'getInTouch' : 'In Kontakt kommen',
		'firstName' : 'Vorname',
		'lastName'	: 'Nachname',
		'yourMessage' : 'deine Nachricht',
		'sendMessage' : 'Nachricht senden',
		'contactUs' : 'Kontaktiere uns',
		'all' : 'alles',
		

		/**** Trips *****/
		'dubrovnik1' : 'Kroatien, Dubrovnik',
		'dubrovnik2' : 'Dubrovnik ist eines der bekanntesten Touristenziele in Kroatien und im Mittelmeer. Im Jahr 1979 wurde die Stadt Dubrovnik in die UNESCO-Liste der Welterbestätten aufgenommen.',
		'medjugorje1' : 'Bosnien und Herzegowina, Medjugorje',
		'medjugorje2' : 'Seit 1981 ist Medjugorje eine weltbekannte Wallfahrtsstadt durch "Our Lady of Medjugorje", eine angebliche Serie von Erscheinungen der Jungfrau Maria vor sechs einheimischen Kindern, die sich bis heute befinden.',
		'split1' : 'Kroatien, Split',
		'split2' : 'Die Stadt Split ist nicht nur eine Kulturmetropole, sondern auch zum Shoppen sehr gut geeignet.',
		'islands1' : 'Kroatische Inseln, Fährhafen Drvenik',
		'islands2' : 'Auch die wunderschönen Inseln, wie Korcula, Brac, Hvar und die Halbinsel Peljesac, können Sie alltäglich besichtigen, da der Fährhafen Drvenik nur ca. 5 km entfernt ist. In den Sommermonaten werden Schiffsausflüge organisiert.',
		'omis1' : 'Kroatien, Omis',
		'omis2' : 'Sehr zu empfehlen ist eine Rafting-Tour am Fluss Cetina in Omis.',
		'mostar1' : 'Bosnien und Herzegowina, Mostar',
		'mostar2' : 'Die Stadt der Brücken und Altertümer aus prähistorischer Zeit.',

		'ourApartments' : 'Unsere Wohnungen',
		'persons' : 'Personen',
		

		/*********** It features/has , taj dio **********************/
		'itFeatures' : 'Sie verfügt über:',
		'kitchen' : 'Küche',
		'bathroom' : 'Badezimmer',
		'roomyBathroom' : 'geräumigem Badezimmer',
		'garden' : 'Garten',
		'terrasse' : 'Terrasse',
		'wifi' : 'WLAN Internet',
		'ac' : 'Klimaanlage',
		'parking' : 'Parkplatz',
		'bbq' : 'Außengrill',
		'beach' : 'Strand',
		'balconyWithSeaView' : 'Balkon mit Meerblick',


		'distancesFromCasa' : 'Entfernungen von Casa-Viter',
		'airportSplit' : 'Flughafen Split - 110 km (ca. 2,5h mit dem Bus)',
		'airportDubrovnik' : 'Flughafen Dubrovnik - 130 km (ca. 3h mit dem Bus)',
		'busStation' : 'Bushaltestelle - 300m',
		'hospital' : 'Krankenhaus - 18 km',
		'pharmacy' : 'Apotheke - 700m',
		/************************************staro***********************************/

		//priceList
		'date' : 'Datum',
		'aboutUsText' : 'In einer ruhigen Seitenstraße erwarten Sie drei neue, modern eingerichtete Studio Apartments und eine Ferienwohnung. Alle Apartments sind jeweils mit Sat-TV, Flachbildschirm, Balkon mit Meerblick (außer in Apartment 3), Küche und geräumigem Badezimmer ausgestattet. Außerdem gehören Terrassen, Garten, Außengrill und Parkplatz dazu. Die Entfernung zum Strand / Ortszentrum / Einkaufsläden / Restaurants beträgt ca. 700 m bzw. 10 – 15 Min. zu Fuß. Wir werden unser Bestes tun und dafür sorgen, dass es Ihnen während Ihres Aufenthaltes an nichts fehlt; auch für die kulturellen Bedürfnisse und Ausflüge kann gesorgt werden. Wir sind uns sicher, dass Ihnen diese touristische Oase sehr gute Erholung und Unterhaltung, aber vor allem auch eine Menge schöner Erinnerungen bieten wird, die Sie mitnehmen werden und die Sie dazu bringen werden, uns wieder zu besuchen.',
		'zaostrogText' : 'Zaostrog ist ein kleiner, typisch dalmatinischer Ort mit ca. 300 Einwohnern in Kroatien. Hier finden Sie weiße Kieselstrände mit einigen wunderschönen Badebuchten, gute Restaurants, Straßencafés, Supermärkte, Apotheke, Post, Bäckerei, etc.',
		}

var hrLang = {
		//index.html

		'about' : 'Vidi više',
		'aboutUs' : 'O nama',
		'home'	: 'Početna', 
		'trips' : 'Izleti',
		'priceList' : 'Cjenik',
		'gallery' : 'Galerija',
		'contact' : 'Kontakt',
		'apartments' : 'Apartmani',
		'sa1' : 'Studio Apartman 1',
		'sa2' : 'Studio Apartman 2',
		'sa3' : 'Studio Apartman 3',
		'loft' : 'Potkrovlje',
		'basementApartment' : 'Apartman u prizemlju',
		'whereAreWe' : "Kako do nas",

		/**********Footer *****************/
		'dearGuests' : 'Dragi Gosti,',
		'footerText' : 'Naša obitelj želi Vam toplu dobrodošlicu i ugodan boravak u našim apartmanima! Dođite u Zaostrog, gradić na jadranskoj obali gdje je sve dostupno, i uživajte u znamenitostima i zvukovima Jadrana i prirodi koja ga okružuje.',
		'fastLinks' : 'Brzi linkovi',
		'allRights' : 'Sva prava pridržana.',
		/*************************************/
		'welcomeTo' : 'Dobrodošli u ',
		'spop' : 'Sunčani komadić raja',
		'inNature' : 'u nedirnutom dijelu prirode',
		'casaViterIs' : 'Casa Viter je ',
		'forYou' : 'za Vas',
		'view' : 'Pogledaj',
		'wideVariety' : 'Širok raspon ',
		'amazingTrips' : 'nevjerojatnih izleta',
		'explore' : 'Istraži',
		'beautifulPlacesNearby' : 'Predivna mjesta u blizini',
		'viewAllAps' : 'Vidi sve apartmane',
		'sunrise1' : 'Jedino mjesto na zemlji',
		'sunrise2' : 'gdje sunce izlazi 2 puta',
		'sunrise3' : 'Zaostrog je jedino mjesto na svijetu gdje sunce ljeti izlazi dva puta istog jutra. Sunce se po prvi put diže preko planine Viter, iza čijeg hrapavog kamena nestaje dvadeset minuta, da bi se pokazala opet i ostatak dana. Ovaj fenomen je jedinstven, zato ga svakako treba doživjeti!',
		'hotTrips' : 'Najbolji izleti',
		'readMore' : 'Vidi više',
		'viewAll' : 'Vidi sve',
		'getInTouch' : 'Stupi u kontakt',
		'firstName' : 'Ime',
		'lastName'	: 'Prezime',
		'yourMessage' : 'Vaša poruka',
		'sendMessage' : 'Pošalji poruku',
		'contactUs' : 'Kontaktiraj nas',
		'all' : 'sve',
		

		/**** Trips *****/
		'dubrovnik1' : 'Hrvatska, Dubrovnik',
		'dubrovnik2' : 'Dubrovnik je jedno od najpoznatijih turističkih odredišta u Hrvatskoj i Mediteranu. Godine 1979. grad Dubrovnik je uvršten u UNESCO-ov popis svjetske baštine.',
		'medjugorje1' : 'Bosna i Hercegovina, Medjugorje',
		'medjugorje2' : 'Od 1981. godine Međugorje je svjetski poznato hodočasničko mjesto kroz "Gospu iz Međugorja", navodno niz ukazanja Djevice Marije šestorici mjesne djece koja i danas žive.',
		'split1' : 'Hrvatska, Split',
		'split2' : 'Grad Split nije samo kulturna metropola, već je i vrlo pogodno mjesto za šoping.',
		'islands1' : 'Hrvatski otoci, trajektna luka Drvenik',
		'islands2' : 'Prekrasne otoke, kao što su Korčula, Brač, Hvar i poluotok Pelješac, možete posjetiti svakodnevno, jer je trajektna luka Drvenik udaljena samo oko 5 km. Tijekom ljetnih mjeseci organiziraju se izleti brodom.',
		'omis1' : 'Hrvatska, Omis',
		'omis2' : 'Preporučuje se rafting na rijeci Cetini u Omišu.',
		'mostar1' : 'Bosna i Hercegovina, Mostar',
		'mostar2' : 'Grad mostova i starina iz prapovijesti.',

		'ourApartments' : 'Naši apartmani',
		'persons' : 'Osobe',
		

		/*********** It features/has , taj dio **********************/
		'itFeatures' : 'Sadrži',
		'kitchen' : 'Kuhinja',
		'bathroom' : 'Kupaonica',
		'roomyBathroom' : 'Prostrana kupaonica',
		'garden' : 'Vrt',
		'terrasse' : 'Terasa',
		'wifi' : 'WLAN internet',
		'ac' : 'Klima',
		'parking' : 'Parking',
		'bbq' : 'Vanjski roštilj',
		'beach' : 'Plaža',
		'balconyWithSeaView' : 'Balkon s pogledom na more',


		'distancesFromCasa' : 'Udaljenosti od Casa-Viter',
		'airportSplit' : 'Zračna luka Split - 110 km (oko 2,5h s autobusom)',
		'airportDubrovnik' : 'Zračna luka Dubrovnik - 130 km (oko 3h s autobusom)',
		'busStation' : 'Autobuska stanica - 300m',
		'hospital' : 'Bolnica - 18 km',
		'pharmacy' : 'Ljekarna - 700m',
		/************************************staro***********************************/

		//priceList
		'date' : 'Datum',
		'aboutUsText' : 'U netaknutom dijelu prirode, na raspolaganju su Vam tri studio-apartmana, te jedan veliki jednoetažni apartman. Tri apartmana imaju predivan pogled na more kao i u prirodu, šumu i planine. Opremljeni su klimom, W-LAN internetom, SAT-TV, LCD-televizorom, kuhinjom i prostranom kupaonicom. Na korištenju su Vam: vrt, velika terasa s vanjskom roštiljem i parkiralište. Udaljenost od pješčane plaže, restorana, trgovina, pošte, itd. je oko 700 m. (10 – 15 minuta pješice). Trudit ćemo se da Vam boravak i odmor u našoj sredini bude zaista i vrijeme opuštenosti, mira i zadovoljstva. Sigurni smo da Vam ovaj dio turističkog raja pruža odličan odmor, zabavu i rekreaciju iz kojega ćete ponijeti bezbroj lijepih uspomena, kojih ćete se rado sjećati. Radujemo se Vašem dolasku! Želimo Vam ugodan boravak!',
		'zaostrogText' : 'Zaostrog je malo, tipično dalmatinsko mjesto u Hrvatskoj s otprilike 300 stanovnika. Ovdje možete naći bijele šljunčane plaže u lijepim morskim uvalama, dobre restorane, ulične kafiće, supermarkete, ljekarnu, poštu, pekaru, itd.',
		}

	
$('#de').click(function(){
		//$('.datepicker').setDefaults($('.datepicker.regional.de')); 
		document.cookie = "languageCasaViter=de";
		location.reload();
	});
$('#en').click(function(){
		//$('.datepicker').setDefaults($('.datepicker.regional.de'));
		document.cookie = "languageCasaViter=de; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
		document.cookie = "languageCasaViter=hr; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
		location.reload();
	});
$('#hr').click(function(){
		//$('.datepicker').setDefaults($('.datepicker.regional.de'));
		document.cookie = "languageCasaViter=hr"
		location.reload();
	});

function translateDE(){
	$('.lang').each(function(index, element){
		$(this).text(deLang[$(this).attr('key')]);
	});
}

function translateHR(){
	$('.lang').each(function(index, element){
		$(this).text(hrLang[$(this).attr('key')]);
	});
}


$("#contactForm").submit(function( event ) {
  var contactForm = document.getElementById("contactForm");
  var formSent = document.getElementById("formSent");
  contactForm.style.display = "none";
  formSent.style.display = "block";
  var x = $( this ).serializeArray();
  var subject = 'contactWebPage';
  var emailBody = "Ime: " + x[0].value + "\nPrezime: " + x[1].value + "\nE-mail: " + x[2].value + "\n\n" + x[3].value;
$.ajax({
    type: "POST",
    url: "https://med-irishcentre.com/webservice/datasource.asmx/spiCasaViterEmailSend",
    data: "{subject:'" + subject + "', body:'" + emailBody +"', mailto: 'jurica.raspudic@gmail.com'}",
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
});

});


