// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen
$("footer").hide();

$(".gumb").click(function () {
    sadrzaj = $(this).attr('class').split(' ')[0]
    $(".modal").html("<h2 class='winner'>odaberi broj kartica</h2><button id='prva'>4</button> <button id='druga'>8</button>");
    $("#prva").click(function () {
        razina = "1";
        igra()
    })
    $("#druga").click(function () {
        razina = "2";
        igra()
    })


    function igra() {
        $("body").addClass("crvenko")
        if (razina == 1) {
            broj_karata = 4;

        } else if (razina == 2) {
            broj_karata = 8;
        }
        $("footer").fadeIn(1000);
        $(".modal").fadeOut(1000);
        $(".modal-overlay").delay(1000).slideUp(1000);
        $(".game").show(1000);
        $("#okretanje")[0].play();
        $(".brojevi").addClass("crveni_broj")
        //localStorage.clear();
        var br = 1;
        var sec = 0;
        var pokusaj = 0;
        var vrijeme = 1;
        var bodovi = 0;
        var najbolje_vrijeme;
        var najmanji_broj_pokusaja;
        var karte;
        function pad(val) {
            return val > 9 ? val : "0" + val;
        }
        setInterval(function () {
            if (vrijeme == 1) {
                $("#seconds").html(pad(++sec % 60));
                $("#minutes").html(pad(parseInt(sec / 60, 10)));
            }
        }, 1000);

        var Memory = {
            init: function (cards) {
                this.$game = $(".game");
                this.$modal = $(".modal");
                this.$overlay = $(".modal-overlay");
                this.$biti = $(".smiljan");
                this.cardsArray = $.merge(cards, cards);
                this.shuffleCards(this.cardsArray);
                this.setup();
            },
            shuffleCards: function (cardsArray) {
                this.$cards = $(this.shuffle(this.cardsArray));
            },
            setup: function () {
                this.html = this.buildHTML();
                this.$game.html(this.html);
                this.$memoryCards = $(".card");
                this.binding();
                this.paused = false;
                this.guess = null;
                this.$cards = $(this.shuffle(this.cardsArray));
            },

            binding: function () {
                this.$memoryCards.on("click", this.cardClicked);
                this.$biti.on("click", $.proxy(this.reset, this));
            },
            // kinda messy but hey
            cardClicked: function () {
                $("#okret")[0].play();
                var _ = Memory;
                var $card = $(this);
                if (!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")) {
                    $card.find(".inside").addClass("picked");
                    if (!_.guess) {
                        _.guess = $(this).attr("data-id");
                        $(this).find('p').toggle();
                    } else if (_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")) {
                        $(".picked").addClass("matched");
                        $("#win")[0].play();
                        bodovi = bodovi + 15;
                        _.guess = null;
                        $(".matched").find('p').remove();
                        pokusaj++;

                        vrijeme = 0;
                        swal({
                            title: '' + $(this).attr('data-ime'),
                            html: '<img src="slike/' +sadrzaj+"/"+ $(this).attr('data-id') + '.jpg" class="ikone"/><p>' + $(this).attr('data-opis') + '</p>',
                            showCloseButton: true,
                            confirmButtonText: 'dalje',
                            /*allowOutsideClick: false,*/
                            /*allowEscapeKey: false*/
                            onClose: () => {
                                vrijeme = 1;
                                $.stopSound();
                            }
                        })
                    } else {
                        pokusaj++;
                        $(this).find('p').toggle();
                        _.guess = null;
                        _.paused = true;
                        setTimeout(function () {
                            $(".picked").removeClass("picked");
                            Memory.paused = false;
                            $(".brojevi").show();
                            bodovi = bodovi - 5
                        }, 1200);
                    }
                    if ($(".matched").length == $(".card").length) {
                        _.win();
                    }
                }
            },

            win: function () {
                this.paused = true;
                setTimeout(function () {
                    Memory.showModal();
                    Memory.$game.fadeOut();
                }, 1000);
            },

            showModal: function () {
                var minute = Math.floor(sec / 60);
                var sekunde = sec - minute * 60;
                this.$overlay.show();
                this.$modal.fadeIn("slow");
                var najvrijeme = localStorage.getItem('najvrijeme');

                if (najvrijeme === undefined || najvrijeme === null) {
                    najvrijeme = sec;
                    localStorage.setItem('najvrijeme', sec);
                }

                // If the user has more points than the currently stored high score then
                if (sec < najvrijeme) {
                    // Set the high score to the users' current points
                    najvrijeme = sec;
                    // Store the high score
                    localStorage.setItem('najvrijeme', sec);
                }
                // Return the high score

                var najpokusaji = localStorage.getItem('najpokusaji');

                if (najpokusaji === undefined || najpokusaji === null) {
                    najpokusaji = pokusaj;
                    localStorage.setItem('najpokusaji', pokusaj);
                }

                // If the user has more points than the currently stored high score then
                if (pokusaj < najpokusaji) {
                    // Set the high score to the users' current points
                    najpokusaji = pokusaj;
                    // Store the high score
                    localStorage.setItem('najpokusaji', pokusaj);
                }
                var naj_minute = Math.floor(najvrijeme / 60);
                var naj_sekunde = najvrijeme - naj_minute * 60;
                $(".modal").show();
                $(".modal-overlay").show();
                $(".winner").hide();
                bodovi = bodovi - sec
                $(".modal").html("<div class='winner'>Bravo!</div><div class='time'><br>broj pokušaja : " + pokusaj + "</br>vrijeme spajanja : " + minute + ":" + sekunde + "</br>bodovi: " + bodovi + "<p><br><a href='index.html' style='color:black;'>pokreni novu igru</a></p></div>");

                var target = document.getElementById("ikona");
                var emojiCount = emoji.length;

                for (var index = 0; index < emojiCount; index++) {
                    addEmoji(emoji[index]);
                }

                function addEmoji(code) {
                    var option = document.createElement('option');
                    option.innerHTML = code;
                    option.value = code;
                    target.appendChild(option);
                }


                if (localStorage.getItem("ime") != null) {
                    $('#312289462').val(localStorage.getItem("ime"))
                    $('#ikona').val(localStorage.getItem("ikona"))
                }

                if (razina == 1) {
                    $('#bootstrapForm').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLSd_F9j04sMHdgMDx6DOc0Svl4-jUBzpr97POIdI0pbKXfWHMg/formResponse?');
                    $('#bootstrapForm').submit(function (event) {
                        localStorage.setItem("ime", $('#312289462').val())
                        localStorage.setItem("ikona", $('#ikona').val())
                        localStorage.setItem('pokrenuto', "da")
                        event.preventDefault()
                        $("#predaj").hide(300)
                        $('#312289462').val(
                            document.getElementById("ikona").value + document.getElementById("312289462").value
                        )
                        var extraData = {}
                        $('#bootstrapForm').ajaxSubmit({
                            data: extraData,
                            dataType: 'jsonp', // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                            error: function () {
                                // Submit of form should be successful but JSONP callback will fail because Google Forms
                                // does not support it, so this is handled as a failure.
                                window.open("rez.html", "_self");
                                // You can also redirect the user to a custom thank-you page:
                                // window.location = 'http://www.mydomain.com/thankyoupage.html'
                            }
                        })
                    })
                }
                else if (razina == 2) {
                    $('#bootstrapForm').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLScYqT8mytAHD7xYHScmDNPLZxhF38l36YnP5lJZGHqaNfGQCA/formResponse?');
                    $('#bootstrapForm').submit(function (event) {
                        localStorage.setItem("ime", $('#312289462').val())
                        localStorage.setItem("ikona", $('#ikona').val())
                        localStorage.setItem('pokrenuto', "da")
                        event.preventDefault()
                        $("#predaj").hide(300)
                        $('#312289462').val(
                            document.getElementById("ikona").value + document.getElementById("312289462").value
                        )
                        var extraData = {}
                        $('#bootstrapForm').ajaxSubmit({
                            data: extraData,
                            dataType: 'jsonp', // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                            error: function () {
                                // Submit of form should be successful but JSONP callback will fail because Google Forms
                                // does not support it, so this is handled as a failure.
                                window.open("rez2.html", "_self");
                                // You can also redirect the user to a custom thank-you page:
                                // window.location = 'http://www.mydomain.com/thankyoupage.html'
                            }
                        })
                    })

                } else {
                    $('#bootstrapForm').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLScKOTZf6lV3VtOu9r_DmnF5D8sZ0LRXrnxXRqiHcV7eMJJdkw/formResponse?');
                    $('#bootstrapForm').submit(function (event) {
                        localStorage.setItem("ime", $('#312289462').val())
                        localStorage.setItem("ikona", $('#ikona').val())
                        localStorage.setItem('pokrenuto', "da")
                        event.preventDefault()
                        $("#predaj").hide(300)
                        $('#312289462').val(
                            document.getElementById("ikona").value + document.getElementById("312289462").value
                        )
                        var extraData = {}
                        $('#bootstrapForm').ajaxSubmit({
                            data: extraData,
                            dataType: 'jsonp', // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                            error: function () {
                                // Submit of form should be successful but JSONP callback will fail because Google Forms
                                // does not support it, so this is handled as a failure.
                                window.open("rez3.html", "_self");
                                // You can also redirect the user to a custom thank-you page:
                                // window.location = 'http://www.mydomain.com/thankyoupage.html'
                            }
                        })
                    })

                }


            },

            hideModal: function () {
                this.$overlay.hide();
                this.$modal.hide();
            },

            reset: function () {
                this.hideModal();
                this.shuffleCards(this.cardsArray);
                this.setup();
                this.$game.show(1000);
                pokusaj = 0;
                sec = 0;
                br = 1;
                $(".back").addClass("pozadina-biti");
            },

            // Fisher--Yates Algorithm -- http://bost.ocks.org/mike/shuffle/
            shuffle: function (array) {
                var counter = array.length,
                    temp, index;
                // While there are elements in the array
                while (counter > 0) {
                    // Pick a random index
                    index = Math.floor(Math.random() * counter);
                    // Decrease counter by 1
                    counter--;
                    // And swap the last element with it
                    temp = array[counter];
                    array[counter] = array[index];
                    array[index] = temp;
                }
                return array;
            },

            buildHTML: function () {
                var frag = '';
                br = 1;
                var lista_slika = [];
                var lista_imena = [];
                this.$cards.each(function (k, v) {

                    frag += '<div class="card" data-id="' + v.id + '" data-opis="' + v.opis + '" data-ime="' + v.ime + '"><div class="inside">\
                    <div class="front"><img src="slike/'+sadrzaj +"/"+ v.id + '.jpg"\
                    alt="' + v.id + '" data-ime="' + v.name + '" /></div>\
                    <div class="back"><p class="brojevi">' + br + '</p></div></div>\
                    </div>';
                    if (br < cards.length) {
                        br++;
                    };
                });
                return frag;
            }
        };
        if (sadrzaj == "smiljan") {
            var cards = [{
                ime: "Smiljan",
                opis: "Smiljan, Hrvatska, rodno mjesto Nikole Tesle. Snimka Memorijalnog centra 'Nikola Tesla' u Smiljanu. Ustupljeno iz zbirke Muzeja Like.",
                id: 1,
            }, {
                ime: "Teslin transformator (rezonancijski transformator ili zavojnica)",
                opis: "Teslin transformator (rezonancijski transformator ili zavojnica), replika iz stalnog postava Memorijalnog centra „Nikola Tesla“ u Smiljanu, Hrvatska. Transformator za proizvodnju visokog napona (do nekoliko milijuna volti) i izmjenične struje visokih frekvencija (10 do 300 kHz) Tesla je izumio 1891. godine. Ispitivao je različite mogućnosti dobivanja visoke frekvencije i vrlo visokog napona te tvrdio da će električno osvjetljenje biti ekonomičnije ako se upotrijebi izmjenična električna struja sa znatno većom frekvencijom od 50 Hz (titraja u sekundi). Teslin transformator se sastoji od primarne zavojnice s nekoliko zavoja debele žice, promjera nekoliko centimetara do nekoliko metara. U sredini primarne nalazi se sekundarna zavojnica s velikim brojem zavoja tanke i dobro izolirane žice, puno manjeg promjera od primarne zavojnice. Tesline struje stvaraju se na sekundarnoj zavojnici transformatora. Na vrh sekundarne zavojnice se stavlja prsten (obično napravljen od fleksibilnih aluminijskih cijevi) kako bi  proizveo električno polje koje omogućuje stvaranje iskri i munja izvan zavojnica.",
                id: 2
            }, {
                ime: "Gradovi u kojima je Tesla boravio",
                opis: "Gradovi u kojima je Tesla boravio napustivši rodni Smiljan. Spomen ploča pred rodnom kućom, Memorijalni centar 'Nikola Tesla', Smiljan, Hrvatska.U Smiljanu je započeo školovanje, a osnovnu školu i nižu gimnaziju je dovršio u Gospiću (1862.-1870.). Pohađao je realnu gimnaziju u Rakovcu pored Karlovca (1870.-1873.), studirao na Visokoj politehničkoj školi u Grazu (1875.-1878.) i u Pragu (1880.-1881). Službovao je u Mariboru (1878.-1879.), Budimpešti (1881.-1882.), Parizu (1882.-1884.) i Strasbourgu 1883. godine. Potom 1884. odlazi u New York, gdje nakon početnih poteškoća 1887. započinje njegov vrtoglavi uspon. Radio je i u Pittsburghu, Niagari, Colorado Springsu i drugim gradovima. U Americi je boravio do kraja života.",
                id: 3
            }, {
                ime: "Spomenik Tesli ",
                opis: "Spomenik Tesli (rad akademskog kipara Mile Blaževića) postavljen pred Teslinom rodnom kućom i crkvom sv. Petra i Pavla, u sklopu Memorijalnog centra 'Nikola Tesla' u Smiljanu, Hrvatska.",
                id: 4
            },
            {
                ime: "Replika eksperimentalne stanice u Colorado Springsu",
                opis: "Replika eksperimentalne stanice u Colorado Springsu u kojoj su izvođeni prvi pokusi za bežični prijenos (1899.-1900.), Memorijalni centar 'Nikola Tesla', Smiljan, Hrvatska.",
                id: 5
            },
            {
                ime: "Replika mlinskog kola",
                opis: "Replika mlinskog kola koje je kao dječak Tesla konstruirao i isprobavao na potoku Vagancu te tu započeo svoj san o Niagari, Memorijalni centar 'Nikola Tesla', Smiljan, Hrvatska.",
                id: 6
            },
            {
                ime: "Demonstracijska naprava nazvana “Teslino jaje”",
                opis: "Demonstracijska naprava nazvana “Teslino jaje”, replika iz postava Memorijalnog centra „Nikola Tesla“ u Smiljanu, Hrvatska. Tesla je ovu napravu posebnog dizajna osmislio još 1888., a široj javnosti prezentirao 1893. godine na Svjetskoj izložbi u Chicagu kada je pomoću nje demonstrirao djelovanje okretnog magnetskog polja postavivši metalno (bakreno) jaje u rotirajuće elektromagnetsko polje kako bi se rotacijom uspravilo na svoj vrh. Ovom glasovitom napravom Tesla je privukao pažnju investitora na mogućnosti izmjenične struje i omogućio izradu prvih elektromotora izmjenične struje, a time i njezinu primjenu u najširem opsegu. Kao genijalan izumitelj i vrhunski demonstrator, Tesla je duhovito povezao dizajn naprave s legendom o Kolumbovom jajetu koje je trebalo postaviti na vrh, budući je Svjetska izložba u Chicagu na kojoj je uređaj prikazan bila posvećena 400. obljetnici Kolumbova otkrića Amerike.",
                id: 7
            },
            {
                ime: "Prikaz važnijih događanja iz Teslina života",
                opis: "Prikaz važnijih događanja iz Teslina života. Postav u rodnoj kući Nikole Tesle, dio Memorijalnog centra 'Nikola Tesla' u Smiljanu, Hrvatska.",
                id: 8
            }
            ]
        }
        else if (sadrzaj=="obitelj"){
            var cards = [{
                ime: "Milutin Tesla (Raduč, 1819. - Gospić, 1879.) - Nikolin otac",
                opis: "Bio je ugledan pravoslavni svećenik, vrlo obrazovan čovjek širokih interesa. Prema obiteljskoj vojničkoj tradiciji, zajedno s bratom Jozefom pohađao je austrijsku časničku školu, ali je odustao od vojne službe i priklonio se svećenstvu. Plemenite naravi, zalagao se za zajedničko dobro i opći prosperitet. Čvrsto je vjerovao kako je znanje temelj napretka te je posebnu pažnju poklanjao odgoju i obrazovanju svoje djece. Želeći Nikoli osnažiti um, svakodnevno ga je poučavao i zadavao mu raznovrsne vježbe memorije poput ponavljanja rečenica i računanja napamet.",
                id: 1,
            }, 
            {
                ime: "Lička torba",
                opis: "Takvu je torbu izradila majka Georgina Tesla Mandić (Tomingaj ? – Gospić 1892) za Nikolu kada ga je spremala za studij u Graz, a on ju je kao najveću dragocjenost čuvao do kraja života (original se čuva u Teslinom muzeju u Beogradu). Fotografija Nikoline majke nije sačuvana. Georgina, koju su od milja zvali Đuka, snažno je utjecala na Nikolin odgoj. Potjecala je iz ugledne obitelji u kojoj je izumiteljstvo bilo tradicija. Tesla je zapisao da je velik dio njihove odjeće i namještaja bio njenih ruku djelo. Vodeći domaćinstvo usavršila je mnoge zastarjele alate i naprave koji se u tom lijepom, ali zabačenom kraju nisu mijenjale stoljećima. Kako bi stvorila ugodan dom za brojnu obitelj, svakoga je dana ustajala zorom te s puno predanosti i žara radila sve do kasno u noć. Nikola se divio majčinoj vještini i dijelio s njom izumiteljski dar.",
                id: 2
            },
            {
                ime: "Josef Tesla",
                opis: "Josef Tesla, Nikolin stric, profesor matematike.",
                id: 3
            }, {
                ime: "Obiteljska fotografija",
                opis: "Obiteljska fotografija, prva na kojoj je Nikola snimljen još kao dječak.",
                id: 4
            }, {
                ime: "Angelina Trbojević",
                opis: "Angelina Trbojević, Nikolina sestra.",
                id: 5
            },
            {
                ime: "Marica Kosanović",
                opis: "Marica Kosanović, Nikolina sestra.",
                id: 6
            },
            {
                ime: "Milka Glumičić",
                opis: "Milka Glumičić, Nikolina sestra.",
                id: 7
            },
            {
                ime: "Pajo Mandić”",
                opis: "Pajo Mandić, Nikolin ujak koji ga je pomogao školovati.",
                id: 8
            }
            ]
        }
        else if (sadrzaj=="skolovanje"){
            var cards = [{
                ime: "Gospić (Hrvatska) – panorama s novog mosta",
                opis: "Nikola Tesla je školovanje započeo u rodnome Smiljanu, ali se nakon tragedije, pogibije Nikolinog starijeg brata Dane, obitelj 1862. godine preselila u Gospić. Tu je Tesla nastavio pohađati osnovnu školu, a potom i nižu realnu gimnaziju (1866.-1870.). Od mnoštva stvari koje su ga činile nesretnim u to doba, Teslu je posebno užasavala pomisao da se od njega očekuje krenuti stopama oca i ujaka u svećenstvo. Nemogućnost da ugodi ocu istinski ga je mučila. Gubeći samopouzdanje, mučen trajnim nemirom, s vremenom je razvijao neobične sklonosti i navike. Sve što je radio moralo je biti djeljivo s brojem tri. Brojio je korake u šetnji, komadiće hrane na tanjuru, pribor na stolu, zapremnine posuda, baš sve što ga je okruživalo. I kasnije u životu prema broju tri usklađivao je ono što je radio i svijet koji ga je okruživao. Ako ne bi u tome uspio, ponavljao je sve iz početka, makar trajalo satima. Krhka ravnoteža njegova svijeta počivala je na harmoniji broja tri i donosila mu kratkotrajni spokoj.",
                id: 1,
            }, 
            {
                ime: "Kuća u kojoj je stanovala obitelj Tesla u Gospiću",
                opis: "Sedmogodišnji Nikola teško je proživljavao gubitak brata i odlazak iz Smiljana. Upravo je bio završio prvi razred i, kako je sam kasnije zapisao, u većem se nepoznatom gradu osjećao poput zatočenika. Vedrina i opuštenost dotadašnjeg odrastanja nepovratno su nestale. Izgubivši najstarije dijete koje su smatrali posebno darovitim, majka i otac utonuli su u tugu. Premda se silno trudio zadobiti roditeljsku ljubav i pažnju, Nikola je osjećao kako ne dopire do njih. Usamljen i nesretan, u to vrijeme je tražio utjehu u knjigama. U bogatoj obiteljskoj biblioteci otkrio je užitak čitanja. Neočekivano, dječakova nova strast razljutila je oca. Strahovao je za Nikolino zdravlje. Usprkos zabrani dječak je izrađivao lojanice i čitao krišom, najčešće čitavu noć, sve do svitanja. Marljiv i nadaren istaknuo se mnogo puta, a posebno prigodom svečanog puštanja u pogon nove vatrogasne štrcaljke. Na vrhuncu događaja, pred očima uvaženih gostiju i velikog broja uzvanika, štrcaljka je potpuno zatajila. Među prisutnim mnoštvom samo je Nikola otkrio rješenje problema. Hitro je zagazio u vodu i spretno osposobio dovodnu cijev, postavši junak dana.",
                id: 2
            },
            {
                ime: "Niža realna gimnazija u Gospiću",
                opis: "Školovanje u Gospiću potaklo je kod Tesle maštu mladog izumitelja, naročito kada je u školi otkrio izložene makete turbina i vodenih kola. Ushićen, izrađivao je vlastite modele i iskušavao ih na obližnjem potoku. Doznavši o veličanstvenim slapovima Niagare, nije prestajao razmišljati o divovskom kotaču kojim bi ukrotio snagu vodopada. U nižim razredima gimnazije razvio je sklonost matematici. Nasuprot tome, satovi crtanja su mu zadavali takav problem da je jednom i otac morao intervenirati. U slobodno vrijeme hvatao je i hranio ptice, posebno mlade orlove i zanosio se idejom o letećem stroju. Načinio je i maketu s rotacijskom osovinom i pomičnim krilima. Maštao je kako će konstruirati uređaj pokretan vakuumom neograničene snage. U glavi je jasno vidio sliku stroja sa svim detaljima te ga iskušavao u mislima pokrećući njegove dijelove.",
                id: 3
            }, {
                ime: "Viša kraljevska gimnazija u Karlovcu",
                opis: 'Školovanje je nastavio u karlovačkoj realnoj gimnaziji (1870.-1873.). Boravio je u obitelji očeve sestre Stanke i njezina supruga, pukovnika Brankovića. Tri godine koje je proveo u njihovoj kući ostale su mu u posebnom sjećanju. Zapisao je: "Ni u tvrđavi usred rata nije bilo čvršće discipline. Hranili su me kao kanarinca! Imao sam strahovit apetit i patio poput Tantala, ali sam živio u atmosferi profinjenosti i umjetničkog ukusa, što je bilo prilično neobično za to vrijeme i onakve uvjete". Već tada je intenzivno pokušavao razvijati neke ideje. Strastven u svemu, neprekidnim je naprezanjem prelazio svoje granice i dovodio se u stanje potpune iscrpljenosti pa ga je u razvijanju ideja prekinula bolest. Uz zamišljene slike uznemiravali su ga i bljeskovi svjetlosti koji su se pojavljivali u njegovoj glavi čak i kada bi sklopio oči. Ta čudna i neobjašnjiva iskustva su Teslu pratila od ranoga djetinjstva. Javljala su se potaknuta uzbuđenjem ili bi ih pokrenula pojava nove ideje koja mnogo obećava. Sam je zapisao: "Kad zatvorim oči, uvijek vidim pozadinu vrlo tamne i jednolične modre boje, nalik na nebo za vedre noći, ali bez zvijezda. Za nekoliko sekunda to polje zatreperi bezbrojnim svjetlucavim mrljama zelene boje u nekoliko slojeva koje se primiču. Zatim se s desne strane pojavi lijepa šara od dvije skupine usporednih gustih crta koje se okomito presijecaju, a ima ih u svim bojama, no prevladava žutozelena i zlatna…". Ponekad je oko sebe vidio čitav zrak ispunjen plamenim jezicima i osjećao kao da mu mozak gori. Premda je ležao u mraku s hladnim oblogom na glavi, vidio je svjetlost, kao da je u njemu maleno Sunce.',
                id: 4
            }, {
                ime: "Martin Sekulić, (Lovinac 1833. – Zagreb 1905.)",
                opis: "Nikolin profesor u gimnaziji u Karlovcu, vrsni fizičar i matematičar. Bio je član ondašnje Jugoslavenske akademije znanosti i umjetnosti u Zagrebu (danas Hrvatska akademija znanosti i umjetnosti) i objavljivao je svoje znanstvene radove u najprestižnijim fizikalnim časopisima tadašnje Europe. Sekulić je bio ključna osoba u ranom oblikovanju mladog Tesle i jedina osoba iz razdoblja školovanja koje se Tesla sa zahvalnošću prisjećao u svojim memoarskim zapisima. Mladog su Teslu u karlovačkoj gimnaziji osobito privlačili satovi fizike i eksperimentalni rad profesora Sekulića, koji je uz svoja predavanja osmišljavao posebne pokuse i nove instrumente. Čudesnim eksperimentima koji su u Tesli budili ushićenje, Sekulić je demonstrirao tajanstvene fenomene elektriciteta. Upravo to bilo je ono za čim je Tesla žudio. Sve se više oduševljavao fizikom, postupno širio svoja znanja o elektricitetu i bivao sve odlučniji da se nastavi time baviti. ",
                id: 5
            },
            {
                ime: "Visoka tehnička škola Grazu na kojoj je studirao od 1875. do 1878. godine",
                opis: 'Po zavr&scaron;etku gimnazije u Karlovcu, Tesla je strepio od povratka kući u Gospić znajući za čvrstu očevu nakanu da ga usmjeri svećeničkom zvanju. Uskoro je te&scaron;ko obolio jer se Gospićem iznenada u to vrijeme pro&scaron;irila epidemija kolere. Bez izgleda za pobolj&scaron;anjem, ležao punih devet mjeseci. Obitelj je strepila od najgoreg. Tada mu je otac obećao: "Pohađati će&scaron; najbolje studije tehnike." Priskrbio mu je stipendiju za studij na Visokoj politehničkoj &scaron;koli u Grazu (“K.k. TechnischeHochschule Graz”). To je potaknulo Teslino čudesno ozdravljenje. Iz svog doma na studije je oti&scaron;ao pun želja i samopouzdanja. Govorio je nekoliko jezika i bio izvanredno pripremljen za studij. Premda je oduvijek sanjao o izumiteljstvu, isprva je upisao matematiku i fiziku na sveučili&scaron;tu Joanneum u Grazu (“Universit&auml;t Joanneum Graz”) s namjerom da postane profesor, slijedeći primjer strica Josefa, profesora matematike. Na fakultetu se zainteresirao za ideju elektromotora bez kolektora, za koju se smatralo da je neizvediva. Nepokolebljiv, odlučio je pronaći rje&scaron;enje i od tada nije prestajao misliti o tome. Neumorno je učio svakoga dana od tri ujutro do jedanaest uvečer, također nedjeljom i praznikom. Položio je s najvećim uspjehom ispite na kraju prve godine. Uskoro su počeli ozbiljni problemi sa stipendijom. U to se vrijeme ukidaju stipendije Vojne Krajine, a njegov otac nije imao dovoljno novca da mu plati nastavak &scaron;kolovanja. Nesigurne budućnosti, razočaran nakon toliko odricanja, vi&scaron;e nije vidio smisao napornog učenja. Krajem druge godine boravka u Grazu zanemario je studije. Strastven u svemu, čitave je dane provodio s dokonim dru&scaron;tvom u Botaničkom vrtu i redovito posjećivao zabave na kojima je ostajao do kasno u noć. Sjajno je igrao biljar, a najvi&scaron;e od svega obuzela ga je strast za kartanjem i kockom. On, izvrstan primjer odricanja i savr&scaron;ene kontrole nad svim svojim aktivnostima, toliko se predavao provodu da je na trećoj godini prestao pohađati predavanja.',
                id: 6
            },
            {
                ime: "Indukcijski motor",
                opis: 'Tesla je uzalud poku&scaron;avao osigurati novac za nastavak studija strojarstva u Beču ili Brnu. Tražeći izlaz, kratko je boravio u Mariboru, a zatim se vraća u Gospić. Napetosti s ocem dosegle su vrhunac. Majka je bolje razumjela Nikolinu narav. Jednoga dana, kada je potro&scaron;io znatnu svotu novca i želio dalje kartati, dala mu je svežanj novčanica i rekla: "Idi, provedi se. Čim prije izgubi&scaron; sve &scaron;to imamo, tim bolje." Vjerovala je u njega i znala da svaki kraj može značiti i novi početak. I zaista, snagom volje Tesla je promijenio tijek svoga života. Prema očevoj želji zaputio se na studije u Prag. Na Sveučili&scaron;tu Karla i Ferdinanda u Pragu (“Universitas Carolinae&ndash;Ferdinandeae Pragensis”) izučavao je matematiku, eksperimentalnu fiziku i filozofiju. Na studiju u Pragu izvanredno je napredovao i stekao znanja na kojima će temeljiti svoj budući izumiteljski rad. Kada obitelj vi&scaron;e nije mogla podupirati njegove studije, u dobi od dvadeset pet godina odlučio je naći posao koji će ga približiti inženjerskoj praksi.U to su vrijeme prvi telefonski sustavi stizali iz Amerike u Europu. Zaposlio se u novoosnovanoj kompaniji za uvođenje telefonske centrale u Budimpe&scaron;ti. Započev&scaron;i skromno kao tehnički crtač, Nikola se vrlo brzo istaknuo s nekoliko izuma za pojačanje glasa. Kako bi se mogao usredotočiti na vlastite izume, uskoro je dao otkaz. Jo&scaron; od studija u Grazu potpuno ga je zaokupljala mogućnost izrade motora izmjenične struje bez kolektora, za koju se smatralo da je neizvediva. Jednoga popodneva dok je &scaron;etao gradskim parkom u Budimpe&scaron;ti i recitirao odlomak iz Goetheova "Fausta", iznenada je doživio prosvjetljenje. Do&scaron;ao je do otkrića okretnog magnetskog polja i načina kako se ono primjenjuje u indukcijskom motoru. U mislima je konačno oblikovao jasnu sliku uređaja koju je tako dugo tražio.',
                id: 7
            },
            {
                ime: "Tesla u Parizu, u Edisonovoj pariškoj podružnici za instalaciju rasvjetnog sustava",
                opis: "Ispunjen vjerom u vlastite stvaralačke moći i sa preporukom ravnatelja kompanije iz Budimpešte,  Tesla odlazi u Pariz. Tamo se po uzoru na američko iskustvo razvijala podružnica za instalaciju rasvjetnog sustava američkog izumitelja i poduzetnika Thomasa Alve Edisona. Zaposlivši se u Edisonovoj pariškoj podružnici, stječe veliko iskustvo i prikuplja praktična znanja. Stoga je bio poslan u Strasbourg gdje je uspješno riješio velike probleme nastale pri gradnji elektrane. Za potrebe Edisonove tvrtke radio je s istosmjernim strujama, konstruirao automatski regulator i poboljšavao dinamo za rasvjetne sustave, ali je nalazio vremena razvijati i svoj izmjenični sustav. Izradio je maleni indukcijski motor čudesne jednostavnosti i zbog tajnosti ga sa zadovoljstvom iskušavao skrivena u ormaru Znao je da se radi o veličanstvenom izumu. Sada se morao pobrinuti da za svoj genijalan izum zainteresira znanstvenike i investitore. Nadao se i da će mu Edisonova tvrtka isplatiti bonus za uspješan posao u strasburškoj elektrani, ali nagrada je izostala. Odlučan u nakani da se bori kako bi svom izumu omogućio afirmaciju, uoči svog dvadeset osmog rođendana odlučuje otići u Ameriku, te kupuje kartu iz luke Le Havre za New York.",
                id: 8
            }
            ]
        }
        else if (sadrzaj=="rat"){}
        else if (sadrzaj=="izumi"){}
        else if (sadrzaj=="znamenita"){}
        else if (sadrzaj=="godine"){}

        if (razina == 1) {

            cards = cards.slice(0, 4)

        }

        function shuffle(array) {
            var currentIndex = array.length,
                temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        cards = shuffle(cards);

        cards = cards.slice(0, broj_karata);

        Memory.init(cards);
        $(".brojevi").addClass("crveni_broj");

        if (razina == 1) {
            $(".card").css({
                "width": "25%",
                "height": "50%"
            })
        } else if (razina == 2) {
            $(".card").css({
                "width": "25%",
                "height": "25%"
            })
        }

        $(".back").addClass("pozadina-biti");
    }
});

