document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar nav ul li');
    const contentSections = document.querySelectorAll('.content-section');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            sidebarLinks.forEach(item => item.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            this.classList.add('active');

            const targetSectionId = this.dataset.section;
            document.getElementById(targetSectionId).classList.add('active');
        });
    });

    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            alert('Anda telah logout!'); 
        });
    }

    const addEmployeeBtn = document.querySelector('.add-employee-btn');
    if (addEmployeeBtn) {
        addEmployeeBtn.addEventListener('click', function() {
            alert('Fitur tambah pegawai akan dibuka!');
        });
    }

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Edit data pegawai/libur!');
        });
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
                alert('Data dihapus!');
            }
        });
    });

    document.querySelectorAll('.approve-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Permintaan disetujui!');
        });
    });

    document.querySelectorAll('.reject-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Permintaan ditolak!');
        });
    });
});