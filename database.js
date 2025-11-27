// database.js
// Add new movies here following the format:
// { title: "Movie Name", cast: ["Actor 1", "Actor 2", ...] },

const MOVIE_DB = [
    // MCU
    { title: "The Avengers", cast: ["Robert Downey Jr", "Chris Evans", "Scarlett Johansson", "Samuel L. Jackson", "Mark Ruffalo", "Chris Hemsworth", "Jeremy Renner", "Tom Hiddleston"] },
    { title: "Iron Man", cast: ["Robert Downey Jr", "Gwyneth Paltrow", "Jeff Bridges", "Terrence Howard", "Samuel L. Jackson"] },
    { title: "Captain America: Civil War", cast: ["Chris Evans", "Robert Downey Jr", "Scarlett Johansson", "Sebastian Stan", "Anthony Mackie", "Don Cheadle", "Jeremy Renner", "Chadwick Boseman", "Paul Bettany", "Elizabeth Olsen", "Paul Rudd", "Tom Holland"] },
    { title: "Thor: Ragnarok", cast: ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett", "Idris Elba", "Jeff Goldblum", "Tessa Thompson", "Mark Ruffalo", "Anthony Hopkins"] },
    { title: "Black Panther", cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira", "Martin Freeman", "Daniel Kaluuya", "Letitia Wright", "Angela Bassett", "Forest Whitaker", "Andy Serkis"] },
    { title: "Spider-Man: No Way Home", cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Willem Dafoe", "Alfred Molina", "Jamie Foxx", "Tobey Maguire", "Andrew Garfield"] },
    { title: "Doctor Strange", cast: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams", "Mads Mikkelsen", "Tilda Swinton"] },
    
    // Star Wars
    { title: "Star Wars: A New Hope", cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Alec Guinness", "James Earl Jones"] },
    { title: "Star Wars: The Force Awakens", cast: ["Harrison Ford", "Mark Hamill", "Carrie Fisher", "Adam Driver", "Daisy Ridley", "John Boyega", "Oscar Isaac", "Lupita Nyong'o", "Andy Serkis", "Domhnall Gleeson", "Max von Sydow"] },
    { title: "Star Wars: The Phantom Menace", cast: ["Liam Neeson", "Ewan McGregor", "Natalie Portman", "Samuel L. Jackson", "Keira Knightley"] },
    
    // Harry Potter & Fantasy
    { title: "Harry Potter and the Prisoner of Azkaban", cast: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Gary Oldman", "Michael Gambon", "Alan Rickman", "Maggie Smith", "Timothy Spall", "Emma Thompson"] },
    { title: "Harry Potter and the Goblet of Fire", cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint", "Ralph Fiennes", "Robert Pattinson", "Brendan Gleeson", "Gary Oldman"] },
    { title: "Beauty and the Beast (2017)", cast: ["Emma Watson", "Dan Stevens", "Luke Evans", "Josh Gad", "Ewan McGregor", "Ian McKellen", "Emma Thompson"] },
    { title: "Lord of the Rings: Fellowship of the Ring", cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin", "Cate Blanchett", "Orlando Bloom", "Christopher Lee", "Hugo Weaving", "Sean Bean"] },
    { title: "The Hobbit: An Unexpected Journey", cast: ["Martin Freeman", "Ian McKellen", "Richard Armitage", "Andy Serkis", "Benedict Cumberbatch", "Cate Blanchett"] },

    // Christopher Nolan
    { title: "Inception", cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy", "Ken Watanabe", "Cillian Murphy", "Tom Berenger", "Marion Cotillard", "Michael Caine"] },
    { title: "The Dark Knight", cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Maggie Gyllenhaal", "Gary Oldman", "Morgan Freeman", "Cillian Murphy"] },
    { title: "Interstellar", cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Bill Irwin", "Ellen Burstyn", "Michael Caine", "Matt Damon"] },
    { title: "Oppenheimer", cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr", "Florence Pugh", "Josh Hartnett", "Casey Affleck", "Rami Malek", "Kenneth Branagh"] },
    { title: "The Prestige", cast: ["Hugh Jackman", "Christian Bale", "Michael Caine", "Scarlett Johansson", "David Bowie", "Andy Serkis"] },

    // Quentin Tarantino
    { title: "Pulp Fiction", cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Harvey Keitel", "Tim Roth", "Amanda Plummer", "Maria de Medeiros", "Ving Rhames", "Bruce Willis", "Christopher Walken"] },
    { title: "Django Unchained", cast: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio", "Kerry Washington", "Samuel L. Jackson", "Walton Goggins", "Don Johnson", "Jonah Hill"] },
    { title: "Once Upon a Time in Hollywood", cast: ["Leonardo DiCaprio", "Brad Pitt", "Margot Robbie", "Emile Hirsch", "Margaret Qualley", "Timothy Olyphant", "Austin Butler", "Dakota Fanning", "Bruce Dern", "Al Pacino", "Kurt Russell"] },
    { title: "Inglourious Basterds", cast: ["Brad Pitt", "Mélanie Laurent", "Christoph Waltz", "Eli Roth", "Michael Fassbender", "Diane Kruger", "Daniel Brühl"] },

    // Martin Scorsese & Crime
    { title: "The Wolf of Wall Street", cast: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie", "Matthew McConaughey", "Kyle Chandler", "Rob Reiner", "Jon Bernthal"] },
    { title: "The Departed", cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg", "Martin Sheen", "Ray Winstone", "Vera Farmiga", "Alec Baldwin"] },
    { title: "Goodfellas", cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci", "Lorraine Bracco", "Paul Sorvino", "Samuel L. Jackson"] },
    { title: "The Irishman", cast: ["Robert De Niro", "Al Pacino", "Joe Pesci", "Harvey Keitel", "Ray Romano", "Bobby Cannavale", "Anna Paquin"] },

    // Action / 90s Classics
    { title: "Die Hard", cast: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"] },
    { title: "Terminator 2: Judgment Day", cast: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong", "Robert Patrick"] },
    { title: "The Expendables", cast: ["Sylvester Stallone", "Jason Statham", "Jet Li", "Dolph Lundgren", "Randy Couture", "Steve Austin", "Terry Crews", "Mickey Rourke", "Bruce Willis", "Arnold Schwarzenegger"] },
    { title: "Ocean's Eleven", cast: ["George Clooney", "Matt Damon", "Andy Garcia", "Brad Pitt", "Julia Roberts", "Casey Affleck", "Scott Caan", "Bernie Mac", "Don Cheadle"] },
    { title: "Fight Club", cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter", "Meat Loaf", "Jared Leto"] },
    { title: "Se7en", cast: ["Brad Pitt", "Morgan Freeman", "Gwyneth Paltrow", "Kevin Spacey"] },
    { title: "The Matrix", cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano"] },
    { title: "John Wick 4", cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård", "Laurence Fishburne", "Hiroyuki Sanada", "Ian McShane"] },
    
    // Comedy / RomCom
    { title: "Anchorman", cast: ["Will Ferrell", "Christina Applegate", "Paul Rudd", "Steve Carell", "David Koechner", "Fred Willard"] },
    { title: "The Big Short", cast: ["Christian Bale", "Steve Carell", "Ryan Gosling", "Brad Pitt"] },
    { title: "Crazy, Stupid, Love", cast: ["Steve Carell", "Ryan Gosling", "Julianne Moore", "Emma Stone", "Marisa Tomei", "Kevin Bacon"] },
    { title: "La La Land", cast: ["Ryan Gosling", "Emma Stone", "John Legend", "J.K. Simmons"] },
    { title: "Barbie", cast: ["Margot Robbie", "Ryan Gosling", "America Ferrera", "Kate McKinnon", "Issa Rae", "Rhea Perlman", "Will Ferrell"] },
    { title: "Knives Out", cast: ["Daniel Craig", "Chris Evans", "Ana de Armas", "Jamie Lee Curtis", "Michael Shannon", "Don Johnson", "Toni Collette", "LaKeith Stanfield", "Christopher Plummer"] },
    { title: "Glass Onion", cast: ["Daniel Craig", "Edward Norton", "Janelle Monáe", "Kathryn Hahn", "Leslie Odom Jr.", "Kate Hudson", "Dave Bautista"] }
];