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
        'font-family': "Georgia"
    });
    // promijeni_jezik()


});


// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it


/*
function promijeni_jezik() {
    if (localStorage.getItem("jezik") == null) {
        localStorage.setItem('jezik', 'hr')
    }
    if (localStorage.getItem("jezik") == "hr") {
        
        $(".hr").css({
            "opacity": "1"
        })
        $(".eng").css({
            "opacity": "0.5"
        })
        $("#naslov").text("Slagalice")
        $(".opis").text("odaberite broj komadića i pritisnite jednu od slika za slaganje")
        $("#retci-oznaka").text("broj komadića po retcima: ")
        $("#stupci-oznaka").text("broj komadića po stupcima: ")
        $("#ukupan").text("ukupan broj komadića za slaganje: ")
        $("#nazad").text("ODABERI DRUGU IGRU")
    } else {
        localStorage.setItem('jezik', 'eng')
        $(".eng").css({
            "opacity": "1"
        })
        $(".hr").css({
            "opacity": "0.5"
        })
        $("#naslov").text("Puzzles")
        $(".opis").text("choose number of pieces and click on one of the images to start the puzzle")
        $("#retci-oznaka").text("number of pieces per row: ")
        $("#stupci-oznaka").text("number of pieces per column: ")
        $("#ukupan").text("number of pieces: ")
        $("#nazad").text("CHOOSE ANOTHER GAME")
    }
}

*/



function stvori() {
    /*if (slika == '326.jpg') {
            opishr = "<strong><em>Gajde</em></strong> su aerofono glazbalo koje se sastoji od nekoliko dijelova: <em>mješine</em> (dio koji služi kao spremište zraka), <em>puhalice</em> (dio u koji se upuhuje zrak i prolazi do mješine), <em>prebiralice</em> (koja se još naziva i <em>gajdunica</em>). Tipične slavonske gajde imaju dvocijevnu <em>prebiralicu</em> pa se taj dio još naziva i <em>dvojnice</em> ili <em>trubnja</em> (još se naziva i <em>berda</em> ili <em>burdon</em>, a proizvode jednoličan, osnovni, &quot;ležeći&quot; ton)."
            opiseng = "<strong><em>The gajde (bagpipe)</em></strong> is an aerophone musical instrument which consists of several parts: a <em>bag</em> (air reservoir), a <em>blowpipe</em> (into which air going to the bag is blown), a <em>chanter</em> (also called <em>gajdunica</em>. Typical Slavonian bagpipe has a two- piped chanter so it is also called <em>dvojnice</em> or a <em>drone</em> (<em>trubanj</em>, <em>berda</em> or <em>burdon</em> –producing a single constant monotonous tone)."
            nazivhr = "<em><strong>Gajde<br> Slavonija, 1971. g.</strong></em>"
            naziveng = "<em><strong>Bagpipe<br>Slavonia, 1971</strong></em>"
        } else {
            opishr = "Bubanj - <em>tupan</em> ili <em>tapan</em>. Vrsta cilindričnog bubnja koja se susreće na Kosovu, Makedoniji, Srbiji i Bosni i Hercegovini. Sastoji se od drvenog dijela - šupljeg valjka izrađenog od orahovog drveta, kojem je s obje otvorene strane napeta kozja koža. Bubanj ima i remen kojim se može objesiti preko ramena. Bat je također napravljen iz orahova drva."
            opiseng = "<strong>The drum - <em>tupan</em> or <em>tapan</em></strong>. It is a type of a cylindrical drum often found in Kosovo, Macedonia, Serbia, and Bosnia and Herzegovina. It consists of a wooden part: a hollow cylinder made of oak wood over which sheared goatskin is stretched taut. There is a strap on the drum so it can be hung over the shoulder. The beater is also crafted from oak wood."
            nazivhr = "<em><strong>Bubanj – tupan<br>Tetovo, Makedonija, 1. pol. 20. st.</strong></em>"
            naziveng = "<em><strong> The drum – bass drum tupan<br>Tetovo, Makedonija, the 1st half of the 20th century</strong></em>"

        }

        if (localStorage.getItem("jezik") == "hr") {
            opis = opishr;
            naziv = nazivhr;
            confirm_button = "nova igra"

        } else {
            opis = opiseng;
            naziv = naziveng;
            confirm_button = "new game"
        }*/
    confirm_button = "nova igra"
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
            font: "Helvetica Neue",
            color: "#680002",
            rollColor: "#990003",
            fontOptions: "italic bold"
        });

        var label2 = new Label({
            text: "CLICK",
            size: 40,
            font: "Helvetica Neue",
            color: "#680002",
            rollColor: "#990003",
            fontOptions: "italic bold"
        });


        stage.addChild(label);
        stage.addChild(label2);
        label.x = label.y = 20;
         label2.y = 20;
        label2.x = stageW - 180;
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
                                    html: '<h1 style="text-align:center">'+naslov+'</h1><img src="assets/' + slika + '" class="ikone2"/><br><br>',
                                    confirmButtonText: confirm_button,
                                    allowOutsideClick: false
                                });
                                $('.swal2-confirm').click(function() {
                                    location.reload();
                                });
                            };
                            $('.ikone2').lightzoom({
                                glassSize: 175,
                                zoomPower: 3
                            });
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