// =============================
// WALEXTRON
// =============================

console.log("WALEXTRON is online.");


// =============================
// SCROLL REVEAL
// =============================

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.1
        }
    );


sections.forEach(
    function(section) {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(30px)";

        section.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        observer.observe(section);

    }
);


// =============================
// NAVIGATION
// =============================

const navLinks =
    document.querySelectorAll("nav a");


navLinks.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function() {

                console.log(
                    "Navigating to " +
                    link.textContent
                );

            }
        );

    }
);
