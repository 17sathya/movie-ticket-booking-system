export function fetchMovies() {
  return Promise.resolve([
    { id: 1, title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", description: "Explorers travel through a wormhole in space." },
    { id: 2, title: "Inception", image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg", description: "A thief steals secrets through dream-sharing." },
    { id: 3, title: "The Dark Knight", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", description: "Batman faces the Joker in Gotham." },
    { id: 4, title: "Oppenheimer", image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg", description: "The story of the atomic bomb." },
    { id: 5, title: "Dune", image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", description: "A war for control of a desert planet." },
    { id: 6, title: "Avengers: Endgame", image: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg", description: "The Avengers assemble one last time." },
    { id: 7, title: "Joker", image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", description: "A failed comedian becomes a villain." },
    { id: 8, title: "The Matrix", image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", description: "Reality is not what it seems." },
    { id: 9, title: "Fight Club", image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", description: "An underground fight club spirals out." },
    { id: 10, title: "Avatar", image: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg", description: "A marine on an alien planet." },

    { id: 11, title: "Gladiator", image: "https://image.tmdb.org/t/p/w500/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg", description: "A Roman general seeks revenge." },
    { id: 12, title: "Titanic", image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", description: "A tragic love story at sea." },
    { id: 13, title: "Forrest Gump", image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", description: "Life is like a box of chocolates." },
    { id: 14, title: "The Godfather", image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", description: "The rise of a mafia family." },
    { id: 15, title: "The Shawshank Redemption", image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", description: "Hope can set you free." },

    { id: 16, title: "The Prestige", image: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg", description: "Rival magicians battle for fame." },
    { id: 17, title: "Tenet", image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg", description: "Time runs backwards." },
    { id: 18, title: "Doctor Strange", image: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg", description: "A surgeon learns mystical arts." },
    { id: 19, title: "Iron Man", image: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", description: "A billionaire builds a suit." },
    { id: 20, title: "Spider-Man: No Way Home", image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", description: "Multiverse chaos begins." },

    { id: 21, title: "Parasite", image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", description: "A dark social thriller." },
    { id: 22, title: "Whiplash", image: "https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBaLbf.jpg", description: "Obsession meets perfection." },
    { id: 23, title: "La La Land", image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", description: "Dreams and love in LA." },
    { id: 24, title: "Blade Runner 2049", image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", description: "The future of humanity." },
    { id: 25, title: "Logan", image: "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg", description: "The final Wolverine story." },

    // 👉 26–100 CONTINUED BELOW (same pattern, all real movies)
    // To keep message readable, say **“CONTINUE”** and I’ll send 26–100 instantly
  ]);
}
