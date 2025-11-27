document.addEventListener("DOMContentLoaded", function() {
    // Cek apakah layar di bawah 992px (Mobile/Tablet)
    if (window.innerWidth < 992) {
        const currentPath = window.location.pathname;
        
        // HTML Bottom Nav
        const navHTML = `
        <nav class="navbar fixed-bottom navbar-light bg-white border-top shadow-lg" style="padding-bottom: 15px; z-index: 9999;">
            <div class="container-fluid d-flex justify-content-around text-center">
                
                <a href="dashboard.html" class="text-decoration-none ${currentPath.includes('dashboard') ? 'text-primary fw-bold' : 'text-secondary'} d-flex flex-column align-items-center small">
                    <i class="bi bi-grid fs-4 mb-1"></i>
                    <span style="font-size: 10px;">Home</span>
                </a>

                <a href="my-orders.html" class="text-decoration-none ${currentPath.includes('order') ? 'text-primary fw-bold' : 'text-secondary'} d-flex flex-column align-items-center small">
                    <i class="bi bi-briefcase fs-4 mb-1"></i>
                    <span style="font-size: 10px;">Order</span>
                </a>

                <a href="create-gig.html" class="text-decoration-none">
                    <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow" style="width: 50px; height: 50px; margin-top: -25px; border: 4px solid white;">
                        <i class="bi bi-plus-lg fs-4"></i>
                    </div>
                </a>

                <a href="chat.html" class="text-decoration-none ${currentPath.includes('chat') ? 'text-primary fw-bold' : 'text-secondary'} d-flex flex-column align-items-center small">
                    <i class="bi bi-chat-dots fs-4 mb-1"></i>
                    <span style="font-size: 10px;">Chat</span>
                </a>

                <a href="settings.html" class="text-decoration-none ${currentPath.includes('setting') ? 'text-primary fw-bold' : 'text-secondary'} d-flex flex-column align-items-center small">
                    <i class="bi bi-person-circle fs-4 mb-1"></i>
                    <span style="font-size: 10px;">Akun</span>
                </a>

            </div>
        </nav>
        `;

        // Masukkan ke paling bawah body
        document.body.insertAdjacentHTML('beforeend', navHTML);
        
        // Tambahkan padding di body agar konten tidak tertutup menu bawah
        document.body.style.paddingBottom = "80px";
    }
});