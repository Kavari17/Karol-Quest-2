var story = {
    currentScene: "start",
    name: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "...",
        choices: [
            {
                choice: "...",
                destination: 'gdzie'
            },
            {
                choice: "...",
                destination: 'gdzie'
            }
        ]
    },
    start: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Wychodzisz przed chatkę, patrzysz na pozłacające pola słońce i postanawiasz...",
        image: "start.jpg",
        choices: [
            {
                choice: "...udać się do wioski by sprzedać wieśniakom nagromadzone przez ostatnie dni skóry i poroża zwierzęce.",
                destination: 'wioska'
            },
            {
                choice: "...przed wizytą w wiosce wyskoczyć jeszcze na szybkie poranne polowanie by sprzedać rzeźnikowi świeżą dziczyznę",
                destination: 'las'
            }
        ]
    },
    las: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Postanawiasz wybrać się na szybkie polowanie. Wkraczasz pewnie do doskonale sobie znanego lasu, stąpasz zręcznie pomiędzy gęstymi korzeniami, skryty w cieniu ogromnych, mistycznych drzew. Jesteś pewien, że szybko natkniesz się na dorodnego jelenia lub dzika. Mija jednak sporo czasu i las wydaje się być tajemniczo cichy i wyludniony. Niepokoi Cię to.",
        image: "las.jpg",
        choices: [
            {
                choice: "Mówi się trudno, pora wracać i odwiedzić wioskę. Pechowy dzień, jutro na pewno zwierzyna się pojawi.",
                destination: 'wioska'
            },
            {
                choice: "Nie odpuścisz, gdzieś tu musi być jakaś zagubiona sarenka, nie opuścisz lasu bez worka świeżutkiej dziczyzny.",
                destination: 'polowanie'
            }
        ]
    },
    polowanie: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Spędzasz kolejne godziny w głębi lasu, sprawdzając miejsca w których zawsze pewnikiem było znalezienie zwierzyny. Las jest tajemniczo cichy, w powietrzu wisi nienazwane i nieopisane niepokojące wrażenie. Wreszcie po kilku godzinach znajdujesz swój cel, niespokojny młody dziczek przebiega ci drogę.",
        image: "polowanie.jpg",
        choices: [
            {
                choice: "Ustrzel zwierzę z łuku!",
                destination: 'rzeznik'
            }
        ]
    },
    rzeznik: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Trafiasz dzika prosto w gardło, bestia pada, toczy się po ziemi i głucho uderza w gruby pień drzewa. Po chwili przestaje się ruszać. Spędzasz kwadrans na szybkim oprawieniu zdobyczy, choć kły i skóra młodego dziczka na niewiele się zdadzą, jego świeże mięso z pewnością zadowoli rzeźnika. <br/>Docierasz do wioski Grubb po kilku godzinach, kiedy słońce jest już wysoko na nieboskłonie. Kierujesz się w strone zakładu rzeźnika, który z radością wypłaca ci sowitą zapłatę za świeżą dziczyznę. Rozglądasz się po wiosce i decydujesz, że...",
        image: "wioska.jpg",
        choices: [
            {
                choice: "...trzeba odwiedzić kupców i sprzedać pozostałe trofea - skóry, kły, poroża. Poza tym uzupełni się zapasy.",
                destination: 'kupiec_jeden'
            },
            {
                choice: "...pora na zasłużony odpoczynek w gospodzie, mają tam najlepsze mięsiwo i wino w okolicy. Poza tym można tam usłuszeć najnowsze plotki.",
                destination: 'gospoda_jeden'
            }
        ]
    },
    wioska: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Po krótkim spacerze docierasz do wioski Grubb. Jak zwykle tętni życiem, dookoła krzątają się wieśniacy, biegają dzieci, kupcy rozkładają swoje stragany. Rozglądasz się i decydujesz, że...",
        image: "wioska.jpg",
        choices: [
            {
                choice: "...trzeba odwiedzić kupców i sprzedać trofea - skóry, kły, poroża. Poza tym uzupełni się zapasy.",
                destination: 'kupiec_jeden'
            },
            {
                choice: "...pora na zasłużony odpoczynek w gospodzie, mają tam najlepsze mięsiwo i wino w okolicy. Poza tym można tam usłuszeć najnowsze plotki.",
                destination: 'gospoda_jeden'
            }
        ]
    },
    kupiec_jeden: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Znajomi kupcy witają cię szeroko uśmiechnięci. Proponują jak ci się wydaje korzystne ceny na skup twoich zdobyczy. Zachowujesz połowę złotych monet, za drugą połowę uzupełniasz zapasy towarów, których nie możesz samemu wytworzyć - stalowe groty strzał, ser, chleb, mleko, bandaże. Kiedy opuszczasz stragan farmer Stefan zaczepia cię i mówi:<br/>- Joses, chłopcze, jakieś obwoźne wypachnione panisko z miasta przyjechało to rano i cały dzień o ciebie wypytuje. Jego powóz stoi przy rynku. Niestety nie powiedział nikomu czego chce.",
        image: "wioska.jpg",
        choices: [
            {
                choice: "Czym prędzej udajesz się na rynek sprawdzić kto może cokolwiek chcieć od Josesa, prostego łowcy z Grubb.",
                destination: 'poslaniec'
            },
            {
                choice: "Skoro pytał cały dzień to nie ucieknie do zmierzchu, a może nawet zostanie do jutra, najpierw trza się napić w gospodzie.",
                destination: 'gospoda_dwa'
            }
        ]
    },
    gospoda_jeden: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Znajomy karczmarz wita cię szeroko uśmiechnięty. Siadasz do stolika i zamawiasz ulubione wino i duszonego dzika w cieście. Pałaszujesz beztrosko zapominając o zmartwieniach kiedy twój spokój zakłóca farmer Zenon, który staje nad tobą i mówi:<br/>- Joses, chłopcze, jakieś obwoźne wypachnione panisko z miasta przyjechało to rano i cały dzień o ciebie wypytuje. Jego powóz stoi przy rynku. Niestety nie powiedział nikomu czego chce.",
        image: "gospoda.jpg",
        choices: [
            {
                choice: "Czym prędzej udajesz się na rynek sprawdzić kto może cokolwiek chcieć od Josesa, prostego łowcy z Grubb.",
                destination: 'poslaniec'
            },
            {
                choice: "Skoro pytał cały dzień to nie ucieknie do zmierzchu, a może nawet zostanie do jutra, najpierw trza sprzedać trofea na targu i uzupełnić zapasy u kupców.",
                destination: 'kupiec_dwa'
            }
        ]
    },
    kupiec_dwa: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Znajomi kupcy witają cię szeroko uśmiechnięci. Proponują jak ci się wydaje korzystne ceny na skup twoich zdobyczy. Zachowujesz połowę złotych monet, za drugą połowę uzupełniasz zapasy towarów, których nie możesz samemu wytworzyć - stalowe groty strzał, ser, chleb, mleko, bandaże.",
        image: "wioska.jpg",
        choices: [
            {
                choice: "Niedługo zmierzcha, pora udać się na rynek sprawdzić kto może cokolwiek chcieć od Josesa, prostego łowcy z Grubb.",
                destination: 'poslaniec'
            }
        ]
    },
    gospoda_dwa: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Znajomy karczmarz wita cię szeroko uśmiechnięty. Siadasz do stolika i zamawiasz ulubione wino i duszonego dzika w cieście. Pałaszujesz beztrosko zapominając o zmartwieniach.",
        image: "gospoda.jpg",
        choices: [
            {
                choice: "Niedługo zmierzcha, pora udać się na rynek sprawdzić kto może cokolwiek chcieć od Josesa, prostego łowcy z Grubb.",
                destination: 'poslaniec'
            }
        ]
    },
    poslaniec: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Przy zdobionym powozie stojącym na rynku Grubb siedzi bogato ubrany, niski, przygrubawy mężczyzna z bujnymi lokami.<br/>- Czy to ty jesteś łowca Joses? - pyta, po czym taksując cię wzrokiem dodaje - Oczywiście, że tak, widać to jak na dłoni. Mam dla ciebie zaproszenie, twój odległy krewny, lord Landtruppet potentat kryształowy przechodzi na emeryturę i wyrusza w daleką podróż, nie wiadomo kiedy wróci. Nim się to jednak stanie, chce poznać swoich zaginionych krewnych i zaprasza wszystkich na wielki bal do swojej posiadłości. Właź na wóz i spadamy, nie mamy wiele czasu.<br/>",
        image: "poslaniec.jpg",
        choices: [
            {
                choice: "- Nigdy nie słyszałem o żadnym krewnym lordzie. To musi być pomyłka.",
                destination: 'namawianie'
            },
            {
                choice: "- Spadek po potentacie kryształowym? Rozpędzaj konie!",
                destination: 'przybycie_do_posiadlosci'
            },
            {
                choice: "- Wybacz, ale mam jeszcze sprawy do załatwienia w wiosce, wrócę do ciebie później posłańcze.",
                destination: 'nie_ma_czasu'
            }
        ]
    },
    nie_ma_czasu: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Posłaniec rzuca ci obojętne spojrzenie i mówi:<br/>- Wybacz panie, ale zmitrężyłem już zbyt wiele czasu szukając tej zapominanej przez Stwórcę dziury. Ruszam w drogę powrotną teraz, z tobą lub bez ciebie.",
        image: "poslaniec.jpg",
        choices: [
            {
                choice: "- Dobra zluzuj pantalony mości panie, jedźmy zatem, nie pozwolę by kryształowa fortuna przeszła mi koło nosa.",
                destination: 'przybycie_do_posiadlosci'
            },
            {
                choice: "- A zatem szerokiej drogi, nie interesuje mnie twoja propozycja. Zostaję w mojej jak to raczyłeś określić zapomnianej przez Stwórcę dziurze.",
                destination: 'odmowa_jeden'
            }
        ]
    },
    namawianie: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "- To żadna pomyłka mój szlachetny przyjacielu - mówi posłaniec - wielmożny lord Landtruppet przygotował mnie na taką ewentualność. Sam był zaskoczony odkryciem licznych nieznanych sobie krewnych rozrzuconych po całym świecie. Zapewniam, że wasze pokrewieństwo jest jak najbardziej prawdziwe, przekona się panicz na miejscu.",
        image: "poslaniec.jpg",
        choices: [
            {
                choice: "- W porządku, przekonajmy się. Ruszajmy.",
                destination: 'przybycie_do_posiadlosci'
            },
            {
                choice: "- Mi to brzmi jak fortel i pułapka. Niechybnie jesteś mość grasantem i zaatakujecie mnie ze swoją bandą w lesie za wioską. Nie ze mną te numery, żegnam.",
                destination: 'odmowa_jeden'
            },
            {
                choice: "- Wybacz, ale mam jeszcze sprawy do załatwienia w wiosce, wrócę do ciebie później posłańcze.",
                destination: 'nie_ma_czasu'
            }
        ]
    },
    odmowa_jeden: {
        title: "Rozdział I - Nieoczekiwane zaproszenie",
        story: "Odwracasz się i odchodzisz zalany potokiem słów posłańca, który jednak namawia cię do podróży. Obiecuje bogactwo i poznanie zaginionych krewnych. Ogarnia cię poczucie, że negujesz zew przygody, nie podążasz drogą przeznaczenia, w końcu od zawsze jesteś samotny w swojej chacie, miło byłoby poznać rodzinę o której nigdy nie słyszałeś...",
        image: "poslaniec.jpg",
        choices: [
            {
                choice: "- Dobra draniu, zaryzykuję - cofasz się, wsiadasz na wóz i ruszasz z nadzieją, że posłaniec nie kłamie.",
                destination: 'przybycie_do_posiadlosci'
            },
            {
                choice: "Przełamujesz w sobie poczucie potrzeby powrotu i dziarsko opuszczasz Grubb i kierujesz się do swojej chatki, nie potrzeba ci wielkiego kryształowego bogactwa, skoro twoja piwniczka wypełniona jest dziczyzną, serem i winem.",
                destination: 'spokojna_starosc'
            }
        ]
    },
    przybycie_do_posiadlosci: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Po kilku dniach spokojnej podróży przez pola i trakty cesarstwa Ore powóz dociera do sporego szlacheckiego dworku. Kilka powozów stoi już na placu przy stajni. Dookoła krząta się liczna służba. Posłaniec opuszcza cię i trafiasz na szczupłego starce przedstawiającego się jako majordomus Moss:<br/>- Witaj szlachetny panie, ty musisz być Joses! Zapraszam do sali balowej, większość gości już tam jest, oczekujemy już tylko przybycia barona Varwolga. Lord Landtruppet wkrótce do państwa dołączy.<br/>- Igrzyska śmierci - mamroczesz pod nosem i wchodzisz do sali balowej. Poza licznymi służącymi donoszącymi jedzenie i napoje na uginające się stoły widzisz mały tłumik ludzi i nieludzi...",
        image: "posiadlosc.jpg",
        choices: [
            {
                choice: "...podchodzisz do wysokiej jaszczurzycy z długim, fantazyjnie zdobionym rapierem, stojącej nieufnie przy oknie.",
                destination: 'kaisa_jeden'
            },
            {
                choice: "...podchodzisz do ciemnoskórego wojownika w ciężkiej zbroi pałaszującego miskę potrawki ryżowej.",
                destination: 'tomasz_jeden'
            },
        ]
    },
    kaisa_jeden: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Jaszczurzyca wita cię nieufnie, acz względnie przyjaźnie:<br/>- Nazywam się Kai'Sa, mistrzyni miecza i trenerka walki. Czy tobie również to co się tu dzieje wydaje się niezwykle podejrzane? Jakim cudem jaszczur może być spokrewniony z człowiekiem? Coś mi tu śmierdzi.<br/>- Mi również - odpowiadasz - być może to podstęp możnych by zorganizować sobie igrzyska śmierci naszym kosztem. Pod posiadłością niechybnie ukryli loch i arenę.<br/>- Oh na Stwórcę obyś się mylił - odpowiada zdziwiona - w razie czego trzymajmy się razem.<br/>Rozglądasz się po sali i...",
        image: "kaisa.jpg",
        choices: [
            {
                choice: "...podchodzisz do ciemnoskórego wojownika w ciężkiej zbroi pałaszującego miskę potrawki ryżowej.",
                destination: 'tomasz_dwa'
            }
        ]
    },
    tomasz_jeden: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Wojownik na twój widok odkłada potrawkę i ściska twoją dłoń:<br/>- Nazywam się Tomasz a ty? Byłem tylko prostym wojownikiem, a teraz okazuje się, że jestem dziedzicem kryształowej fortuny! Czyż to nie wspaniałe?<br/>- Nazywam się Joses - odpowiadasz - I podziwam twój entuzjazm Tomaszu, moim zdaniem coś tu nie gra. Powinniśmy być ostrożni. Uważaj z tą potrawką, może być zatruta.<br/>Tomasz blednie a ty rozglądasz się po sali i...",
        image: "tomasz.jpg",
        choices: [
            {
                choice: "...podchodzisz do wysokiej jaszczurzycy z długim, fantazyjnie zdobionym rapierem, stojącej nieufnie przy oknie.",
                destination: 'kaisa_dwa'
            }
        ]
    },
    kaisa_dwa: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Jaszczurzyca wita cię nieufnie, acz względnie przyjaźnie:<br/>- Nazywam się Kai'Sa, mistrzyni miecza i trenerka walki. Czy tobie również to co się tu dzieje wydaje się niezwykle podejrzane? Jakim cudem jaszczur może być spokrewniony z człowiekiem? Coś mi tu śmierdzi.<br/>- Mi również - odpowiadasz - być może to podstęp możnych by zorganizować sobie igrzyska śmierci naszym kosztem. Pod posiadłością niechybnie ukryli loch i arenę.<br/>- Oh na Stwórcę obyś się mylił - odpowiada zdziwiona - w razie czego trzymajmy się razem.<br/>Rozglądasz się po sali i...",
        image: "kaisa.jpg",
        choices: [
            {
                choice: "...podchodzisz do ubranego w obszerną szatę czarodzieja, grubawego, niskiego, łysego krasnoluda raczącego się winem.",
                destination: 'bolg_jeden'
            },
            {
                choice: "...podchodzisz do wielkiej, umięśnionej, włochatej minotaurzycy, która powarkuje groźnie i pożera trzy miski dziczyzny jednocześnie.",
                destination: 'mazoga_jeden'
            }
        ]
    },
    tomasz_dwa: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Wojownik na twój widok odkłada potrawkę i ściska twoją dłoń:<br/>- Nazywam się Tomasz a ty? Byłem tylko prostym wojownikiem, a teraz okazuje się, że jestem dziedzicem kryształowej fortuny! Czyż to nie wspaniałe?<br/>- Nazywam się Joses - odpowiadasz - I podziwam twój entuzjazm Tomaszu, moim zdaniem coś tu nie gra. Powinniśmy być ostrożni. Uważaj z tą potrawką, może być zatruta.<br/>Tomasz blednie a ty rozglądasz się po sali i...",
        image: "tomasz.jpg",
        choices: [
            {
                choice: "...podchodzisz do ubranego w obszerną szatę czarodzieja, grubawego, niskiego, łysego krasnoluda raczącego się winem.",
                destination: 'bolg_jeden'
            },
            {
                choice: "...podchodzisz do wielkiej, umięśnionej, włochatej minotaurzycy, która powarkuje groźnie i pożera trzy miski dziczyzny jednocześnie.",
                destination: 'mazoga_jeden'
            }
        ]
    },
    bolg_jeden: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Krasnolud wita cię szerokim uśmiechem:<br/>- Witaj mój panie! Jestem Bolg, wędrowny mag. Nie mogę się doczekać aż uścisnę weksle z moimi udziałami w kryształowym imperium.<br/>- Wątpię, żeby to było takie proste - odpowiadasz - wietrzę tu spisek i maskaradę.<br/>Krasnolud milknie a ty...",
        image: "bolg.jpg",
        choices: [
            {
                choice: "...podchodzisz do wielkiej, umięśnionej, włochatej minotaurzycy, która powarkuje groźnie i pożera trzy miski dziczyzny jednocześnie.",
                destination: 'mazoga_dwa'
            }
        ]
    },
    mazoga_jeden: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Potężna minotaurzyca nie przerywa agresywnej konsupcji kiedy podchodzisz i próbujesz zwrócić na siebie jej uwagę. Po dłuższej chwili, nadal nie przerywając konsumpcji rzuca ci groźne spojrzenie, wydmuchuje parę z szerokich nozdrzy i kieruje rogi w twoją stronę. Postanawiasz oddalić się i...",
        image: "mazoga.jpg",
        choices: [
            {
                choice: "...podchodzisz do ubranego w obszerną szatę czarodzieja, grubawego, niskiego, łysego krasnoluda raczącego się winem.",
                destination: 'bolg_dwa'
            }
        ]
    },
    bolg_dwa: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Krasnolud wita cię szerokim uśmiechem:<br/>- Witaj mój panie! Jestem Bolg, wędrowny mag. Nie mogę się doczekać aż uścisnę weksle z moimi udziałami w kryształowym imperium.<br/>- Wątpię, żeby to było takie proste - odpowiadasz - wietrzę tu spisek i maskaradę.<br/>Krasnolud już miał ci odpowiedzieć, kiedy waszą rozmowę przerwał hałas dobiegający z dziedzińca - klekotanie wozu, donośne szczekanie kilku psów i poruszenie wśród sług.<br/>Podchodzisz do wielkiego okna i widzisz wysiadającego ze zdobionego wozu wysokiego mężczyznę w kwiecie wieku i czarnej opasce na oko, ubranego w wielki, drogi płaszcz. Towarzyszą mu trzy ogary, które oddaje służbie i wkracza do sali balowej. Czujesz dziwne, niepokojące mrowienie, zupełnie jakby wilk obserwował cię w czasie polowania.",
        image: "bolg.jpg",
        choices: [
            {
                choice: "Podchodzisz do nowo przybyłego mężczyzny.",
                destination: 'lord_jeden'
            },
            {
                choice: "Postanawiasz nie zbliżać się do mężczyzny i obserwujesz reakcje innych.",
                destination: 'lord_jeden'
            }
        ]
    },
    mazoga_dwa: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Potężna minotaurzyca nie przerywa agresywnej konsupcji kiedy podchodzisz i próbujesz zwrócić na siebie jej uwagę. Po dłuższej chwili, nadal nie przerywając konsumpcji rzuca ci groźne spojrzenie, wydmuchuje parę z szerokich nozdrzy i kieruje rogi w twoją stronę.<br/>Zastanawiasz się czy odejść czy nadal ją zaczepiać kiedy rozprasza cię hałas dobiegający z dziedzińca - klekotanie wozu, donośne szczekanie kilku psów i poruszenie wśród sług.<br/>Podchodzisz do wielkiego okna i widzisz wysiadającego ze zdobionego wozu wysokiego mężczyznę w kwiecie wieku i czarnej opasce na oko, ubranego w wielki, drogi płaszcz. Towarzyszą mu trzy ogary, które oddaje służbie i wkracza do sali balowej. Czujesz dziwne, niepokojące mrowienie, zupełnie jakby wilk obserwował cię w czasie polowania.",
        image: "mazoga.jpg",
        choices: [
            {
                choice: "Podchodzisz do nowo przybyłego mężczyzny.",
                destination: 'lord_jeden'
            },
            {
                choice: "Postanawiasz nie zbliżać się do mężczyzny i obserwujesz reakcje innych.",
                destination: 'lord_jeden'
            }
        ]
    },
    lord_jeden: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Nim ktokolwiek zdążył podejść do mężczyzny w płaszczu, do sali wkracza kolejny mężczyzna - młody i przystojny brunet, ubrany w aksamitny strój. Tuż za nim porusza się ciężko wielki, metalowy golem parowy.<br/>- Witajcie kochani krewniacy! - Przemówił szeroko uśmiechnięty - Nazywam się lord Landtruppet i jestem waszym dalekim kuzynem. Prosze, bawcie się dobrze, wiele wysiłku kosztowało mnie odnalezienie was rozrzuconych po całym Ore. Znużyło mnie już zarządzanie faktorią kryształową, dlatego wyruszam w podróż po świecie aby odnaleźć się na nowo, a moją fortunę pozostawiam wam! Wyruszam już za kilka dni, w tym czasie mam nadzieję, że dobrze się wszyscy poznamy. Wasze pokoje są przygotowane na piętrze a majordomus Moss jest na wszystkie wasze rozkazy. A teraz niespodzianka! Specjalny prezent dla każdego! - lord klaszcze i służba wnosi i podaje każdemu z was paczkę, którą pozostali z mniejszą lub większą ostrożnością zaczynają rozpakowywać.",
        image: "lord.jpg",
        choices: [
            {
                choice: "Rozpakowujesz swój prezent.",
                destination: 'prezent_jeden'
            },
            {
                choice: "Nieufnie trzymasz paczkę i obserwujesz co rozpakowują inni.",
                destination: 'prezent_inni_jeden'
            }
        ]
    },
    prezent_jeden: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "W zdobionym papierze znajdujesz zdobiony, wykwintny kołczan pełen misternie ozdobionych ostrych strzał. Poza tym, w paczce znajduje się też tajemnicza, pokryta runami piramidka.",
        image: "prezent.jpg",
        choices: [
            {
                choice: "Pora podejrzeć co otrzymali inni.",
                destination: 'prezent_inni_dwa'
            },
            {
                choice: "Ogarnia cię zasłużone zmęczenie po podróży i wrażeniach z uczty. Pora udać się na piętro w poszukiwaniu obiecanej sypialni.",
                destination: 'przed_snem'
            }
        ]
    },
    prezent_inni_jeden: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Dyskretnie podglądasz zawartość paczek innych osób. Kai'Sa wypakowuje długi, zdobiony rapier w rękojeścią wyrzeźbioną w fantazyjny kształt muszli. Tomasz z uśmiechem wyjmuje solidną, zdobioną, stalową, okrągłą tarczę. Minotaurzyca wyjmuje grubą, zapieczętowaną flachę wypełnioną drogim, krasnoludzkim alkoholem. Bolg wyjmuje kilka starych, obwiązanych złotymi wstęgami ksiąg. Poza tym, każdy wypakowuje tajemniczą, runiczną piramidkę. Mężczyzna w płaszczu podaje swój pakunek paziowi, ogarnia ramieniem lorda Landtruppeta i opuszcza z nim pomieszczenie.",
        image: "piramida.jpg",
        choices: [
            {
                choice: "Wygląda bezpiecznie, pora rozpakować swój prezent.",
                destination: 'prezent_dwa'
            },
            {
                choice: "Ogarnia cię zasłużone zmęczenie po podróży i wrażeniach z uczty. Odrzucasz paczkę w kąt i udajesz się na piętro w poszukiwaniu obiecanej sypialni.",
                destination: 'przed_snem'
            }
        ]
    },
    prezent_dwa: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "W zdobionym papierze znajdujesz zdobiony, wykwintny kołczan pełen misternie ozdobionych ostrych strzał. Poza tym, w paczce znajduje się też tajemnicza, pokryta runami piramidka, zupełnie taka, jaką otrzymali wszyscy inni.",
        image: "prezent.jpg",
        choices: [
            {
                choice: "Ogarnia cię zasłużone zmęczenie po podróży i wrażeniach z uczty. Pora udać się na piętro w poszukiwaniu obiecanej sypialni.",
                destination: 'przed_snem'
            }
        ]
    },
    prezent_inni_dwa: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Dyskretnie podglądasz zawartość paczek innych osób. Kai'Sa wypakowuje długi, zdobiony rapier w rękojeścią wyrzeźbioną w fantazyjny kształt muszli. Tomasz z uśmiechem wyjmuje solidną, zdobioną, stalową, okrągłą tarczę. Minotaurzyca wyjmuje grubą, zapieczętowaną flachę wypełnioną drogim, krasnoludzkim alkoholem. Bolg wyjmuje kilka starych, obwiązanych złotymi wstęgami ksiąg. Poza tym, każdy wypakowuje tajemniczą, runiczną piramidkę - zupełnie taką jak twoja. Mężczyzna w płaszczu podaje swój pakunek paziowi, ogarnia ramieniem lorda Landtruppeta i opuszcza z nim pomieszczenie.",
        image: "piramida.jpg",
        choices: [
            {
                choice: "Ogarnia cię zasłużone zmęczenie po podróży i wrażeniach z uczty. Pora udać się na piętro w poszukiwaniu obiecanej sypialni.",
                destination: 'przed_snem'
            }
        ]
    },
    przed_snem: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Odnajdujesz swój pokój na piętrze - powoli po schodach wspinają się pozostali goście. Przypominasz sobie o swoich podejrzeniach i poczuciu zagrożenia w tym tajemniczym, obcym miejscu. Kiedy będzie lepszy moment aby porwać gości i uwięzić ich w podziemnym lochu niż kiedy słodko śpią? Dlatego...",
        image: "noc.jpg",
        choices: [
            {
                choice: "...ignorujesz to uczucie i bestrosko zasypiasz w jedwabnym łożu.",
                destination: 'poranek'
            },
            {
                choice: "...dla bezpieczeństwa blokujesz drzwi solidną komodą i zasypiasz w jedwabnym łożu.",
                destination: 'poranek_bezpieczny'
            },
            {
                choice: "...postanawiasz nie spać całą noc i czuwać z łukiem w dłoniach.",
                destination: 'poranek_zmeczony'
            },
            {
                choice: "...próbujesz przekonać Kai'Sę o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'czuwanie_kaisa'
            },
            {
                choice: "...próbujesz przekonać Tomasza o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'poranek_bezpieczny'
            },
            {
                choice: "...próbujesz przekonać Bolga o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'czuwanie_bolg'
            },
            {
                choice: "...próbujesz przekonać minotaurzycę o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'czuwanie_mazoga'
            }
        ]
    },
    czuwanie_mazoga: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Minotaurzyca nie odpowiada na twoje pukanie do drzwi jej pokoju, niezależnie od tego jak długo próbujesz, wygląda na to, że ma cię w dupie. Problem wrażenia niebezpiecznej nocy pozostaje, więc...",
        image: "noc.jpg",
        choices: [
            {
                choice: "...ignorujesz to uczucie i bestrosko zasypiasz w jedwabnym łożu.",
                destination: 'poranek'
            },
            {
                choice: "...dla bezpieczeństwa blokujesz drzwi solidną komodą i zasypiasz w jedwabnym łożu.",
                destination: 'poranek_bezpieczny'
            },
            {
                choice: "...postanawiasz nie spać całą noc i czuwać z łukiem w dłoniach.",
                destination: 'poranek_zmeczony'
            },
            {
                choice: "...próbujesz przekonać Kai'Sę o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'czuwanie_kaisa'
            },
            {
                choice: "...próbujesz przekonać Tomasza o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'poranek_bezpieczny'
            },
            {
                choice: "...próbujesz przekonać Bolga o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'czuwanie_bolg'
            }
        ]
    },
    czuwanie_bolg: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Podchodzisz do drzwi pokoju Bolga i na twoje pukanie odpowiada jedynie potężne chrapańsko. Wygląda na to, że nie będzie z niego pożytku. Problem wrażenia niebezpiecznej nocy pozostaje, więc...",
        image: "noc.jpg",
        choices: [
            {
                choice: "...ignorujesz to uczucie i bestrosko zasypiasz w jedwabnym łożu.",
                destination: 'poranek'
            },
            {
                choice: "...dla bezpieczeństwa blokujesz drzwi solidną komodą i zasypiasz w jedwabnym łożu.",
                destination: 'poranek_bezpieczny'
            },
            {
                choice: "...postanawiasz nie spać całą noc i czuwać z łukiem w dłoniach.",
                destination: 'poranek_zmeczony'
            },
            {
                choice: "...próbujesz przekonać Kai'Sę o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'czuwanie_kaisa'
            },
            {
                choice: "...próbujesz przekonać Tomasza o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'poranek_bezpieczny'
            },
            {
                choice: "...próbujesz przekonać minotaurzycę o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'czuwanie_mazoga'
            }
        ]
    },
    czuwanie_kaisa: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Kai'Sa otwiera drzwi i wysłuchuje twojego przemówienia na temat zagrożeń czychających w nocy.<br/>- Wybacz ale wydaje mi się, że masz paranoje przyjacielu. Jestem zmęczona i zamierzam się pożądnie wyspać tej nocy. Tobie radzę to samo. Do jutra - jaszczurzyca uśmiecha się i zamyka drzwi. Problem wrażenia niebezpiecznej nocy pozostaje, więc...",
        image: "noc.jpg",
        choices: [
            {
                choice: "...ignorujesz to uczucie i bestrosko zasypiasz w jedwabnym łożu.",
                destination: 'poranek'
            },
            {
                choice: "...dla bezpieczeństwa blokujesz drzwi solidną komodą i zasypiasz w jedwabnym łożu.",
                destination: 'poranek_bezpieczny'
            },
            {
                choice: "...postanawiasz nie spać całą noc i czuwać z łukiem w dłoniach.",
                destination: 'poranek_zmeczony'
            },
            {
                choice: "...próbujesz przekonać Tomasza o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'poranek_bezpieczny'
            },
            {
                choice: "...próbujesz przekonać Bolga o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'czuwanie_bolg'
            },
            {
                choice: "...próbujesz przekonać minotaurzycę o powadze zagrożenia i proponujesz wspólne warty.",
                destination: 'czuwanie_mazoga'
            }
        ]
    },
    poranek: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Zaryzykowałeś życie śpiąc i ufając, że nie zostaniesz porwany i uwięziony w podziemnej arenie. Okazało się, że mądrze postąpiłeś, wstajesz rano wyspany i w dobrym humorze.<br/>Schodzisz do jadalni i wkrótce dołącza reszta gości, służba uwija się podając kolejne potrawy, nigdzie nie widać jednak lorda, spóźnia się dość nieelegancko. Jesz śniadanie i...",
        image: "ranek.jpg",
        choices: [
            {
                choice: "...brakuje ci obcowania z naturą - wybierasz się na spacer i zwiad po terenie posiadłości.",
                destination: 'spacer'
            },
            {
                choice: "...nadal jesteś podejrzliwy wobec zamiarów gospodarzy - starasz się podsłuchać rozmowy służby.",
                destination: 'podsluchiwanie'
            }
        ]
    },
    poranek_bezpieczny: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Podjąłeś przed snem środki bezpieczeństwa i opłaciło się to, nikt cię nie porwał w nocy i nie uwięził w podziemnej arenie. Wstajesz rano względnie wypoczęty.<br/>Schodzisz do jadalni i wkrótce dołącza reszta gości, służba uwija się podając kolejne potrawy, nigdzie nie widać jednak lorda, spóźnia się dość nieelegancko. Jesz śniadanie i...",
        image: "ranek.jpg",
        choices: [
            {
                choice: "...brakuje ci obcowania z naturą - wybierasz się na spacer i zwiad po terenie posiadłości.",
                destination: 'spacer'
            },
            {
                choice: "...nadal jesteś podejrzliwy wobec zamiarów gospodarzy - starasz się podsłuchać rozmowy służby.",
                destination: 'podsluchiwanie'
            }
        ]
    },
    poranek_zmeczony: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Całą noc czuwałeś i rano wytaczasz się ze swojej sypialni niczym zombie. Opłacało się to jednak, gdyż nikt cię w nocy nie porwał ani nie uwięził w podziemnej areie.<br/>Staczasz się do jadalni i wkrótce dołącza reszta gości, służba uwija się podając kolejne potrawy, nigdzie nie widać jednak lorda, spóźnia się dość nieelegancko. Jesz śniadanie i...",
        image: "ranek.jpg",
        choices: [
            {
                choice: "...brakuje ci obcowania z naturą - wybierasz się na spacer i zwiad po terenie posiadłości, może świeże powietrze pomoże ci stanąc na nogi po ciężkiej nocy.",
                destination: 'spacer_zmeczony'
            },
            {
                choice: "...nadal jesteś podejrzliwy wobec zamiarów gospodarzy - starasz się podsłuchać rozmowy służby.",
                destination: 'podsluchiwanie_zmeczony'
            }
        ]
    },
    spacer: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Przechadzasz się po terenie posiadłości. Krząta się tu wiele służby, stajenni opiekują się końmi, paziowie noszą pakunki z dostawami żywności z miasta, słychać szczekanie psów i szum wody w fontannie. Idziesz za posiadłość i znajdujesz brukowaną ścieżkę na rodowy cmenatarz Landtruppetów. Jako łowca bez problemu zauważasz świeże ślady lorda oraz jego golema parowego. Cmentarz otacza gęsta mgła i nagle spokój przerywa rozdzierający krzyk dobiegający z cmentarza!",
        image: "cmentarz.jpg",
        choices: [
            {
                choice: "Ktoś jest w niebezpieczeństwie! Każda sekunda może zaważyć o życiu i śmierci, bez zwłoki prędzej biegniesz na pomoc.",
                destination: 'cmentarz_solo'
            },
            {
                choice: "Ktoś jest w niebezpieczeństwie! I ty też będziesz, jeżeli pobiegniesz tam sam, kto wie co się tam dzieje. Biegniesz z powrotem do posiadłości po wsparcie.",
                destination: 'cmentarz_razem'
            }
        ]
    },
    spacer_zmeczony: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Przechadzasz się po terenie posiadłości. Krząta się tu wiele służby, stajenni opiekują się końmi, paziowie noszą pakunki z dostawami żywności z miasta, słychać szczekanie psów i szum wody w fontannie. Idziesz za posiadłość i znajdujesz brukowaną ścieżkę na rodowy cmenatarz Landtruppetów. Jako łowca pomimo zmęczenia zauważasz świeże ślady lorda oraz jego golema parowego. Cmentarz otacza gęsta mgła i nagle spokój przerywa rozdzierający krzyk dobiegający z cmentarza!",
        image: "cmentarz.jpg",
        choices: [
            {
                choice: "Ktoś jest w niebezpieczeństwie! Każda sekunda może zaważyć o życiu i śmierci, bez zwłoki prędzej biegniesz na pomoc.",
                destination: 'cmentarz_solo'
            },
            {
                choice: "Ktoś jest w niebezpieczeństwie! I ty też będziesz, jeżeli pobiegniesz tam sam, kto wie co się tam dzieje. Biegniesz z powrotem do posiadłości po wsparcie.",
                destination: 'cmentarz_razem_zmeczony'
            }
        ]
    },
    cmentarz_solo: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Wbiegasz na otoczony mgłą cmentarz i widzisz zakrwawionego lorda Landtruppeta, leżącego w rozerwanym jedwabnym stoju u stóp oszalałego golema parowego, który unosi ostrze do zadania śmiertelnego ciosu. Krzyczysz i oddajesz serię strzałów w korpus maszyny. Strzały odbijają się od stalowych blach i bestia ciężką nogą miażdży leżącego, drobnego mężczyznę, którego ciało rozbryzguje się nigdym zdepnięty pomidor. Mordercza maszyna odwraca się i rusza agresywnie w twoją stronę sycząc przeraźliwie parą z rur wydechowych!",
        image: "golem.jpg",
        choices: [
            {
                choice: "Zauważasz, że golema zasilają niebieskie kryształy umieszczone na jego głowie i ramionach. Celujesz i strzelasz w te punkty z nadzieją, że tak pokonasz bestię.",
                destination: 'golem_smierc_solo'
            },
            {
                choice: "Odwracasz się i uciekasz w panice w stronę posiadłości.",
                destination: 'golem_ucieczka'
            }
        ]
    },
    golem_smierc_solo: {
        title: "KONIEC",
        story: "Oddajesz strzały, ale golem jest zbyt szybki i taranuje cię swoją dwutonową masą. Być może zabrakło kogoś, kto kupiłby ci choć kilka chwil dodatkowego czasu na przycelowanie. Nie ma to już znaczenia, gdyż nie zdążyłeś uskoczyć i twoje ciało zmienia się w krwawą miazgę.",
        image: "golem.jpg",
        choices: [
            {
                choice: "Spróbuj ponownie od początku.",
                destination: 'start'
            },
            {
                choice: "Spróbuj ponownie od początku rozdziału II.",
                destination: 'przybycie_do_posiadlosci'
            }
        ]
    },
    golem_ucieczka: {
        title: "KONIEC",
        story: "Uciekasz co sił w nogach, odbijając się od nagrobków we mgle. Kiedy już wydaje ci się, że widzisz bezpieczne mury posiadłości, wielka metalowa łapa chwyta cię i miażdży z siłą dwóch ton nacisku. Twoje ciało eksploduje krwią i zmienia się w mięsną miazgę.",
        image: "golem.jpg",
        choices: [
            {
                choice: "Spróbuj ponownie od początku.",
                destination: 'start'
            },
            {
                choice: "Spróbuj ponownie od początku rozdziału II.",
                destination: 'przybycie_do_posiadlosci'
            }
        ]
    },
    podsluchiwanie: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Wykorzystujesz swoje niezwykle wyczulone zmysły łowcy i dyskretnie podsłuchujesz służbę. Wygląda na to, że służba jest bardzo zaniepokojona nieplanowaną nieobecnością lorda.",
        image: "ranek.jpg",
        choices: [
            {
                choice: "Może odnajdziesz go podczas spaceru po posiadłości.",
                destination: 'spacer'
            }
        ]
    },
    podsluchiwanie_zmeczony: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Starasz się skupić i wykorzystać swoje niezwykle wyczulone zmysły łowcy i dyskretnie podsłuchać służbę, niestety jesteś zbyt zmęczony żeby cokolwiek zrozumieć. Jedyne co widzisz, to wyraźne zaniepokojenie paziów.",
        image: "ranek.jpg",
        choices: [
            {
                choice: "Może odzyskasz siły po zaczerpnięciu świeżego powietrza na spacerze na zewnątrz.",
                destination: 'spacer_zmeczony'
            }
        ]
    },
    cmentarz_razem: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Wpadasz zziajany do jadalni i wzywasz wszystkich do pomocy na cmentarzu. Minotaurzyca nawet nie podnosi głowy i kontynuuje lubieżną konsumpcję śniadania. Paziowie chowają się ze strachu. Jednooki baron zbywa cię i nie zamierza się nigdzie wybierać. Krasnolud Bolg oznajmia, że zapomniał czegoś ważnego z sypialni i po chwili rozglega się dźwięk barykadowanych drzwi. Spoglądasz na Tomasza i Kai'Sę, którzy wyjmują broń i zaniepokojeni biegną wraz z tobą na cmentarz.<br/>Po dotarciu na miejsce wita was makabryczny widok. Ciało lorda Landtruppeta leży zmasakrowane u stóp zakrwawionego golema parowego, który obraca się w waszą stronę, unosi ciężkie łapy i rzuca się do ataku! Tomasz i Kai'Sa zasypują bestie ciosami ostrzy, Tomasz blokuje potężne uderzenia stalową tarczą a Kai'Sa uskakuje przed morderczymi ciosami z gracją godną tancerza. Zasypujesz bestię gradem strzał, ale jej metalowy pancerz pozostaje zupełnie niewrażliwy. Wygląda na to, że to tylko kwestia czasu aż stalowy behemot zabije waszą trójkę.",
        image: "golem.jpg",
        choices: [
            {
                choice: "No cóż, próbowałem - odwróć się i rzuć do panicznej ucieczki.",
                destination: 'golem_ucieczka'
            },
            {
                choice: "Zauważasz, że oszalałą maszynę zasilają niebieskie kryształy na jej głowie i ramionach. Celujesz i starasz się je zniszczyć.",
                destination: 'golem_pokonany'
            }
        ]
    },
    cmentarz_razem_zmeczony: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Wpadasz zziajany i ledwo żywy do jadalni i wzywasz wszystkich do pomocy na cmentarzu. Minotaurzyca nawet nie podnosi głowy i kontynuuje lubieżną konsumpcję śniadania. Paziowie chowają się ze strachu. Jednooki baron zbywa cię i nie zamierza się nigdzie wybierać. Krasnolud Bolg oznajmia, że zapomniał czegoś ważnego z sypialni i po chwili rozglega się dźwięk barykadowanych drzwi. Spoglądasz na Tomasza i Kai'Sę, którzy wyjmują broń i zaniepokojeni biegną wraz z tobą na cmentarz.<br/>Po dotarciu na miejsce wita was makabryczny widok. Ciało lorda Landtruppeta leży zmasakrowane u stóp zakrwawionego golema parowego, który obraca się w waszą stronę, unosi ciężkie łapy i rzuca się do ataku! Tomasz i Kai'Sa zasypują bestie ciosami ostrzy, Tomasz blokuje potężne uderzenia stalową tarczą a Kai'Sa uskakuje przed morderczymi ciosami z gracją godną tancerza. Zasypujesz bestię gradem strzał, ale jej metalowy pancerz pozostaje zupełnie niewrażliwy. Wygląda na to, że to tylko kwestia czasu aż stalowy behemot zabije waszą trójkę.",
        image: "golem.jpg",
        choices: [
            {
                choice: "No cóż, próbowałem - odwróć się i rzuć do panicznej ucieczki.",
                destination: 'golem_ucieczka'
            },
            {
                choice: "Zauważasz, że oszalałą maszynę zasilają niebieskie kryształy na jej głowie i ramionach. Celujesz i starasz się je zniszczyć.",
                destination: 'golem_smierc_zmeczenie'
            }
        ]
    },
    golem_smierc_zmeczenie: {
        title: "KONIEC",
        story: "Oddajesz strzały, ale jesteś zbyt zmęczony aby celnie trafić w niewielkie cele na szalejącej w walce maszynie. Golem nigdy się nie męczy, Tomasz i Kai'Sa już tak. Jedno po drugim zostaje trafione i zmiażdżone przez stalowego molocha. Rzuca się w twoim kierunku, starasz się uskoczyć, ale golem jest zbyt szybki i taranuje cię swoją dwutonową masą a twoje ciało zmienia się w krwawą miazgę.",
        image: "golem.jpg",
        choices: [
            {
                choice: "Spróbuj ponownie od początku.",
                destination: 'start'
            },
            {
                choice: "Spróbuj ponownie od początku rozdziału II.",
                destination: 'przybycie_do_posiadlosci'
            }
        ]
    },
    golem_pokonany: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Jeden po drugim kryształ zasilający bestie eksploduje w towarzystwie wyładowań elektrycznych paraliżujących maszynę. Bestia upada na jedno kolano i Kai'Sa oraz Tomasz wspólnymi siłami odrąbują jej okablowaną głowę. Para syczy i iskry strzelają kiedy dwutonowe cielsko obala się na kamienne nagrobki obracając je w pył. Na miejscu zwabieni hałasem zjawiają się pozostali goście lorda oraz kilku paziów z majordomusem Mossem na czele.<br/>- Na miłość Stwórcy, mój szlachetny panie! Nieeee!!! - krzyczy Moss.<br/>Opowiadacie wszystkim co tu zaszło. Minotaurzyca spluwa i odchodzi do posiadłości, chwilę później jej śladami odchodzi jednooki baron. Bolg szlocha przerażony i patrzy na dymiącego się golema.<br/>- Miałeś rację - zwraca się do ciebie Kai'Sa - coś tu nie gra. Musimy wyjaśnić tą zagadkę. Ktokolwiek kontrolował golema i zabił Landtruppeta niechybnie chce przejąć jego spadek wyłącznie dla siebie. To może być jeden z nas...",
        image: "cmentarz.jpg",
        choices: [
            {
                choice: "- Omal tu nie zginęliśmy! Wsiadam do pierwszego powozu i wynoszę się stąd!",
                destination: 'wynosze_jeden'
            },
            {
                choice: "- Od początku wiedziałem, że coś tu śmierdzi padliną. Pora na śledztwo!",
                destination: 'sledztwo'
            }
        ]
    },
    wynosze_jeden: {
        title: "Rozdział II - Igrzyska Śmierci",
        story: "Odwracasz się aby odejść, ale Kai'Sa łapie cię za ramię.<br/>- Oszalałeś? Potrzebujemy cię tu. Nawet jeżeli nie dbasz o nas ani o spadek ani o sprawiedliwość, chyba cenisz własne życie? Podróżując samotnie będziesz łatwym celem dla zabójcy, który zapewne czycha też na ciebie! Zostań i pomóż nam w śledztwie.",
        image: "cmentarz.jpg",
        choices: [
            {
                choice: "- Poradzę sobie z zabójcami. - starasz się strącić jej rękę - Poza tym wyjeżdżając nie stanowię dla nich zagrożenia, nie interesuje mnie kryształowy majątek, chcę tylko wrócić do mojej ukochanej chaty w lesie. Bywajcie.",
                destination: 'spokojna_starosc'
            },
            {
                choice: "- Dobra - wzdychasz - dorwijmy tego spiskowca. Pora na śledztwo!",
                destination: 'sledztwo'
            }
        ]
    },
    spokojna_starosc: {
        title: "EPILOG - Koniec aktu I",
        story: "Bezpiecznie wracasz do swojej chaty na skraju lasu i spędzasz kolejne dni w spokoju i szczęśliwości. Przynajmniej do dnia pamiętnego polowania, które miało być tylko kolejnym, rutynowym polowaniem...",
        image: "epilog.jpg",
        choices: [
            {
                choice: "Nowa gra",
                destination: 'start'
            }
        ]
    },
    sledztwo: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Wraz z Kai'Są i Tomaszem siadacie do stołu w sali balowej i planujecie dalsze działania. Jak zdemaskować mordercę Landtruppeta?",
        image: "sledztwo.jpg",
        choices: [
            {
                choice: "Golemy, zarówno jak i zasilające je kryształy produkowane są w faktoriach należących do Landtruppeta na południu. Warto się tam udać i wypytać pracowników o sprawę.",
                destination: 'faktoria_jeden'
            },
            {
                choice: "Wszyscy otrzymaliśmy w prezencie te tajemnicze piramidki. Może one są kluczem do rozwiązania tej zagadki? Przyjrzyjmy się im dokładnie po raz kolejny.",
                destination: 'piramidki_jeden'
            }
        ]
    },
    faktoria_jeden: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Rozkazujecie zrospaczonemu Mossowi zabrać was powozem do faktorii kryształów i golemów na południu. Wita was kierownik hali produkcyjnej, ubrany w białą szatę ochronną brygadzista Walter.<br/>- Uuu a więc mówicie, że nasz miłościwy lord Tod Landtruppet został zamordowany? - podsumowuje waszą opowieść - Może to i lepiej, nie miał serca do tej branży. Odkąd przejął faktorię po swoim zmarłym w tym straszliwym pożarze faktorii bracie Franzie notujemy ciągłe straty. Franz mówię wam, to był prawdziwy pasjonat technologii, świeć Stwórco nad jego duszą. Ale wracając do waszego śledztwa, jeśli chodzi o nasze golemy to są absolutnie niezawodne, nie ma mowy o żadnej awarii. Osobiście kontroluję też bezpieczeństwo oprogramowania i zapewniam was, że nie ma mowy, żeby ktokolwiek bez specjalistycznej, wewnętrznej wiedzy przeprogramował maszynę. Nawet sam Tod nie potrafił tego zrobić, kwestie techniczne nigdy go nie interesowały. Hmm to co mówię, chyba rzuca podejrzenia na mnie? Zapewniam, że nie miałem z tym nic wspólnego, nigdy nie posunąłbym się do morderstwa. Zresztą i tak niedługo przechodzę na zasłużoną emeryturę, nie mam tu żadnych motywów.<br/>Wracacie do posiadłości z niczym. Pora zbadać pozostałe tropy.",
        image: "faktoria.jpg",
        choices: [
            {
                choice: "Wszyscy otrzymaliśmy w prezencie te tajemnicze piramidki. Może one są kluczem do rozwiązania tej zagadki? Przyjrzyjmy się im dokładnie po raz kolejny.",
                destination: 'piramidki_dwa'
            }
        ]
    },
    piramidki_jeden: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Dokładnie oglądacie ze wszystkich stron piramidki, potrząsacie nimi, przykładacie je do siebie. Nie potraficie odczytać wyrytych na nich run. Wygląda na to, że nie dacie rady do niczego ich teraz wykorzystać. Pora zastanowić się, co dalej.",
        image: "piramida.jpg",
        choices: [
            {
                choice: "Golemy, zarówno jak i zasilające je kryształy produkowane są w faktoriach należących do Landtruppeta na południu. Warto się tam udać i wypytać pracowników o sprawę.",
                destination: 'faktoria_dwa'
            }
        ]
    },
    faktoria_dwa: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Rozkazujecie zrospaczonemu Mossowi zabrać was powozem do faktorii kryształów i golemów na południu. Wita was kierownik hali produkcyjnej, ubrany w białą szatę ochronną brygadzista Walter.<br/>- Uuu a więc mówicie, że nasz miłościwy lord Tod Landtruppet został zamordowany? - podsumowuje waszą opowieść - Może to i lepiej, nie miał serca do tej branży. Odkąd przejął faktorię po swoim zmarłym w tym straszliwym pożarze faktorii bracie Franzie notujemy ciągłe straty. Franz mówię wam, to był prawdziwy pasjonat technologii, świeć Stwórco nad jego duszą. Ale wracając do waszego śledztwa, jeśli chodzi o nasze golemy to są absolutnie niezawodne, nie ma mowy o żadnej awarii. Osobiście kontroluję też bezpieczeństwo oprogramowania i zapewniam was, że nie ma mowy, żeby ktokolwiek bez specjalistycznej, wewnętrznej wiedzy przeprogramował maszynę. Nawet sam Tod nie potrafił tego zrobić, kwestie techniczne nigdy go nie interesowały. Hmm to co mówię, chyba rzuca podejrzenia na mnie? Zapewniam, że nie miałem z tym nic wspólnego, nigdy nie posunąłbym się do morderstwa. Zresztą i tak niedługo przechodzę na zasłużoną emeryturę, nie mam tu żadnych motywów.<br/>Wracacie do posiadłości z niczym. Pora zbadać pozostałe tropy.",
        image: "faktoria.jpg",
        choices: [
            {
                choice: "Skoro podejrzewamy, że morderca jest wśród nas powinniśmy przesłuchać pozostałych - zacznijmy od Bolga.",
                destination: 'przesluchanie_bolg'
            },
            {
                choice: "Skoro podejrzewamy, że morderca jest wśród nas powinniśmy przesłuchać pozostałych - zacznijmy od Barona.",
                destination: 'przesluchanie_baron'
            },
            {
                choice: "Skoro podejrzewamy, że morderca jest wśród nas powinniśmy przesłuchać pozostałych - zacznijmy od minotaurzycy.",
                destination: 'przesluchanie_mazoga'
            }
        ]
    },
    piramidki_dwa: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Dokładnie oglądacie ze wszystkich stron piramidki, potrząsacie nimi, przykładacie je do siebie. Nie potraficie odczytać wyrytych na nich run. Wygląda na to, że nie dacie rady do niczego ich teraz wykorzystać. Pora zastanowić się, co dalej.",
        image: "piramida.jpg",
        choices: [
            {
                choice: "Skoro podejrzewamy, że morderca jest wśród nas powinniśmy przesłuchać pozostałych - zacznijmy od Bolga.",
                destination: 'przesluchanie_bolg'
            },
            {
                choice: "Skoro podejrzewamy, że morderca jest wśród nas powinniśmy przesłuchać pozostałych - zacznijmy od Barona.",
                destination: 'przesluchanie_baron'
            },
            {
                choice: "Skoro podejrzewamy, że morderca jest wśród nas powinniśmy przesłuchać pozostałych - zacznijmy od minotaurzycy.",
                destination: 'przesluchanie_mazoga'
            }
        ]
    },
    przesluchanie_mazoga: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Stajecie nad minotaurzycą, która najadła się i teraz opróżnia kolejne kielichy i butelki przeróżnych alkoholi w jadalni.<br/>- Mów co wiesz! - mówisz groźnie.<br/>Minotaurzyca wstaje, góruje nad wami przysłaniając światło. Dyszy groźnie, bierze potężny haust bursztynowego płynu z butelki alkoholu, którą otrzymała w prezencie, unosi pięść i... pada w konwulsji na posadzkę, odskakujecie przerażeni kiedy piana toczy się z jej pyska, krew wylewa się z oczu i uszu. Minotaurzyca miota się po podłodze łamiąc krzesła i stoliki, zrzuca naczynia i butelki by po chwili zastygnąć w bolesnej pozie śmierci.<br/>- Stwórco, została otruta! - Krzyczy Kai'Sa wąchając butelkę, nadal owiązaną zdobioną wstążką.<br/>- Landtruppet chciał ją zabić? - Zastanawiasz się na głos. - A może ktoś podmienił jej prezent? Jedno jest pewne, to nie ona za tym stoi.",
        image: "mazoga.jpg",
        choices: [
            {
                choice: "Pora poszukać i przesłuchać Bolga. To czarodziej, może używa plugawej magii by zabijać kolejne ofiary.",
                destination: 'przesluchanie_bolg'
            },
            {
                choice: "Pora poszukać i przesłuchać barona. Od samego początku zachowuje się niezwykle tajemniczo.",
                destination: 'przesluchanie_baron'
            }
        ]
    },
    przesluchanie_bolg: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Długo zajmuje wam znalezienie, gdzie w posiadłości ukrywa się krasnoludzki mag Bolg. Wchodzicie na stryszek posiadłości, kiedy nagle oszalały krasnolud wyskakuje wprost na was z magicznymi promieniami lecącymi wprost na was z jego rąk.<br/>- Śmieeeerć! - krzyczy krzeł - Iaaaaiiiiijaaaa!!!<br/>W ostatniej chwili uskakujesz śladem Kai'Sy. Pioruny dosięgają Tomasza, który nie spodziewał się ataku i pada powalony na dole schodów, w powietrzu czuć smród spalonego mięsa. Krasnolud ze wściekłym okrzykiem odwraca się w waszą stronę i przygotowuje kolejne zaklęcie. Nie macie wyboru i dziurawicie plugawego karła gradem pchnięć rapiera i noża myśliwskiego. Zmasakrowany Bolg pada na podłogę strychu w kałuży krwi.",
        image: "bolg.jpg",
        choices: [
            {
                choice: "Zbiegasz ze schodów by udzielić pomocy rannemu Tomaszowi, jeżeli jeszcze żyje.",
                destination: 'ranny_tomasz'
            },
            {
                choice: "Kto by się przejmował Tomaszem, przeszukujesz ciało Bolga w poszukiwaniu łupów i dowodów jego okrutnych zbrodni.",
                destination: 'loot_bolga'
            }
        ]
    },
    ranny_tomasz: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "- Tomasz! - krzyczysz i podbiegasz do wojownika, który powoli podnosi się, cały osmalony.<br/>- Nic mi nie będzie - krzywi się - Potrzeba więcej niż iskry nieludzia by powalić wojownika.<br/>- Hej! - krzyczy z góry Kai'Sa - patrzcie co znalazłam.<br/>Przy ciele krasnoluda znajdujecie list, w którym anonimowy nadawca, grozi tchórzliwemu krasnalowi, że jeżeli nie zabije wszystkich pozostałych gości, skończy jako krwawa miazga zupełnie jak Tod Landtruppet. Wygląda na to, że Bolg był tylko narzędziem w rękach spiskowca.<br/>Znosicie ciało na parter, gdzie słudzy z trudem próbują wynieść na zewnątrz martwe, krwawiące ze wszystkich otworów ciało minotaurzycy. Trucizna wypaliła na jej skórze liczne makabryczne bruzdy. Pod ścianą nadal leży otwarta butelka z alkoholem, który otrzymała w prezencie.",
        image: "trucizna.jpg",
        choices: [
            {
                choice: "Chwytasz majordomusa Mossa koordynującego wynoszenie ciał, przykładasz mu nóz do gardła i szaleńczo żądasz wyjawienia spisku.",
                destination: 'grozenie_majordomusowi'
            },
            {
                choice: "Pora poszukać i przesłuchać barona. Od samego początku zachowuje się niezwykle tajemniczo.",
                destination: 'przesluchanie_baron'
            }
        ]
    },
    loot_bolga: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Przy ciele krasnoluda znajdujesz list, w którym anonimowy nadawca, grozi tchórzliwemu krasnalowi, że jeżeli nie zabije wszystkich pozostałych gości, skończy jako krwawa miazga zupełnie jak Tod Landtruppet. Wygląda na to, że Bolg był tylko narzędziem w rękach spiskowca.<br/>Kai'Sa zbiega na dół schodów i pomaga wstać Tomaszowi, żywemu choć w całości osmalonemu.<br/>Znosicie ciało krasnoluda na parter, gdzie słudzy z trudem próbują wynieść na zewnątrz martwe, krwawiące ze wszystkich otworów ciało minotaurzycy. Trucizna wypaliła na jej skórze liczne makabryczne bruzdy. Pod ścianą nadal leży otwarta butelka z alkoholem, który otrzymała w prezencie.",
        image: "trucizna.jpg",
        choices: [
            {
                choice: "Chwytasz majordomusa Mossa koordynującego wynoszenie ciał, przykładasz mu nóz do gardła i szaleńczo żądasz wyjawienia spisku.",
                destination: 'grozenie_majordomusowi'
            },
            {
                choice: "Pora poszukać i przesłuchać barona. Od samego początku zachowuje się niezwykle tajemniczo.",
                destination: 'przesluchanie_baron'
            }
        ]
    },
    grozenie_majordomusowi: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "- Nic nie wiem panie, przysięgam na matulę! - ze łzami w oczach krzyczy Moss.<br/>- Łżesz jak pies szubrawcze, to ty za tym wszystkim stoisz, niechybnie! - przyciskasz ostrze. Majordomus zalewa się łzami i błaga o litość.<br/>- Joses - mówi Tomasz - Nie godzi się mordować niewinnych!",
        image: "moss.jpg",
        choices: [
            {
                choice: "Opanowujesz się i puszczasz majordomusa. Rzeczywiście nie ma żadnych dowodów jego udziału w tym chorym spisku. Pora poszukać barona.",
                destination: 'przesluchanie_baron'
            },
            {
                choice: "- Niechybnie łże jak pies! - na oczach wszystkich podżynasz gardło starcowi.",
                destination: 'moss_zamordowany'
            }
        ]
    },
    moss_zamordowany: {
        title: "KONIEC",
        story: "Całą ścianę pokrywa rozbryzg krwi majordomusa po tym, jak podżynasz mu gardło nożem myśliwskim. Przerażeni twoim okrucieństwem Tomasz i Kai'Sa porzucają śledztwo i uciekają z posiadłości ratując życie. Pozostali słudzy i paziowie widząc twoje szaleństwo chwytają za noże kuchenne, krzesła, patelnie i kije i rzucają się na ciebie, obwiniając o wszystkie tragedie i śmierci jakie miały ostatnio miejsce w posiadłości. Nie masz szans w walce wręcz przeciwko tylu przeciwnikom, giniesz powolną i bolesną śmiercią ubity przez wściekły tłum.",
        image: "sludzy.jpg",
        choices: [
            {
                choice: "Spróbuj ponownie od początku.",
                destination: 'start'
            },
            {
                choice: "Spróbuj ponownie od początku rozdziału III.",
                destination: 'sledztwo'
            }
        ]
    },
    przesluchanie_baron: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Długie godziny zajęło znalezienie tropu barona. W międzyczasie służba wyniosła na zewnątrz zmasakrowane, martwe ciała otrutej minotaurzycy i zadźganego Bolga. Ilość tropów zawężała się bardzo szybko. Jako łowcy, udało ci się wytropić ślady barona, które prowadziły do dużego lasu na zachodzie od posiadłości. Po kilku godzinach marszu, ślady nagle urwały się. Zapadł zmierzch i księżyc w pełni leniwie rozpoczął podróż po mrocznym niebie, kiedy szelest liści zdradził nadchodzące zagrożenie. Wielki, czarny, włochaty wilkołak, wybiegł z ciemności i rzucił się na waszą trójkę z pazurami i tocząc pianę z pyska!",
        image: "wilkolak.jpg",
        choices: [
            {
                choice: "Zasyp bestię gradem strzał nim rozszarpie Tomasza i Kai'Sę.",
                destination: 'wilkolak_smierc'
            },
            {
                choice: "Spróbuj wytężyć wzrok aby znaleźć słabość przeciwnika.",
                destination: 'wilkolak_zabity'
            },
            {
                choice: "Tego już za wiele, wykorzystaj fakt, że bestia jest zajęta Tomaszem i Kai'Są i uciekaj ile sił w nogach.",
                destination: 'wilkolak_smierc'
            }
        ]
    },
    wilkolak_smierc: {
        title: "KONIEC",
        story: "Liczne ciosy pokiereszowały bestię, ale jej rany goiły się i regenerowały w niesamowitym tempie. Pierwszy padł umęczony Tomasz, kolejna nieosłonięta pancerzem Kai'Sa. Rzucasz się do ucieczki ale nikt nie jest w stanie uciec przez wilczym głodem. Wilkołak powala cię na ziemię i rozszarpuje plecy wyrywając z ogromną siłą i prędkością kolejne kawałki mięsa, zmieniając twoje ciało w krwawą pulpę.",
        image: "wilkolak.jpg",
        choices: [
            {
                choice: "Spróbuj ponownie od początku.",
                destination: 'start'
            },
            {
                choice: "Spróbuj ponownie od początku rozdziału III.",
                destination: 'sledztwo'
            }
        ]
    },
    wilkolak_zabity: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Przebijasz ciemność wzrokiem i dostrzegasz, że wilkołak ma tylko jedno oko! <br/>- Oko! - krzyczysz - Kai'Sa, dźgnij go w oko!<br/>Kai'Sa przytakuje i z gracją najlepszego szermierza w Ore smaga oko bestii czubkiem ostrza. Wilkołak wyje z bólu i pada na ziemie, tarza się chwilę w błocie, po czym powoli kurczy się i gubi futro. Po chwili transformacji u waszych stóp leży nieprzytomny lecz nadal żywy baron z wykolonymi oboma oczami.<br/>- Cholera - mówicie chórem.<br/>- Myślicie, że spisek to jego sprawka? - pyta skonfundowany Tomasz.<br/>- Miał motyw, środki i możliwości - myśli na głos Kai'Sa wycierając ostrze z krwi i łapiąc oddech.",
        image: "wilkolak.jpg",
        choices: [
            {
                choice: "- To niechybnie jego sprawka, zakończmy jego plugawy żywot tu i teraz.",
                destination: 'smierc_barona'
            },
            {
                choice: "- To niechybnie jego sprawka, ale nie godzi się dobijać ślepca, zabierzmy go do posiadłości i oddajmy w ręce władz.",
                destination: 'kamienny_krag'
            },
            {
                choice: "- Instynkt podpowiada mi, że to nie koniec, zabierzmy go do posiadłości, oddajmy pod opiekę służby i sprawdźmy inne tropy.",
                destination: 'kamienny_krag'
            }
        ]
    },
    smierc_barona: {
        title: "KONIEC",
        story: "Z zimną krwią dobijasz oślepionego barona, niechybnie odpowiedzialnego za wszystkie mordy w posiadłości. Po długiej chwili ciszy zewsząd dobiegają groźne powarkiwania.<br/>- Teraz sobie przypomniałem - mówi cicho Tomasz - słyszałem legendy o wilkołakach, które przyzywały na pomoc w boju watachy wilków i wargów.<br/>Kilkanaście wściekłych wilków wyskakuje z ciemności i rozszarpuje was jedno po drugim za śmierć swojego alphy. Kończąc jako krwawa kolacja stada wilków, zastanawiasz się, czy mogło być inaczej.",
        image: "wilki.jpg",
        choices: [
            {
                choice: "Spróbuj ponownie od początku.",
                destination: 'start'
            },
            {
                choice: "Spróbuj ponownie od początku rozdziału III.",
                destination: 'sledztwo'
            }
        ]
    },
    kamienny_krag: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Zabieracie nieprzytomnego barona do posiadłości. W drodze powrotnej towarzyszą wam groźne spojrzenia i powarkiwania dzikich zwierząt ukrytych w ciemności lasu i śledzących każdy wasz krok. Przyspieszacie tempa, zatrzymujesz się jednak nagle, znajdujesz bowiem intrygujące ślady... stóp dwóch osób oraz parowego golema. Ślady są nieregularne i stare, ale powtarzają się wielokrotnie, zupełnie jakby osoby te chodziły tędy wielokrotnie od kilku tygodni, a może nawet miesięcy.",
        image: "slady.jpg",
        choices: [
            {
                choice: "Nie mitrężmy czasu, chodźmy sprawdzić dokąd prowadzą te ślady. To może być kryjówka lub miejsce spotkań spiskowców.",
                destination: 'kamienny_krag_dwa'
            },
            {
                choice: "Najpierw odnieśmy barona do posiadłości.",
                destination: 'zasadzka_w_posiadlosci'
            }
        ]
    },
    zasadzka_w_posiadlosci: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Zapamiętując miejsce, w którym znalazłeś ślady, wracacie do posiadłości i przekazujecie służbie ciało barona, tłumacząc co zaszło. Słońce zaszło już dawno temu i las pokrywają całkowite ciemności. Chwytacie za lampy i pochodnie i kierujecie się do lasu aby zbadać ślady kiedy zatrzymuje was majordomus Moss.<br/>- Szlachetni państwo, czy rozum was opuścił?! Wyruszać w ciemną noc? Po całym dniu w lesie, jedliście chociaż obiad? Kolację? Zapraszam do posiadłości, najedzcie się, wypocznijcie i kontynuujcie swoją wyprawę jutro!",
        image: "moss.jpg",
        choices: [
            {
                choice: "Nie ma czasu do stracenia, nasze życie jest na szali, jeżeli spiskowców jest więcej. Ruszamy w ciemną noc! Za śladami!",
                destination: 'kamienny_krag_dwa_b'
            },
            {
                choice: "Masz rację majordomusie. Zjedzmy, odpocznijmy, zaczekajmy do rana.",
                destination: 'trujaca_noc'
            }
        ]
    },
    trujaca_noc: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Decydujecie się pożywić i odpocząć w posiadłości. Rozbijacie obóz w sali balowej i dla bezpieczeństwa wystawiacie warty. Poranek przynosi jednak tragiczny widok - znajdujecie Kai'Sę, która pełniła ostatnią wartę, martwą na podłodze. Z jej ust nadal wylewa się posoka z krwi i trucizny. Wszczynacie alarm, nigdzie jednak nie możecie znaleźć majordomusa Mossa. Wściekli i żądni zemsty idziecie do lasu. Ślady prowadzą do dużej polany ze starym, kamiennym kręgiem.",
        image: "krag.jpg",
        choices: [
            {
                choice: "Spróbujcie ukryć się za głazami i przygotować zasadzkę na spiskowców.",
                destination: 'trujaca_noc_smierc'
            },
            {
                choice: "Wydając z siebie wściekłe okrzyki bojowe wezwijcie spiskowców do stawienia wam czoła na ubitej ziemi.",
                destination: 'trujaca_noc_smierc'
            }
        ]
    },
    trujaca_noc_smierc: {
        title: "KONIEC",
        story: "Spiskowcy oczekiwali waszego przybycia i byli na nie przygotowani. Tuzin zakapturzonych łotrów z długimi, zakrzywionymi nożami wyłoniło się z lasu dookoła polany i rzuciło by zakończyć wasz żywot. Walczyliście dzielnie, ale zaledwie w dwójkę nie mieliście szans i jeden po drugim upadliście pod ciosami tajemniczych agresorów.",
        image: "spiskowcy.jpg",
        choices: [
            {
                choice: "Spróbuj ponownie od początku.",
                destination: 'start'
            },
            {
                choice: "Spróbuj ponownie od początku rozdziału III.",
                destination: 'sledztwo'
            }
        ]
    },
    kamienny_krag_dwa_b: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Nie zważając na mroki nocy w świetle pochodni wracacie do lasu i podążacie za śladami, które prowadzą was do dużej polany i starego, kamiennego kręgu.",
        image: "krag.jpg",
        choices: [
            {
                choice: "Spróbujcie ukryć się za głazami i przygotować zasadzkę na spiskowców.",
                destination: 'trujaca_noc_smierc_b'
            },
            {
                choice: "Wydając z siebie wściekłe okrzyki bojowe wezwijcie spiskowców do stawienia wam czoła na ubitej ziemi.",
                destination: 'trujaca_noc_smierc_b'
            }
        ]
    },
    trujaca_noc_smierc_b: {
        title: "KONIEC",
        story: "Spiskowcy oczekiwali waszego przybycia i byli na nie przygotowani. Tuzin zakapturzonych łotrów z długimi, zakrzywionymi nożami wyłoniło się z lasu dookoła polany i rzuciło by zakończyć wasz żywot. Walczyliście dzielnie, ale zaledwie w trójkę nie mieliście szans i jedno po drugim upadliście pod ciosami tajemniczych agresorów.",
        image: "spiskowcy.jpg",
        choices: [
            {
                choice: "Spróbuj ponownie od początku.",
                destination: 'start'
            },
            {
                choice: "Spróbuj ponownie od początku rozdziału III.",
                destination: 'sledztwo'
            }
        ]
    },
    kamienny_krag_dwa: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Wraz z nieprzytomnym ciałem barona docieracie po śladach do polany ze starym, kamiennym kręgiem. Noc jest ciemna i mroczna, towarzyszy wam jedynie światło księżyca w pełni.",
        image: "krag.jpg",
        choices: [
            {
                choice: "Spróbujcie ukryć się za głazami i przygotować zasadzkę na spiskowców.",
                destination: 'pojmanie_mossa'
            },
            {
                choice: "Spróbujcie ukryć się za głazami i przygotować zasadzkę na spiskowców - niech ciało barona posłuży za przynętę.",
                destination: 'pojmanie_mossa'
            }
        ]
    },
    pojmanie_mossa: {
        title: "Rozdział III - Krwawe Śledztwo",
        story: "Wykorzystujesz doświadczenie łowcy i przygotowujesz kilka pułapek oraz kryjówkę. Po kilku żmudnych godzinach oczekiwania w zimnie i ciemności pojawiły się wśród was pierwsze wątpliwości. Rozwiało je jednak pojawienie się zakapturzonej postaci, niepewnie zbliżającej się do centrum kręgu.<br/>- Panie? Jesteś tu? Ci dranie ciągle trzymają się razem, realizacja planu zajmie mi dłużej niż myślałem. - rozpoznajecie głos majordomusa Mossa.<br/>Z krzykiem i szczękiem broni wyskakujecie i obezwładniacie starca.<br/>- Nieee, panie, to pułapka, uciekaj! - krzyknął nim Tomasz potężnym ciosem stalowej rękawicy pozbawił go przytomności. Rozglądacie się, ale nie było tu nikogo więcej.<br/>Wiążecie liną i przeszukujecie drania, znajdujecie plik rozkazów podpisanych woskową pieczęcią z symbolem kryształu i koła zębatego.<br/>Treść rozkazów:<br/>- Moss, przemyślałem to, co mówiłeś o planie Toda i zaproszeniu tych jego niby kuzynów. To doskonała okazja, żeby pozbyć się Toda i odzyskać to, co mi się prawowicie należy. Podmień kryształy zasilające golema Toda na te, które załączam do listu. Ja zajmę się Todem a Ty wywołaj konflikt pomiędzy gośćmi, niech wybijają się jeden po drugim. Kiedy zostanie już tylko jeden żywy aktywuj tym kluczem runicznym jego piaramidę teleportacji, a wtedy ja zabiję go osobiście. Jesteśmy już tak blisko zemsty, mój drogi Mossie.",
        image: "moss.jpg",
        choices: [
            {
                choice: "- A zatem wiemy już jak dostać się do mózgu spisku i jak zaskoczyć go przewagą liczebną. Przygotujmy się do konfrontacji i aktywujmy wszystkie trzy piramidki.",
                destination: 'monolog_bossa'
            }
        ]
    },
    monolog_bossa: {
        title: "Rozdział IV - Krypta",
        story: "Dzięki wiedzy z notatek Mossa aktywujecie piramidki teleportacyjne i zostaniecie w magiczny sposób przemieszczeni do ciasnej, podziemnej krypty. Grobowiec został przerobiony na obozowisko i pracownię techniczną. W jednym rogu stoi na straży golem parowy gotowy rzucić się na was. W drugim przy ciężkim kamiennym stole zrobionym z płyty nagrobnej siedzi niski mężczyzna, jego ciało jest zdeformowane i w całości pokryte paskudnymi bliznami po bolesnych oparzeniach. Niektóre elementy jego ciała zastępują metalowe rurki, płytki i zębatki. Jedna z jego rąk jest całkowicie mechaniczna. Wydaje się być bardzo zaskoczony waszym pojawieniem się tu całą trójką. Mimo to przemawia:<br/>- Uuuh, a zatem mój wierny majordomus zawiódł. Jesteście sprytniejsi niż podejrzewałem. Może rzeczywiście jesteście moimi krewnymi. Sprawdźmy, czy macie dość oleju w głowie by dodać dwa do dwóch. Kim jestem?",
        image: "franz.jpg",
        choices: [
            {
                choice: "- Teraz, zaczyna monolog! - zaatakuj oparzoną postać.",
                destination: 'final_smierc'
            },
            {
                choice: "- Teraz, zaczyna monolog! - zaatakuj golema parowego celując w kryształy kontrolne.",
                destination: 'final_smierc'
            },
            {
                choice: "- Yyy jesteś krewnym do którego nie dotarło zaproszenie?",
                destination: 'final_smierc_b'
            },
            {
                choice: "- Yyy jesteś cesarzową Ore bez makijażu?",
                destination: 'mockery'
            },
            {
                choice: "- Ty musisz być Franz Landtruppet, starszy brat Toda, który ponoć zginął w pożarze.",
                destination: 'franz'
            }
        ]
    },
    final_smierc: {
        title: "KONIEC",
        story: "Rzucacie się do walki, ale w tak ciasnej przestrzeni jak krypta wielka masa golema po prostu wpada na was i przygniata do ściany. Nie ma tu miejsca na uniki czy wysublimowane finty. Brutalna, stalowa bestia łamie wasze kości i wyciska z was życie w akopaniamencie obłąkańczego śmiechu oparzonego mężczyzny, skrytego bezpiecznie za szeroką, grobową płytą.",
        image: "golem.jpg",
        choices: [
            {
                choice: "Spróbuj ponownie od początku.",
                destination: 'start'
            },
            {
                choice: "Spróbuj ponownie od początku rozdziału III.",
                destination: 'sledztwo'
            }
        ]
    },
    final_smierc_b: {
        title: "KONIEC",
        story: "Oparzony mężczyzna krzywi się na dźwięk błędnej odpowiedzi.<br/>- Tak myślałem. Wasza głupota przypomina mi tego drania Toda. Oby jego ciało pożarły robaki. Tak jak i wasze! - krzycząc to daje sygnał golemowi do ataku.<br/>Rzucacie się do walki, ale w tak ciasnej przestrzeni jak krypta wielka masa golema po prostu wpada na was i przygniata do ściany. Nie ma tu miejsca na uniki czy wysublimowane finty. Brutalna, stalowa bestia łamie wasze kości i wyciska z was życie w akopaniamencie obłąkańczego śmiechu oparzonego mężczyzny, skrytego bezpiecznie za szeroką, grobową płytą.",
        image: "golem.jpg",
        choices: [
            {
                choice: "Spróbuj ponownie od początku.",
                destination: 'start'
            },
            {
                choice: "Spróbuj ponownie od początku rozdziału III.",
                destination: 'sledztwo'
            }
        ]
    },
    franz: {
        title: "Rozdział IV - Krypta",
        story: "- Tak! - krzywi się oparzony mężczyzna - Jam jest lord Franz Landtruppet, PRAWOWITY władca tych ziem i faktorii. Mój plugawy braciszek myślał, że udało mu się mnie zamordować wywołując pożar w faktorii w której wcześniej mnie uwięził. Ale ja przeżyłem. I lizałem swoje rany, żyjąc niczym ghul na cmentarzu, kradnąć części ze złomowiska odbudowując swoją siłę. Tylko Moss okazał się być mi wierny, kiedy odkrył, że być może żyję dostarczał mi zapasów i informacji. Ale teraz, kiedy już byłem gotowy zemścić się na bracie, on zaprosił tu was, kolejnych UZURPATORÓW mojego dziedzictwa. To KONIEC, nie ważne, że uniknęliście mojej pułapki, ZGINIECIE TU I TERAZ!",
        image: "franz.jpg",
        choices: [
            {
                choice: "- No to pokaż na co cię stać potworze! - zaatakuj.",
                destination: 'final_smierc'
            },
            {
                choice: "- Zaczekaj, skoro Tod próbował cię zabić i bezprawnie przejął majątek to miałeś pełne prawo ukarać go śmiercią.",
                destination: 'franz_dyplomacja'
            },
            {
                choice: "- I dlatego okrutnie mordowałeś niewinnych, obcych ludzi? Niczym nie różnisz się od Toda. Jesteś taki sam jak on.",
                destination: 'mockery'
            }
        ]
    },
    mockery: {
        title: "Rozdział IV - Krypta",
        story: "Pokryta bliznami twarz mężczyzny wykrzywia się w paskudnym, katakonicznym grymasie:<br/>- TY GNOJU! - krzyczy całkowicie wytrącony z równowagi twoim szyderstwem.<br/>Wykorzystujecie moment konsternacji złoczyńcy i dopadacie do niego zanim zdołał aktywować protokół obronny golema. Rapier Kai'Sy z gracją i łatwością kończy żywot kalekiego mężczyzny, a pozbawiony pana golem zastyka w groźnej pozie tuż nad wami.<br/>Wybuchacie śmiechem szczęśliwi, że to koniec tych makabrycznych podchodów.",
        image: "franz.jpg",
        choices: [
            {
                choice: "Przeszukujecie kryptę i wracacie do posiadłości.",
                destination: 'epilog'
            }
        ]
    },
    franz_dyplomacja: {
        title: "Rozdział IV - Krypta",
        story: "- Naprawdę? - wyraz jego twarzy zmienia się intensywnie, Franz zastanawia się, czy próbujesz go zwieść - Tak uważasz?<br/>Powoli podchodzisz bliżej.",
        image: "franz.jpg",
        choices: [
            {
                choice: "- Tak, Tod skrzywdził cię i miałeś prawo się zemścić. Powiedzmy też, że wybaczamy ci próbę wybicia naszej niewinnej grupy. Nie interesuje nas twoje kryształowe dziedzictwo, pozwól nam odejść w pokoju a nigdy więcej nas tu nie zobaczysz.",
                destination: 'epilog_pokojowy'
            },
            {
                choice: "- Tak, Tod skrzywdził cię i miałeś prawo się zemścić. Ale nic nie usprawiedliwia podstępnego mordowania niewinnych gości, giń potworze! - wykorzystaj skrócony zasięg i zaatakuj Franza.",
                destination: 'franz_zabity'
            }
        ]
    },
    franz_zabity: {
        title: "Rozdział IV - Krypta",
        story: "Wykorzystujesz skrócony dystans do Franza i dopadasz do niego zanim zdołał aktywować protokół obronny golema. Brutalna seria ciosów nożem myśliwskim kończy żywot kalekiego mężczyzny, a pozbawiony pana golem zastyka w groźnej pozie tuż nad waszą trójką.<br/>Wybuchacie śmiechem szczęśliwi, że to koniec tych makabrycznych podchodów.",
        image: "franz.jpg",
        choices: [
            {
                choice: "Przeszukujecie kryptę i wracacie do posiadłości.",
                destination: 'epilog'
            }
        ]
    },
    epilog: {
        title: "EPILOG - Koniec aktu I",
        story: "Wracacie do posiadłości obładowani łupem i w dobrych humorach. Jeśli chodzi o ciebie, znalazłeś przy zwłokach zaawansowaną technologicznie broń dystansową własnej konstrukcji - jednostrzałowy, pistolet parowy oraz zestaw kul z krasnoludzkiej stali i prochu. Ta wspaniała broń przyda się podczas polowaniu na grubego zwierza lub przy odpieraniu ataków bandytów. Szkoda tylko, że spiskowiec upadając wygiął nieco lufę, warto będzie strzelać z względnie bliskiego dystansu.<br/>Wysłano posłańców do najbliższego miasta aby zaalarmować służby porządkowe o morderstwach.<br/>Majordomus Moss został oddany w ręce władz i skazany za zdradę i współudział w morderstwach na śmierć poprzez dekapitację.<br/>Oślepiony baron-wilkołak odzyskał przytomność pod waszą nieobecność i został ewakuowany z terenu posiadłości przez swoją wierną służbę. Zrobiło ci się go nawet szkoda i masz nadzieję, że jego oko się zregeneruje.<br/>Tomasz i Kai'Sa wrócili w swoje rodzinne strony, obiecując, że wkrótce odwiedzą cię w twojej chatce w lesie przy wiosce Grubb.<br/>Niestety po przybyciu śledczych i urzędników z miasta okazało się, że Tod Landtruppet mylił się i nie jesteście z nim w żaden sposób spokrewnieni. Z racji śmierci obu braci posiadłość i faktoria została znacjonalizowana i przejęta przez koronę państwa Ore.<br/>Po długiej podróży bezpiecznie wracasz do swojej chaty na skraju lasu i spędzasz kolejne dni w spokoju i szczęśliwości. Przynajmniej do dnia pamiętnego polowania, które miało być tylko kolejnym, rutynowym polowaniem...",
        image: "epilog.jpg",
        choices: [
            {
                choice: "Nowa gra",
                destination: 'start'
            }
        ]
    },
    epilog_pokojowy: {
        title: "EPILOG - Koniec aktu I",
        story: "- Zupełnie mnie zaskoczyliście - Franz zamyślił się na dłuższą chwilę - Zgoda, przepraszam, że próbowałem was zamordować, nie myślałem trzeźwo. Zemsta zaślepiła moje rozumowanie. Możecie bezpiecznie opuścić kryptę i posiadłość.<br/>Odwracacie się aby wyjść kiedy Franz krzyczy:<br/>- Czekaj! Łowco, weź ten podarunek, za twoją mądrość.<br/>Franz wręczył ci zaawansowaną technologicznie broń dystansową własnej konstrukcji - jednostrzałowy, pistolet parowy oraz zestaw kul z krasnoludzkiej stali i prochu. Ta wspaniała broń przyda się podczas polowaniu na grubego zwierza lub przy odpieraniu ataków bandytów.<br/>Opuszczacie teren posiadłości i rozstajecie się przy rozdrożu. Tomasz i Kai'Sa wracają w swoje rodzinne strony obiecując, że wkrótce odwiedzą cię w twojej chacie przy lesie w Grubb.<br/>Po długiej podróży bezpiecznie wracasz do swojej chaty na skraju lasu i spędzasz kolejne dni w spokoju i szczęśliwości. Przynajmniej do dnia pamiętnego polowania, które miało być tylko kolejnym, rutynowym polowaniem...",
        image: "epilog.jpg",
        choices: [
            {
                choice: "Nowa gra",
                destination: 'start'
            }
        ]
    },

}

document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#button')
    var content = document.querySelector('#content')
    button.addEventListener('click', renderScene)
})
function renderScene() {
    var image = "";
    if (story[story.currentScene].image) {
        image = "<img></img>"
    }
    content.innerHTML = `
    <h1>${story[story.currentScene].title}</h1>
    <p align="justify">${story[story.currentScene].story}</p>
    ${image}
    ${getInputs()}
    <button id = "submit-button" class="btn btn-dark">Dalej</button>
`
    if (story[story.currentScene].image) {
        document.querySelector("img").src = `./imgs/joses_imgs/${story[story.currentScene].image}`
    }
    var button = document.querySelector("#submit-button");
    button.addEventListener('click', function () {
        getInputValue()
    })
}

function getInputValue() {
    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            story.currentScene = inputs[i].getAttribute('data-destination')
            renderScene();
        }
    }
}

function getInputs() {
    var input = ""
    for (var i = 0; i < story[story.currentScene].choices.length; i++) {
        input += `
        <div>
        <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
        <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
        </div>
        `
    }
    return input;
}

