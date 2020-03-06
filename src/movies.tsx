export interface IMovieList {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {}[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export const MovieList: IMovieList[] = [
  {
    Title: 'Terminator 2: Judgment Day',
    Year: '1991',
    Rated: 'R',
    Released: '03 Jul 1991',
    Runtime: '137 min',
    Genre: 'Action, Sci-Fi',
    Director: 'James Cameron',
    Writer: 'James Cameron, William Wisher',
    Actors:
      'Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick',
    Plot:
      'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.',
    Language: 'English, Spanish',
    Country: 'USA',
    Awards: 'Won 4 Oscars. Another 32 wins & 33 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.5/10' },
      { Source: 'Rotten Tomatoes', Value: '93%' },
      { Source: 'Metacritic', Value: '75/100' }
    ],
    Metascore: '75',
    imdbRating: '8.5',
    imdbVotes: '948,480',
    imdbID: 'tt0103064',
    Type: 'movie',
    DVD: '31 Mar 1998',
    BoxOffice: '$198,116,802',
    Production: 'TriStar Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Jason Bourne',
    Year: '2016',
    Rated: 'PG-13',
    Released: '29 Jul 2016',
    Runtime: '123 min',
    Genre: 'Action, Thriller',
    Director: 'Paul Greengrass',
    Writer:
      'Paul Greengrass, Christopher Rouse, Robert Ludlum (based on characters created by)',
    Actors: 'Matt Damon, Tommy Lee Jones, Alicia Vikander, Vincent Cassel',
    Plot:
      "The CIA's most dangerous former operative is drawn out of hiding to uncover more explosive truths about his past.",
    Language: 'English, Greek, German, Japanese',
    Country: 'USA, China',
    Awards: '3 wins & 20 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGJlYjVkMjQtN2NlZC00NTJhLThmZjItMTRlZDczMmE3YmI3XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '6.6/10' },
      { Source: 'Rotten Tomatoes', Value: '54%' },
      { Source: 'Metacritic', Value: '58/100' }
    ],
    Metascore: '58',
    imdbRating: '6.6',
    imdbVotes: '197,714',
    imdbID: 'tt4196776',
    Type: 'movie',
    DVD: '06 Dec 2016',
    BoxOffice: '$162,162,120',
    Production: 'Universal',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Logan',
    Year: '2017',
    Rated: 'R',
    Released: '03 Mar 2017',
    Runtime: '137 min',
    Genre: 'Action, Drama, Sci-Fi, Thriller',
    Director: 'James Mangold',
    Writer:
      'James Mangold (story by), Scott Frank (screenplay by), James Mangold (screenplay by), Michael Green (screenplay by)',
    Actors: 'Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook',
    Plot:
      'In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.',
    Language: 'English, Spanish',
    Country: 'USA',
    Awards: 'Nominated for 1 Oscar. Another 26 wins & 73 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.1/10' },
      { Source: 'Rotten Tomatoes', Value: '93%' },
      { Source: 'Metacritic', Value: '77/100' }
    ],
    Metascore: '77',
    imdbRating: '8.1',
    imdbVotes: '600,178',
    imdbID: 'tt3315342',
    Type: 'movie',
    DVD: '23 May 2017',
    BoxOffice: '$226,276,809',
    Production: '20th Century Fox',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Waterworld',
    Year: '1995',
    Rated: 'PG-13',
    Released: '28 Jul 1995',
    Runtime: '135 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Director: 'Kevin Reynolds',
    Writer: 'Peter Rader, David Twohy',
    Actors: 'Kevin Costner, Chaim Jeraffi, Rick Aviles, R.D. Call',
    Plot:
      'In a future where the polar ice-caps have melted and Earth is almost entirely submerged, a mutated mariner fights starvation and outlaw "smokers," and reluctantly helps a woman and a young girl try to find dry land.',
    Language: 'English',
    Country: 'USA',
    Awards: 'Nominated for 1 Oscar. Another 6 wins & 8 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYzE4NTRmMDYtNWYzYi00YmNkLTk4NDEtYjFmMDc4ODQ3ODY2XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '6.2/10' },
      { Source: 'Rotten Tomatoes', Value: '45%' },
      { Source: 'Metacritic', Value: '56/100' }
    ],
    Metascore: '56',
    imdbRating: '6.2',
    imdbVotes: '172,418',
    imdbID: 'tt0114898',
    Type: 'movie',
    DVD: '01 Nov 1998',
    BoxOffice: 'N/A',
    Production: 'MCA Universal Home Video',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Sci-Fi, Thriller',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
    Plot:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 152 wins & 210 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.8/10' },
      { Source: 'Rotten Tomatoes', Value: '87%' },
      { Source: 'Metacritic', Value: '74/100' }
    ],
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,924,665',
    imdbID: 'tt1375666',
    Type: 'movie',
    DVD: '07 Dec 2010',
    BoxOffice: '$292,568,851',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Blade Runner',
    Year: '1982',
    Rated: 'R',
    Released: '25 Jun 1982',
    Runtime: '117 min',
    Genre: 'Action, Sci-Fi, Thriller',
    Director: 'Ridley Scott',
    Writer:
      'Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)',
    Actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
    Plot:
      'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
    Language: 'English, German, Cantonese, Japanese, Hungarian, Arabic',
    Country: 'USA, Hong Kong, UK',
    Awards: 'Nominated for 2 Oscars. Another 12 wins & 16 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.1/10' },
      { Source: 'Rotten Tomatoes', Value: '89%' },
      { Source: 'Metacritic', Value: '84/100' }
    ],
    Metascore: '84',
    imdbRating: '8.1',
    imdbVotes: '654,995',
    imdbID: 'tt0083658',
    Type: 'movie',
    DVD: '27 Aug 1997',
    BoxOffice: 'N/A',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Blade Runner 2049',
    Year: '2017',
    Rated: 'R',
    Released: '06 Oct 2017',
    Runtime: '164 min',
    Genre: 'Action, Drama, Mystery, Sci-Fi, Thriller',
    Director: 'Denis Villeneuve',
    Writer:
      'Hampton Fancher (screenplay by), Michael Green (screenplay by), Hampton Fancher (story by), Philip K. Dick (based on characters from the novel "Do Androids Dream of Electric Sheep?" by)',
    Actors: 'Ryan Gosling, Dave Bautista, Robin Wright, Mark Arnold',
    Plot:
      "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    Language: 'English, Finnish, Japanese, Hungarian, Russian, Somali, Spanish',
    Country: 'USA, UK, Hungary, Canada, Spain',
    Awards: 'Won 2 Oscars. Another 97 wins & 156 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.0/10' },
      { Source: 'Rotten Tomatoes', Value: '87%' },
      { Source: 'Metacritic', Value: '81/100' }
    ],
    Metascore: '81',
    imdbRating: '8.0',
    imdbVotes: '412,480',
    imdbID: 'tt1856101',
    Type: 'movie',
    DVD: '16 Jan 2018',
    BoxOffice: '$91,800,042',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'The Fifth Element',
    Year: '1997',
    Rated: 'PG-13',
    Released: '09 May 1997',
    Runtime: '126 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Director: 'Luc Besson',
    Writer:
      'Luc Besson (screenplay by), Robert Mark Kamen (screenplay by), Luc Besson (story by)',
    Actors: 'Bruce Willis, Gary Oldman, Ian Holm, Milla Jovovich',
    Plot:
      'In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.',
    Language: 'English, Swedish, German, Arabic, Egyptian (Ancient)',
    Country: 'France, UK, USA',
    Awards: 'Nominated for 1 Oscar. Another 10 wins & 38 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.7/10' },
      { Source: 'Rotten Tomatoes', Value: '71%' },
      { Source: 'Metacritic', Value: '52/100' }
    ],
    Metascore: '52',
    imdbRating: '7.7',
    imdbVotes: '415,424',
    imdbID: 'tt0119116',
    Type: 'movie',
    DVD: '09 Dec 1997',
    BoxOffice: 'N/A',
    Production: 'Sony Pictures Home Entertainment',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Poltergeist',
    Year: '1982',
    Rated: 'PG',
    Released: '04 Jun 1982',
    Runtime: '114 min',
    Genre: 'Horror, Thriller',
    Director: 'Tobe Hooper',
    Writer:
      'Steven Spielberg (screenplay), Michael Grais (screenplay), Mark Victor (screenplay), Steven Spielberg (story)',
    Actors:
      'Craig T. Nelson, JoBeth Williams, Beatrice Straight, Dominique Dunne',
    Plot: "A family's home is haunted by a host of demonic ghosts.",
    Language: 'English',
    Country: 'USA',
    Awards: 'Nominated for 3 Oscars. Another 4 wins & 4 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzliZmRlYTctYmNkYS00NzE5LWI1OWQtMTRiODY5MDMwMTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.3/10' },
      { Source: 'Rotten Tomatoes', Value: '85%' },
      { Source: 'Metacritic', Value: '79/100' }
    ],
    Metascore: '79',
    imdbRating: '7.3',
    imdbVotes: '133,857',
    imdbID: 'tt0084516',
    Type: 'movie',
    DVD: '18 Apr 2000',
    BoxOffice: 'N/A',
    Production: 'MGM Home Entertainment',
    Website: 'N/A',
    Response: 'True'
  },

  {
    Title: 'The Big Lebowski',
    Year: '1998',
    Rated: 'R',
    Released: '06 Mar 1998',
    Runtime: '117 min',
    Genre: 'Comedy, Crime, Sport',
    Director: 'Joel Coen, Ethan Coen',
    Writer: 'Ethan Coen, Joel Coen',
    Actors: 'Jeff Bridges, John Goodman, Julianne Moore, Steve Buscemi',
    Plot:
      'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
    Language: 'English, German, Hebrew, Spanish',
    Country: 'USA, UK',
    Awards: '5 wins & 17 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.1/10' },
      { Source: 'Rotten Tomatoes', Value: '82%' },
      { Source: 'Metacritic', Value: '71/100' }
    ],
    Metascore: '71',
    imdbRating: '8.1',
    imdbVotes: '688,741',
    imdbID: 'tt0118715',
    Type: 'movie',
    DVD: '27 Oct 1998',
    BoxOffice: 'N/A',
    Production: 'Gramercy Pictures',
    Website: 'N/A',
    Response: 'True'
  },

  {
    Title: 'Pulp Fiction',
    Year: '1994',
    Rated: 'R',
    Released: '14 Oct 1994',
    Runtime: '154 min',
    Genre: 'Crime, Drama',
    Director: 'Quentin Tarantino',
    Writer:
      'Quentin Tarantino (stories), Roger Avary (stories), Quentin Tarantino',
    Actors: 'Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta',
    Plot:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    Language: 'English, Spanish, French',
    Country: 'USA',
    Awards: 'Won 1 Oscar. Another 68 wins & 74 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.9/10' },
      { Source: 'Rotten Tomatoes', Value: '92%' },
      { Source: 'Metacritic', Value: '94/100' }
    ],
    Metascore: '94',
    imdbRating: '8.9',
    imdbVotes: '1,721,422',
    imdbID: 'tt0110912',
    Type: 'movie',
    DVD: '19 May 1998',
    BoxOffice: 'N/A',
    Production: 'Miramax Films',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Titanic',
    Year: '1997',
    Rated: 'PG-13',
    Released: '19 Dec 1997',
    Runtime: '194 min',
    Genre: 'Drama, Romance',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates',
    Plot:
      'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    Language: 'English, Swedish, Italian',
    Country: 'USA',
    Awards: 'Won 11 Oscars. Another 114 wins & 83 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.8/10' },
      { Source: 'Rotten Tomatoes', Value: '89%' },
      { Source: 'Metacritic', Value: '75/100' }
    ],
    Metascore: '75',
    imdbRating: '7.8',
    imdbVotes: '993,202',
    imdbID: 'tt0120338',
    Type: 'movie',
    DVD: '10 Sep 2012',
    BoxOffice: 'N/A',
    Production: 'Paramount Pictures',
    Website: 'N/A',
    Response: 'True'
  },

  {
    Title: 'Fight Club',
    Year: '1999',
    Rated: 'R',
    Released: '15 Oct 1999',
    Runtime: '139 min',
    Genre: 'Drama',
    Director: 'David Fincher',
    Writer: 'Chuck Palahniuk (novel), Jim Uhls (screenplay)',
    Actors: 'Edward Norton, Brad Pitt, Meat Loaf, Zach Grenier',
    Plot:
      'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    Language: 'English',
    Country: 'USA, Germany',
    Awards: 'Nominated for 1 Oscar. Another 10 wins & 37 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.8/10' },
      { Source: 'Rotten Tomatoes', Value: '79%' },
      { Source: 'Metacritic', Value: '66/100' }
    ],
    Metascore: '66',
    imdbRating: '8.8',
    imdbVotes: '1,748,300',
    imdbID: 'tt0137523',
    Type: 'movie',
    DVD: '06 Jun 2000',
    BoxOffice: 'N/A',
    Production: '20th Century Fox',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'The Exorcist',
    Year: '1973',
    Rated: 'R',
    Released: '26 Dec 1973',
    Runtime: '122 min',
    Genre: 'Horror',
    Director: 'William Friedkin',
    Writer:
      'William Peter Blatty (written for the screen by), William Peter Blatty (novel)',
    Actors: 'Ellen Burstyn, Max von Sydow, Lee J. Cobb, Kitty Winn',
    Plot:
      'When a 12 year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.',
    Language: 'English, Latin, Greek, French, German, Arabic, Kurdish',
    Country: 'USA',
    Awards: 'Won 2 Oscars. Another 14 wins & 17 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.0/10' },
      { Source: 'Rotten Tomatoes', Value: '84%' },
      { Source: 'Metacritic', Value: '81/100' }
    ],
    Metascore: '81',
    imdbRating: '8.0',
    imdbVotes: '345,797',
    imdbID: 'tt0070047',
    Type: 'movie',
    DVD: '01 Dec 1998',
    BoxOffice: 'N/A',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Casino Royale',
    Year: '2006',
    Rated: 'PG-13',
    Released: '17 Nov 2006',
    Runtime: '144 min',
    Genre: 'Action, Adventure, Thriller',
    Director: 'Martin Campbell',
    Writer:
      'Neal Purvis (screenplay), Robert Wade (screenplay), Paul Haggis (screenplay), Ian Fleming (novel)',
    Actors: 'Daniel Craig, Eva Green, Mads Mikkelsen, Judi Dench',
    Plot:
      'After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.',
    Language: 'Serbian, German, Italian, English, French',
    Country: 'UK, Czech Republic, USA, Germany, Bahamas',
    Awards: 'Won 1 BAFTA Film Award. Another 26 wins & 44 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.0/10' },
      { Source: 'Rotten Tomatoes', Value: '95%' },
      { Source: 'Metacritic', Value: '80/100' }
    ],
    Metascore: '80',
    imdbRating: '8.0',
    imdbVotes: '555,439',
    imdbID: 'tt0381061',
    Type: 'movie',
    DVD: '13 Mar 2007',
    BoxOffice: '$167,007,184',
    Production: 'Sony',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Quantum of Solace',
    Year: '2008',
    Rated: 'PG-13',
    Released: '14 Nov 2008',
    Runtime: '106 min',
    Genre: 'Action, Adventure, Thriller',
    Director: 'Marc Forster',
    Writer: 'Paul Haggis, Neal Purvis, Robert Wade',
    Actors: 'Daniel Craig, Olga Kurylenko, Mathieu Amalric, Judi Dench',
    Plot:
      "James Bond descends into mystery as he tries to stop a mysterious organisation from eliminating a country's most valuable resource.",
    Language: 'English, Spanish, Italian, French, Swiss German, German',
    Country: 'UK, USA',
    Awards:
      'Nominated for 2 BAFTA Film Awards. Another 4 wins & 30 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjZiYTUzMzktZWI5Yy00Mzk4LWFlMDgtYjRmNWU0Mzc0MzNiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '6.6/10' },
      { Source: 'Rotten Tomatoes', Value: '65%' },
      { Source: 'Metacritic', Value: '58/100' }
    ],
    Metascore: '58',
    imdbRating: '6.6',
    imdbVotes: '388,032',
    imdbID: 'tt0830515',
    Type: 'movie',
    DVD: '24 Mar 2009',
    BoxOffice: '$168,400,000',
    Production: 'Sony/MGM',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Skyfall',
    Year: '2012',
    Rated: 'PG-13',
    Released: '09 Nov 2012',
    Runtime: '143 min',
    Genre: 'Action, Adventure, Thriller',
    Director: 'Sam Mendes',
    Writer: 'Neal Purvis, Robert Wade, John Logan, Ian Fleming (characters)',
    Actors: 'Daniel Craig, Judi Dench, Javier Bardem, Ralph Fiennes',
    Plot:
      "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
    Language: 'English, Turkish, Shanghainese, Portuguese, Japanese',
    Country: 'UK, USA',
    Awards: 'Won 2 Oscars. Another 64 wins & 121 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDVhZmJiYWMtNmIzMC00ZWNiLTkzZDYtNGNlZmViMGM4OGExXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.7/10' },
      { Source: 'Rotten Tomatoes', Value: '92%' },
      { Source: 'Metacritic', Value: '81/100' }
    ],
    Metascore: '81',
    imdbRating: '7.7',
    imdbVotes: '607,463',
    imdbID: 'tt1074638',
    Type: 'movie',
    DVD: '11 Mar 2013',
    BoxOffice: '$299,300,000',
    Production: 'MGM',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Spectre',
    Year: '2015',
    Rated: 'PG-13',
    Released: '06 Nov 2015',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Thriller',
    Director: 'Sam Mendes',
    Writer:
      'John Logan (screenplay by), Neal Purvis (screenplay by), Robert Wade (screenplay by), Jez Butterworth (screenplay by), John Logan (story by), Neal Purvis (story by), Robert Wade (story by), Ian Fleming (based on characters created by)',
    Actors: 'Daniel Craig, Christoph Waltz, Léa Seydoux, Ralph Fiennes',
    Plot:
      "A cryptic message from James Bond's past sends him on a trail to uncover the existence of a sinister organisation named SPECTRE. With a new threat dawning, Bond learns the terrible truth about the author of all his pain in his most recent missions.",
    Language: 'English, Spanish, Italian, German, French',
    Country: 'UK, USA, Austria, Mexico, Italy, Morocco',
    Awards: 'Won 1 Oscar. Another 7 wins & 34 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOWQ1MDE1NzgtNTQ4OC00ZjliLTllZDAtN2IyOTVmMTc5YjUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '6.8/10' },
      { Source: 'Rotten Tomatoes', Value: '63%' },
      { Source: 'Metacritic', Value: '60/100' }
    ],
    Metascore: '60',
    imdbRating: '6.8',
    imdbVotes: '365,008',
    imdbID: 'tt2379713',
    Type: 'movie',
    DVD: '09 Feb 2016',
    BoxOffice: '$208,777,731',
    Production: 'Sony Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Star Wars: Episode VI - Return of the Jedi',
    Year: '1983',
    Rated: 'PG',
    Released: '25 May 1983',
    Runtime: '131 min',
    Genre: 'Action, Adventure, Fantasy, Sci-Fi',
    Director: 'Richard Marquand',
    Writer:
      'Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)',
    Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams',
    Plot:
      "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
    Language: 'English',
    Country: 'USA',
    Awards: 'Nominated for 4 Oscars. Another 22 wins & 16 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.3/10' },
      { Source: 'Rotten Tomatoes', Value: '82%' },
      { Source: 'Metacritic', Value: '58/100' }
    ],
    Metascore: '58',
    imdbRating: '8.3',
    imdbVotes: '902,617',
    imdbID: 'tt0086190',
    Type: 'movie',
    DVD: '12 Sep 2006',
    BoxOffice: 'N/A',
    Production: 'Twentieth Century Fox',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Fury',
    Year: '2014',
    Rated: 'R',
    Released: '17 Oct 2014',
    Runtime: '134 min',
    Genre: 'Action, Drama, War',
    Director: 'David Ayer',
    Writer: 'David Ayer',
    Actors: 'Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña',
    Plot:
      'A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.',
    Language: 'English, German',
    Country: 'USA, China, UK',
    Awards: '5 wins & 23 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.6/10' },
      { Source: 'Rotten Tomatoes', Value: '76%' },
      { Source: 'Metacritic', Value: '64/100' }
    ],
    Metascore: '64',
    imdbRating: '7.6',
    imdbVotes: '400,008',
    imdbID: 'tt2713180',
    Type: 'movie',
    DVD: '27 Jan 2015',
    BoxOffice: '$72,609,225',
    Production: 'Sony Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Gladiator',
    Year: '2000',
    Rated: 'R',
    Released: '05 May 2000',
    Runtime: '155 min',
    Genre: 'Action, Adventure, Drama',
    Director: 'Ridley Scott',
    Writer:
      'David Franzoni (story), David Franzoni (screenplay), John Logan (screenplay), William Nicholson (screenplay)',
    Actors: 'Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed',
    Plot:
      'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    Language: 'English',
    Country: 'USA, UK, Malta, Morocco',
    Awards: 'Won 5 Oscars. Another 54 wins & 104 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.5/10' },
      { Source: 'Rotten Tomatoes', Value: '76%' },
      { Source: 'Metacritic', Value: '67/100' }
    ],
    Metascore: '67',
    imdbRating: '8.5',
    imdbVotes: '1,265,367',
    imdbID: 'tt0172495',
    Type: 'movie',
    DVD: '21 Nov 2000',
    BoxOffice: 'N/A',
    Production: 'Dreamworks Distribution LLC',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Fantastic Beasts and Where to Find Them',
    Year: '2016',
    Rated: 'PG-13',
    Released: '18 Nov 2016',
    Runtime: '132 min',
    Genre: 'Adventure, Family, Fantasy',
    Director: 'David Yates',
    Writer: 'J.K. Rowling',
    Actors: 'Eddie Redmayne, Sam Redford, Scott Goldman, Tim Bentinck',
    Plot:
      "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school.",
    Language: 'English, Khmer',
    Country: 'UK, USA',
    Awards: 'Won 1 Oscar. Another 14 wins & 53 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.3/10' },
      { Source: 'Rotten Tomatoes', Value: '74%' },
      { Source: 'Metacritic', Value: '66/100' }
    ],
    Metascore: '66',
    imdbRating: '7.3',
    imdbVotes: '384,615',
    imdbID: 'tt3183660',
    Type: 'movie',
    DVD: '28 Mar 2017',
    BoxOffice: '$234,018,657',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Spirited Away',
    Year: '2001',
    Rated: 'PG',
    Released: '28 Mar 2003',
    Runtime: '125 min',
    Genre: 'Animation, Adventure, Family, Fantasy, Mystery',
    Director: 'Hayao Miyazaki',
    Writer: 'Hayao Miyazaki',
    Actors: 'Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô',
    Plot:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    Language: 'Japanese',
    Country: 'Japan',
    Awards: 'Won 1 Oscar. Another 57 wins & 30 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNmU5OTQ0OWQtOTY0OS00Yjg4LWE1NDYtNDRhYWMxYWY4OTMwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.6/10' },
      { Source: 'Rotten Tomatoes', Value: '97%' },
      { Source: 'Metacritic', Value: '96/100' }
    ],
    Metascore: '96',
    imdbRating: '8.6',
    imdbVotes: '588,824',
    imdbID: 'tt0245429',
    Type: 'movie',
    DVD: '15 Apr 2003',
    BoxOffice: '$9,855,615',
    Production: 'Walt Disney Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Redline',
    Year: '2009',
    Rated: 'Not Rated',
    Released: '09 Oct 2010',
    Runtime: '102 min',
    Genre: 'Animation, Action, Romance, Sci-Fi, Sport, Thriller',
    Director: 'Takeshi Koike',
    Writer:
      'Katsuhito Ishii (original story), Katsuhito Ishii (screenplay), Yoji Enokido (screenplay), Yoshiki Sakurai (screenplay), Alexander Von David (adr script)',
    Actors: 'Takuya Kimura, Yû Aoi, Tadanobu Asano, Yoshiyuki Morishita',
    Plot:
      'A story about the most popular racing event in the galaxy, the Redline, and the various racers who compete in it.',
    Language: 'Japanese, English',
    Country: 'Japan',
    Awards: '1 win & 3 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGYxYzI5ODQtY2JmYy00ZjFjLTg5MjgtMjI3Njg5ODEwNmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.5/10' },
      { Source: 'Rotten Tomatoes', Value: '63%' }
    ],
    Metascore: 'N/A',
    imdbRating: '7.5',
    imdbVotes: '10,106',
    imdbID: 'tt1483797',
    Type: 'movie',
    DVD: '17 Jan 2012',
    BoxOffice: 'N/A',
    Production: 'Anchor Bay Entertainment',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Doctor Strange',
    Year: '2016',
    Rated: 'PG-13',
    Released: '04 Nov 2016',
    Runtime: '115 min',
    Genre: 'Action, Adventure, Fantasy, Sci-Fi',
    Director: 'Scott Derrickson',
    Writer:
      'Jon Spaihts, Scott Derrickson, C. Robert Cargill, Stan Lee (based on the Marvel comics by), Steve Ditko (based on the Marvel comics by)',
    Actors:
      'Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong',
    Plot:
      'While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.',
    Language: 'English',
    Country: 'USA',
    Awards: 'Nominated for 1 Oscar. Another 20 wins & 65 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.5/10' },
      { Source: 'Rotten Tomatoes', Value: '89%' },
      { Source: 'Metacritic', Value: '72/100' }
    ],
    Metascore: '72',
    imdbRating: '7.5',
    imdbVotes: '553,897',
    imdbID: 'tt1211837',
    Type: 'movie',
    DVD: '28 Feb 2017',
    BoxOffice: '$232,630,718',
    Production: 'Walt Disney Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Thor: Ragnarok',
    Year: '2017',
    Rated: 'PG-13',
    Released: '03 Nov 2017',
    Runtime: '130 min',
    Genre: 'Action, Adventure, Comedy, Fantasy, Sci-Fi',
    Director: 'Taika Waititi',
    Writer:
      'Eric Pearson, Craig Kyle, Christopher L. Yost, Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)',
    Actors: 'Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Idris Elba',
    Plot:
      'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.',
    Language: 'English',
    Country: 'USA',
    Awards: '6 wins & 48 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.9/10' },
      { Source: 'Rotten Tomatoes', Value: '93%' },
      { Source: 'Metacritic', Value: '74/100' }
    ],
    Metascore: '74',
    imdbRating: '7.9',
    imdbVotes: '532,010',
    imdbID: 'tt3501632',
    Type: 'movie',
    DVD: '06 Mar 2018',
    BoxOffice: '$314,971,245',
    Production: 'Walt Disney Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Guardians of the Galaxy',
    Year: '2014',
    Rated: 'PG-13',
    Released: '01 Aug 2014',
    Runtime: '121 min',
    Genre: 'Action, Adventure, Comedy, Sci-Fi',
    Director: 'James Gunn',
    Writer:
      'James Gunn, Nicole Perlman, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Bill Mantlo (character created by: Rocket Raccoon), Keith Giffen (character created by: Rocket Raccoon), Jim Starlin (characters created by: Drax the Destroyer,  Gamora & Thanos), Steve Englehart (character created by: Star-Lord), Steve Gan (character created by: Star-Lord), Steve Gerber (character created by: Howard the Duck), Val Mayerik (character created by: Howard the Duck)',
    Actors: 'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel',
    Plot:
      'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
    Language: 'English',
    Country: 'USA',
    Awards: 'Nominated for 2 Oscars. Another 52 wins & 99 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.0/10' },
      { Source: 'Rotten Tomatoes', Value: '91%' },
      { Source: 'Metacritic', Value: '76/100' }
    ],
    Metascore: '76',
    imdbRating: '8.0',
    imdbVotes: '996,325',
    imdbID: 'tt2015381',
    Type: 'movie',
    DVD: '09 Dec 2014',
    BoxOffice: '$270,592,504',
    Production: 'Walt Disney Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'The Last Samurai',
    Year: '2003',
    Rated: 'R',
    Released: '05 Dec 2003',
    Runtime: '154 min',
    Genre: 'Action, Drama, War',
    Director: 'Edward Zwick',
    Writer:
      'John Logan (story), John Logan (screenplay), Edward Zwick (screenplay), Marshall Herskovitz (screenplay)',
    Actors: 'Ken Watanabe, Tom Cruise, William Atherton, Chad Lindberg',
    Plot:
      'An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.',
    Language: 'English, Japanese',
    Country: 'USA, New Zealand, Japan',
    Awards: 'Nominated for 4 Oscars. Another 21 wins & 62 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.7/10' },
      { Source: 'Rotten Tomatoes', Value: '66%' },
      { Source: 'Metacritic', Value: '55/100' }
    ],
    Metascore: '55',
    imdbRating: '7.7',
    imdbVotes: '380,791',
    imdbID: 'tt0325710',
    Type: 'movie',
    DVD: '04 May 2004',
    BoxOffice: '$111,000,000',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: "The Sorcerer's Apprentice",
    Year: '2010',
    Rated: 'PG',
    Released: '14 Jul 2010',
    Runtime: '109 min',
    Genre: 'Action, Adventure, Family, Fantasy',
    Director: 'Jon Turteltaub',
    Writer:
      'Lawrence Konner (screen story), Mark Rosenthal (screen story), Matt Lopez (screen story), Matt Lopez (screenplay), Doug Miro (screenplay), Carlo Bernard (screenplay)',
    Actors: 'Nicolas Cage, Jay Baruchel, Alfred Molina, Teresa Palmer',
    Plot:
      "Master sorcerer Balthazar Blake must find and train Merlin's descendant to defeat dark sorceress Morgana la Fée.",
    Language: 'English, Cantonese, Ukrainian',
    Country: 'USA',
    Awards: '1 win & 1 nomination.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDY3NzQ0NjYxM15BMl5BanBnXkFtZTcwMDkzODM2Mw@@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '6.1/10' },
      { Source: 'Rotten Tomatoes', Value: '40%' },
      { Source: 'Metacritic', Value: '46/100' }
    ],
    Metascore: '46',
    imdbRating: '6.1',
    imdbVotes: '147,494',
    imdbID: 'tt0963966',
    Type: 'movie',
    DVD: '30 Nov 2010',
    BoxOffice: '$63,143,812',
    Production: 'Walt Disney Studios',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    Rated: 'R',
    Released: '16 Sep 2005',
    Runtime: '122 min',
    Genre: 'Action, Crime, Drama',
    Director: 'Andrew Niccol',
    Writer: 'Andrew Niccol',
    Actors: 'Nicolas Cage, Bridget Moynahan, Jared Leto, Shake Tukhmanyan',
    Plot:
      'An arms dealer confronts the morality of his work as he is being chased by an INTERPOL Agent.',
    Language:
      'English, Ukrainian, German, Spanish, Russian, French, Arabic, Turkish',
    Country: 'USA, Germany, France',
    Awards: '2 wins & 2 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.6/10' },
      { Source: 'Rotten Tomatoes', Value: '62%' },
      { Source: 'Metacritic', Value: '62/100' }
    ],
    Metascore: '62',
    imdbRating: '7.6',
    imdbVotes: '284,301',
    imdbID: 'tt0399295',
    Type: 'movie',
    DVD: '17 Jan 2006',
    BoxOffice: '$24,033,036',
    Production: 'Lions Gate',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Gone in 60 Seconds',
    Year: '2000',
    Rated: 'PG-13',
    Released: '09 Jun 2000',
    Runtime: '118 min',
    Genre: 'Action, Crime, Thriller',
    Director: 'Dominic Sena',
    Writer: 'H.B. Halicki, Scott Rosenberg (screenplay)',
    Actors: 'Nicolas Cage, Giovanni Ribisi, Angelina Jolie, T.J. Cross',
    Plot:
      'Car theft in Long Beach went down 47% when Randall "Memphis" Raines walked away from the life. He gets dragged back into it by assuming the job his brother Kip screwed up for stolen-car broker Raymond Calitri: steal 50 exotic cars and have them on a container ship by 8 AM Friday morning, and he got this news on a Monday. With Calitri threatening to kill him and Kip, and the police GRAB unit breathing down his neck, Memphis reassembles his old crew and attempts to pull off the logistically impossible.',
    Language: 'English',
    Country: 'USA',
    Awards: '9 wins & 6 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTIwMzExNDEwN15BMl5BanBnXkFtZTYwODMxMzg2._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '6.5/10' },
      { Source: 'Rotten Tomatoes', Value: '25%' },
      { Source: 'Metacritic', Value: '35/100' }
    ],
    Metascore: '35',
    imdbRating: '6.5',
    imdbVotes: '251,813',
    imdbID: 'tt0187078',
    Type: 'movie',
    DVD: '05 Dec 2000',
    BoxOffice: '$100,978,700',
    Production: 'Buena Vista Pictures',
    Website: 'N/A',
    Response: 'True'
  }
];
