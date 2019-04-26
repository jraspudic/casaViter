$(function() {
    	var de = document.getElementById("de");
  		var hr = document.getElementById("hr");
  		var en = document.getElementById("en");
    if(document.cookie.includes("languageCasaViter=de")){
    	de.style.display = "none";
    	hr.style.display = "inline";
    	en.style.display = "inline";

    	translateDE();
    }
    else if(document.cookie.includes("languageCasaViter=hr")){
    	de.style.display = "inline";
    	hr.style.display = "none";
    	en.style.display = "inline";

    	translateHR();
    }
});

var deLang = {
		//index.html

		'about' : 'Über',
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
		'welcomeTo' : 'Willkommen im',
		'spop' : 'einem sonniges Stück Paradies',
		'inNature' : 'in einer ruhigen Seitenstraße',
		'casaViterIs' : 'Casa Viter ist',
		'forYou' : 'für Sie da',
		'view' : 'Ansehen',
		'wideVariety' : 'Große Auswahl an',
		'amazingTrips' : 'Erstaunliche Ausflüge',
		'explore' : 'Erkunden',
		'beautifulPlacesNearby' : 'Schöne Orte in der Nähe',
		'viewAllAps' : 'Alle Wohnungen anzeigen',
		'sunrise1' : 'Der einzige Ort auf der Erde',
		'sunrise2' : 'wo die sonne 2 mal steigt',
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


		'ourApartments' : 'Unsere Wohnungen',
		'persons' : 'Personen',


		/*********** It features/has , taj dio **********************/
		'itFeatures' : 'Sie verfügt über:',
		'kitchen' : 'Küche',
		'bathroom' : 'Badezimmer',
		'garden' : 'Garten',
		'terrasse' : 'Terrasse',
		'wifi' : 'WLAN kostenfrei',
		'ac' : 'Klimaanlage',
		'parkFree' : 'Parkplatz kostenfrei',
		'park' : 'Parkplatz',
		'bbq' : 'Außengrill',
		'beach' : 'Strand',

		
		'shop' : 'Einkaufsmöglichkeiten: 200 m',
		'vegetable' : 'Gemüsemarkt/Obstmarkt: 50 m',
		'bakery' : 'Bäcker: 200 m',
		'restaurant' : 'Restaurants: 250 m',
		'post' : 'Post: 200m',
		'doctor' : 'Arzt/Notarzt: 2 km',
		'hospital' : 'Krankenhaus: 32 km',
		'motorway' : 'Autobahn A1 - Ausfahrt = ZAGVOZD (Entfernung ca. 40 km)',
		'airportSplit' : 'Flughafen Split: 115 km',
		'airportDubrovnik' : 'Flughafen Dubrovnik: 130 km',


		

		'galleryText' : 'GENIESSEN SIE DIE SCHÖNHEIT VON ZAOSTROG',

		//priceList
		'date' : 'Datum',
		'ap1Price' : 'Wohnung 1',
		'ap2Price' : 'Wohnung 2 (2 Schlafzimmer)',
		'2bedPrice' : 'Apartment mit 2 schlafzimmer',
		'view' : 'ansehen',

		//testimonials
		'guest1' :'Katharina G.',
		'guest2' :'Andreas K.',
		'guest3' :'Dana L.',
		'stayed1' : 'Aufenthalt im Sep. 2014',
		'stayed2' : 'Aufenthalt im Juni 2013',
		'stayed3' : 'Aufenthalt im Juli 2018',
		'testimonialTitle1' : 'Traumlage!',
		'testimonialTitle2' : 'Traumhafte Unterkunft',
		'testimonialTitle3' : 'Ein wunderschönes Fleckchen Erde',
		'testimonial1' : 'Die Appartements sind sehr gepflegt und liegen traumhaft, mit fantastischem Blick auf das Meer. Wir wurden erwartet und herzlich begrüßt. Da es insgesamt nur 4 Wohneinheiten in der Anlage gibt, hatten wir wirklich Ruhe und Erholung pur. Wir fanden es auch sehr bequem, dass man sich für Frühstück und/oder Abendessen in den Restaurants tageweise anmelden konnte und das Essen war jedes Mal exzellent. Wir sind natürlich auch einige Male in die Orte der Umgebung gefahren um Restaurants auszuprobieren. Wir würden die Anlage jedem empfehlen, eventuell mit der Einschränkung, dass man in dem Ort keine Discos vorfindet und keine Ruhe (auch am Abend) haben will. Wer Discos und lauter Musik mag, ist es nicht ganz ideal in dem ruhigen Ort. Außerdem ist ein Mietwagen wirklich unerlässlich. Die Umgebung bietet ausreichend Ziele um 2 Wochen lang jeden Tag einen anderen Strand zu sehen, aber eben nur mit einem Auto.',
		'testimonial2' : 'Wir haben einen traumhaften Urlaub erlebt. Die Wohnung im Hause Villa Jela hat unsere Erwartungen übertroffen. Sehr sauber, alles neu, gepflegt und geschmackvoll. Die Aussicht aufs Meer und auf die vorgelagerten Inseln ist toll. Küche ist gut ausgestattet und die Vermieter sind total lieb, haben uns sehr nett empfangen. Für die Kinder gibt es sogar Kika (viele deutschsprachige Programme). Auch die Tipps der Vermieter in punkto Essen und Ausflüge waren spitze. Alles in allem können wir die Wohnung zu 100% weiterempfehlen. Gerne kommen wir wieder, da es noch viel zu sehen gibt',
		'testimonial3' : 'Es war ein wundervoller Urlaub. Das Appartement liegt direkt am Meer und man hat einen traumhaften Ausblick. Restaurants wie auch Einkaufsmöglichkeiten sind fußläufig zu erreichen. Gleich 50 Meter weiter ist ein tolles Fischrestaurant. Das Appartement ist mit allem was man braucht ausgestattet, in dem Ort ruhig gelegen und wir haben uns sehr wohl gefüllt. Jela, die Vermieterin, ist sehr angenehm und hilfsbereit. Wir bedanken uns für die schöne Zeit und würden uns freuen dort nochmal Urlaub machen zu können.',
		}

