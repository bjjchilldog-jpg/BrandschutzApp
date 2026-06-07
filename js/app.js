// --- GLOBAL STATE ---
let tempMediaData = null; 
let mangelList = [];
let gefList = [];
let chkAnswers = {};

// --- INIT ---
document.addEventListener("DOMContentLoaded", () => {
    const datumInput = document.getElementById('obj_datum');
    if(datumInput) {
        datumInput.valueAsDate = new Date();
    }
    initChecklist();
    renderMangel();
    renderGef();
});

// --- DICTATION ---
function startDictation(targetId, btn) {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
        alert("Diktierfunktion wird von diesem Browser (ggf. iOS Safari) nicht vollständig unterstützt.");
        return;
    }
    const rec = new SpeechRec(); 
    rec.lang = 'de-DE';
    
    if (btn.classList.contains('recording')) { 
        rec.stop(); 
        return; 
    }
    
    btn.classList.add('recording'); 
    rec.start();
    
    rec.onresult = function(e) { 
        const tx = document.getElementById(targetId); 
        tx.value = (tx.value + " " + e.results[0][0].transcript).trim(); 
    };
    
    rec.onend = function() { btn.classList.remove('recording'); };
    rec.onerror = function() { btn.classList.remove('recording'); };
}

// --- MEDIA UPLOAD ---
function handleMediaUpload(e) {
    const file = e.target.files[0]; 
    if (!file) return;
    
    const isVid = file.type.startsWith('video/');
    const container = document.getElementById('preview_mangel');
    const content = document.getElementById('preview_mangel_content');
    
    container.style.display = 'block';
    content.innerHTML = '<div style="padding:20px; text-align:center; color:#94a3b8;">Verarbeite...</div>';
    
    const reader = new FileReader();
    reader.onload = function(ev) {
        if (isVid) {
            tempMediaData = { type: 'video', data: ev.target.result };
            content.innerHTML = '<video src="' + ev.target.result + '" controls></video>';
        } else {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas'); 
                let width = img.width;
                let height = img.height;
                const max_dim = 1000;

                if (width > height) {
                    if (width > max_dim) { height *= max_dim / width; width = max_dim; }
                } else {
                    if (height > max_dim) { width *= max_dim / height; height = max_dim; }
                }

                canvas.width = width; 
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                const comp = canvas.toDataURL('image/jpeg', 0.7);
                tempMediaData = { type: 'image', data: comp };
                content.innerHTML = '<img src="' + comp + '">';
            }; 
            img.src = ev.target.result;
        }
    }; 
    reader.readAsDataURL(file);
}

function removeMedia() {
    tempMediaData = null;
    const mediaInput = document.getElementById('m_media');
    if(mediaInput) mediaInput.value = '';
    const previewContainer = document.getElementById('preview_mangel');
    if(previewContainer) previewContainer.style.display = 'none';
    const contentContainer = document.getElementById('preview_mangel_content');
    if(contentContainer) contentContainer.innerHTML = '';
}

// --- NAVIGATION ---
function switchView(id) { 
    const views = document.querySelectorAll('.view');
    for (let i = 0; i < views.length; i++) {
        views[i].classList.remove('active');
    }
    const target = document.getElementById(id);
    if(target) target.classList.add('active'); 
    window.scrollTo(0,0); 
}

// --- CHECKLISTE ---
function initChecklist() {
    if(typeof chkQuestions === 'undefined') return;
    
    let html = "";
    for (let i = 0; i < chkQuestions.length; i++) {
        chkAnswers[i] = "na";
        html += '<div class="chk-row">';
        html += '<div>' + chkQuestions[i] + '</div>';
        html += '<div class="chk-options">';
        html += '<div class="chk-btn" id="chk_' + i + '_ja" onclick="setChk(' + i + ', \'ja\')"><i class="fa-solid fa-check"></i> Ja</div>';
        html += '<div class="chk-btn" id="chk_' + i + '_nein" onclick="setChk(' + i + ', \'nein\')"><i class="fa-solid fa-times"></i> Nein</div>';
        html += '<div class="chk-btn active-na" id="chk_' + i + '_na" onclick="setChk(' + i + ', \'na\')">N/A</div>';
        html += '</div></div>';
    }
    const container = document.getElementById('chk-container');
    if(container) container.innerHTML = html;
}

