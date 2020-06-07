window.addEventListener("load", function () {
    var artyom = new Artyom();

   
   
   
    var commands = [
        {
            indexes: ["Hallo"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Was kann ich für Sie tun Mister X?");
            }
        },
       
        {
            indexes: ["Nenne mir die neuen Daten"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("möchten sie die daten von einem spezifischen werk?");
            }
        },
       
        {
            indexes: ["Ja"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Von welchem Werk?");
            }
        },
        {
            indexes: ["Nein"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Produktionszahlen aller Werke betragen im Durchschnitt 477 Stück, der Verschleiß liegt im Schnitt bei 300€ und im Schnitt sind 17% der Angestellten krankgemeldet. Möchten Sie die Daten weitersenden?");
            }
        },
        {
            indexes: ["Werk 1"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Die Produktionszahl bei Werk 1 liegt bei 766 Stück, der Verschleiß bei 400€ und momentan sind 40% der Arbeiter krankgemeldet. Möchten Sie die Daten weitersenden?");
              
            }
        },
        {
            indexes: ["Werk 2"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Die Produktionszahl bei Werk 2 liegt bei 866 Stück, der Verschleiß bei 600€ und momentan sind 70% der Arbeiter krankgemeldet. Möchten Sie die Daten weitersenden");
            }
        },
        {
            indexes: ["Werk 3"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Die Produktionszahl bei Werk 3 liegt bei 1966 Stück, der Verschleiß bei 500€ und momentan sind 1% der Arbeiter krankgemeldet. Möchten Sie die Daten weitersenden?");
            }
        },
        
        {
            indexes: ["Werk 4"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Die Produktionszahl bei Werk 4 liegt bei 32 Stück, der Verschleiß bei 100€ und momentan sind 80% der Arbeiter krankgemeldet. Möchten Sie die Daten weitersenden?");
            }
        },
        {
            indexes: ["Nenne mir die Produktionszahlen von allen Werken"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Produktionszahlen aller Werke betragen im Durchschnitt 477 Stück.");
            }
        },
        {
            indexes: ["Nenne mir die Produktionszahlen von Werk 1"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Die Produktionszahl bei Werk 1 liegt bei 766 Stück");
            }
        },
        {
            indexes: ["Nenne mir die Produktionszahlen von Werk 2"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Die Produktionszahl bei Werk 2 liegt bei 866 Stück");
            }
        },
        {
            indexes: ["Nenne mir die Produktionszahlen von Werk 3"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Die Produktionszahl bei Werk 3 liegt bei 1966 Stück.");
            }
        },
        {
            indexes: ["Nenne mir die Produktionszahlen von Werk 4"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Die Produktionszahl bei Werk 4 liegt bei 32 Stück, kritischer Zustand.");
            }
        },

        {
            indexes: ["Nenne mir den Verschleiß von allen Werken"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Der Verschleiß aller Werke beträgt im Durchschnitt 300€.");
            }
        },
        {
            indexes: ["Nenne mir den Verschleiß von Werk 1"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Der Verschleiß von Werk 1 beträgt 400€.");
            }
        },
        {
            indexes: ["Nenne mir den Verschleiß von Werk 2"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Der Verschleiß von Werk 2 beträgt 600€.");
            }
        },
        {
            indexes: ["Nenne mir den Verschleiß von Werk 3"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Der Verschleiß von Werk 3 beträgt 500€.");
            }
        },
        {
            indexes: ["Nenne mir den Verschleiß von Werk 4"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Der Verschleiß von Werk 4 beträgt 100€.");
            }
        },
        {
            indexes: ["Nenne mir die Krankmeldungen von allen Werken"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Krankmeldungen aller Werke betragen im Durchschnitt 52,5%.");
            }
        },
        {
            indexes: ["Nenne mir die Krankmeldungen von Werk 1"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Momentan sind 5% der Angestellten von Werk 1 krank.");
            }
        },
        {
            indexes: ["Nenne mir die Krankmeldungen von Werk 2"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Momentan sind 10% der Angestellten von Werk 2 krank. Haaatschi.");
            }
        },
        {
            indexes: ["Nenne mir die Krankmeldungen von Werk 3"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Momentan sind 20% der Angestellten von Werk 3 krank.");
            }
        },
        {
            indexes: ["Nenne mir die Krankmeldungen von Werk 4"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Momentan sind 70% der Angestellten von Werk 4 krank.");
            }
        },
       
        {
            indexes: ["Sende Daten an *"],
            smart: true,
            action: function (i, wildcard){
                var database = ["Marco Müller","Klaus Müller","Thomas Müller","Geschäftsleitung","Sekretärin", "Verwaltung", "Angela Merkel", "Marco Mutscheller"];
                if(database.indexOf(wildcard.trim())){
                    artyom.say("Die neusten Daten wurden an "+ wildcard + " gesendet.");
                }
                else{
                    artyom.say("Leider ist diese Person nicht in meiner Datenbank Mister X");
                }
            }
        
        },
        {
            indexes: ["Nenne mir den Gewinner von heute"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Der Gewinner ist Werk 1. 16% über dem Schnitt");
            }
        },
        {
            indexes: ["Nenne mir den Verlierer von heute"],
            smart: false,
            action: function (i, wildcard){
                artyom.say("Der Verlierer ist Werk 4. 32% unter dem Schnitt");
            }
        },
    {
        indexes: ["Danke Rocket"],
        smart: false,
        action: function (i, wildcard){
            artyom.say("Das ist eben mein Job Mister X");
        }
    },
   
    ];
    
    var artyom = new Artyom();
    var vergleich = [
        {
            indexes: ["Werk 1 und 2 vergleichen","Werk 1 und 3 vergleichen","Werk 1 und 4 vergleichen"],
            action: function(i){
                if(i == 0){
                    artyom.say("Werk 1 ist heute um 5% rentabler als Werk 2");
                }else if(i == 1){
                    artyom.say("Werk 1 ist heute um 11% rentabler als Werk 3");
                }else if(i == 2){
                    artyom.say("Werk 1 ist heute um 32% rentabler als Werk 4");
                }
                
            }

        },
        {
            indexes: ["Werk 2 und 1 vergleichen","Werk 2 und 3 vergleichen","Werk 2 und 4 vergleichen"],
            action: function(i){
                if(i == 0){
                    artyom.say("Werk 2 ist heute um 5% unrentabler als Werk 1");
                }else if(i == 1){
                    artyom.say("Werk 2 ist heute um 2% unrentabler als Werk 3");
                }else if(i == 2){
                    artyom.say("Werk 2 ist heute um 22% rentabler als Werk 4");
                }
                
            }

        },
        {
            indexes: ["Werk 3 und 1 vergleichen","Werk 3 und 2 vergleichen","Werk 3 und 4 vergleichen"],
            action: function(i){
                if(i == 0){
                    artyom.say("Werk 3 ist heute um 5% unrentabler als Werk 1");
                }else if(i == 1){
                    artyom.say("Werk 3 ist heute um 2% unrentabler als Werk 2");
                }else if(i == 2){
                    artyom.say("Werk 3 ist heute um 17% rentabler als Werk 4");
                }
                
            }

        },
        {
            indexes: ["Werk 4 und 1 vergleichen","Werk 4 und 2 vergleichen","Werk 4 und 3 vergleichen"],
            action: function(i){
                if(i == 0){
                    artyom.say("Werk 4 ist heute um 62% unrentabler als Werk 1");
                }else if(i == 1){
                    artyom.say("Werk 4 ist heute um 17% unrentabler als Werk 2");
                }else if(i == 2){
                    artyom.say("Werk 4 ist heute um 12% unrentabler als Werk 3");
                }
                
            }

        },

        
    ]

    artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
        if(isFinal){
            console.log("Final recognized text: " + recognized);
        }else{
            console.log(recognized);
        }
    });
    
    var artyom = new Artyom();
  
    artyom.addCommands(commands); 
    artyom.addCommands(vergleich);


    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map