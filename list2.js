function setupUploadArea(selector) {
    const dragArea = document.querySelector(selector);
    const dragText = dragArea.querySelector('.headers');
    let file;
    let button = dragArea.querySelector('.button');
    let input = dragArea.querySelector('input[type="file"]');

    // Function to open file dialog
    function openFileDialog() {
        input.click();
    }

    button.onclick = () => {
        openFileDialog();
    }

    input.addEventListener('change', function() {
        file = this.files[0];
        dragArea.classList.add('active');
        displayFileName();
    })

// Display file name function
    // Display file name function
    // Display file name function
    function displayFileName() {
        if (!file) return;

        let fileName = file.name;
        let fileExtension = fileName.split('.').pop().toLowerCase();

        if (['mp4', 'webm', 'ogg'].includes(fileExtension)) {
            // Xử lý video
            let filePreview = document.createElement('p');
            filePreview.textContent = fileName;
            dragArea.appendChild(filePreview);
            addButtonToDelete();
        } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
            // Xử lý hình ảnh
            let filePreview = document.createElement('p');
            filePreview.textContent = fileName;
            dragArea.appendChild(filePreview);
            addButtonToDelete();
        } else {
            // File không hợp lệ, hiển thị thông báo hoặc không làm gì cả
            alert('File không hợp lệ!');
            dragArea.classList.remove('active');
        }
    }


    // Display file name function


    // Function to add delete button
    function addButtonToDelete() {
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete-button', 'btn-delete');
        deleteButton.addEventListener('click', () => {
            deleteFile();
        });
        dragArea.appendChild(deleteButton);
    }

    // Function to delete file
    function deleteFile() {
        file = null;
        dragArea.innerHTML = '';
        openFileDialog(); // Open file dialog after delete
    }

    // Drag and drop events
    dragArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dragText.textContent = 'Release to Upload';
        dragArea.classList.add('active');
    });

    dragArea.addEventListener('dragleave', () => {
        dragText.textContent = 'Drag & Drop';
        dragArea.classList.remove('active');
    });

    dragArea.addEventListener('drop', (event) => {
        event.preventDefault();
        file = event.dataTransfer.files[0];
        displayFileName();
    });
}

// Setup upload area for video
setupUploadArea('.video-area');

// Setup upload area for image
setupUploadArea('.image-area');
