const storage = firebase.storage();
const storageRef = storage.ref();

const uploadBtn = document.getElementById("uploadBtn");
const posterUpload = document.getElementById("posterUpload");
const gallery = document.getElementById("gallery");

uploadBtn.addEventListener("click", async () => {
    const file = posterUpload.files[0];
    if (!file) return alert("Choose an image first");

    const fileRef = storageRef.child("posters/" + Date.now() + "_" + file.name);

    try {
        await fileRef.put(file);
        const url = await fileRef.getDownloadURL();

        const img = document.createElement("img");
        img.src = url;
        img.className = "poster";
        gallery.appendChild(img);

        alert("Upload successful!");
    } catch (err) {
        console.error(err);
        alert("Upload failed");
    }
});
