// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen
$("footer").hide();
var razina = 1;
var broj_karata = 3;
$(".smiljan").click(function () {
    $(".modal").html("<h2 class='winner'>odaberi broj kartica</h2><button id='prva'>4</button> <button id='druga'>8</button>");
    $("#prva").click(function () {
        razina = "1";
        igra()
    })
    $("#druga").click(function () {
        razina = "2";
        igra()
    })
    $("a").css({
        "color": "rgb(255, 1, 70)"
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
                $(".modal").html("<div class='winner'>Bravo!</div><div class='time'><br>broj pokušaja : " + pokusaj + "</br>vrijeme igre : " + minute + " : " + sekunde + "</br>bodovi: "+bodovi+"<p><form action='' target='_self' id='bootstrapForm' method='POST'> <legend for='736982347'> <select id='ikona' style='height:30px'></select> Ime:  <input id='312289462' type='text' name='entry.312289462' class='form-control' required id='input-q1' style='height:30px'> </legend> <div class='form-group'> <input style='display:none' value='" + bodovi + "' id='60656686' type='text' name='entry.60656686' class='form-control' required> </div><input type='hidden' name='fvv' value='1'> <input type='hidden' name='fbzx' value='4484478125650916779'><input type='hidden' name='pageHistory' value='0'><br><input class='swal2-styled' type='submit'  style='background-color: rgb(235, 73, 71);border-left-color: rgb(235, 73, 71);border-right-color: rgb(235, 73, 71);' id='predaj' value='predaj'></form><br><a href='index.html' style='color:black;'>odaberite drugu igru</a></p></div>");

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
                this.$cards.each(function(k, v) {

                    frag += '<div class="card" data-id="' + v.id + '"><div class="inside">\
                    <div class="front"><img src="slike/smiljan/' + v.id + '.jpg"\
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


        if (razina == 1) {
            var cards = [{
                ime: "Smiljan",
                opis: "Smiljan, Hrvatska, rodno mjesto Nikole Tesle. Snimka Memorijalnog centra 'Nikola Tesla' u Smiljanu. Ustupljeno iz zbirke Muzeja Like.",
                id: 1,
            }, {
                ime: "Teslin transformatora (rezonancijski transformator ili zavojnica) ",
                opis: "Teslin transformatora (rezonancijski transformator ili zavojnica) - replika iz stalnog postava Memorijalnog centra 'Nikola Tesla' u Smiljanu. Teslin transformator za proizvodnju visokog napona (do nekoliko milijuna volti) i izmjenične struje visokih frekvencija (10 do 300 kHz) koji je izumio  Tesla 1891. Ispitivao je različite mogućnosti dobivanja visoke frekvencije i vrlo visokog napona i tvrdio da će električno osvjetljenje biti ekonomičnije ako se upotrijebi izmjenična električna struja sa znatno većom frekvencijom od 50 Hz (titraja u sekundi). Teslin transformator se sastoji iz primarne zavojnice od nekoliko zavoja debele žice, promjera od nekoliko centimetara do nekoliko metara. U sredini primarne zavojnice, nalazi se sekundarna zavojnica s velikim brojem zavoja tanke i dobro izolirane žice, puno manjeg promjera od primarne zavojnice. Tesline struje stvaraju se na sekundarnoj zavojnici Teslinog transformatora. Na vrh sekundarne zavojnice se stavlja prsten, obično napravljen od fleksibilnih aluminijskih cijevi, da stvara električno polje, koje omogućuje stvaranje iskri i munja izvan zavojnica.",
                id: 2
            }, {
                ime: "Gradovi u kojima je Tesla boravio",
                opis: "Gradovi u kojima je Tesla boravio napustivši rodni Smiljan. Spomen ploča pred rodnom kućom, Memorijalni centar 'Nikola Tesla', Smiljan, Hrvatska. <br>U Smiljanu je započeo školovanje, a osnovnu je školu i nižu gimnaziju dovršio u Gospiću (1862-1870). Pohađao je realnu gimnaziju u Rakovcu pored Karlovca (1870-1873), studirao na Visokoj politehničkoj školi u Grazu (1875-1878) i u Pragu (1880-1881). Službovao je u Mariboru (1878-1879), Budimpešti (1881-1882), Parizu (1882-1884) i Strasbourgu 1883. Potom 1884. odlazi u New York gdje nakon početnih poteškoća 1887. započinje njegov vrtoglavi uspon. Radio je i u Pitsbourgu, Niagari, Colorado Springsu i drugim gradovima Amerike u kojoj je boravio do kraja života.",
                id: 3
            }, {
                ime: "Spomenik Tesli",
                opis: "Spomenik Tesli (rad akademskog kipara Mile Blaževića) postavljen pred Teslinom rodnom kućom i crkvom sv. Petra i Pavla,  u sklopu Memorijalnog centra 'Nikola Tesla' u Smiljanu, Hrvatska.",
                id: 4
            }
        ]
        } else if (razina == 2) {
            var cards = [{
                ime: "Smiljan",
                opis: "Smiljan, Hrvatska, rodno mjesto Nikole Tesle. Snimka Memorijalnog centra 'Nikola Tesla' u Smiljanu. Ustupljeno iz zbirke Muzeja Like.",
                id: 1,
            }, {
                ime: "Teslin transformatora (rezonancijski transformator ili zavojnica) ",
                opis: "Teslin transformatora (rezonancijski transformator ili zavojnica) - replika iz stalnog postava Memorijalnog centra 'Nikola Tesla' u Smiljanu. Teslin transformator za proizvodnju visokog napona (do nekoliko milijuna volti) i izmjenične struje visokih frekvencija (10 do 300 kHz) koji je izumio  Tesla 1891. Ispitivao je različite mogućnosti dobivanja visoke frekvencije i vrlo visokog napona i tvrdio da će električno osvjetljenje biti ekonomičnije ako se upotrijebi izmjenična električna struja sa znatno većom frekvencijom od 50 Hz (titraja u sekundi). Teslin transformator se sastoji iz primarne zavojnice od nekoliko zavoja debele žice, promjera od nekoliko centimetara do nekoliko metara. U sredini primarne zavojnice, nalazi se sekundarna zavojnica s velikim brojem zavoja tanke i dobro izolirane žice, puno manjeg promjera od primarne zavojnice. Tesline struje stvaraju se na sekundarnoj zavojnici Teslinog transformatora. Na vrh sekundarne zavojnice se stavlja prsten, obično napravljen od fleksibilnih aluminijskih cijevi, da stvara električno polje, koje omogućuje stvaranje iskri i munja izvan zavojnica.",
                id: 2
            }, {
                ime: "Gradovi u kojima je Tesla boravio",
                opis: "Gradovi u kojima je Tesla boravio napustivši rodni Smiljan. Spomen ploča pred rodnom kućom, Memorijalni centar 'Nikola Tesla', Smiljan, Hrvatska. <br>U Smiljanu je započeo školovanje, a osnovnu je školu i nižu gimnaziju dovršio u Gospiću (1862-1870). Pohađao je realnu gimnaziju u Rakovcu pored Karlovca (1870-1873), studirao na Visokoj politehničkoj školi u Grazu (1875-1878) i u Pragu (1880-1881). Službovao je u Mariboru (1878-1879), Budimpešti (1881-1882), Parizu (1882-1884) i Strasbourgu 1883. Potom 1884. odlazi u New York gdje nakon početnih poteškoća 1887. započinje njegov vrtoglavi uspon. Radio je i u Pitsbourgu, Niagari, Colorado Springsu i drugim gradovima Amerike u kojoj je boravio do kraja života.",
                id: 3
            }, {
                ime: "Spomenik Tesli",
                opis: "Spomenik Tesli (rad akademskog kipara Mile Blaževića) postavljen pred Teslinom rodnom kućom i crkvom sv. Petra i Pavla,  u sklopu Memorijalnog centra 'Nikola Tesla' u Smiljanu, Hrvatska.",
                id: 4
            },
            {
                ime: "Replika eksperimentalne stanice u Colorado Springsu ",
                opis: "Replika eksperimentalne stanice u Colorado Springsu u kojoj su izvođeni prvi pokusi za bežični prijenos (1899-1900), Memorijalni centar 'Nikola Tesla', Smiljan, Hrvatska. ",
                id: 5
            },
            {
                ime: "Replika mlinskog kola",
                opis: "Replika mlinskog kola kojega je kao dječak Tesla konstruirao i isprobavao na potoku Vagancu te tu započeo svoj san o Niagari, Memorijalni centar 'Nikola Tesla', Smiljan, Hrvatska.",
                id: 6
            },
             {
                ime: "Demonstracijska naprava nazvana “Teslino jaje”",
                opis: "Demonstracijska naprava nazvana “Teslino jaje”, replika iz postava Memorijalnog centra 'Nikola Tesla' u Smiljanu, Hrvatska. Tesla je ovu napravu posebnog dizajna osmislio još 1888. godine, a široj javnosti prezentirao 1893. godine na Svjetskoj izložbi u Chicagu kada je pomoću nje demonstrirao djelovanje okretnog magnetskog polja – postavivši metalno (bakreno) jaje u rotirajuće elektromagnetsko polje kako bi se ono rotacijom uspravilo na svoj vrh. Ovom glasovitom napravom Tesla je privukao pažnju investitora prema mogućnostima izmjenične struje i omogućio je izradu prvih elektromotora izmjenične struje, a time i njezinu primjenu u najširem opsegu. Kao genijalan izumitelj i vrhunski demonstrator, Tesla je duhovito povezao dizajn naprave s legendom o Kolumbovom jaju kojega je trebalo postaviti na vrh, budući je Svjetska izložbi u Chicagu bila posvećena 400. obljetnici Kolumbova otkrića Amerike.",
                id: 7
            },
            {
               ime: "Prikaz važnijih događanja iz Teslina života",
               opis: "Prikaz važnijih događanja iz Teslina života. Postav u rodnoj kući Nikole Tesle, dio Memorijalnog centra 'Nikola Tesla' u Smiljanu, Hrvatska.",
               id: 8
           }
        ]
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


$(".obitelj").click(function () {

    $("a").css({
        "color": "#1b5b92"
    })
    $(".modal").html("<h2 class='winner'>Odaberi broj parova:</h2><button id='prva'>4</button> <button id='druga'>8</button>");
    $("#prva").click(function () {
        razina = "1";
        igra()
    })
    $("#druga").click(function () {
        razina = "2";
        igra()
    })
   

    function igra() {
        $("body").addClass("plavko")

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
                this.$htjeti = $(".obitelj");

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
                this.$htjeti.on("click", $.proxy(this.reset, this));
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
                bodovi = bodovi - sec
                $(".modal").html("<div class='winner'>Bravo!</div><div class='time'><br>broj pokušaja : " + pokusaj + "</br>vrijeme igre : " + minute + " : " + sekunde + "</br></br>bodovi: "+bodovi+"<p><form action='' target='_self' id='bootstrapForm' method='POST'> <legend for='736982347'> <select id='ikona' style='height:30px'></select> Ime:  <input id='312289462' type='text' name='entry.312289462' class='form-control' required id='input-q1' style='height:30px'> </legend> <div class='form-group'> <input style='display:none' value='" + bodovi + "' id='60656686' type='text' name='entry.60656686' class='form-control' required> </div><input type='hidden' name='fvv' value='1'> <input type='hidden' name='fbzx' value='4484478125650916779'><input type='hidden' name='pageHistory' value='0'><br><input class='swal2-styled' type='submit'  style='background-color: rgb(235, 73, 71);border-left-color: rgb(235, 73, 71);border-right-color: rgb(235, 73, 71);' id='predaj' value='predaj'></form><br><a href='index.html' style='color:black;'>odaberite drugu igru</a></p></div>");

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
                    $('#bootstrapForm').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLSdT0MLfC9WuatkWlKDIlgnMHk5UeKbOt6UHkHT12luyBvRs7w/formResponse?');

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
                                window.open("rez4.html", "_self");
                                // You can also redirect the user to a custom thank-you page:
                                // window.location = 'http://www.mydomain.com/thankyoupage.html'
                            }
                        })
                    })
                } 
                else if (razina == 2) {
                    $('#bootstrapForm').attr('action', 'https://docs.google.com/forms/d/e/1FAIpQLScV4kVCkSkf11k6bw_5Brm9lXOAb5z-tWqa9LtxjIQsovf61w/formResponse?');
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
                                window.open("rez5.html", "_self");
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
                $(".back").addClass("pozadina-zanimaje");
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
                    if (Math.floor((Math.random() * 2) + 1) == 1) {
                        if ($.inArray(v.name, lista_imena) == -1) {

                            frag += '<div class="card" data-id="' + v.id + '"><div class="inside">\
				<div class="front"><span>' + v.name + '</span></div>\
				<div class="back"><p class="brojevi">' + br + '</p></div></div>\
				</div>';
                            if (br < cards.length) {
                                br++;
                            };

                            lista_imena.push(v.name);


                        } else {
                            frag += '<div class="card" data-id="' + v.id + '"><div class="inside">\
				<div class="front"><span>' + v.name2 + '</span></div>\
				<div class="back"><p class="brojevi">' + br + '</p></div></div>\
				</div>';
                            if (br < cards.length) {
                                br++;
                            };

                            lista_slika.push(v.img);

                        }
                    } else {
                        if ($.inArray(v.img, lista_slika) == -1) {

                            frag += '<div class="card" data-id="' + v.id + '"><div class="inside">\
				<div class="front"><span>' + v.name2 + '</span></div>\
				<div class="back"><p class="brojevi">' + br + '</p></div></div>\
				</div>';
                            if (br < cards.length) {
                                br++;
                            };

                            lista_slika.push(v.img);


                        } else {
                            frag += '<div class="card" data-id="' + v.id + '"><div class="inside">\
				<div class="front"><span>' + v.name + '</span></div>\
				<div class="back"><p class="brojevi">' + br + '</p></div></div>\
				</div>';
                            if (br < cards.length) {
                                br++;
                            };

                            lista_imena.push(v.name);

                        }
                    }
                });
                return frag;
            }
        };


        if (razina == 1) {

            var cards = [{
                name: "INFINITIV",
                name2: "HTJETI",
                img: "slike/knjizevnik.jpg",
                img2: "slike/knizevnica.png",
                id: 1,
            }, {
                name: "PREZENT (SVRŠENI)",
                name2: "HOĆU / ĆU",
                img: "slike/doktor.jpg",
                img2: "slike/doktorica.jpg",
                id: 2
            }, {
                name: "PERFEKT",
                name2: "HTIO SAM / HTJELA SAM",
                img2: "slike/inzenjer.png",
                img: "slike/inzenjer-2.png",
                id: 3
            }, {
                name: "FUTUR I.",
                name2: "HTJET ĆU / ĆU HTJETI",
                img: "slike/medicinska_sestra.png",
                img2: "slike/medicinski_tehnicar.png",
                id: 7
            }, {
                name: "FUTUR II.",
                name2: "BUDEM HTIO",
                img2: "slike/ucitelj.png",
                img: "slike/ucitelj-2.png",
                id: 8
            }]
        } 
        else if (razina == 2) {
            var cards = [{
                name: "INFINITIV",
                name2: "HTJETI",
                img: "slike/knjizevnik.jpg",
                img2: "slike/knizevnica.png",
                id: 1,
            }, {
                name: "PREZENT (SVRŠENI)",
                name2: "HOĆU/ĆU",
                img: "slike/doktor.jpg",
                img2: "slike/doktorica.jpg",
                id: 2
            }, {
                name: "PERFEKT",
                name2: "HTIO SAM / HTJELA SAM",
                img2: "slike/inzenjer.png",
                img: "slike/inzenjer-2.png",
                id: 3
            }, {
                name: "AORIST",
                name2: "HTJEDOH",
                img2: "slike/istrazivac.png",
                img: "slike/istrazivac-2.png",
                id: 4
            }, {
                name: "IMPERFEKT",
                name2: "HOĆAH / HTIJAH",
                img: "slike/konobar.png",
                img2: "slike/konobarica.png",
                id: 5
            }, {
                name: "PLUSKVAM&shy;PERFEKT",
                name2: "BIO SAM HTIO / BILA SAM HTIJELA",
                img2: "slike/kuhar.png",
                img: "slike/kuhar-2.png",
                id: 6
            }, {
                name: "FUTUR I.",
                name2: "HTJET ĆU / ĆU HTJETI",
                img: "slike/medicinska_sestra.png",
                img2: "slike/medicinski_tehnicar.png",
                id: 7
            }, {
                name: "FUTUR II.",
                name2: "BUDEM HTIO",
                img2: "slike/ucitelj.png",
                img: "slike/ucitelj-2.png",
                id: 8
            }, {
                name: "KONDICIONAL I.",
                name2: "HTIO BIH / HTJELA BIH",
                img2: "slike/vozac.png",
                img: "slike/vozac-2.png",
                id: 9
            }, {
                name: "KONDICIONAL II.",
                name2: "BIO BIH HTIO / BILA BIH HTJELA",
                img2: "slike/blagajnik.jpg",
                img: "slike/blagajnik.gif",
                id: 10
            }]
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
        $(".brojevi").addClass("plavi_broj");


        $(".back").addClass("pozadina-htjeti");
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
    }
});