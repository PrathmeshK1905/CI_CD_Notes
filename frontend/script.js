const API = "https://ci-cd-notes-backend.onrender.com";

async function createNote() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    await fetch(API + "/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content })
    });

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    loadNotes();
}

async function loadNotes() {
    const res = await fetch(API + "/notes");
    const notes = await res.json();

    const container = document.getElementById("notes");
    container.innerHTML = "";

    notes.forEach(n => {
        container.innerHTML += `
            <div class="note">
                <b>${n.title}</b>
                <p>${n.content}</p>
                <button onclick="deleteNote(${n.id})">Delete</button>
            </div>
        `;
    });
}

async function deleteNote(id) {
    await fetch(API + "/notes/" + id, {
        method: "DELETE"
    });

    loadNotes();
}

loadNotes();
