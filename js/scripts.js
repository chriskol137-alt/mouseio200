<!--  σκρολάρισμα πάνω - κάτω και λειτουργίες -->
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

<!--  Εδώ μπαίνει η λειτουργία για το βελάκι -->

        const topBtn = document.getElementById("backToTopBtn");
        
        // Εμφάνιση/Κρύψιμο κουμπιού στο σκρολάρισμα
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        };

        // Όταν το πατάς, σε πάει πάνω ομαλά
        topBtn.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
  
