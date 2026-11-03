const letters = {
    "miss-you": {
        title: "Happy birthday!<br> I love you so much, baby!",
        message:
            "'m so grateful na nakilala kita and that you became such a big part of my life. I honestly feel so lucky to have someone like you by my side. Thank you for being the best girlfriend and best friend I could ever ask for. I appreciate everything you do for me, even the smallest things. I notice how you always make time for me despite everything you have going on, and how you never fail to make me feel loved and special. Even little things like giving me your drawings it means so much to me, baby.  I know na madalas tayong nag-aaway, and I know na sometimes it's because of me. I'm sorry for the times na nasasaktan kita or napapagod ka because of my actions. I hope you'll continue to be patient with me habang natututo akong maging better, not just for you but also for us.   and I'll continue to love you the way you deserve to be loved.  I hope you never forget how special you are, not just to me but as a person. You deserve all the happiness, love, and beautiful things this world has to offer. I hope to spend more memmories kulitan awayan and many more things with you I may not always find the right words to express how much you mean to me, but I hope my actions will always remind you how much I love and appreciate you. No words can ever fully describe what I'm feeling right now. Basta tandaan mo, baby, na love na love kita, more than you could ever imagine. Enjoy your special day, babyyyy Iove love love love love love love love youuuuuuuuii"
    },

    "bad-day": {
        title: "love you sososmuch",
        message:
            "LOVE YOU BABYYYYY MWAAAAA."
    },

    "need-a-hug": {
        title: "Open When <br> You Need A Hug",
        message:
            "HUGGGGSSSSS."
    },

    "cant-sleep": {
        title: "Open When <br> You Can't Sleep",
        message:
            "random aayusin ko nalang ehehe."
    },

    "love-you": {
        title: "Open When <br> You Need To Know I Love You",
        message:
            "I love you more than I could ever fit into a little letter, but I hope this reminds you just how much you mean to me."
    },

    "thinking-of-you": {
        title: "Open When <br> You're Thinking Of Me",
        message:
            "I could never get ried of you baby mwheheheh."
    }
};

// fetching the letter name
const params = new URLSearchParams(window.location.search);
const letterId = params.get("letter");

const letter = letters[letterId];

if (letter) {
    document.getElementById("letter-title").innerHTML = letter.title;
    document.getElementById("letter-message").textContent = letter.message;
} else {
     document.getElementById("letter-title").textContent = "Letter not found.";
    document.getElementById("letter-message").textContent = "Hmm this letter doesn't seem to exist.";
}

const letterText = document.querySelector(".letter-text");
const gif = document.querySelector(".opening-gif");

setTimeout(() => {
    gif.src = "letter-final.png";
    letterText.classList.remove("hidden");
}, 1200);