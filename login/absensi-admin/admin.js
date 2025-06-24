document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar nav ul li');
    const contentSections = document.querySelectorAll('.content-section');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah link berpindah halaman
            
            // Hapus kelas 'active' dari semua link sidebar dan section
            sidebarLinks.forEach(item => item.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            // Tambahkan kelas 'active' ke link yang diklik
            this.classList.add('active');

            // Tampilkan section yang sesuai
            const targetSectionId = this.dataset.section;
            document.getElementById(targetSectionId).classList.add('active');
        });
    });

    // Contoh sederhana untuk tombol logout
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            alert('Anda telah logout!'); // Ganti dengan logika logout sesungguhnya
            // window.location.href = '/login'; // Redirect ke halaman login
        });
    }

    // Contoh sederhana untuk tombol tambah pegawai
    const addEmployeeBtn = document.querySelector('.add-employee-btn');
    if (addEmployeeBtn) {
        addEmployeeBtn.addEventListener('click', function() {
            alert('Fitur tambah pegawai akan dibuka!');
            // Anda bisa menampilkan modal atau mengarahkan ke halaman formulir tambah pegawai
        });
    }

    // Contoh sederhana untuk tombol aksi di tabel (edit/hapus)
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Edit data pegawai/libur!');
            // Implementasi edit data di sini
        });
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
                alert('Data dihapus!');
                // Implementasi hapus data di sini
            }
        });
    });

    document.querySelectorAll('.approve-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Permintaan disetujui!');
            // Implementasi persetujuan di sini
        });
    });

    document.querySelectorAll('.reject-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Permintaan ditolak!');
            // Implementasi penolakan di sini
        });
    });
});