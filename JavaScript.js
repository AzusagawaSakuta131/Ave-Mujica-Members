const membersData = {
            Amoris: {
                image: "resource/Amoris.png",
                description: "Lead vocalist with a mysterious aura. Known for her deep voice and captivating stage presence."
            },
            Doloris: {
                image: "resource/Doloris.png",
                description: "The fiery guitarist with blazing riffs and a fierce personality."
            },
            Mortis: {
                image: "resource/Mortis.png",
                description: "Master of drums, the heartbeat of Ave Mujica, keeping rhythm steady and strong."
            },
            Oblivionis: {
                image: "resource/Oblivionis.png",
                description: "Bass player with calm demeanor, weaving deep tones into the band’s music."
            },
            Timoris: {
                image: "resource/Timoris.png",
                description: "Keyboardist and synth wizard, creating ethereal soundscapes and moods."
            }
        };

        const modal = document.getElementById("memberModal");
        const modalName = document.getElementById("modalName");
        const modalImage = document.getElementById("modalImage");
        const modalDescription = document.getElementById("modalDescription");
        const closeBtn = document.querySelector(".close-btn");

        document.querySelectorAll(".stage.switch").forEach(stage => {
            stage.addEventListener("click", () => {
                const name = stage.querySelector("p").textContent.trim();
                if (membersData[name]) {
                    modalName.textContent = name;
                    modalImage.src = membersData[name].image;
                    modalImage.alt = name;
                    modalDescription.textContent = membersData[name].description;
                    modal.style.display = "block";
                }
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });