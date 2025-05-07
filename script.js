document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('preorderForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const nama = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      const hp = document.getElementById('hp').value.trim();
      const warna = document.getElementById('warna').value;
      const catatan = document.getElementById('catatan').value.trim();
  
      if (!nama || !email || !hp || !warna) {
        alert('Mohon lengkapi semua bidang wajib.');
        return;
      }
  
      Swal.fire({
        title: 'Pesanan Diterima!',
        html: `Terima kasih, <strong>${nama}</strong>!<br>Pesanan Anda untuk <strong>Celltoner 9210</strong> warna <strong>${warna}</strong> telah diterima.<br><br>Kami akan menghubungi Anda melalui:<br><strong>${email}</strong> atau <strong>${hp}</strong>.`,
        icon: 'success',
        confirmButtonText: 'Oke',
      });
      
      
  
      form.reset();
    });
  });
