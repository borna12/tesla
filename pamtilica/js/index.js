// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen
$("footer").hide();
var razina = 1;
var broj_karata = 3;



$("#prva").click(function() {
    razina = "1";
    igra()
})
$("#druga").click(function() {
    razina = "2";
    igra()
})
$("#treca").click(function() {
    razina = "3";
    igra()
})


function igra() {

    if (razina == 1) {
        broj_karata = 4;

    } else if (razina == 2) {
        broj_karata = 8;
    } else {
        broj_karata = 12
    }
    $("#okretanje")[0].play();

    $("footer,.disclaimer").fadeIn(1000);
    $(".modal").fadeOut(1000);
    $(".modal-overlay").delay(1000).slideUp(1000);
    $(".game").show("slow");
    var br = 1;
    var sec = 0;
    var pokusaj = 0;
    var vrijeme = 1;

    var najbolje_vrijeme;
    var najmanji_broj_pokusaja;
    var karte;
    var bodovi = 0;



    function pad(val) {
        return val > 9 ? val : "0" + val;
    }
    setInterval(function() {
        if (vrijeme == 1) {
            $("#seconds").html(pad(++sec % 60));
            $("#minutes").html(pad(parseInt(sec / 60, 10)));
        }
    }, 1000);

    var Memory = {
        init: function(cards) {
            this.$game = $(".game");
            this.$modal = $(".modal");
            this.$overlay = $(".modal-overlay");
            this.$zanimanja = $(".zanimanja");
            this.$ljudi = $(".ljudi");
            this.cardsArray = $.merge(cards, cards);
            this.shuffleCards(this.cardsArray);
            this.setup();
        },

        shuffleCards: function(cardsArray) {
            this.$cards = $(this.shuffle(this.cardsArray));
        },

        setup: function() {
            this.html = this.buildHTML();
            this.$game.html(this.html);
            this.$memoryCards = $(".card");
            this.binding();
            this.paused = false;
            this.guess = null;
            this.$cards = $(this.shuffle(this.cardsArray));
        },

        binding: function() {
            this.$memoryCards.on("click", this.cardClicked);
            this.$zanimanja.on("click", $.proxy(this.reset, this));
        },
        // kinda messy but hey
        cardClicked: function() {
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


                    switch ($(this).find('img').attr('alt')) {
                        case "1":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;
                            });
                            break;
                        case "2":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "3":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "4":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "5":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "6":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "7":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "8":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "9":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "10":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "11":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "12":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "13":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "14":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "15":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "16":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">jat</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);"></h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "17":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "18":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "19":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                        case "20":
                            vrijeme = 0;
                            swal({
                                title: 'Inicijal sa slike je slovo: <span style="color:rgb(104, 0, 2)">' + $(this).find('img').attr('data-ime') + '</span>',
                                html: '<h2 style="font-family:Gla; font-size:50px;text-shadow: 0px 0px 1px rgb(104, 0, 2);">' + $(this).find('img').attr('data-ime').toLowerCase() + '</h2><br><img src="' + $(this).find('img').attr('src') + '" class="ikone"/><br>',
                                showCloseButton: false,
                                allowOutsideClick: false,
                                confirmButtonText: 'dalje',
                                confirmButtonColor: "rgb(104, 0, 2)",
                            });
                            $('.swal2-confirm').click(function() {
                                vrijeme = 1;

                            });
                            break;
                    };


                } else {
                    bodovi = bodovi - 5
                    pokusaj++;
                    $(this).find('p').toggle();
                    _.guess = null;
                    _.paused = true;
                    setTimeout(function() {
                        $(".picked").removeClass("picked");
                        Memory.paused = false;
                        $(".brojevi").show();
                    }, 1200);
                }
                if ($(".matched").length == $(".card").length) {
                    _.win();
                }
            }
        },

        win: function() {
            this.paused = true;
            setTimeout(function() {
                Memory.showModal();
                Memory.$game.fadeOut();
            }, 1000);
        },

        showModal: function() {
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

            $(".modal").html("<div class='winner'>Bravo!</div><div class='time'><br>broj pokušaja: " + pokusaj + "</br>vrijeme igre: " + minute + ":" + sekunde + "</br><p><form id='input-form' action='' method='POST' target='no-target'><br><select id='ikona' style='height:30px'></select><label for='ime'>Ime : </label><input id='input-q1' name='q1'><br> <label for='bodovi'>Bodovi : </label><input id='input-q2' placeholder='q2' name='q2' value='" + bodovi + "' disabled style='display:none'> <label for='bodovi'>" + bodovi + "</label><br><button id='form-submit' type='submit' class='zivotinje' disabled='true'>predaj rezultat</button> </form>    <iframe src='#' id='no-target' name='no-target' style='visibility:hidden;display:none'></iframe><a href='index.html' style='color:rgb(104, 0, 2);'>igraj ponovno</a></p></div>");


            $(' #input-q1').keyup(function() {
                $('#form-submit').prop('disabled', this.value == "" ? true : false);
            })
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
                $('#input-q1').val(localStorage.getItem("ime"))
                $('#ikona').val(localStorage.getItem("ikona"))
                $('#form-submit').prop('disabled', this.value == "true");
            }

            if (razina == 1) {
                $('#input-form').one('submit', function() {

                    $("#form-submit").hide(300);
                    localStorage.setItem('ikona', $('#ikona').val())
                    localStorage.setItem('ime', $('#input-q1').val())
                    localStorage.setItem('pokrenuto', "da")
                    var inputq1 = encodeURIComponent($('#ikona').val() + " " + $('#input-q1').val());
                    var inputq2 = encodeURIComponent($('#input-q2').val());
                    var q1ID = "entry.412821582";
                    var q2ID = "entry.902512960";

                    var baseURL =
                        'https://docs.google.com/forms/d/e/1FAIpQLSdm8V8OyxQ0fP6L4V6ap1e-n2tnQwEa7XPDTW3mt7l9QCPSLw/formResponse?';
                    var submitRef = '&submit=970054585833720596';
                    var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + submitRef);
                    console.log(submitURL);
                    $(this)[0].action = submitURL;
                    setTimeout(
                        function() {
                            window.location.href = 'rez.html';
                        }, 2000);
                });
            } else if (razina == 2) {
                $('#input-form').one('submit', function() {
                    $("#form-submit").hide(300);
                    localStorage.setItem('ikona', $('#ikona').val())
                    localStorage.setItem('ime', $('#input-q1').val())
                    localStorage.setItem('pokrenuto', "da")
                    var inputq1 = encodeURIComponent($('#ikona').val() + " " + $('#input-q1').val());
                    var inputq2 = encodeURIComponent($('#input-q2').val());
                    var q1ID = "entry.412821582";
                    var q2ID = "entry.902512960";

                    var baseURL =
                        'https://docs.google.com/forms/d/e/1FAIpQLSfZnhmlt8OxPLloeWtZCuEnALCcnncXj3-TZftsggU0KkOMzA/formResponse?';
                    var submitRef = '&submit=970054585833720596';
                    var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + submitRef);
                    console.log(submitURL);
                    $(this)[0].action = submitURL;
                    setTimeout(
                        function() {
                            window.location.href = 'rez2.html';
                        }, 2000);
                });
            } else {
                $('#input-form').one('submit', function() {
                    $("#form-submit").hide(300);
                    localStorage.setItem('ikona', $('#ikona').val())
                    localStorage.setItem('ime', $('#input-q1').val())
                    localStorage.setItem('pokrenuto', "da")
                    var inputq1 = encodeURIComponent($('#ikona').val() + " " + $('#input-q1').val());
                    var inputq2 = encodeURIComponent($('#input-q2').val());
                    var q1ID = "entry.412821582";
                    var q2ID = "entry.902512960";

                    var baseURL =
                        'https://docs.google.com/forms/d/e/1FAIpQLSftYdvVSPtiHzJyfHHKA6_tYU6h5AOukCnceBsBzPxWEO58zA/formResponse?';
                    var submitRef = '&submit=970054585833720596';
                    var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + submitRef);
                    console.log(submitURL);
                    $(this)[0].action = submitURL;
                    setTimeout(
                        function() {
                            window.location.href = 'rez3.html';
                        }, 2000);
                });
            }

        },

        hideModal: function() {
            this.$overlay.hide();
            this.$modal.hide();
        },

        reset: function() {
            this.hideModal();
            this.shuffleCards(this.cardsArray);
            this.setup();
            this.$game.show("slow");
            pokusaj = 0;
            sec = 0;
            br = 1;
            $(".back").addClass("pozadina-ljudi");
        },

        // Fisher--Yates Algorithm -- http://bost.ocks.org/mike/shuffle/
        shuffle: function(array) {
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

        buildHTML: function() {

            var frag = '';
            br = 1;

            this.$cards.each(function(k, v) {

                frag += '<div class="card" data-id="' + v.id + '"><div class="inside">\
				<div class="front"><img src="' + v.img + '"\
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

    var cards = [{
        name: "I",
        img: "slike/33.jpg",
        id: 1
    }, {
        name: "B",
        img: "slike/50.jpg",
        id: 2
    }, {
        name: "K",
        img: "slike/322.jpg",
        id: 3
    }, {
        name: "T",
        img: "slike/328a.jpg",
        id: 4
    }, {
        name: "P",
        img: "slike/328b.jpg",
        id: 5
    }, {
        name: "G",
        img: "slike/332a.jpg",
        id: 6
    }, {
        name: "V",
        img: "slike/144.jpg",
        id: 7
    }, {
        name: "B",
        img: "slike/157.jpg",
        id: 8
    }, {
        name: "I",
        img: "slike/202.jpg",
        id: 9
    }, {
        name: "O",
        img: "slike/329.jpg",
        id: 10
    }, {
        name: "N",
        img: "slike/330.jpg",
        id: 11
    }, {
        name: "B",
        img: "slike/358.jpg",
        id: 12
    }, {
        name: "P",
        img: "slike/394.jpg",
        id: 13
    }, {
        name: "A",
        img: "slike/438.jpg",
        id: 14
    }, {
        name: "K",
        img: "slike/449.jpg",
        id: 15
    }, {
        name: "Ê (jat)",
        img: "slike/492.jpg",
        id: 16
    }, {
        name: "G",
        img: "slike/515a.jpg",
        id: 17
    }, {
        name: "I",
        img: "slike/516.jpg",
        id: 18
    }, {
        name: "Z",
        img: "slike/535.jpg",
        id: 19
    }, {
        name: "S",
        img: "slike/547.jpg",
        id: 20
    }]

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


    $(".back").addClass("pozadina-ljudi");
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
    } else if (razina == 3) {
        $(".card").css({
            "width": "16.66666%",
            "height": "25%"
        })
    }
}