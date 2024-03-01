function toggleEditForm() {
    var editForm = document.getElementById('editForm');
    editForm.style.display = editForm.style.display === 'none' ? 'block' : 'none';
}

function cancelEdit() {
    var editForm = document.getElementById('editForm');
    editForm.style.display = 'none';
}