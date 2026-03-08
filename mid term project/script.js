const story = document.getElementById("story");
const choices = document.getElementById("choices");
const image = document.getElementById("image");

const game = {
    start: {
        text: "You stand before the Moonlit Palace, glowing under a silver sky. The gates open slowly as if the palace has been waiting for you. Do you enter through the grand golden doors or wander into the moon garden beside the palace?",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=80",
        choices: [
            { text: "Enter the grand golden doors", next: "grandHall" },
            { text: "Walk into the moon garden", next: "moonGarden" }
        ]
    },

    grandHall: {
        text: "Inside, crystal chandeliers shimmer above a marble floor. A silver staircase rises upward, while a glowing hallway stretches into the palace. What do you do?",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
        choices: [
            { text: "Climb the silver staircase", next: "mirrorHall" },
            { text: "Walk down the glowing hallway", next: "library" }
        ]
    },

    moonGarden: {
        text: "The moon garden is filled with white roses, quiet fountains, and soft mist. You notice a silver bench under the moonlight and a hidden gate covered in vines. What do you choose?",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
        choices: [
            { text: "Sit on the silver bench", next: "endingWishGranted" },
            { text: "Open the hidden gate", next: "secretGarden" }
        ]
    },

    mirrorHall: {
        text: "At the top of the staircase, you enter a hall filled with tall mirrors. In one mirror you see yourself wearing a royal crown. In another, you see a shadowy throne room. Which path do you follow?",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
        choices: [
            { text: "Step toward the crown vision", next: "endingCrowned" },
            { text: "Follow the shadowy throne", next: "endingCursedThrone" }
        ]
    },

    library: {
        text: "The glowing hallway leads to a hidden royal library filled with ancient books, moon maps, and secret scrolls. A golden book rests on one table, while a narrow back door leads to another chamber. What do you do?",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=80",
        choices: [
            { text: "Read the golden book", next: "endingScholar" },
            { text: "Open the back door", next: "dawnRoom" }
        ]
    },

    secretGarden: {
        text: "Beyond the hidden gate is a secret garden glowing with lantern flowers and moon water. In the center is a sleeping white bird beside a stone path leading deeper into the palace grounds.",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80",
        choices: [
            { text: "Wake the white bird", next: "endingGuardian" },
            { text: "Follow the stone path", next: "endingKeeperGarden" }
        ]
    },

    dawnRoom: {
        text: "You enter a round room with high windows. The sky outside is beginning to change color. In the center is a small silver key, and beside the window is an open balcony facing the horizon.",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80",
        choices: [
            { text: "Take the silver key", next: "endingLostMirror" },
            { text: "Step onto the balcony", next: "endingEscapeDawn" }
        ]
    },

    endingCrowned: {
        text: "You step through the mirror and find yourself in a moonlit ceremony hall. A crown of silver light is placed upon your head. You become the ruler of the Moonlit Palace. Ending: Crowned by Moonlight.",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
        ending: true
    },

    endingCursedThrone: {
        text: "You sit on the shadowy throne, and the room grows cold. The throne accepts you, but at a price — you are trapped there as the palace's cursed ruler forever. Ending: Cursed Throne.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
        ending: true
    },

    endingScholar: {
        text: "The golden book opens and fills your mind with forgotten royal knowledge, old constellations, and lost palace secrets. You leave the palace as its greatest scholar. Ending: Hidden Library Scholar.",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80",
        ending: true
    },

    endingEscapeDawn: {
        text: "You step onto the balcony just as the first sunlight touches the palace towers. A hidden stairway appears, leading you safely out before the palace fades into mist. Ending: Escape at Dawn.",
        image: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1000&q=80",
        ending: true
    },

    endingWishGranted: {
        text: "As you sit on the silver bench, moonlight gathers around you. The palace hears your heart's deepest wish and grants it before the garden disappears into the night. Ending: Wish Granted by the Moon.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
        ending: true
    },

    endingGuardian: {
        text: "The white bird opens its eyes and transforms into the ancient spirit of the palace. Because you showed courage, it chooses you as the protector of this magical place. Ending: Guardian of the Palace.",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
        ending: true
    },

    endingKeeperGarden: {
        text: "You follow the stone path to the heart of the secret garden, where moon roses bloom forever. The palace invites you to remain as the eternal keeper of its beauty. Ending: Keeper of the Secret Garden.",
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1000&q=80",
        ending: true
    },

    endingLostMirror: {
        text: "The silver key unlocks a hidden mirror door, but once you step through it, the reflections multiply endlessly. You wander forever in a maze of mirrors. Ending: Lost in the Mirror Hall.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
        ending: true
    }
};

function startGame() {
    showScene("start");
}

function animateSceneChange() {
    story.style.opacity = "0";
    image.style.opacity = "0";
    story.style.transform = "translateY(10px)";
    image.style.transform = "scale(0.98)";
}

function resetSceneAnimation() {
    story.style.opacity = "1";
    image.style.opacity = "1";
    story.style.transform = "translateY(0)";
    image.style.transform = "scale(1)";
    story.style.transition = "all 0.5s ease";
    image.style.transition = "all 0.5s ease";
}

function showScene(sceneName) {
    const scene = game[sceneName];

    animateSceneChange();

    setTimeout(() => {
        story.textContent = scene.text;
        image.src = scene.image;
        choices.innerHTML = "";

        if (scene.ending) {
            const restartButton = document.createElement("button");
            restartButton.textContent = "Restart Adventure";
            restartButton.addEventListener("click", startGame);
            choices.appendChild(restartButton);
        } else {
            for (let i = 0; i < scene.choices.length; i++) {
                const button = document.createElement("button");
                button.textContent = scene.choices[i].text;

                button.addEventListener("click", function () {
                    showScene(scene.choices[i].next);
                });

                choices.appendChild(button);
            }
        }

        resetSceneAnimation();
    }, 250);
}

startGame();