function setChk(i, v) { 
    chkAnswers[i] = v; 
    document.getElementById('chk_' + i + '_ja').className = "chk-btn";
    document.getElementById('chk_' + i + '_nein').className = "chk-btn";
    document.getElementById('chk_' + i + '_na').className = "chk-btn";
    document.getElementById('chk_' + i + '_' + v).classList.add('active-' + v); 
}

// --- GEFAHRSTOFFE LOGIK ---
function addGefahrstoff() {
    const name = document.getElementById('g_name').value;
    const menge = document.getElementById('g_menge').value;
    const ort = document.getElementById('g_ort').value;
    const klasse = document.getElementById('g_klasse').value;
    const trgs = document.getElementById('g_trgs').value;
    const text = document.getElementById('g_text').value;

    if(!name) { alert("Bitte Stoff-/Produktnamen eingeben."); return; }

    gefList.push({ id: Date.now(), n: name, m: menge, o: ort, k: klasse, t: trgs, txt: text });
    
    document.getElementById('g_name').value = "";
    document.getElementById('g_menge').value = "";
    document.getElementById('g_ort').value = "";
    document.getElementById('g_text').value = "";
    
    renderGef();
    alert("Gefahrstoff erfasst!");
}

function deleteGef(id) {
    if(confirm("Diesen Gefahrstoff-Eintrag löschen?")) {
        gefList = gefList.filter(g => g.id !== id);
        renderGef();
    }
}

function renderGef() {
    let h = "";
    if(gefList.length === 0) {
        h = '<div style="text-align:center; padding:15px; color:var(--text-muted);">Keine Stoffe erfasst.</div>';
    } else {
        gefList.forEach(g => {
            h += '<div class="mangel-card">';
            h += '<i class="fa-solid fa-trash delete-btn" onclick="deleteGef(' + g.id + ')"></i>';
            h += '<div style="font-weight:bold; margin-bottom:8px;">' + g.n + ' <span style="font-weight:normal; color:var(--text-muted); font-size:12px;">(' + g.k + ')</span></div>';
            h += '<div style="font-size:12px; margin-bottom:5px; color:var(--text-muted);">Ort: ' + (g.o || '-') + ' | Menge: ' + (g.m || '-') + '</div>';
            let trgsColor = g.t === 'ja' ? 'color:#34d399' : (g.t === 'nein' ? 'color:#fca5a5; font-weight:bold;' : 'color:#fcd34d');
            let trgsText = g.t === 'ja' ? 'Ja' : (g.t === 'nein' ? 'Nein (Konflikt)' : 'Unklar');
            h += '<div style="font-size:12px; margin-bottom:8px;">TRGS Zusammenlagerung: <span style="' + trgsColor + '">' + trgsText + '</span></div>';
            if(g.txt) h += '<div style="font-size:12px; font-style:italic; border-left:2px solid var(--primary); padding-left:8px;">' + g.txt + '</div>';
            h += '</div>';
        });
    }
    const container = document.getElementById('gef-liste');
    if(container) container.innerHTML = h;
}

// --- MÄNGEL LOGIK ---
function addMangel() {
    const text = document.getElementById('m_text').value; 
    const ort = document.getElementById('m_ort').value; 
    const frist = document.getElementById('m_frist').value;
    const cat = document.getElementById('m_cat').value;
    
    if (!text) {
        alert("Bitte beschreiben Sie den Mangel.");
        return;
    }
    
    mangelList.push({ 
        id: Date.now(),
        t: text, 
        o: ort, 
        f: frist, 
        c: cat,
        media: tempMediaData 
    });
    
    // Formular zurücksetzen
    document.getElementById('m_text').value = ""; 
    document.getElementById('m_ort').value = ""; 
    removeMedia();
    
    renderMangel();
    alert("Mangel erfolgreich hinzugefügt!");
}

