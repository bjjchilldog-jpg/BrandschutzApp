// --- KONFIGURATION & DATEN ---

// SBG Checkliste Fragen
const chkQuestions = [
    "Sind die Flucht- und Rettungspläne aktuell und gut sichtbar?",
    "Sind die Fluchtwege frei von Brandlasten und Hindernissen?",
    "Funktionieren die Brandschutztüren ordnungsgemäß (schließen selbstständig)?",
    "Wurden Keile oder ähnliches an Brandschutztüren entfernt?",
    "Sind die Feuerlöscher geprüft (Plakette) und frei zugänglich?",
    "Ist die Sicherheitsbeleuchtung funktionstüchtig?",
    "Wurde die letzte Räumungsübung innerhalb der Frist durchgeführt?",
    "Sind die Brandmelder / BMA-Anlage frei von Hindernissen?",
    "Ist die Feuerwehrzufahrt / Bewegungsfläche frei zugänglich?"
];

// Mängel Kategorien Definitionen
const catNames = {
    'baulich': { title: 'Baulicher Brandschutz', class: 'cat-baulich' },
    'orga': { title: 'Organisatorischer Brandschutz', class: 'cat-orga' },
    'anlage': { title: 'Anlagentechnischer Brandschutz', class: 'cat-anlage' }
};
