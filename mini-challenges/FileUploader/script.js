let filesData = [];

document.getElementById('file-input').addEventListener('change', function(event) {
    const fileInput = event.target;
    const fileInfo = document.getElementById('file-info');
    console.log(fileInput.files);
    
    // Clear the current filesData array and append the new files
    filesData = [...fileInput.files,...filesData];

    console.log(filesData);
    fileInfo.innerHTML = ''; // Clear previous file info

    if (filesData.length > 0) {
        filesData.map((file) => {
            const fileDetails = document.createElement('div');
            fileDetails.classList.add('file-details');
            fileDetails.innerHTML = `
            <div>

            <div > <p>File Name: ${file.name}</p></div>
               
                <div> <p>File Size: ${(file.size / 1024).toFixed(2)} KB</p></div>
                
                <div><p>File Type: ${file.type}</p></div>
                
                <hr>
                </div>
            `;
            fileInfo.appendChild(fileDetails);
        });
    } else {
        fileInfo.innerHTML = '<p>No files selected</p>';
    }
});