function deleteMangel(id) {
    if(confirm("Diesen Mangel wirklich löschen?")) {
        mangelList = mangelList.filter(m => m.id !== id);
        renderMangel();
    }
}

function renderMangel() {
    const countEl = document.getElementById('mangel-count');
    if(countEl) countEl.innerText = mangelList.length;
    
    let h = "";
    if(mangelList.length === 0) {
        h = '<div style="text-align:center; padding:30px; color:var(--text-muted);">Keine Mängel erfasst.</div>';
    } else {
        for (let i = 0; i < mangelList.length; i++) {
            const x = mangelList[i];
            const catInfo = catNames[x.c];
            
            h += '<div class="mangel-card">';
            h += '<i class="fa-solid fa-trash delete-btn" onclick="deleteMangel(' + x.id + ')"></i>';
            h += '<div class="cat-badge ' + catInfo.class + '">' + catInfo.title + '</div>';
            h += '<div style="font-weight:600; margin-bottom:8px; line-height:1.4;">' + x.t + '</div>';
            h += '<div style="font-size:12px; color:var(--text-muted); display:flex; gap:15px;">';
            h += '<span><i class="fa-solid fa-location-dot"></i> ' + (x.o || 'Nicht angegeben') + '</span>';
            h += '<span><i class="fa-solid fa-calendar"></i> ' + (x.f || 'Keine Frist') + '</span>';
            h += '</div>';
            
            if (x.media && x.media.type === 'image') {
                h += '<img src="' + x.media.data + '" style="width:100%; border-radius:6px; margin-top:12px; border:1px solid var(--border-color);">';
            }
            h += '</div>';
        }
    }
    const listEl = document.getElementById('mangel-liste');
    if(listEl) listEl.innerHTML = h;
}

