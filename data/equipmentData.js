const equipmentCatalog = [
    {
        category: "1. Industrie 4.0 & Fahrerlose Transportsysteme (FTS)",
        icon: "🤖",
        items: [
            { 
                id: "fts_1", name: "Fahrerloses Transportsystem (FTS / FTF)", checked: false,
                hazards: [
                    "Mechanisch: Angefahren oder eingequetscht werden im Fahrweg (Scanner schaut nur auf 15cm Höhe; Hindernisse darunter/darüber werden NICHT erkannt!)", 
                    "Mechanisch: Sturz- und Quetschgefahr an den Kettenförderern und Drehtellern (Aufgabe/Übergabe)", 
                    "Mechanisch: Gefahr durch herabstürzende Güter/Ladung von der Aufgabe oder dem Fahrzeug",
                    "Organisatorisch: Kollisionen im Mischverkehr oder unbefugtes Betreten der Einfahrregale (rote Linien)"
                ],
                measures: [
                    "Absolutes Abstellverbot von Gegenständen (Leitern, Leerpaletten) im FTS-Fahrweg", 
                    "FTF haben im gesamten Werk ausnahmslos Vorfahrt; Mitfahren ist streng verboten", 
                    "Einfahrregale (rote Linien) und Drehteller/Kettenförderer dürfen während des FTS-Betriebs nicht betreten/bestiegen werden", 
                    "Strikte Beachtung der Ampelsteuerung: Rot Dauerlicht (Kreuzung besetzt), Rot Rundumlicht (Einfahrt in Gasse läuft; geht 1 Min. vor Ankunft an)",
                    "Sicherheitsschuhe im gesamten FTS-Bereich zwingend erforderlich",
                    "Eigenmächtige Reparaturen oder Störungsbeseitigungen sind verboten (Nur durch befähigte Lagermitarbeiter / Schichtleiter)"
                ]
            }
        ]
    },

    {
        category: "2. Werkstatt",
        icon: "🛠️",
        items: [
            { id: "w_1", name: "Maschinenschrauber / Akkuschrauber", checked: false, hazards: ["Mechanische Verletzung durch abrutschendes Werkzeug", "Verletzung durch wegfliegende Späne"], measures: ["Schutzbrille tragen", "Sicheres Einspannen der Werkstücke"] },
            { id: "w_2", name: "Handbohrmaschine / Schlagbohrmaschine", checked: false, hazards: ["Verletzung durch wegfliegende Späne", "Stolpergefahr am Kabel", "Elektrischer Schlag"], measures: ["Schutzbrille", "Keine Handschuhe", "Regelmäßige DGUV V3 Prüfung"] },
            { id: "w_3", name: "Manuell zu bedienendes Handwerkzeug (Säge, Hammer, Schraubenzieher, Stechbeitel etc.)", checked: false, hazards: ["Schnitt- und Stichverletzungen", "Quetschungen"], measures: ["Werkzeug auf Mängel prüfen", "Werkstück fixieren", "Geeignete Schutzhandschuhe"] },
            { id: "w_4", name: "Kabeltrommel, Verlängerungskabel", checked: false, hazards: ["Stolpergefahr", "Brandgefahr durch Überhitzung (nicht abgerollt)", "Elektrischer Schlag"], measures: ["Kabeltrommel vor Gebrauch komplett abrollen", "DGUV V3 Prüfung", "Stolperfreie Verlegung"] },
            { id: "w_5", name: "Winkelschleifer, Betonschleifmaschine ('Flex')", checked: false, hazards: ["Berstende Trennscheibe", "Funkenflug / Brandgefahr", "Lärm & Hand-Arm-Vibrationen"], measures: ["Schutzbrille und Gehörschutz zwingend", "Heißerlaubnisschein bei brandgefährdeter Umgebung", "Beidhändiges Führen"] },
            { id: "w_6", name: "Ständerbohrmaschine", checked: false, hazards: ["Erfassen von Haaren/Kleidung", "Wegfliegende Späne", "Getroffen werden von Bohrfutterschlüssel"], measures: ["Haarnetz bei langen Haaren", "Absolutes Handschuhverbot", "Schutzbrille", "Werkstück fest einspannen"] },
            { id: "w_7", name: "Kompressor", checked: false, hazards: ["Wegfliegende Teile durch Druckluft", "Lärmbelastung", "Stolpergefahr durch Schläuche"], measures: ["Personen nicht abblasen", "Schutzbrille tragen", "Gehörschutz", "Schläuche stolperfrei verlegen"] },
            { id: "w_8", name: "Hochdruckreiniger, Trockeneisreiniger (einschl. Dampfstrahlern)", checked: false, hazards: ["Verbrühen (Dampf)", "Elektrischer Schlag", "Wegfliegende Partikel"], measures: ["Schutzbrille", "Flüssigkeitsdichte Schutzkleidung", "Betrieb über FI-Schutzschalter (PRCD)"] },
            { id: "w_9", name: "Handhubwagen", checked: false, hazards: ["Überrollen der Füße / Quetschgefahr", "Ergonomische Belastung (Ziehen/Schieben)"], measures: ["Sicherheitsschuhe S1", "Auf Sichtkontakt achten", "Hubwagenskaten verboten"] },
            { id: "w_10", name: "Mitgänger-Flurförderzeug", checked: false, hazards: ["Anfahren von Personen", "Quetschgefahr an Regalen"], measures: ["Unterweisung", "Sicherheitsschuhe", "Zündschlüssel bei Nichtnutzung abziehen"] },
            { id: "w_11", name: "Gabelstapler (Gas)", checked: false, hazards: ["Quetschgefahr durch Umkippen", "Anfahren von Personen", "Explosionsgefahr Gas", "Abgase"], measures: ["Gurtpflicht", "Regelmäßige UVV-Prüfung", "Warnwestenpflicht", "Vorsorge ehem. G25"] },
            { id: "w_12", name: "Gabelstapler (Diesel)", checked: false, hazards: ["Quetschgefahr durch Umkippen", "Anfahren von Personen", "Dieselabgase"], measures: ["Gurtpflicht", "UVV-Prüfung", "Warnwestenpflicht", "Betrieb nur im Freien oder mit Partikelfilter"] },
            { id: "w_13", name: "Gabelstapler (Elektrisch)", checked: false, hazards: ["Quetschgefahr durch Umkippen", "Anfahren von Personen", "Brandgefahr beim Laden"], measures: ["Gurtpflicht", "UVV-Prüfung", "Warnwestenpflicht", "Ladebereich absichern"] },
            { id: "w_14", name: "Batterieladestation", checked: false, hazards: ["Brand- und Explosionsgefahr (Wasserstoff)", "Elektrischer Schlag"], measures: ["Belüftung sicherstellen", "Rauchverbot", "Abstand zu brennbaren Materialien"] },
            { id: "w_15", name: "Bandsäge", checked: false, hazards: ["Schnittverletzungen am Sägeband", "Lärm", "Holzstaub"], measures: ["Schiebestock verwenden", "Bandführung richtig einstellen", "Absaugung", "Keine Handschuhe"] },
            { id: "w_16", name: "Heißklebepistole", checked: false, hazards: ["Verbrennungen", "Brandgefahr"], measures: ["Hitzebeständige Unterlage", "Pistole nach Gebrauch ausstecken"] },
            { id: "w_17", name: "Elektroschweißgerät", checked: false, hazards: ["UV/IR-Strahlung (Verblitzung)", "Schweißrauche", "Brandgefahr durch Funkenflug"], measures: ["Schweißhelm mit passendem Filter", "Feuerfeste Schutzkleidung", "Absaugung nutzen", "Feuerlöscher bereitstellen"] },
            { id: "w_18", name: "Gasschweißen, Gaslöten, Trennschneiden", checked: false, hazards: ["Explosion von Gasflaschen", "Brandgefahr", "Stolpergefahr durch Schläuche"], measures: ["Gasflaschen anketten", "Armaturen fettfrei halten", "Rückschlagsicherungen prüfen"] },
            { id: "w_19", name: "MIG- und WIG-Schweißen", checked: false, hazards: ["UV/IR-Strahlung", "Schweißrauche", "Lärm"], measures: ["Schweißhelm", "Absaugung", "Lichtundurchlässige Trennwände"] },
            { id: "w_20", name: "Kleinteilelager Werkstatt (Regale, Kanister)", checked: false, hazards: ["Herabfallende Teile", "Gefahrstoffaustritt"], measures: ["Regale gegen Umkippen sichern", "Schwere Teile unten lagern", "Auffangwannen für Kanister"] },
            { id: "w_21", name: "Leitern und Aufstiegshilfen", checked: false, hazards: ["Absturz", "Abrutschen"], measures: ["Sichtprüfung vor Nutzung", "Spreizsicherung voll spannen", "Oberste Sprossen nicht betreten"] },
            { id: "w_22", name: "Industriestaubsauger einschl. Absaugvorrichtungen", checked: false, hazards: ["Stolpergefahr durch Kabel/Schläuche", "Einatmen toxischer Materialien"], measures: ["Korrekte Staubklasse verwenden", "Kabel aufrollen"] },
            { id: "w_23", name: "Doppelschleifbock", checked: false, hazards: ["Berstende Schleifscheiben", "Funkenflug", "Lärm"], measures: ["Schutzbrillen", "Spaltmaß gering halten", "Keine Handschuhe"] },
            { id: "w_24", name: "Kettensägenschärfgerät / Bohrerschärfgerät", checked: false, hazards: ["Funkenflug", "Schnittverletzungen"], measures: ["Schutzbrille", "Aufmerksamkeitsfokus"] },
            { id: "w_25", name: "Staplerkorb", checked: false, hazards: ["Absturz", "Quetschgefahr (Scherstellen)"], measures: ["PSA gegen Absturz", "Einweisung", "Nicht aus dem Korb steigen"] },
            { id: "w_26", name: "Hubarbeitsbühne", checked: false, hazards: ["Absturz", "Quetschgefahr", "Umkippen"], measures: ["PSA gegen Absturz", "Windlimits beachten", "UVV Prüfung"] },
            { id: "w_27", name: "Expander (Heizungsbau)", checked: false, hazards: ["Quetschungen", "Muskel-Skelett-Belastung"], measures: ["Handschuhe", "Ergonomische Haltung"] },
            { id: "w_28", name: "Handpresse (Heizungsbau)", checked: false, hazards: ["Quetschungen"], measures: ["Auf Fingerposition achten"] },
            { id: "w_29", name: "Einfriergerät (Heizungsbau)", checked: false, hazards: ["Kälteverbrennungen / Erfrierungen"], measures: ["Kälteschutzhandschuhe", "PSA"] },
            { id: "w_30", name: "Müllpresse", checked: false, hazards: ["Quetschgefahr beim Pressvorgang", "Eingezogen werden"], measures: ["Eingriffe nur im ausgeschalteten Zustand", "Einsteigen streng verboten"] },
            { id: "w_31", name: "Lackieren (Spritzwände, Spritzstände, Spritzkabinen, Absaugungen etc.)", checked: false, hazards: ["Einatmen von Lackdämpfen (toxisch)", "Brand- und Explosionsgefahr"], measures: ["Atemschutz (Lackiermaske)", "Betriebsanweisung Lacke", "Absaugung/Spritzwand nutzen", "Ex-Schutz beachten"] }
        ]
    },
    {
        category: "3. Schreinerei",
        icon: "🪵",
        items: [
            { id: "s_1", name: "Abrichthobelmaschine", checked: false, hazards: ["Schnittgefahr an der Messerwelle", "Rückschlag", "Holzstaub"], measures: ["Brückenschutz/Gliederschutz verwenden", "Schiebeholz verwenden", "Absaugung einschalten"] },
            { id: "s_2", name: "Handgeführte Hobelmaschine", checked: false, hazards: ["Schnittverletzungen", "Holzstaub", "Lärm"], measures: ["Beidhändiges Führen", "Gehörschutz", "Werkstück fixieren"] },
            { id: "s_3", name: "Dickenhobelmaschine", checked: false, hazards: ["Einzugsgefahr", "Lärm", "Staub"], measures: ["Keine Handschuhe", "Absaugung", "Gehörschutz"] },
            { id: "s_4", name: "Tischfräse", checked: false, hazards: ["Schneiden am Fräswerkzeug", "Wegfliegende Splitter", "Rückschlag"], measures: ["Vorschubapparat nutzen", "BG-Test Werkzeuge", "Gehörschutz"] },
            { id: "s_5", name: "Handoberfräse, Flachdübelfräse", checked: false, hazards: ["Schnittverletzungen", "Lärm", "Holzstaub"], measures: ["Sicheres Führen", "Werkstück fixieren", "Gehörschutz"] },
            { id: "s_6", name: "Tisch- / Formatkreissäge", checked: false, hazards: ["Schnittverletzungen am Sägeblatt", "Rückschlag von Werkstücken", "Lärm"], measures: ["Schiebestock verwenden", "Spaltkeil korrekt einstellen", "Gehörschutz", "Keine Handschuhe"] },
            { id: "s_7", name: "Plattensäge horizontal", checked: false, hazards: ["Schnittverletzungen", "Ergonomische Belastung durch große Platten", "Lärm"], measures: ["Hebehilfen nutzen", "Sicherheitsschuhe S3", "Gehörschutz"] },
            { id: "s_8", name: "Plattensäge vertikal", checked: false, hazards: ["Herabstürzen von Werkstücken", "Schnittverletzungen", "Lärm"], measures: ["Hebehilfen", "Sicherheitsschuhe S3", "Gehörschutz"] },
            { id: "s_9", name: "Tellerschleifmaschine / Kantenlangbandschleifmaschine", checked: false, hazards: ["Abschürfungen an den Händen", "Holzstaub"], measures: ["Werkstück sicher aufliegen lassen", "Absaugung", "Keine weiten Ärmel"] },
            { id: "s_10", name: "Handgeführter Bandschleifer / Schwingschleifer", checked: false, hazards: ["Hand-Arm-Vibrationen", "Staub"], measures: ["Staubabsaugung/Auffangsack", "Pausen einlegen"] },
            { id: "s_11", name: "Handkreissäge", checked: false, hazards: ["Schnittverletzungen", "Rückschlag", "Staub"], measures: ["Pendelhaube prüfen", "Sichere Auflage", "Schutzbrille"] },
            { id: "s_12", name: "Stichsäge, Säbelsäge", checked: false, hazards: ["Schnittverletzungen", "Vibration"], measures: ["Werkstück fixieren", "Schutzbrille"] },
            { id: "s_13", name: "Gehrungskappsäge", checked: false, hazards: ["Schnittverletzungen", "Wegfliegende Abschnitte"], measures: ["Werkstück festspannen", "Schutzhaube intakt halten", "Schutzbrille"] },
            { id: "s_14", name: "Kettensäge (elektrisch)", checked: false, hazards: ["Schnittverletzungen", "Rückschlag (Kick-back)"], measures: ["Schnittschutzhose", "Helm mit Visier", "Zweihandbedienung"] },
            { id: "s_15", name: "Kettensäge (benzinbetrieben)", checked: false, hazards: ["Schwere Schnittverletzungen", "Rückschlag", "Abgase", "Vibration"], measures: ["Kettensägenschein", "Schnittschutz PSA", "Gehörschutz"] },
            { id: "s_16", name: "Kurzhalsschleifer sowie Langhalsschleifer (Schleifgiraffe)", checked: false, hazards: ["Staubentwicklung (lungengängig)", "Ergonomische Belastung (Überkopfarbeit)"], measures: ["Absaugung (Klasse M)", "Arbeitsgerüst statt Leiter nutzen"] },
            { id: "s_17", name: "Langlochbohrmaschine", checked: false, hazards: ["Erfassen von Kleidung", "Schnittgefahr"], measures: ["Keine weite Kleidung", "Werkstück spannen"] },
            { id: "s_18", name: "Kantenanleimmaschine", checked: false, hazards: ["Verbrennung an Heißleim", "Quetschgefahr Transportband", "Lärm"], measures: ["Gehörschutz", "Sicherheitsabstand zu heißen Teilen"] },
            { id: "s_19", name: "Furnierpresse", checked: false, hazards: ["Quetschgefahr", "Verbrennungsgefahr (Heizplatten)"], measures: ["Gefahrenbereich nicht betreten", "Hitzeschutz"] },
            { id: "s_20", name: "Rahmen- und Korpuspresse", checked: false, hazards: ["Quetschgefahr"], measures: ["Beidhändige Bedienung (falls vorh.)", "Druck langsam aufbauen"] },
            { id: "s_21", name: "Eintreibegerät (Nagelpistolen/Klammergeräte)", checked: false, hazards: ["Schussverletzungen", "Querschläger", "Lärm"], measures: ["Schutzbrille", "Gerät niemals auf Personen richten", "Kontakt-Auslösesicherung"] },
            { id: "s_22", name: "Pistolen- / Teilereinigung (Teilereinigungsgerät)", checked: false, hazards: ["Hautkontakt mit Lösungsmitteln", "Dämpfe"], measures: ["Chemikalienschutzhandschuhe", "Gute Belüftung"] },
            { id: "s_23", name: "Lagern von Platten und Schnittholz", checked: false, hazards: ["Umkippende Platten", "Quetschungen"], measures: ["Platten sichern", "Sicherheitsschuhe S3", "Plattengreifer nutzen"] },
            { id: "s_24", name: "Spänesilo (Absauganlage)", checked: false, hazards: ["Staubexplosion", "Ersticken beim Einfahren"], measures: ["Zündquellen fernhalten", "Einfahren nur mit Erlaubnisschein und Sicherungsposten", "Siloeinfahrhose"] },
            { id: "s_25", name: "Dekupiersäge", checked: false, hazards: ["Schnittverletzungen", "Holzstaub"], measures: ["Schutzbrille", "Finger aus der Schnittlinie halten"] },
            { id: "s_26", name: "Prebomat", checked: false, hazards: ["Quetschungen"], measures: ["Sicherheitseinrichtungen prüfen", "Unterweisung"] }
        ]
    },
    {
        category: "4. Metallbearbeitung",
        icon: "⚙️",
        items: [
            { id: "m_1", name: "Drehmaschine, Fräsmaschine, Honmaschine", checked: false, hazards: ["Erfassen von Kleidung", "Wegfliegende Späne", "Kühlschmierstoff-Kontakt"], measures: ["Eng anliegende Kleidung", "Keine Handschuhe", "Schutzbrille", "Spänehaken verwenden"] },
            { id: "m_2", name: "Hydraulische Presse", checked: false, hazards: ["Quetschgefahr", "Wegfliegende Splitter"], measures: ["Zweihandschaltung / Lichtschranke", "Schutzbrille", "Sicherheitsschuhe"] },
            { id: "m_3", name: "Abkantbank", checked: false, hazards: ["Quetschgefahr", "Schnittgefahr an Blechen", "Herausschlagen des Werkstücks"], measures: ["Schnittfeste Handschuhe", "Material festspannen"] },
            { id: "m_4", name: "Rundstahlbiegemaschine", checked: false, hazards: ["Quetschgefahr", "Zurückschnellender Stahl"], measures: ["Abstand halten", "Unterweisung"] },
            { id: "m_5", name: "Sandstrahlanlage (Sandstrahl-Box)", checked: false, hazards: ["Einatmen von Feinstaub", "Augenverletzungen"], measures: ["Anlage nur geschlossen betreiben", "Handschuhe der Anlage nutzen"] },
            { id: "m_6", name: "Geschlossene Drehmaschinen, CNC-Fräsen", checked: false, hazards: ["Quetschgefahr bei Rüstvorgängen", "Kühlschmierstoffe (Aerosole)"], measures: ["Türverriegelung niemals überbrücken", "Absaugung nutzen", "Hautschutzplan"] },
            { id: "m_7", name: "Rissprüfgerät", checked: false, hazards: ["Chemikalienkontakt (Prüfmittel)", "Brandgefahr (je nach Mittel)"], measures: ["Schutzbrille", "Handschuhe", "Lüftung"] },
            { id: "m_8", name: "Härteprüfgerät", checked: false, hazards: ["Quetschungen bei Bedienung"], measures: ["Aufmerksamkeitsfokus", "Finger fernhalten"] },
            { id: "m_9", name: "Entmagnetisiergerät", checked: false, hazards: ["Elektromagnetische Felder (Gefahr für Schrittmacher)"], measures: ["Warnschilder aufstellen", "Zutrittsverbot für Personen mit Herzschrittmacher"] },
            { id: "m_10", name: "Draht- und Senkerodiermaschine", checked: false, hazards: ["Elektrische Spannung", "Dämpfe (Dielektrikum)"], measures: ["Sicherheitsabdeckungen geschlossen halten", "Absaugung nutzen"] },
            { id: "m_11", name: "Einpressmaschine", checked: false, hazards: ["Quetschgefahr"], measures: ["Lichtschranke oder Zweihandbedienung"] },
            { id: "m_12", name: "Blechbiegemaschine", checked: false, hazards: ["Quetschen", "Schneiden"], measures: ["Schnittfeste Handschuhe", "Räumliche Absicherung des Bereichs"] },
            { id: "m_13", name: "Automatisches Blechlager", checked: false, hazards: ["Gequetscht werden", "Getroffen werden von Blechen"], measures: ["Zutrittsverbot während des Betriebs", "Sicherheitsschuhe S3", "Helm beim Kranbetrieb"] },
            { id: "m_14", name: "Laserschneideanlage", checked: false, hazards: ["Augenverletzungen durch Laserstrahlung", "Brandgefahr", "Schneidstäube/Dämpfe"], measures: ["Einhausung intakt halten", "Absaugung", "Laserschutzbrille bei Wartung (Laserschutzbeauftragter)"] },
            { id: "m_15", name: "Elektrolyt-Beizarbeitsplatz", checked: false, hazards: ["Verätzung durch Säuren", "Toxische Dämpfe"], measures: ["Säurefeste PSA (Schürze, Stiefel, Visier, Handschuhe)", "Zwingende Absaugung", "Augenspülflasche bereithalten"] },
            { id: "m_16", name: "Ultraschallreinigungsgeräte", checked: false, hazards: ["Lärm (Hochfrequenz)", "Kontakt mit Reinigungsflüssigkeit"], measures: ["Deckel während Betrieb schließen", "Handschuhe beim Entnehmen"] },
            { id: "m_17", name: "Werkzeugvoreinstellgeräte", checked: false, hazards: ["Schnittgefahr an scharfen Werkzeugen"], measures: ["Schnittschutzhandschuhe", "Vorsichtiger Umgang"] }
        ]
    },
    {
        category: "5. Kunststofffertigung",
        icon: "🧪",
        items: [
            { id: "k_1", name: "Spritzgußmaschine", checked: false, hazards: ["Verbrennung durch heiße Kunststoffmasse", "Quetschgefahr an der Form", "Freisetzung giftiger Gase bei Überhitzung"], measures: ["Schutzgitter niemals manipulieren", "Hitzeschutzhandschuhe bei Störungsbeseitigung", "Absaugung über der Maschine"] },
            { id: "k_2", name: "3D-Drucker", checked: false, hazards: ["Emission von ultrafeinen Partikeln (UFP)", "Verbrennung am Druckkopf / Druckbett"], measures: ["Betrieb nur im geschlossenen Gehäuse mit Filter", "Abkühlen lassen vor Entnahme"] },
            { id: "k_3", name: "Heißluftfön", checked: false, hazards: ["Verbrennungsgefahr", "Brandgefahr", "Ausgasung von Kunststoffen"], measures: ["Feuerfeste Unterlage", "Ausreichende Belüftung", "Heißluft nie auf Personen richten"] }
        ]
    },
    {
        category: "6. Gärtnerei & Außenanlagen",
        icon: "🌿",
        items: [
            { id: "g_1", name: "Rasenmäher (elektrisch / Akku)", checked: false, hazards: ["Wegfliegende Steine", "Schnittverletzungen am Messer", "Kabel überfahren"], measures: ["Schutzbrille", "Festes Schuhwerk", "Kabel hinter sich führen"] },
            { id: "g_2", name: "Rasenmäher (benzinbetrieben)", checked: false, hazards: ["Lärm", "Abgase", "Brandgefahr beim Betanken"], measures: ["Gehörschutz", "Schutzbrille", "Betanken nur im abgekühlten Zustand"] },
            { id: "g_3", name: "Freischneider (benzinbetrieben)", checked: false, hazards: ["Lärm", "Wegfliegende Steine (Gefahr auch für Dritte)", "Vibration"], measures: ["Sicherheitsabstand zu anderen Personen (15m)", "Gesichtsschutz (Gitter + Brille)", "Gehörschutz", "Sicherheitsschuhe S3"] },
            { id: "g_4", name: "Heckenschere (benzinbetrieben)", checked: false, hazards: ["Schnittverletzungen", "Lärm", "Abgase"], measures: ["Zweihandbedienung", "Gehörschutz", "Schnittfeste Handschuhe"] },
            { id: "g_5", name: "Laubbläser (elektrisch/Akku)", checked: false, hazards: ["Aufgewirbelter Staub/Schmutz", "Lärm"], measures: ["Schutzbrille", "Gehörschutz"] },
            { id: "g_6", name: "Laubbläser (benzinbetrieben)", checked: false, hazards: ["Aufgewirbelter Staub/Schmutz", "Abgase", "Hoher Lärm"], measures: ["Schutzbrille", "Gehörschutz", "Rücksichtnahme auf Dritte"] },
            { id: "g_7", name: "LKW mit Kranaufbau und Anhängemaul", checked: false, hazards: ["Quetschgefahr beim Ankuppeln", "Herabfallende Lasten (Kran)", "Toter Winkel beim Rangieren"], measures: ["Warnkleidung", "Niemals unter schwebende Lasten treten", "Einweiser beim Rangieren"] }
        ]
    },
    {
        category: "7. Baustelle",
        icon: "🚧",
        items: [
            { id: "b_1", name: "Industriestaubsauger Staubklasse H (Asbestsauger)", checked: false, hazards: ["Einatmen von Asbestfasern (krebserregend)"], measures: ["TRGS 519 beachten", "Filterwechsel nur mit PSA (FFP3, Anzug)", "Spezielle Entsorgung des Saugguts"] },
            { id: "b_2", name: "Bohrmaschinen (Baustelle)", checked: false, hazards: ["Lärm", "Quetschen der Hand beim Blockieren des Bohrers", "Staub"], measures: ["Gehörschutz", "Zusatzhandgriff nutzen", "Staubabsaugung"] },
            { id: "b_3", name: "Rüttelplatte", checked: false, hazards: ["Hand-Arm-Vibrationen", "Lärm", "Quetschen der Füße"], measures: ["Vibrationsschutz", "Gehörschutz", "Sicherheitsschuhe S3 mit Mittelfußschutz"] },
            { id: "b_4", name: "Betonmischer", checked: false, hazards: ["Einzugsgefahr am Zahnkranz", "Elektrischer Schlag"], measures: ["Schutzgitter intakt halten", "Nicht in laufende Trommel greifen", "Betrieb über PRCD-Schalter"] },
            { id: "b_5", name: "Asphaltschneidegerät", checked: false, hazards: ["Schwere Schnittverletzungen", "Staubentwicklung (Silikate)", "Lärm"], measures: ["Sicherheitsschuhe S3", "Nassschneideverfahren", "Gehörschutzpflicht"] }
        ]
    },
    {
        category: "8. Anbaugeräte für Bagger, Unimog, Traktoren",
        icon: "🚜",
        items: [
            { id: "a_1", name: "Kreiselmähwerk", checked: false, hazards: ["Weggeschleuderte Steine/Fremdkörper", "Lärm", "Schnittverletzungen bei Reinigung"], measures: ["Schutzabdeckungen am Mähwerk", "Sicherheitsabstand zu Fußgängern", "Wartung nur bei Stillstand"] },
            { id: "a_2", name: "Salz- und Kastenstreuer", checked: false, hazards: ["Erfassen durch Rührwelle", "Ausgleiten auf rutschigem Boden (Winter)"], measures: ["Schutzgitter über Trichter", "Keine Reinigung bei laufendem Motor"] },
            { id: "a_3", name: "Frontkehrmaschine", checked: false, hazards: ["Staubaufwirbelung", "Quetschgefahr beim Anbau"], measures: ["Wassersprüheinrichtung zur Staubbindung", "Aufenthalt im Arbeitsbereich verboten"] },
            { id: "a_4", name: "Schneeräumschilder", checked: false, hazards: ["Quetschgefahr beim Anbau", "Anfahren von Personen/Objekten"], measures: ["Einweiser bei schlechter Sicht", "Kollisionsschutz (Ausklinkmechanismus) intakt"] },
            { id: "a_5", name: "Schneefräse", checked: false, hazards: ["Einziehen in Fräswalze", "Weggeschleudertes Eis/Steine"], measures: ["Verstopfungen nur mit Werkzeug (Stab) bei abgestelltem Motor lösen", "Niemals mit den Händen in den Auswurf greifen"] },
            { id: "a_6", name: "Wildkrautbürste", checked: false, hazards: ["Weggeschleuderte Steine", "Staub", "Vibration"], measures: ["Schutzbrille", "Visier", "Warnkleidung", "Sicherheitsabstand"] },
            { id: "a_7", name: "Holzspalter", checked: false, hazards: ["Schwere Quetsch- / Amputationsverletzungen", "Wegfliegende Holzsplitter"], measures: ["Zweihandschaltung zwingend", "Schutzbrille", "Sicherheitsschuhe S3", "Sicherer Stand"] },
            { id: "a_8", name: "Krananbau hinten", checked: false, hazards: ["Umkippen des Fahrzeugs", "Herabfallende Lasten"], measures: ["Stützfüße voll ausfahren", "Niemals unter der schwebenden Last aufhalten", "Kranschein erforderlich"] },
            { id: "a_9", name: "Baggeranbau hinten", checked: false, hazards: ["Quetschgefahr im Schwenkbereich", "Herabfallendes Material"], measures: ["Gefahrenbereich absperren", "Aufenthalt von Personen verbieten"] },
            { id: "a_10", name: "Frontlader mit Anbauten", checked: false, hazards: ["Herabfallende Last", "Sichtfeldeinschränkung", "Fahrzeugüberschlag"], measures: ["Last tief führen", "Passendes Anbaugerät nutzen (Sicherung)", "Gegengewicht verwenden"] },
            { id: "a_11", name: "Kanalreinigung (Spülwagen, Kamerawagen)", checked: false, hazards: ["Biologische Gefährdung (Kanalwasser, Bakterien)", "Hoher Wasserdruck", "Absturz in Schacht"], measures: ["Hautschutz", "PSA gegen Infektionen (Handschuhe, Brille, ggf. Maske)", "Schachtabsturzsicherung"] },
            { id: "a_12", name: "Grabenfräse", checked: false, hazards: ["Einziehen", "Weggeschleudertes Material", "Kabelschäden im Boden"], measures: ["Leitungspläne vorher prüfen", "Sicherheitsabstand", "Not-Aus griffbereit"] },
            { id: "a_13", name: "Förderband", checked: false, hazards: ["Einzug an Rollen/Umlenkpunkten", "Herabfallendes Material"], measures: ["Verkleidung der Einzugsstellen", "Keine lose Kleidung", "Not-Aus-Reißleine intakt"] }
        ]
    },
    {
        category: "9. KFZ-Werkstatt",
        icon: "🚗",
        items: [
            { id: "kfz_1", name: "Hebebühne", checked: false, hazards: ["Herabfallende KFZ", "Quetschgefahr", "Absturz (bei Scherenbühnen)"], measures: ["Regelmäßige UVV", "Traglast nicht überschreiten", "Unterstellböcke bei Bedarf", "Sicherheitsschuhe"] },
            { id: "kfz_2", name: "Unterflurgrube", checked: false, hazards: ["Absturz", "Erstickung/Explosion durch Dämpfe (Bremsenreiniger)"], measures: ["Grube bei Nichtnutzung abdecken/absperren", "Gute Belüftung", "Kopfschutz bei Arbeiten unterm Fzg."] },
            { id: "kfz_3", name: "Reifenwechselstation / Wuchtmaschine", checked: false, hazards: ["Plötzliche Freisetzung von Druckluft", "Quetschgefahr durch Montagearme"], measures: ["Schutzhaube beim Wuchten schließen", "Drucklos machen", "Gehörschutz"] },
            { id: "kfz_4", name: "Diagnosegeräte (OBD, Multimeter)", checked: false, hazards: ["Elektrischer Schlag an Hochvolt-Fahrzeugen (E-Autos)"], measures: ["Spannungsfreiheit feststellen (Fachkundiger HV)", "Entsprechende PSA bei HV-Arbeiten"] },
            { id: "kfz_5", name: "Ölabsauggeräte / Ölabscheider", checked: false, hazards: ["Hautkontakt mit Altöl", "Brandgefahr"], measures: ["Chemikalienschutzhandschuhe", "Altöl vorschriftsmäßig lagern (TRGS 510)"] },
            { id: "kfz_6", name: "Rollenprüfstand / Bremsenprüfstand", checked: false, hazards: ["Einzugsgefahr", "Abgase", "Wegrollen des Fzg."], measures: ["Fahrzeug sichern", "Abgasabsaugung aufstecken", "Gefahrenbereich nicht betreten"] }
        ]
    },
    {
        category: "10. Wäscherei",
        icon: "👕",
        items: [
            { id: "wa_1", name: "Wäschereitrockner", checked: false, hazards: ["Brandgefahr (Selbstentzündung durch Flusen/Ölreste)", "Verbrennungsgefahr"], measures: ["Flusensieb täglich reinigen", "Trockner nicht vor Beendigung der Abkühlphase abschalten", "Heißes Gut nicht gestapelt liegen lassen"] },
            { id: "wa_2", name: "Zentrifugen", checked: false, hazards: ["Verletzung durch rotierende Teile", "Lärm"], measures: ["Deckelverriegelung muss intakt sein (Öffnen erst bei Stillstand)", "Gleichmäßiges Beladen gegen Unwucht"] },
            { id: "wa_3", name: "Waschmaschine", checked: false, hazards: ["Kontakt mit Waschmitteln/Chemie", "Rutschgefahr durch austretendes Wasser", "Thermische Gefährdung"], measures: ["Schutzhandschuhe/Schutzbrille beim Dosieren von Konzentraten", "Rutschfeste Schuhe"] },
            { id: "wa_4", name: "Mangeln", checked: false, hazards: ["Einzugsgefahr von Fingern/Händen", "Verbrennungsgefahr an heißen Walzen"], measures: ["Eingreifschutz (Fingerschutzleiste) zwingend auf Funktion prüfen", "Keine losen Ärmel oder Schmuck", "Not-Aus Schalter leicht erreichbar"] }
        ]
    },
    {
        category: "11. Professionelle Küche / Großküche",
        icon: "🍳",
        items: [
            { id: "ku_1", name: "Professionelle Geschirrspülmaschine", checked: false, hazards: ["Verbrühung durch heißen Dampf", "Verätzung durch Spülchemie", "Rutschgefahr"], measures: ["Gesicht beim Öffnen abwenden", "PSA (Brille, lange Handschuhe) beim Reinigerwechsel", "Boden trocken halten"] },
            { id: "ku_2", name: "Fritteuse", checked: false, hazards: ["Schwere Verbrennungen durch heißes Fett", "Fettbrand"], measures: ["Fettbrand-Feuerlöscher (Klasse F) bereitstellen", "Niemals mit Wasser löschen", "Fritteuse nicht überfüllen", "Abtropfen lassen vor dem Einlegen (Kein Wasser/Eis ins Fett)"] },
            { id: "ku_3", name: "Mikrowellengeräte", checked: false, hazards: ["Verbrennungen an heißen Behältern", "Siedeverzug von Flüssigkeiten"], measures: ["Geeignetes Geschirr verwenden", "Vorsicht beim Herausnehmen (Topflappen)"] },
            { id: "ku_4", name: "Cooking Center (Thermomix, Vario etc.)", checked: false, hazards: ["Verbrühung durch Dampf", "Schnittverletzungen bei Messer-Reinigung", "Gewicht"], measures: ["Deckel vorsichtig öffnen", "Messer mit Bürste reinigen", "Rutschfester Stand"] },
            { id: "ku_5", name: "Nudelkochstation / Nudelkessel", checked: false, hazards: ["Verbrühung durch kochendes Wasser", "Rutschgefahr"], measures: ["Spritzschutz nutzen", "Körbe langsam anheben", "Wasserablauf sauber halten"] },
            { id: "ku_6", name: "Teigknetmaschine", checked: false, hazards: ["Eingezogen werden", "Ergonomische Belastung (Teigkessel)"], measures: ["Schutzgitterverriegelung prüfen", "Teigkesselwagen/Hubhilfen verwenden", "Keine weite Kleidung"] }
        ]
    },
    {
        category: "12. Töpferei",
        icon: "🏺",
        items: [
            { id: "to_1", name: "Töpferscheibe", checked: false, hazards: ["Hautbelastung (austrocknend)", "Ergonomische Zwangshaltung", "Einzugsgefahr (Haare/Kleidung)"], measures: ["Hautcreme nach der Arbeit", "Ergonomischer Sitz", "Haare zusammenbinden"] }
        ]
    },
    {
        category: "13. Druckerei / Papierverarbeitung",
        icon: "🖨️",
        items: [
            { id: "p_1", name: "Schneidemaschine (Plattengerät mit Lichtschranke)", checked: false, hazards: ["Amputation von Fingern/Händen", "Quetschungen am Pressbalken"], measures: ["Zweihandschaltung und Lichtgitter arbeitstäglich prüfen", "Messerwechsel nur mit Spezialwerkzeug", "Kein Eingriff in den Schnittbereich"] },
            { id: "p_2", name: "Vertikale Schneidemaschine (Kunststoffplatten)", checked: false, hazards: ["Schnittverletzungen", "Abstürzende Platten", "Staub"], measures: ["Sicherheitsschuhe S3", "Werkstück klemmen", "Schlitten sicher führen"] },
            { id: "p_3", name: "Schneidemaschine Plotter", checked: false, hazards: ["Schnittverletzungen am Schneidkopf", "Einzugsgefahr von Papier"], measures: ["Context: Während des Betriebs Abdeckungen geschlossen halten", "Keine weite Kleidung"] },
            { id: "p_4", name: "Falzmaschine", checked: false, hazards: ["Einzugs- und Quetschgefahr an den Walzen", "Lärm"], measures: ["Schutzhauben müssen geschlossen sein", "Gehörschutz", "Lange Haare zusammenbinden"] },
            { id: "p_5", name: "Plattendrucker", checked: false, hazards: ["Quetschgefahr durch fahrenden Druckschlitten", "UV-Strahlung (Härtung)", "Lösungsmitteldämpfe"], measures: ["Abstand halten", "Lichtschranken nicht blockieren", "Ausreichende Belüftung"] },
            { id: "p_6", name: "Kunststoffspiral-Bindemaschine", checked: false, hazards: ["Quetschungen an Fingern", "Ergonomische Belastung (repetitiv)"], measures: ["Gerät sicher aufstellen", "Hände nicht im Stanzbereich positionieren"] },
            { id: "p_7", name: "Klebebinder", checked: false, hazards: ["Verbrennung an Heißleim", "Einzugsgefahr am Fräsaggregat", "Dämpfe"], measures: ["Hitzehandschuhe bei Reinigung", "Absaugung für Leimdämpfe und Papierstaub", "Schutzhauben geschlossen halten"] },
            { id: "p_8", name: "Heftmaschine", checked: false, hazards: ["Stichverletzungen durch Drahtklammern", "Quetschungen"], measures: ["Eingreifschutz (Plexiglas) am Heftkopf", "Fußpedal nur bei sicherer Handposition auslösen"] },
            { id: "p_9", name: "Laminiermaschine", checked: false, hazards: ["Quetschgefahr an den Einzugsrollen", "Verbrennungsgefahr durch heiße Oberflächen", "Elektrischer Schlag"], measures: ["Einzugsrollen verkleidet (Eingriffschutz)", "Ausreichend Abstand halten", "DGUV V3 Prüfung"] }
        ]
    }
];