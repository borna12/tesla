var slika, naslov, retci, stupci, opis;

function broj() {
    $("#broj-puzzla").html($("#retci").val() * $("#stupci").val())
}

$(document).ready(function() {
    $(".modal").fadeIn("slow");
    $(".footer").fadeIn("slow");
    $("#broj-puzzla").html(retci * stupci)
    broj();
    $('select').css({
        'font-size': '18px',
        'font-family': "sans-serif"
    });
    promijeni_jezik()
});


// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it

function promijeni_jezik() {
    if (localStorage.getItem("jezik") == null) {
        localStorage.setItem('jezik', 'hr')
    }
    if (localStorage.getItem("jezik") == "hr") {

        $(".hrvatski").css({
            "opacity": "1"
        })
        $(".engleski").css({
            "opacity": "0.5"
        })

        $(".hr").show()
        $(".eng").hide()

    } else {
        localStorage.setItem('jezik', 'eng')
        $(".engleski").css({
            "opacity": "1"
        })
        $(".hrvatski").css({
            "opacity": "0.5"
        })
        $(".eng").show()
        $(".hr").hide()
    }
}


function stvori() {
    if (naslov == "Nikola Tesla – Pop Art portret") {
        opis = ""
    } else if (naslov == "Nikola Tesla – portret snimljen u dobi od oko 40 godina") {
        opis = ""
    } else if (naslov == "Nikola Tesla – portret snimljen u dobi od 38 godina") {
        opis = ""
    } else if (naslov == "Memorijalni centar <em>Nikola Tesla</em> u rodnom mjestu izumitelja Smiljanu, Hrvatska.") {
        opis = "<p><strong>Memorijalni centar <em>Nikola Tesla</em> u rodnom mjestu izumitelja Smiljanu, Hrvatska.</strong> Interdisciplinarni i multimedijalni centar sastoji se od vi&scaron;e povijesnih i novosagrađenih objekata. Povijesni su objekti: restaurirana (1956) i rekonstruirana (1986) &nbsp;rodna kuća Nikole Tesle u kojoj je smje&scaron;ten muzejski postav, pravoslavna crkva apostola sv. Petra i Pavla iz 1765., gospodarski objekt, kameni spomenici i klupe arhitekta Z. Kolac. Novosagrađeni objekti su: multimedijalni centar, igrali&scaron;te, ispitna stanica i trijem.</p>"
    } else if (naslov == "Slapovi Niagare") {
        opis = '<p><strong>Slapovi Niagare</strong> na kojima je Tesla projektirao prvu veliku komercijalnu hidroelektranu izmjenične struje za masovnu proizvodnju, predstavljaju niz masivnih&nbsp;vodopadakoji se nalaze na rijeci&nbsp;Niagari&nbsp;u istočnom dijelu&nbsp;Sjeverne Amerike, na granici&nbsp;Sjedinjenih Američkih Država&nbsp;i&nbsp;Kanade. Sastoje se od tri odvojena vodopada, vrlo &scaron;irokog slapa. S protokom vode od 168 000 kubnih metara&nbsp;u minuti jedni su od najpoznatijih slapova svijeta. Premda po visini ne spadaju u osobito visoke, slapovi Niagare predstavljaju jedne od naj&scaron;irih i najmoćnijih vodopada na svijetu. Znameniti su po svojoj ljepoti te služe kao popularna turistička destinacija i izvor hidroelektrične energije. Na suprotnim obalama su smje&scaron;teni gradovi-blizanci&nbsp;Niagara Falls, New York&nbsp;i&nbsp;Niagara Falls, Ontario. Niagara, &scaron;to znači “voda &scaron;to grmi”,naziv je koji su ovom moćnom slapu, koji dana tvori spektakularnu granicu između SAD-a i Kanade, nadjenuli američki Indijanci. Od jezera Erie rijeka Niagara mirno teče gotovo 56 km, no u blizini jezera Ontario pretvara se u brzace koji užurbano jure prema kataraktu u magli vodene pra&scaron;ine i duga. Potom slijedi dramatičan pad od otprilike 50 metara u kojem se bujica uz grmljavinu strmoglavljuje u podivljahu pjenu kao da pada u ponor bez dna. Otok Goat, na rubu kaskade, rijeku dijeli na dva Američki slapovi na istočnoj stranai tvore ravnu crtu dugu oko 300 metara, a kanadski slapovi Horseshoe, (Slapovi potkove) dvostruko su duži i, kako im i ime govori, imaju oblik potkove.</p>'
    } else if (naslov == "Poster Teslinih najvećih izuma") {
        opis = ""
    } else if (naslov == "Poster Nikola Tesla – život genija") {
        opis = ""
    } else if (naslov == "Propagandni letak Tesla Company New York") {
        opis = "<p>Propagandni letak Tesla Company New York na kojem su predstavljeni neki od znamenitih Teslinih uređaja i projekata: <strong>mali oscilacijski transformator indukcijski motor (asinkroni motor), teleautomaton &ndash; Teslin model broda na daljinsko upravljanje, svjetski bežični sustav, Teslina turbina bez lopatica.</strong></p><p>Tumačenja uz pojedine Tesline izume s propagandnog letka:</p><ol><li><strong>Mali oscilacijski transformator</strong> kao uređaj bio je u &scaron;irokoj upotrebi, a koristio se između ostalog za proizvodnju ozona i sterilizaciju.</li><li><strong>Indukcijski motor (asinkroni motor),</strong> koji se napaja iz mreže izmjeničnoga trofaznog ili jednofaznog napona, najvi&scaron;e se koristi u industrijskim postrojenjima. Takav motor izveden za priključak na jednofaznu mrežu služi i u manjim uređajima, na primjer u radioničkim, laboratorijskim i kućanskim uređajima (crpke, perilice rublja i posuđa, hladnjaci). Indukcijski motor (elektromotor) ima rotirajući dio (rotor) na koji se električna energija prenosi beskontaktno (indukcijom) djelovanjem okretnog magnetskog polja koje stvara sustav vi&scaron;efaznih struja u statoru. Ovakvi električni strojevi su jednostavne konstrukcije, robustni i pouzdani u pogonu pa se i najče&scaron;će koriste u svim vrstama elektromotornih pogona.</li><li><strong>Teleautomaton</strong> &ndash; Teslin model čamca na daljinsko upravljanje kojeg je patentirao i predstavio svijetu jo&scaron; davne 1898. godine. Tako je Tesla podario svijetu i prvo automatizirano vozilo u povijesti. U vrijeme kada su automobili bili rijetkost, a najmodernije prijevozno bila parna željeznica, 1898. godine Tesla prijavljuje patent naziva <em>metoda i stroj za upravljanje mehanizmima plovila ili vozila u pokretu</em>. Svoju vizionarsku zamisao vozila na daljinsko upravljanje prezentirao je publici i novinarima na prvoj elektrotehničkoj izložbi u Madison Square Gardenu. Model broda pokretan radiovalovima nadma&scaron;io je sva očekivanja. Upravljan na daljinu signalima koji su slani pomoću male kutije s polugom i telegrafskog tipkala, brod je izvodeći manevre svjetlio i kretao se u svim smjerovima. Tesla se jo&scaron; jednom iskazao kao vrhunski izumitelj ali i majstor spektakla. Tada je malo tko razumio princip radiovalova te su mnogi smatrali da Tesla brodom upravlja svojim umom. Kao protvnik rata i zagovornik života vjerovao je da će se u budućnosti borbe voditi sučeljavanjem strojeva te tako izbjeći ljudske žrtve.</li><li><strong>Svjetski bežični sustav</strong> Tesla je planirao uspostaviti vezu sa svim dijelovima svijeta te je nedugo zatim izgradio divovsku radio stanicu i Wardenclyff toranj na Long Islandu, nedaleko New Yorka. Intenzivno je radio na bežičnom prijenosu energije, prijavio patent uređaja i najavio projekt <em>Svjetski bežični sustav</em>. Desetak je godina potro&scaron;io na usavr&scaron;avanje prijenosa električne energije bez žica i to je smatrao najvećim izumom svih vremena. Napisao je: <em>To je dugo žuđeni kamen mudraca</em>! Smatrao je kako po svaku cijenu mora dovr&scaron;iti projekt, jer će njime dru&scaron;tvu osigurati neslućeni razvoj i napredak. Želio je omogućiti globalnu komunikaciju te putem valova slati fotografije, poruke i informacije. No, morao je odustati od projekta nakon &scaron;to mu je J. P. Morgan bez prethodnog dogovora obustavio financiranje. Nastale te&scaron;koće financijske i druge naravi prije početka drugog svjetskog rata bile su uzrok da ovu veliku ideju nije uspio ostvariti u praksi.</li><li><strong>Teslina turbina bez lopatica</strong> načinjena 1913. Umjesto lopatica ona koristi djelovanje graničnih slojeva između fluida (plinovi, tekućine, pare) i vi&scaron;estrukih vrhova glatkih diskova. Granični dijelovi fluida djeluju na diskove zbog viskoznosti (trenje fluida) i privlačnih sila slojeva diska i fluida. Teslina turbine bi trebala imati vrlo mali razmak između diskova, najvi&scaron;e 0,4 mm i povr&scaron;ina treba biti vrlo glatka. U Teslino vrijeme se nisu mogli naći takvi materijali za vrlo tanke diskove, budući su se pod opterećenjem iskrivljavali i deformirali, i zato Teslina turbina u njegovo doba nije doživjela komercijalni uspjeh. Jo&scaron; uvijek se danas ispituju načini primjene Tesline turbine, čak i postoji od 2010. i konstrukcija za vjetroelektrane. Njihova je prednost u kori&scaron;tenju za male snage turbina. Teslina je konstruirao ovu turbinu za kori&scaron;tenje geotermalne energije.</li></ol>"
    } else if (naslov == "Spomenik Tesli na Nijagari") {
        opis = "<p><strong>Spomenik Tesli na Nijagari</strong>. Godine 1896 dovr&scaron;ena je hidrocentrala na Niagari i dalekovod do Buffala. Time je ostvaren Teslin jo&scaron; dječji naum da ovlada slapovima Niagare. Prema njegovim izumima i konstrukcijama izgrađena je najsuvremenija hidroelektrana tog vremena i pripadajući sustav za distribuciju. Ta prva velika instalacija vi&scaron;efaznog sustava najavila je konačnu pobjedu Teslinog sustava izmjenične struje i označila novu eru u iskori&scaron;tavanju električne energije. Veličanstven pothvat potvrdio je Teslinu veličinu, te su ga uzdizali najveći stručnjaci njegova doba. Isticali su kako je razvoj električne energije neprijeporno najveći događaj u povijesti tehnike. Teslini patenti, zaokruženi u cjelovit sustav izmjenične struje toliko su nadma&scaron;ivali sve ostalo, da nijedan izumitelj prije nije postigao tako spektakularan uspjeh. Nakon pu&scaron;tanja u pogon hidroelektrane na Niagari, mi&scaron;ljenje su promijenile i posljednje prista&scaron;e izmjenične struje. Među njima i čuveni fizičar, lord Kelvin koji je tom prigodom naglasio da je Tesla doprinio znanosti o elektricitetu vi&scaron;e nego itko prije njega.Teslin izmjenični sustav značio je velik napredak u odnosu na dotada&scaron;nju istosmjernu Edisonovu struju. Izmjenična struja gibala se ne samo u stalnom smjeru, već bi krenula u jednom smjeru, zastala, krenula u drugom smjeru mijenjajući smjer i intenzitet, ponavljajući taj proces neprekidno i velikom brzinom. Mogla se bez većih gubitaka prenositi žicama na veliku daljinu i u odnosu na dotada&scaron;nju istosmjernu struju bila neusporedivo profitabilnija. To je omogućavalo gradnju i smje&scaron;taj velikih postrojenja s generatorima daleko izvan grada. Gubitci u prijenosu energije su smanjeni jer se u izmjeničnom sustavu koristi znatno vi&scaron;i napon. Transformatorima se podiže napon prije prijenosa struje dalekovodima, a zatim se u neposrednoj blizini potro&scaron;ača taj napon prije kori&scaron;tenja smanjuje za potrebe kućanstva i industrije. Zbog toga je izmjenična struja znatno jeftinija i prikladna za &scaron;iroku primjenu i potro&scaron;nju.</p>"
    } else if (naslov == "Teslin transformator (rezonancijski transformator ili Teslina zavojnica)") {
        opis = "<p><strong>Teslin transformator (rezonancijski transformator ili Teslina zavojnica</strong>), replika iz stalnog postava Memorijalnog centra 'Nikola Tesla' u Smiljanu, Hrvatska. Teslin transformator za proizvodnju visokog napona (do nekoliko milijuna volti) i izmjenične struje visokih frekvencija (10 do 300 kHz) koji je izumio Tesla 1891. Ispitivao je različite mogućnosti dobivanja visoke frekvencije i vrlo visokog napona i tvrdio da će električno osvjetljenje biti ekonomičnije ako se upotrijebi izmjenična električna struja sa znatno većom frekvencijom od 50 Hz (titraja u sekundi). Teslin transformator se sastoji iz primarne zavojnice od nekoliko zavoja debele žice, promjera od nekoliko centimetara do nekoliko metara. U sredini primarne zavojnice, nalazi se sekundarna zavojnica s velikim brojem zavoja tanke i dobro izolirane žice, puno manjeg promjera od primarne zavojnice. Tesline struje stvaraju se na sekundarnoj zavojnici Teslinog transformatora. Na vrh sekundarne zavojnice se stavlja prsten, obično napravljen od fleksibilnih aluminijskih cijevi, da stvara električno polje, koje omogućuje stvaranje iskri i munja izvan zavojnica.</p>"
    } else if (naslov == "Demonstracijska naprava nazvana “Teslino jaje”") {
        opis = "<p><strong>Demonstracijska naprava nazvana &ldquo;Teslino jaje&rdquo;,</strong> replika iz postava Memorijalnog centra 'Nikola Tesla' u Smiljanu, Hrvatska. Tesla je ovu napravu posebnog dizajna osmislio jo&scaron; 1888. godine, a &scaron;iroj javnosti prezentirao 1893. godine na Svjetskoj izložbi u Chicagu kada je pomoću nje demonstrirao djelovanje okretnog magnetskog polja &ndash; postaviv&scaron;i metalno (bakreno) jaje u rotirajuće elektromagnetsko polje kako bi se ono rotacijom uspravilo na svoj vrh. Ovom glasovitom napravom Tesla je privukao pažnju investitora prema mogućnostima izmjenične struje i omogućio je izradu prvih elektromotora izmjenične struje, a time i njezinu primjenu u naj&scaron;irem opsegu. Kao genijalan izumitelj i vrhunski demonstrator, Tesla je duhovito povezao dizajn naprave s legendom o Kolumbovom jaju kojega je trebalo postaviti na vrh, budući je Svjetska izložbi u Chicagu bila posvećena 400. obljetnici Kolumbova otkrića Amerike.</p>"
    } else if (naslov == "Nikola Tesla u svom visokonaponskom laboratoriju u Colorado Springsu") {
        opis = "<p><strong>Nikola Tesla u svom visokonaponskom laboratoriju u Colorado Springsu</strong> kojeg je osnovao 1899. godine s ciljem proučavanja bežičnog prijenosa energije i razvoja radio sustava kojim bi povezao cijeli svijet.</p><p>Godine 1899. Tesla započinje gradnju novog visokonaponski laboratorij u Colorado Springsu. To je bilo potrebno jer su Teslini pokusi s visokim naponima bili preopasni za eksperimentiranje u njegovom laboratoriju u New Yorku, a on sam želio je pokuse obavljati u tajnosti. U to vrijeme potpuno se posvetio kreiranju bežičnih sustava. Ispitivao je Zemljin naboj i upustio se u istraživanja koja bi dovela do izgradnje Svjetskog sustava za prijenos ne samo bežičnih telegrafskih informacija i ljudskog glasa preko oda&scaron;iljača, snage 200 kW, već je i nastojao pronači način kako bez gubitaka prenositi i energiju na bilo koju udaljenost na Zemlji za &scaron;ire komercijalne i industrijske potrebe. Tesla je laboratorij načinio kao četverouglatu zgradu dimenzija 30 x 30 metara, s tornjem visine 25 metara, na koji se nastavljao jarbol visine 65 metara, a na njegovom vrhu se nalazila kugla od bakrenog lima promjera jedan metar. Opremio ga je generatorima, kondenzatorima s uljnom izolacijom (Teslin izum), raznim mjernim instrumentima, golemim oscilatorom i za ono doba čudesnim transformatorima. Davali su napone iznad 12 milijuna volti. Istraživao je daleko od civilizacije, u planinama Stjenjaka na nadmorskoj visini od 1800 metara i okružen fascinantnim prirodnim pojavama. Tijekom jedne oluje, prebrojio je udare gotovo dvanaest tisuća munja u tom području tijekom svega dva sata. Suradnicima je pisao: <em>Ovo je tajni test &hellip;Posao ću obavljati kasno noću kada je energetsko opterećenje najmanje. </em>Da se rije&scaron;i radoznalaca oko postrojenja je dao načiniti visoku ogradu s upozorenjima za opasnost. Na jednom je znaku stajao citat iz Danteova <em>Pakla</em>: <em>Ostavite svaku nadu, vi koji ulazite</em>. Imao je dva cilja: razvoj radiosustava kojim bi umrežio cijeli svijet i ispitivanje bežičnog transporta energije. U Coloradu je otkrio ne&scaron;to &scaron;to je smatrao posebno vrijednim &ndash; zemaljske stojne valove. Kroz eksperimente je pokazao kako Zemlju upotrijebiti kao vodič iznimno osjetljiv na električna titranja određene frekvencije. Uspio je upaliti 200 svjetiljki bez žica na odaljenosti od 40 kilometara. Stvarao je prekrasne umjetne munje i bljeskove duge 41 metar. Eksperimentirajući, oscilirao je elektromagnetskim poljem cijeloga planeta i primio signal iz dubine svemira. O svom radu Tesla je zapisao: <em>Ma koliko se to činilo nemogućim, ovaj se planet pona&scaron;a kao vodič ograničenih dimenzija. Nesaglediva mi je vrijednost ove činjenice za prijenos energije pomoću mog sustava postala jasna. Ne samo &scaron;to je to omogućavalo prijenos telegrafskih poruka na bilo koju daljinu bez ikakvih žica, &scaron;to sam već odavno znao, nego bi se čitavoj zemaljskoj kugli mogle nametnuti fine modulacije ljudskog glasa i, &scaron;tovi&scaron;e, prenositi energija, i to u neograničenim količinama, na bilo koju udaljenost i to gotovo bez ikakvih gubitaka. </em></p><p>Eksperimentirajući Tesla je uspijevao dobivati kuglaste munje &scaron;to je dana&scaron;njim fizičarima za potrebe projekta fuzije te&scaron;ko ostvarivo. Isto tako znanstvenicima je danas te&scaron;ko proizvesti napon od 5 milijuna V, a Tesla je u Colorado Springsu uspijevao proizvesti napon vi&scaron;i od 100 milijuna V. Toranj laboratorija nije nikada bio u potpunosti dovr&scaron;en, a u vrijeme Prvoga svjetskoga rata (1914.-1918.) bio je sru&scaron;en zbog bojazni američkih vlasti da bi Tesla, rođen na prostoru tada&scaron;nje Austro-Ugarske, mogao se njime poslužiti za kanaliziranje informacija u korist Centralnih sila. Dnevnik Teslinih istraživanja u Colorado Springsu, koji je vodio od 1. lipnja 1899. do 7. siječnja 1900. godine, objavljen je 1976. godine i opseže oko 400 stranica teksta i popratnih slika.</p>"
    }

    if (localStorage.getItem("jezik") == "hr") {
        confirm_button = "nova igra"
    } else {
        confirm_button = "new game"
    }
    $("#replay").fadeIn("slow")
    retci = $("#retci").val();
    stupci = $("#stupci").val();
    $(".modal").fadeOut("slow");
    $(".footer").fadeOut("slow");
    // SCALING OPTIONS
    // scaling can have values as follows with full being the default
    // "fit"	sets canvas and stage to dimensions and scales to fit inside window size
    // "outside"	sets canvas and stage to dimensions and scales to fit outside window size
    // "full"	sets stage to window size with no scaling
    // "tagID"	add canvas to HTML tag of ID - set to dimensions if provided - no scaling
    var scaling = "fit"; // this will resize to fit inside the screen dimensions
    if (window.innerWidth >= 1040) {
        var width = 1920;
        var height = 1200;
    } else {
        var width = 1200;
        var height = 1600;
    }
    var countPieces = 0;
    var totalPieces = 0;
    // as of ZIM 5.5.0 you do not need to put zim before ZIM functions and classes
    var frame = new Frame(scaling, width, height);
    frame.on("ready", function() {
        zog("ready from ZIM Frame"); // logs in console (F12 - choose console)
        var stage = frame.stage;
        var stageW = frame.width;
        var stageH = frame.height;
        var puzzleX;
        var puzzleY;
        frame.outerColor = "#707070";
        frame.color = "#E9DDCF";
        var con = new Container
            // with chaining - can also assign to a variable for later access
        var imageObj = [];
        var piecesArrayObj = [];
        frame.loadAssets([slika], "assets/");

        var label = new Label({
            text: "CLICK",
            size: 60,
            font: "sans-serif",
            color: "#3228B0",
            rollColor: "#2c1c9a",
            fontOptions: "italic bold"
        });

        var label2 = new Label({
            text: "CLICK",
            size: 40,
            font: "sans-serif",
            color: "#3228B0",
            rollColor: "#2c1c9a",
            fontOptions: "italic bold"
        });


        stage.addChild(label);
        stage.addChild(label2);
        label.x = label.y = 20;
        label2.y = 20;
        label2.x = stageW - 210;
        label.on("click", function() {
            zog("clicking");
        });

        label2.on("click", function() {
            location.reload();
        });

        frame.on("complete", function() {
            imageObj = frame.asset(slika).clone();
            imageObj.addTo(con);
            imageObj.alpha = 0.2;

            var piecesArray = new Array();
            var horizontalPieces = retci;
            var verticalPieces = stupci;
            var obj = getQueryString();
            zog(obj)
            if (obj) {
                horizontalPieces = obj.row;
                verticalPieces = obj.column;
            }
            var imageWidth = imageObj.width;
            var imageHeight = imageObj.height;
            var pieceWidth = Math.round(imageWidth / horizontalPieces);
            var pieceHeight = Math.round(imageHeight / verticalPieces);
            var gap = 40;
            totalPieces = horizontalPieces * verticalPieces;

            puzzleX = frame.width / 2 - imageWidth / 2;
            puzzleY = frame.height / 2 - imageHeight / 2;
            imageObj.pos(puzzleX, puzzleY);
            zog(puzzleX, puzzleY);

            label.text = countPieces + "/" + totalPieces;

            label2.text = confirm_button



            for (j = 0; j < verticalPieces; j++) {
                piecesArrayObj[j] = [];
                for (i = 0; i < horizontalPieces; i++) {
                    var n = j + i * verticalPieces;

                    var offsetX = pieceWidth * i;
                    var offsetY = pieceHeight * j;


                    var x8 = Math.round(pieceWidth / 8);
                    var y8 = Math.round(pieceHeight / 8);

                    piecesArrayObj[j][i] = new Object();
                    piecesArrayObj[j][i].right = Math.floor(Math.random() * 2);
                    piecesArrayObj[j][i].down = Math.floor(Math.random() * 2);

                    if (j > 0) {
                        piecesArrayObj[j][i].up = 1 - piecesArrayObj[j - 1][i].down;
                    }
                    if (i > 0) {
                        piecesArrayObj[j][i].left = 1 - piecesArrayObj[j][i - 1].right;
                    }

                    piecesArray[n] = new Rectangle({
                        width: pieceWidth,
                        height: pieceHeight,

                    });



                    var tileObj = piecesArrayObj[j][i];
                    var s = new Shape

                    var context = s.graphics;
                    s.drag();
                    s.mouseChildren = false;
                    s.addEventListener("pressup", function(e) {
                        var mc = e.currentTarget;

                        var xx = Math.round(mc.x);
                        var yy = Math.round(mc.y);

                        if (xx < puzzleX + gap / 2 && xx > puzzleX - gap / 2 && yy < puzzleX + gap / 2 && yy > puzzleY - gap / 2) {
                            mc.x = puzzleX;
                            mc.y = puzzleY;
                            mc.noDrag();
                            mc.addTo(mc.parent, 0);
                            mc.mouseChildren = false;
                            mc.mouseEnabled = false;
                            mc.hint.visible = false;
                            countPieces++;
                            label.text = countPieces + "/" + totalPieces;
                            zog("countPieces", countPieces);
                            if (countPieces == totalPieces) {
                                swal({
                                    html: '<h1 style="text-align:center">' + naslov + '</h1><img src="assets/' + slika + '" class="ikone2"/><br><br><p>' + opis + '</p>',
                                    confirmButtonText: confirm_button,
                                    allowOutsideClick: false
                                });
                                $('.swal2-confirm').click(function() {
                                    location.reload();
                                });
                            };
                           
                            stage.update();

                        }

                    });
                    context.setStrokeStyle(3, "round");
                    var commandi1 = context.beginStroke(createjs.Graphics.getRGB(0, 0, 0)).command;
                    //
                    var commandi = context.beginBitmapFill(imageObj.image).command;


                    context.moveTo(offsetX, offsetY);

                    if (j != 0) {
                        context.lineTo(offsetX + 3 * x8, offsetY);
                        if (tileObj.up == 1) {
                            context.curveTo(offsetX + 2 * x8, offsetY - 2 * y8, offsetX + 4 * x8, offsetY - 2 * y8);
                            context.curveTo(offsetX + 6 * x8, offsetY - 2 * y8, offsetX + 5 * x8, offsetY);
                        } else {
                            context.curveTo(offsetX + 2 * x8, offsetY + 2 * y8, offsetX + 4 * x8, offsetY + 2 * y8);
                            context.curveTo(offsetX + 6 * x8, offsetY + 2 * y8, offsetX + 5 * x8, offsetY);
                        }
                    }
                    context.lineTo(offsetX + 8 * x8, offsetY);
                    if (i != horizontalPieces - 1) {
                        context.lineTo(offsetX + 8 * x8, offsetY + 3 * y8);
                        if (tileObj.right == 1) {
                            context.curveTo(offsetX + 10 * x8, offsetY + 2 * y8, offsetX + 10 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX + 10 * x8, offsetY + 6 * y8, offsetX + 8 * x8, offsetY + 5 * y8);
                        } else {
                            context.curveTo(offsetX + 6 * x8, offsetY + 2 * y8, offsetX + 6 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX + 6 * x8, offsetY + 6 * y8, offsetX + 8 * x8, offsetY + 5 * y8);
                        }
                    }
                    context.lineTo(offsetX + 8 * x8, offsetY + 8 * y8);
                    if (j != verticalPieces - 1) {
                        context.lineTo(offsetX + 5 * x8, offsetY + 8 * y8);
                        if (tileObj.down == 1) {
                            context.curveTo(offsetX + 6 * x8, offsetY + 10 * y8, offsetX + 4 * x8, offsetY + 10 * y8);
                            context.curveTo(offsetX + 2 * x8, offsetY + 10 * y8, offsetX + 3 * x8, offsetY + 8 * y8);
                        } else {
                            context.curveTo(offsetX + 6 * x8, offsetY + 6 * y8, offsetX + 4 * x8, offsetY + 6 * y8);
                            context.curveTo(offsetX + 2 * x8, offsetY + 6 * y8, offsetX + 3 * x8, offsetY + 8 * y8);
                        }
                    }
                    context.lineTo(offsetX, offsetY + 8 * y8);
                    if (i != 0) {
                        context.lineTo(offsetX, offsetY + 5 * y8);
                        if (tileObj.left == 1) {
                            context.curveTo(offsetX - 2 * x8, offsetY + 6 * y8, offsetX - 2 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX - 2 * x8, offsetY + 2 * y8, offsetX, offsetY + 3 * y8);
                        } else {
                            context.curveTo(offsetX + 2 * x8, offsetY + 6 * y8, offsetX + 2 * x8, offsetY + 4 * y8);
                            context.curveTo(offsetX + 2 * x8, offsetY + 2 * y8, offsetX, offsetY + 3 * y8);
                        }
                    }
                    context.lineTo(offsetX, offsetY);
                    s.addTo(con);

                    var fill = new createjs.Graphics.Fill("red");

                    //var newGra = context.append(fill);
                    var hint = new Shape(); //s.clone(true);
                    hint.mouseChildren = false;
                    hint.mouseEnabled = false;
                    s.hint = hint;
                    hint.graphics = context.clone(true);
                    hint.pos(puzzleX, puzzleY);
                    // newGra.graphics = newGra;
                    hint.graphics._fill = fill;
                    hint.graphics._fill.style = null;

                    hint.addTo(con, 0);
                    //s.animate({obj:{x:frame.width-offsetX-pieceWidth,y:frame.height-offsetY-pieceHeight}, time:700});
                    //s.animate({obj:{x:-offsetX,y:-offsetY}, time:700});
                    s.animate({
                        obj: {
                            x: rand(-offsetX, frame.width - offsetX - pieceWidth),
                            y: rand(-offsetY, frame.height - offsetY - pieceHeight)
                        },
                        time: 700
                    });

                }
            }


            con.addTo(stage);
            /*con.x -= imageWidth/2;
            con.y -= imageHeight/2;*/
            stage.update();



        }); // end asset complete


        stage.update(); // this is needed to show any changes

    }); // end of ready
}