// --- BERICHT GENERIERUNG ---
function generateReport() {
    const objName = document.getElementById('obj_name').value || "Nicht angegeben";
    const objStr = document.getElementById('obj_str').value || "";
    const objOrt = document.getElementById('obj_ort').value || "";
    const objPruefer = document.getElementById('obj_pruefer').value || "Nicht angegeben";
    let dateStr = "Nicht angegeben";
    const dInput = document.getElementById('obj_datum').value;
    if(dInput) {
        const dParts = dInput.split('-');
        dateStr = `${dParts[2]}.${dParts[1]}.${dParts[0]}`;
    }

    let html = '<div class="print-header">';
    html += '<h1 class="print-title">Brandschutz-Protokoll / Begehungsbericht</h1>';
    html += '<div class="print-meta"><strong>Objekt:</strong> ' + objName + (objStr ? ', ' + objStr : '') + (objOrt ? ', ' + objOrt : '') + '</div>';
    html += '<div class="print-meta"><strong>Datum:</strong> ' + dateStr + ' | <strong>Prüfer:</strong> ' + objPruefer + '</div>';
    html += '</div>';

    // Checkliste Übersicht
    let chkIssues = 0;
    let chkHtml = '<div class="print-cat-section"><div class="print-cat-title">A. Checkliste Sonderbau/Allgemein</div>';
    chkHtml += '<table style="width:100%; border-collapse: collapse; font-size:13px; margin-bottom:20px;">';
    for (let i = 0; i < chkQuestions.length; i++) {
        const ans = chkAnswers[i];
        let ansText = "-";
        let color = "#333";
        if (ans === 'ja') { ansText = "Ja"; color = "green"; }
        if (ans === 'nein') { ansText = "Nein"; color = "red"; chkIssues++; }
        if (ans === 'na') { ansText = "N/A"; color = "#777"; }
        
        chkHtml += '<tr>';
        chkHtml += '<td style="border-bottom:1px solid #ddd; padding:8px 0;">' + chkQuestions[i] + '</td>';
        chkHtml += '<td style="border-bottom:1px solid #ddd; padding:8px 0; text-align:right; font-weight:bold; color:' + color + ';">' + ansText + '</td>';
        chkHtml += '</tr>';
    }
    chkHtml += '</table></div>';
    html += chkHtml;

    // Gefahrstoffe
    if (gefList.length > 0) {
        html += '<div class="print-cat-section"><div class="print-cat-title">B. Gefahrstoffe (Brandschutz)</div>';
        gefList.forEach(g => {
            html += '<div class="print-mangel">';
            html += '<div style="font-weight:bold; margin-bottom:10px;">Stoff / Produkt: ' + g.n + '</div>';
            html += '<table style="width:100%; font-size:13px; color:#555;"><tr>';
            html += '<td><strong>Ort:</strong> ' + (g.o || '-') + '</td>';
            html += '<td><strong>Menge:</strong> ' + (g.m || '-') + '</td>';
            html += '</tr><tr>';
            html += '<td><strong>Brandverhalten:</strong> ' + g.k + '</td>';
            let trgsText = (g.t === 'ja' ? 'Ja' : (g.t === 'nein' ? '<strong style="color:red">Nein</strong>' : 'Unklar'));
            html += '<td><strong>TRGS 510 Zusammenlagerung:</strong> ' + trgsText + '</td>';
            html += '</tr></table>';
            if(g.txt) html += '<div style="margin-top:10px; font-size:13px; color:#333;"><strong>Brandschutz-Hinweise:</strong> ' + g.txt + '</div>';
            html += '</div>';
        });
        html += '</div>';
    }

    // Mängel Gruppieren
    const grouped = { 'baulich': [], 'orga': [], 'anlage': [] };
    mangelList.forEach(m => {
        if(grouped[m.c]) grouped[m.c].push(m);
    });

    // Mängel Ausgeben
    const categories = ['baulich', 'orga', 'anlage'];
    let hasMangel = false;
    let cCount = gefList.length > 0 ? 'C' : 'B';

    categories.forEach((catKey, index) => {
        const list = grouped[catKey];
        if (list.length > 0) {
            hasMangel = true;
            html += '<div class="print-cat-section">';
            let letter = String.fromCharCode(cCount.charCodeAt(0) + index);
            html += '<div class="print-cat-title">' + letter + '. Mängel: ' + catNames[catKey].title + '</div>';
            
            list.forEach(m => {
                html += '<div class="print-mangel">';
                html += '<div style="font-weight:bold; margin-bottom:10px;">Beschreibung / Maßnahme:</div>';
                html += '<div style="margin-bottom:15px; line-height:1.5;">' + m.t + '</div>';
                
                html += '<table style="width:100%; font-size:13px; color:#555;"><tr>';
                html += '<td><strong>Ort:</strong> ' + (m.o || '-') + '</td>';
                html += '<td><strong>Frist:</strong> ' + (m.f || 'Keine') + '</td>';
                html += '</tr></table>';

                if (m.media && m.media.type === 'image') {
                    html += '<img src="' + m.media.data + '" class="print-mangel-img">';
                }
                html += '</div>';
            });
            
            html += '</div>';
        }
    });

    if (!hasMangel) {
        html += '<div class="print-cat-section"><div class="print-cat-title">' + cCount + '. Aufgenommene Mängel</div>';
        html += '<p>Bei der Begehung wurden keine Mängel protokolliert.</p></div>';
    }

    document.getElementById('reportOutput').innerHTML = html;
    switchView('view-report');
}

// --- PWA SETUP ---
let deferredPrompt;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(reg => {
            console.log('ServiceWorker registriert', reg);
        }).catch(err => {
            console.log('ServiceWorker Fehler', err);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const installBtn = document.getElementById('installAppBtn');
    if (installBtn) {
        installBtn.addEventListener('click', () => {
            if (typeof deferredPrompt !== 'undefined' && deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    deferredPrompt = null;
                });
            } else {
                alert("Der automatische Download-Dialog wird von Ihrem aktuellen Browser nicht unterstützt oder blockiert.\n\nSo klappt es trotzdem:\n1. Öffnen Sie das Menü Ihres Browsers (meistens 3 Punkte oben rechts).\n2. Klicken Sie dort auf 'App installieren' oder 'Zum Startbildschirm hinzufügen'.\n\nTipp: Öffnen Sie den Link am besten direkt in Google Chrome oder Safari, nicht aus einer anderen App heraus.");
            }
        });
    }
});

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});