var hrLang = {
		//index.html

		'about' : 'O nama',
		'home'	: 'Početna', 
		'excursions' : 'Izleti',
		'priceList' : 'Cijenik',
		'gallery' : 'Galerija',
		'contact' : 'Kontakt',

		'ap1' : 'Apartman 1 s pogledom na more',
		'ap2' : 'Apartman 2 s pogledom na more',
		'ap3' : 'Apartman 3',

		'2bed' : 'Apartman s 2 spavaće sobe i pogledom na more',
		'l3' : 'L3 apartman',
		'd3' : 'D3 apartman',
		'studio' : 'Studio apartman',

		
		'aboutCaps' : 'O NAMA',
		'homeCaps'	: 'POČETNA', 
		'excursionsCaps' : 'IZLETI',
		'priceListCaps' : 'CIJENIK',
		'galleryCaps' : 'GALERIJA',
		'contactCaps' : 'KONTAKT',

		'ap1Caps' : 'APARTMAN 1 S POGLEDOM NA MORE',
		'ap2Caps' : 'APARTMAN 2 S POGLEDOM NA MORE',
		'ap3Caps' : 'APARTMAN 3',

		'2bedCaps' : 'APARTMAN S 2 SPAVAĆE SOBE I POGLEDOM NA MORE',
		'l3Caps' : 'L3 APARTMAN',
		'd3Caps' : 'D3 APARTMAN',
		'studioCaps' : 'STUDIO APARTMAN',

		/********kraj nevbara*******/
		/**********Footer *****************/

		'footer1' : 'Dragi gosti,',
		'footer2' : 'Naša obitelj želi Vam toplu dobrodošlicu i ugodan boravak u našim apartmanima! Dođite u Zaostrog, malo mjesto na jadranskoj obali gdje je sve blizu, uživajte u znamenitostima, kao i u zvukovima Jadranskog mora, prirodi koja ga okružuje i ukusima koje nude. Moći ćete otkriti pravu ljepotu i bogatstvo Dalmacije. Sigurni smo da ćete uživati u udobnosti naših modernih apartmana.',
		'allRights' : 'Sva prava pridržana.',
		/*************************************/
		'slide11' : 'Dobrodošli u',
		'slide13' : 'O NAMA',

		'slide21' : 'Uživajte u',
		'slide22' : 'Odmoru iz Snova',
		'slide23' : 'SAZNAJTE VIŠE',

		'slide31' : 'Širok Izbor',
		'slide32' : 'Izvanrednih Izleta',
		'slide33' : 'Istražite',

		'airport' : 'SPLIT ZRAČNA LUKA',
		'airport2' : 'Vizija splitske zračne luke je postati najuspješnija zračna luka u ovom dijelu Europe i postići najvišu razinu i kvalitetu usluga.',

		'jadrolinija' : 'Jadrolinija je najveća hrvatska linijska brodarska tvrtka za pomorski prijevoz putnika i vozila, sa stogodišnjom tradicijom.',

		'weather' : 'VRIJEME',
		'weather2' : 'Ovdje možete vidjeti kakvo vrijeme možete očekivati kada odlučite doći u Zaostrog.',

		'ourHouses' : 'Naše Kuće',
		'ivaOpis' : 'Tri apartmana smještena uz plažu i more ...',
		'jelaOpis' : 'Četri apartmana smještena uz plažu i more ...',
		'dadoOpis' : 'Kuća s 2 apartmana',
		'priceRange' : 'Raspon cijena',
		'aboutUs' : 'O nama',
		'bestExcursions' : 'Naši Najbolji Izleti',
		'bestExcursions2' : 'Otkrijte prekrasna mjesta u blizini',
		'viewAll' : 'PRIKAŽI SVE',

		'croatia' : 'Hrvatska',
		'croatia2' : 'Puna života',
		'croatia3' : 'Odvojite trenutak i izgubite se u raznolikoj ljepoti hrvatske prirodne i bogate baštine. Kada osjetite da bi život trebao biti pun, Hrvatska je destinacija prepuna doživljaja i uzbudljivih trenutaka.',
		'croatia4' : 'Gledaj video',
		'testimonials' :'Recenzije gostiju',
		'contactUs' : 'Kontaktiraj nas',
		'firstName' : 'Ime',
		'lastName'	: 'Prezime',
		'yourMessage' : 'Vaša Poruka',
		'phone'	: 'Telefon',
		'subject' : 'Predmet',
		'orUse' : 'ili',
		'sendMessage' : 'Pošalji Poruku', 

		//about
		'dearGuests' : 'Dragi gosti,',
		'welcome0' : 'Naša obitelj želi Vam toplu dobrodošlicu i ugodan boravak u našim apartmanima!', 
		'welcome1' : 'Dođite u Zaostrog, malo mjesto na jadranskoj obali gdje je sve blizu, uživajte u znamenitostima, kao i u zvukovima Jadranskog mora, prirodi koja ga okružuje i ukusima koje nude. Moći ćete otkriti pravu ljepotu i bogatstvo Dalmacije. Sigurni smo da ćete uživati u udobnosti naših modernih apartmana.',
		'welcome2' : 'Naša obitelj posjeduje dvije kuće: Strandhaus JELA i Strandhaus IVA, koje se nalaze uz samu plažu i more. Kuća na Strandhaus JELA ima četiri apartmana, a Starndhaus IVA ima tri apartmana, svi s pogledom na more, otok Hvar i poluotok Pelješac.', 	
		'welcome3' : 'Wi-Fi internet je neograničen i osigurano je parkiralište. Vaš boravak bit će ugodniji znajući da su svi naši apartmani klimatizirani. Naši apartmani pružaju predivnu opuštajuću atmosferu i ljubazni domaćini vas očekuju.', 	
		'welcome4' : 'Restorani i pizzerije nalaze se uz kuće, ali oko 500 metara nalaze se i nekoliko trgovina s prehrambenim proizvodima, pošta, bankomat i mjenjačnica. Duž obale se nalazi 5 km duga šetnica za one koji uživaju u dugim šetnjama, trčanju ili biciklizmu. Zaostrog je idealno mjesto za jednodnevne izlete u obližnje gradove, Dubrovnik (100 km), Mostar (85 km), Makarska (30 km), Split (90 km), Međugorje (60 km), kao i otoci Korčula i Hvar.', 	
		'welcome5' : 'Radujemo se Vašem dolasku!', 	
		'welcome6' : 'Obitelj Matutinović',
		'sunnyPiece' :	'SUNČANI KOMAD RAJA',
		'zaostrog0' : 'Zaostrog se nalazi u južnoj Dalmaciji, nadaleko poznat, ne samo u Hrvatskoj, zbog svojih bijelih finih šljunčanih plaža i kristalno čistog Jadranskog mora. Plaže se protežu cijelom dužinom sela; možete uživati na plaži opremljenoj ležaljkama, tuševima i mjestima za presvlačenje, ili u romantičnim, skrivenim uvalama do kojih možete doći šetnjom kroz borovu šumu.',  	
		'zaostrog1' : 'Vaš odmor i boravak u Strandhaus Iva i Strandhaus Jela mogu biti obogaćeni drugim aktivnostima uz uživanje u suncu i Jadranskom moru. Na obroncima Vitere, Biokova iznad Zaostroga, postoje mogućnosti za razne sportske i avanturističke aktivnosti (planinarenje, šetnje i biciklizam). Ljubitelji kulture uživat će u posjetu poznatog franjevačkog samostana sv. Marije i starih crkava u obližnjem starom selu. Zaostrog nudi i niz zabavnih i izvrsnih restorana. Za one koji žele miran odmor preporučujemo šetnju uz more, nevjerojatne zalaske sunca i uživanje u romantičnoj večeri pod zvjezdanim nebom.',  	
		'zaostrog2' : 'Selo se nalazi u prirodnom bazenu, oko 35 km od grada Makarske, i ima oko 300 stanovnika. Uz dugačke šljunčane plaže i borovu šumu dominiraju planine Viter i brdo Plana. Zbog svoje blage klime i širokog spektra aktivnosti u regiji Zaostrog, ovaj dio Makarske rivijere savršeno je mjesto za ljetni odmor, ali i za odmor tijekom proljeća i jeseni kada možete uživati u mirnom i opuštajućem boravku. Geografski položaj sela čini ga idealnim središtem za izlete u brojne prirodne i kulturne znamenitosti u Dalmaciji.',  	
		'nearbyPlaces' : 'MJESTA U BLIZINI',
		'aboutZaostrog' : 'O ZAOSTROGU',
		//contact
		//nema nista sve iz indexa
		//stranhaus iva i jela
		'apartments' : 'Apartmani',
		'apartment1' : 'Apartman 1',
		'apartment2' : 'Apartman 2',
		'seePriceTable' : 'Pogledajte cjenik',
		'ap1Text' : 'Novouređeni apartman s balkonom i prekrasnim pogledom na more nalazi se na prvom katu kuće. To je lijep namješten stan veličine oko 40 četvornih metara za do 2+2 osobe. Stan je potpuno namješten i zadovoljava današnje suvremene zahtjeve.',
		'ap2Text' : 'Ovaj prostrani i novouređeni apartman s pogledom na more nalazi se na prvom katu kuće. To je lijep namješten stan veličine oko 80 četvornih metara za do 5 osoba. Stan je potpuno namješten i zadovoljava današnje suvremene zahtjeve.',
		'ap3Text' : 'Ovaj novouređeni apartman nalazi se na prvom katu kuće na plaži. Nema vlastiti balkon, ali ima prekrasan pogled na planine. Na ulazu u kuću nalazi se velika terasa sa stolovima i stolicama koje gosti mogu koristiti u bilo koje vrijeme. . . . ',
		'2bedapartment' : 'Apartman s 2 spavaće sobe',
		'2bedText' : 'Apartman s pogledom na more nalazi se na prvom katu kuće. To je lijep namješten stan veličine oko 65 četvornih metara za do 4 osobe, s odvojenim ulazom. Stan je potpuno namješten i zadovoljava današnje suvremene zahtjeve.',
		'l3Text' : 'Apartman s pogledom na more nalazi se u prizemlju kuće na plaži. To je lijep namješten stan veličine oko 45 četvornih metara za do 3 osobe, s odvojenim ulazom. Stan je potpuno namješten i zadovoljava današnje suvremene zahtjeve.',
		'd3Text' : 'Apartman s pogledom na more nalazi se u prizemlju kuće na plaži. To je lijep namješten stan veličine oko 45 četvornih metara za do 3 osobe, s odvojenim ulazom. Stan je potpuno namješten i zadovoljava današnje suvremene zahtjeve.',
		'studioText' : 'Apartman s pogledom na more nalazi se u prizemlju kuće na plaži. To je lijep namješten stan veličine oko 45 četvornih metara za do 3 osobe, s odvojenim ulazom. Stan je potpuno namješten i zadovoljava današnje suvremene zahtjeve.',
		//iva

		'ap1Opis' : 'Novouređeni apartman s terasom i prekrasnim pogledom na more nalazi se na prvom katu kuće. To je lijepo uređen apartman veličine oko 40 četvornih metara za 2 + 2 osobe. Apartman je potpuno namješten i zadovoljava današnje moderne zahtjeve.',
		'ap2Opis' : 'Ovaj prostrani i novouređeni apartman s pogledom na more nalazi se na prvom katu kuće. To je lijep namješten stan veličine oko 80 četvornih metara za do 5 osoba. Apartman je potpuno namješten i zadovoljava današnje moderne zahtjeve.',
		'ap3Opis' : 'Ovaj apartman nalazi se na prvom katu kuće na plaži. Nema vlastitu terasu, ali ima prekrasan pogled s pogledom na planine. Na ulazu u kuću nalazi se velika terasa sa stolovima i stolicama koje gosti mogu koristiti u bilo koje vrijeme. To je lijepo uređen apartman veličine oko 30 četvornih metara i pogodan je za 2 osobe. Apartman je potpuno namješten i zadovoljava današnje moderne zahtjeve.',

		//jela
		'2bedOpis':'Apartman s pogledom na more nalazi se na prvom katu kuće. To je lijep namješten stan veličine oko 65 četvornih metara za do 4 osobe, s odvojenim ulazom. Apartman je potpuno namješten i zadovoljava današnje moderne zahtjeve. Na plaži koja se nalazi samo 5 metara od kuće na raspolaganju su dvije ležaljke za plažu.',
		'l3Opis':'Apartman s pogledom na more nalazi se u prizemlju kuće na plaži. To je lijep namješten stan veličine oko 45 četvornih metara za do 3 osobe, s odvojenim ulazom. Apartman je potpuno namješten i zadovoljava današnje moderne zahtjeve. Na plaži koja se nalazi samo 5 metara od kuće na raspolaganju su dvije ležaljke za plažu.',
		'd3Opis':'Apartman s pogledom na more nalazi se u prizemlju kuće na plaži. To je lijep namješten stan veličine oko 45 četvornih metara za do 3 osobe, s odvojenim ulazom. Apartman je potpuno namješten i zadovoljava današnje moderne zahtjeve. Na plaži koja se nalazi samo 5 metara od kuće na raspolaganju su dvije ležaljke za plažu.',
		'studioOpis':'Apartman s pogledom na more nalazi se u prizemlju kuće na plaži. To je lijep namješten stan veličine oko 45 četvornih metara za do 3 osobe, s odvojenim ulazom. Apartman je potpuno namješten i zadovoljava današnje moderne zahtjeve. Na plaži koja se nalazi samo 5 metara od kuće na raspolaganju su dvije ležaljke za plažu.',
		
		'jela2BedBath' : '1 Bad mit Badewanne/Dusche, Waschmaschine und WC',

		//l3
		'awning' : 'Eine Terrasse mit Tisch und Stühlen, Markise',

		/*********** It features/has , taj dio **********************/
		'itFeatures' : 'Sadrži:',
		'wifi' : 'besplatni Wi-Fi',
		'acFree' : 'klima (uključena u cijenu)',
		'ac' : 'klima',
		'parkFree' : 'besplatan parking',
		'park' : 'parking',
		'grill' : 'vanjski roštilj s ugljenom',
		'terraceDado' : 'terasa s vrtnom garniturom',
		'balconyDado' : 'balkon s vrtnom garniturom',
		'satTvDado'	: 'SAT-TV s programima na njemačkom jeziku',

		'terraceTCSV': 'Terasa sa stolom, stolicama i pogledom na more',
		'bedLinenBathTowels' : 'plahte i ručnici',
		'balcony' : 'balkon sa stolom, stolicama i pogledom na more',
		'1bathShowerToilet' : '1 kupaonica s kadom / tušem, toaletom, perilicom rublja, WC-om, ručnicima, sušilom za kosu i toaletnim papirom.',
		'livingRoomSofa' : '1 dnevni boravak / blagovaona s kaučem',
		'livingRoomSofaJela' : '1 dnevni boravak / blagovaona s kaučem (kauč se može ukloniti ako je potrebno',
		'ap1Bed' : '1 spavaća soba s bračnim krevetom (160 x 200 cm) i 1 krevetom za 1 osobu (90x200 cm), ormarom i posteljinom',
		'ap2Bed1' : '1 spavaća soba s bračnim krevetom (180 x 200 cm), krevet za jednu osobu (90x200 cm), ormar i posteljina',
		'ap2Bed2' : '1 spavaća soba s dva kreveta za jednu osobu (90 x 190 cm), ormarom i posteljinom',
		'ap3Bed' : '1 spavaća soba s bračnim krevetom (160 x 200 cm), ormarom i posteljinom',
		'2bedBed1' : '1 spavaća soba s bračnim krevetom (160 x 200 cm), ormarom i posteljinom',
		'2bedBed2' : '1 spavaća soba s dva kreveta za jednu osobu (90 x 200 cm), ormarom i posteljinom',
		'l3Bed' : '1 spavaća soba s bračnim krevetom (160 x 200 cm), krevet za jednu osobu (90 x 200 cm), ormar i posteljina',
		'studioBed' : '1 spavaća soba s bračnim krevetom (160 x 200 cm), krevet za jednu osobu (80 x 200 cm), ormar i posteljina. (Spavaća soba je na galeriji)',

		'cotFree' : 'Dječji krevetić i visoka stolica na zahtjev (besplatno)',
		'buoy' : 'Za vaše brodove ispred kuće se nalazi plutača (obavezna rezervacija).',
		'beachChairs' : '2 ležaljke za plažu po apartmanu i suncobran, besplatno',
		'terace' : 'Terasa (izvan apartmana), sa stolom i stolicama',
		'teraceJela' : 'Terasa sa stolom i stolicama, tenda',
		'ap1Kitchen' : '1 kuhinja potpuno opremljena štednjakom, hladnjak s odvojenim zamrzivačem, aparat za kavu, kuhalo za vodu, toster, posuđe, čaše, pribor za jelo, posuđe, kuhinjske krpe itd.',
		'ap2Kitchen' : 'Potpuno opremljena kuhinja s perilicom posuđa, pećnicom, štednjakom, velikim hladnjakom s odvojenim zamrzivačem, aparatom za kavu, kuhalom za vodu, tosterom, posuđem, čašama, priborom za kuhanje, itd.',
		'ap3Kitchen' : 'Küche komplett ausgestattet mit Herd, Kühlschrank mit Gefrierfach, Kaffeemaschine, Wasserkocher, Toaster, Geschirr, Gläser, Besteck, Kochgeschirr usw',
		'2bedKitchen' : '1 kuhinja potpuno opremljena perilicom posuđa, štednjakom, pećnicom, velikim hladnjakom s odvojenim zamrzivačem, aparatom za kavu, kuhalom za vodu, tosterom, posuđem, čašama, priborom za kuhanje, itd.',
		'l3Kitchen' : '1 kuhinja potpuno opremljena pećnicom, štednjakom, velikim hladnjakom s odvojenim zamrzivačem, aparatom za kavu, kuhalom za vodu, tosterom, posuđem, čašama, priborom za jelo, posuđem itd.',
		'd3Kitchen' : '1 kuhinja potpuno opremljena pećnicom, štednjakom, velikim hladnjakom s odvojenim zamrzivačem, aparatom za kavu, kuhalom za vodu, tosterom, posuđem, čašama, priborom za jelo, posuđem itd.',
		'studioKitchen' : 'Kuhinja, opremljena štednjakom, hladnjakom sa zamrzivačem, aparatom za kavu, kuhalom za vodu, tosterom, posuđem, čašama, priborom za jelo, posuđem itd. (U donjem dijelu sobe)',
		/***********************************************************/
		//dado
		'dado1' : 'Nova, samostojeća vikendica s velikom terasom, u blizini plaže!',
		'dado2' : '- Vikendica Dado nalazi se u Zaostrogu, malom mjestu na Makarskoj rivijeri.',
		'dado3' : '- Smještena u lijepom području, kuća svojim gostima nudi miran odmor s mnogo privatnosti. Najbliža plaža udaljena je samo 200 metara. Vaša kuća za odmor nudi prostor za do 8 osoba na dva prostrana kata, a na katu je vanjsko stubište. Ovo idealno je mjesto za 2 obitelji ili grupu.',
		'dado4' : '- Kuća za odmor sastoji se od dva moderna apartmana, od kojih svaki ima dnevni boravak / blagovaonicu, potpuno opremljenu kuhinju, spavaću sobu s bračnim krevetom i krevetom za jednu osobu te kupaonicu. Stambeni prostor u prizemlju ima izravan pristup 40 m² terase s lijepim vrtnim namještajem. Savršeno mjesto za ljetne obroke! Povijesni grad Dubrovnik, biser Jadrana, udaljen je samo 100 km. Blizina parka prirode "Biokovo" sa svojim parkovima, špiljama, rijetkim biljkama, pješačkim stazama i biciklističkim stazama čine ovo područje atraktivnim za one koji žele aktivan odmor. Izleti brodom do Hvara, Brača i Pelješca organiziraju se svakodnevno tijekom ljetnih mjeseci.',
		'dado5' : 'Oprema (prizemlje)',
		'dado6' : '- Potpuno opremljena kuhinja (otvoreni dnevni boravak s kuhinjom), posuđe za kuhanje, čaše, pribor za jelo, kuhinjske krpe, štednjak s pećnicom, hladnjak s odvojenim zamrzivačem, perilica posuđa (priložene tabletice), kuhalo za vodu, aparat za kavu.',
		'dado7' : '- Kupaonica s tušem bez praga, toaletom, WC-om, perilicom rublja, ručnicima, sušilom za kosu, toaletnim papirom.',
		'dado8' : '- Spavaća soba s bračnim krevetom (180x200cm) i krevetom za jednu osobu (80 x 200 cm), ormarom i dvije noćne stolice s svjetlima za čitanje.',
		'dado9' : '- Dnevni boravak/blagovaonica sa stolom i kuhinjskim stolicama, kauč (može se izvaditi po potrebi), komoda s TV-om.',
		'dado10' : '- Terasa s vrtnom garniturom.',

		'dado11' : '- OPREMA(1. kat)',
		'dado12' : '- Oprema na 1. katu potpuno je identična opremi u prizemlju. Osim toga, na raspolaganju je i veliki balkon.',
	
		'beach' : 'Plaža: 200 m',
		'shop' : 'Dućan: 200 m',
		'vegetable' : 'Trgovnia s voćem/povrćem: 50 m',
		'bakery' : 'Pekara: 200 m',
		'restaurant' : 'Restorani: 250 m',
		'post' : 'Pošta: 200m',
		'doctor' : 'Liječnik/hitna pomoć:: 2 km',
		'hospital' : 'Bolnica: 32 km',
		'motorway' : 'Autoput A1 - izlaz = ZAGVOZD (udaljenost oko 40 km)',
		'airportSplit' : 'Zračna luka Split: 115 km',
		'airportDubrovnik' : 'Zračna luka Dubrovnik: 130 km',

	
		'dubrovnikThumbnail' : 'Preko tisućljetna povijest Dubrovnika vidljiva je u svakom dijelu ovog grada. Grad je živi muzej i živa pozornica, te ima idealnu vezu između povijesne prošlosti i modernog doba. Od 1979. godine grad je pod zaštitom UNESCO-a.',
		'hvarThumbnail' : 'Središte najsunčanijeg hrvatskog istoimenog otoka - Hvara jedinstveni je spoj raskošnog mediteranskog prirodnog okruženja, sloja bogate kulturno-povijesne baštine i sofisticiranog turizma.',
		'mostarThumbnail' : 'Možete doživjeti i vidjeti u gradu Mostaru. Mostar je administrativno središte Hercegovine i njen najveći grad.',
		'korculaThumbnail' : 'Rodno mjesto Marka Pola izgrađeno je na temeljima grčke kolonije i povijesno je i turističko središte najvećeg otoka dubrovačkog kraja.',
		'makarskaThumbnail' : 'Makarska je slikoviti grad impresivne ljepote koji živi od turizma; grad mladih, kulture, sporta i zabave.',
		'splitThumbnail' : 'Ovaj vječno mlad grad sa oko 200 tisuća stanovnika živi svoj urbani ritam već 1700 godina s Dioklecijanovom palačom u srcu, koja je ujedno i povijesno središte grada i UNESCO-v popis svjetske baštine.',


		'type' : 'Vrsta',
		'historic' : 'povijest',
		'seaside' : 'primorje',
		'sightseeing' : 'razgledavanje',

		'destination' : 'Odredište',
		'briefDescription' : 'Kratki Opis',
		'distance' : 'Udaljenost',
		'hour' : 'sat/a',
		'aboutDestination': 'O ovom odredištu',
		'readMore' : 'Saznajte više',
		'minutes' : 'minute',


		
		'dubrovnik1' : 'Jedna je od najistaknutijih turističkih destinacija u Hrvatskoj i Sredozemnom moru. Godine 1979. grad Dubrovnik je uvršten na UNESCO-ov popis svjetske baštine.',
		'dubrovnik2' : 'Preko tisućljetna povijest Dubrovnika vidljiva je u svakom dijelu ovog grada. Grad je živi muzej i živa pozornica, te ima idealnu vezu između povijesne prošlosti i modernog doba. Okružena je srednjovjekovnim zidinama dugim 1940 metara i sačuvane u izvornom obliku. Otvorene su za posjetitelje i najveća su atrakcija grada. Od 1979. godine grad je pod zaštitom UNESCO-a. Dubrovnik je uglavnom kulturna destinacija, koja osim spomenika od interesa, nudi i niz kulturnih događanja i festivala. Dubrovnik je destinacija u kojoj možete uživati u odmoru i ima izuzetno dobre zračne veze sa svim većim europskim središtima. Dubrovnik je grad koji oduševljava, grad u koji se zaljubljujete i uvijek se vraćate kao novi, otkrivajući jedinstvena iskustva.',
		'hvar1' :	'Hvar je najduži i najsunčaniji hrvatski otok - jedan od najljepših otoka na svijetu.',
		'hvar2' : 'Središte najsunčanijeg hrvatskog istoimenog otoka - Hvara, jedinstveni je spoj raskošnog mediteranskog prirodnog okruženja, slojevitog sloja bogate kulturno-povijesne baštine i sofisticiranog turizma. Smješten u slikovitom prirodnom okruženju na južnoj strani otoka, okružen moćnim srednjovjekovnim zidinama, čarobnim poljima i mirisom lavande, Hvar je beskrajno blago monumentalne baštine, kultura i atmosfera. Ime mu potječe od riječi PHAROS - grčkog naziva za otok Hvar i grad koji je nekada bio na mjestu sadašnjeg Starog Grada (Stari grad) iz kojeg je preuzeo titulu otočnog središta u 13. stoljeću. Iz dvorca Španjol, visoko iznad grada, pruža se veličanstven pogled na zelene Paklene otoke (ACI Marina Palmižana) i otvoreno more. Glavni gradski trg ispred katedrale uz Arsenal i najstarije europsko kazalište iz 17. stoljeća omiljeno je okupljalište turista. Mnogi muzeji skrivaju vrijedna umjetnička djela (Posljednja večera iz 15. stoljeća u blagovaonici franjevačkog samostana), a često se posjećuje i benediktinski samostan, poznat po izradi čipke od vlakana agave.',
		'korcula1' : 'Grad Korčula jedan je od najbolje očuvanih srednjovjekovnih gradova na Mediteranu, a njegova je povijest vrlo duga i zanimljiva.',
		'korcula2' : 'Rodno mjesto Marka Pola izgrađeno je na temeljima grčke kolonije i povijesno je i turističko središte najvećeg otoka dubrovačkog kraja. Poznat je po ulicama koje su oblikovane u obliku riblje kosti i dobro očuvanih gotičkih i renesansnih građevina. Među njima se ističe katedrala sv. Marko [sv. Marku, čija bogata unutrašnjost čuva djela velikih talijanskih slikara. Korčulani su sačuvali svoje običaje i srednjovjekovnu vitešku igru "Moreška" koja se odvija na gradskim ulicama. Blaga mediteranska kuhinja izazov će nepce čak i najizbirljivijih gurmana.',
		'makarska1' : 'Makarska je glavno ljetovalište na Makarskoj rivijeri u Hrvatskoj, južno od Splita. Iza grada impozantni planinski masiv Biokovo diže se na 1.700 m samo nekoliko kilometara od mora.',
		'makarska2'	: 'Makarska je slikoviti grad impresivne ljepote koji živi od turizma; grad mladih, kulture, sporta i zabave. Građena je oko prirodne luke zaštićene šarmantnim poluotokom sv. Petra i rta Osejava, te je najveća i jedina luka između ušća Cetine i Neretve. Povijest grada najbolje je otkrivena u franjevačkom samostanu, ali i kroz umjetnička djela sakralnih građevina Makarskog primorja, a čiji su autori poznati hrvatski slikari podrijetlom iz ovog kraja. Iz bisernog mora izlazi planina Biokovo, veličanstveni dar prirode. Ako ste željni avanture i atraktivnih sportskih izazova, Makarska nudi obilje sportskih sadržaja (paragliding, brdski biciklizam, spuštanje u špilje i sportove na vodi). Prekrasna šljunčana plaža proteže se 2 km duž cijelog grada. Brojni smještajni kapaciteti s unutarnjim i vanjskim bazenima, uključujući medicinski rehabilitacijski centar „Biokovka“ s najmodernijim fitness centrom i kompletnom fizikalnom terapijom, čine Makarsku omiljenom turističkom destinacijom.',
		'mostar1' : 'Mostar je grad u Bosni i Hercegovini. Naseljeno sa 105.797 ljudi, najvažniji je grad u hercegovačkoj regiji, koji služi kao njegov kulturni i ekonomski kapital.',
		'mostar2' : 'Možete doživjeti i vidjeti u gradu Mostaru. Mostar je administrativno središte Hercegovine i njen najveći grad. Oduvijek su ga nazivali lijepim mjestom za život, zbog svojih blagih i povoljnih klimatskih uvjeta, s preko 230 sunčanih dana u godini i vjetrovima koji čine zrak u gradu tako moćnim i ljubaznim. Zbog svoje povijesti Mostar, kao što ga danas poznajemo, ima dva različita dijela: drevni Stari grad, koji datira iz ranog 16. stoljeća, i moderni iz 1950-ih. Bez obzira na ulaz u grad, susreću vas tragovi miješanja kultura i civilizacija, pa u radijusu od sto metara možete vidjeti džamiju, rimokatoličku crkvu i mjesto nove mostarske sinagoge; od asfalta ćete neočekivano prošetati kamenom cestom i zaroniti u ljepotu Mostara.',
		'split1' : 'Split je drugi po veličini grad u Hrvatskoj i najveći grad regije Dalmacije, u kojemu živi oko 200.000 stanovnika.',
		'split2' : 'Ovaj vječno mlad grad sa oko 200 tisuća stanovnika živi svoj urbani ritam već 1700 godina sa Dioklecijanovom palačom u srcu, koja je ujedno i povijesno središte grada i UNESCO-v popis svjetske baštine. Katedrala sv. Duje  [Sv. Domnios], zaštitnik Splita, nalazi se u mauzoleju cara Dioklecijana, a raskošna unutrašnjost je okupljalište mnogih vjernika i turista. Mnogi vrijedni spomenici kulture nalaze se izvan zidina Dioklecijanove palače (Trg renesansnog Prokurativa, palače, crkve, muzeji…). Smještena u najtoplijem dijelu sjeverne obale Sredozemlja, u samom središtu jadranske obale, ova turistička, gospodarska i sportska regija (Goran Ivanišević, Branka Vlašić, Toni Kukoč) čuva svoju zelenu dušu na brdu Marjan, gdje park-šuma u blizini grad nudi udobnu i mirnu atmosferu i šetnju daleko od gradske buke. Bogata ponuda za turiste, kao i jedinstvena kulturna baština i brojna kulturna i turistička događanja daju Splitu posebnu draž i čine ga idealnim turističkim odredištem tijekom cijele godine.',
		//galerija

		'galleryText' : 'UŽIVAJTE U LJEPOTI ZAOSTROGA',

		//priceList
		'date' : 'Datum',
		'ap1Price' : 'Apartman 1',
		'ap2Price' : 'Apartman 2 (2 spavaće sobe)',
		'2bedPrice' : 'Apartment sa 2 spavaće sobe',
		'view' : 'pogledajte',
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
  var subject = x[2].value;
  var emailBody = "Ime: " + x[0].value + "\nPrezime: " + x[1].value + "\nE-mail: " + x[2].value + "\nPredmet: " + x[3].value + "\n\n" + x[4].value;
$.ajax({
    type: "POST",
    url: "https://med-irishcentre.com/webservice/datasource.asmx/spiStrandhausDalmatienEmailSend",
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


