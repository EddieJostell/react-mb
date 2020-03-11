export interface IMovieCard {
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

export const MovieList: IMovieCard[] = [
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
      "Over 10 years have passed since the first cyborg called The Terminator tried to kill Sarah Connor and her unborn son, John Connor. John Connor, the future leader of the human resistance, is now a healthy young boy. However another Terminator is sent back through time called the T-1000, which is more advanced and more powerful than its predecessor. The Mission: to kill John Connor when he's still a child. However, Sarah and John do not have to face this threat of a Terminator alone. Another Terminator is also sent back through time. The mission: to protect John and Sarah Connor at all costs. The battle for tomorrow has begun...",
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
    Title: 'Alien',
    Year: '1979',
    Rated: 'R',
    Released: '22 Jun 1979',
    Runtime: '117 min',
    Genre: 'Horror, Sci-Fi',
    Director: 'Ridley Scott',
    Writer:
      "Dan O'Bannon (screenplay by), Dan O'Bannon (story by), Ronald Shusett (story by)",
    Actors:
      'Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton',
    Plot:
      "A commercial crew aboard the deep space towing vessel, Nostromo is on its way home when they pick up an SOS warning from a distant moon. What they don't know is that the SOS warning is not like any other ordinary warning call. Picking up the signal, the crew realizes that they are not alone on the spaceship when an alien stowaway is on the cargo ship.",
    Language: 'English',
    Country: 'UK, USA',
    Awards: 'Won 1 Oscar. Another 16 wins & 20 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.4/10' },
      { Source: 'Rotten Tomatoes', Value: '97%' },
      { Source: 'Metacritic', Value: '89/100' }
    ],
    Metascore: '89',
    imdbRating: '8.4',
    imdbVotes: '742,549',
    imdbID: 'tt0078748',
    Type: 'movie',
    DVD: '06 Jan 2004',
    BoxOffice: 'N/A',
    Production: '20th Century Fox',
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
      "Jason Bourne is again being hunted by the CIA. It begins when Nicky Parson a former CIA operative who helped Bourne, who went under and now works with a man who's a whistle blower and is out to expose the CIA's black ops. Nicky hacks into the CIA and downloads everything on all their Black Ops, including Treadstone which Bourne was a part of. And Heather Lee, a CIA agent, discovers the hack and brings it to the attention of CIA Director Dewey, the man behind the Black Ops. He orders Parsons be found and, hopefully, Bourne, too.",
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
      'In 2029 the mutant population has shrunken significantly and the X-Men have disbanded. Logan, whose power to self-heal is dwindling, has surrendered himself to alcohol and now earns a living as a chauffeur. He takes care of the ailing old Professor X whom he keeps hidden away. One day, a female stranger asks Logan to drive a girl named Laura to the Canadian border. At first he refuses, but the Professor has been waiting for a long time for her to appear. Laura possesses an extraordinary fighting prowess and is in many ways like Wolverine. She is pursued by sinister figures working for a powerful corporation; this is because her DNA contains the secret that connects her to Logan. A relentless pursuit begins - In this third cinematic outing featuring the Marvel comic book character Wolverine we see the superheroes beset by everyday problems. They are aging, ailing and struggling to survive financially. A decrepit Logan is forced to ask himself if he can or even wants to put his remaining powers to good use. It would appear that in the near-future, the times in which they were able put the world to rights with razor sharp claws and telepathic powers are now over.',
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
      'The polar ice caps have melted, and the earth is covered by water. The remaining people travel the seas, in search of survival. Several different societies exist. The Mariner falls from his customary and solitary existence into having to care for a woman and a young girl while being pursued by the evil forces of the Deacon.',
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
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
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
      'In the futuristic year of 2019, Los Angeles has become a dark and depressing metropolis, filled with urban decay. Rick Deckard, an ex-cop, is a "Blade Runner". Blade runners are people assigned to assassinate "replicants". The replicants are androids that look like real human beings. When four replicants commit a bloody mutiny on the Off World colony, Deckard is called out of retirement to track down the androids. As he tracks the replicants, eliminating them one by one, he soon comes across another replicant, Rachel, who evokes human emotion, despite the fact that she\'s a replicant herself. As Deckard closes in on the leader of the replicant group, his true hatred toward artificial intelligence makes him question his own identity in this future world, including what\'s human and what\'s not human.',
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
      "James Bond goes on his first ever mission as a 00. Le Chiffre is a banker to the world's terrorists. He is participating in a poker game at Montenegro, where he must win back his money, in order to stay safe among the terrorist market. The boss of MI6, known simply as M sends Bond, along with Vesper Lynd to attend this game and prevent Le Chiffre from winning. Bond, using help from Felix Leiter, Mathis and having Vesper pose as his partner, enters the most important poker game in his already dangerous career. But if Bond defeats Le Chiffre, will he and Vesper Lynd remain safe?",
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
      'In the twenty-third century, the universe is threatened by evil. The only hope for mankind is the Fifth Element, who comes to Earth every five thousand years to protect the humans with four stones of the four elements: fire, water, Earth and air. A Mondoshawan spacecraft is bringing The Fifth Element back to Earth but it is destroyed by the evil Mangalores. However, a team of scientists use the DNA of the remains of the Fifth Element to rebuild the perfect being called Leeloo. She escapes from the laboratory and stumbles upon the taxi driver and former elite commando Major Korben Dallas that helps her to escape from the police. Leeloo tells him that she must meet Father Vito Cornelius to accomplish her mission. Meanwhile, the Evil uses the greedy and cruel Jean-Baptiste Emanuel Zorg and a team of mercenary Mangalores to retrieve the stones and avoid the protection of Leeloo. But the skilled Korben Dallas has fallen in love with Leeloo and decides to help her to retrieve the stones.',
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
    Plot:
      'A young family are visited by ghosts in their home. At first the ghosts appear friendly, moving objects around the house to the amusement of everyone, then they turn nasty and start to terrorise the family before they "kidnap" the youngest daughter.',
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
      'When "The Dude" Lebowski is mistaken for a millionaire Lebowski, two thugs urinate on his rug to coerce him into paying a debt he knows nothing about. While attempting to gain recompense for the ruined rug from his wealthy counterpart, he accepts a one-time job with high pay-off. He enlists the help of his bowling buddy, Walter, a gun-toting Jewish-convert with anger issues. Deception leads to more trouble, and it soon seems that everyone from porn empire tycoons to nihilists want something from The Dude.',
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
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.',
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
      '84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.',
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
    Title: 'Aliens',
    Year: '1986',
    Rated: 'R',
    Released: '18 Jul 1986',
    Runtime: '137 min',
    Genre: 'Action, Adventure, Sci-Fi, Thriller',
    Director: 'James Cameron',
    Writer:
      "James Cameron (story by), David Giler (story by), Walter Hill (story by), Dan O'Bannon (based on characters created by), Ronald Shusett (based on characters created by), James Cameron (screenplay by)",
    Actors: 'Sigourney Weaver, Carrie Henn, Michael Biehn, Paul Reiser',
    Plot:
      'Fifty seven years after Ellen Ripley survived her disastrous ordeal, her escape vessel is recovered after drifting across the galaxy as she slept in cryogenic stasis. Back on Earth, nobody believed her story about the "Aliens" on the moon LV-426. After the "Company" orders the colony on LV-426 to investigate, however, all communication with the colony is lost. The Company enlists Ripley to aid a team of tough, rugged space marines on a rescue mission to the now partially terraformed moon to find out if there are aliens or survivors. As the mission unfolds, Ripley will be forced to come to grips with her worst nightmare, but even as she does, she finds that the worst is yet to come.',
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 18 wins & 23 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.3/10' },
      { Source: 'Rotten Tomatoes', Value: '99%' },
      { Source: 'Metacritic', Value: '84/100' }
    ],
    Metascore: '84',
    imdbRating: '8.3',
    imdbVotes: '622,307',
    imdbID: 'tt0090605',
    Type: 'movie',
    DVD: '01 Jun 1999',
    BoxOffice: 'N/A',
    Production: '20th Century Fox',
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
      "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is.",
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
      "A visiting actress in Washington, D.C., notices dramatic and dangerous changes in the behavior and physical make-up of her 12-year-old daughter. Meanwhile, a young priest at nearby Georgetown University begins to doubt his faith while dealing with his mother's terminal sickness. And, book-ending the story, a frail, elderly priest recognizes the necessity for a show-down with an old demonic enemy.",
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
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K (Ryan Gosling), unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former LAPD blade runner who has been missing for 30 years.",
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
      "A cryptic message from the past sends James Bond on a rogue mission to Mexico City and eventually Rome, where he meets Lucia, the beautiful and forbidden widow of an infamous criminal. Bond infiltrates a secret meeting and uncovers the existence of the sinister organisation known as SPECTRE. Meanwhile back in London, Max Denbigh, the new head of the Centre of National Security, questions Bond's actions and challenges the relevance of MI6 led by M. Bond covertly enlists Moneypenny and Q to help him seek out Madeleine Swann, the daughter of his old nemesis Mr White, who may hold the clue to untangling the web of SPECTRE. As the daughter of the assassin, she understands Bond in a way most others cannot. As Bond ventures towards the heart of SPECTRE, he learns a chilling connection between himself and the enemy he seeks.",
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
      'Luke Skywalker battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo and Princess Leia reaffirm their love and team with Chewbacca, Lando Calrissian, the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor.',
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
      "1945, in World War II Germany, the tough Sergeant Don 'Wardaddy' Collier commands a tank and survives a German attack with his veteran crew composed of Boyd 'Bible' Swan, Trini 'Gordo' Garcia and Grady 'Coon-Ass' Travis. He receives a rookie soldier Norman Ellison as the substitute for his deceased gunner and he tries to harden the youth along the way.",
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
      'Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge.',
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
      "Holding a mysterious leather suitcase in his hand, Newt Scamander, a young activist wizard from England, visits New York while he is on his way to Arizona. Inside his expanding suitcase hides a wide array of diverse, magical creatures that exist among us, ranging from tiny, twig-like ones, to majestic and humongous ones. It is the middle of the 20s and times are troubled since the already fragile equilibrium of secrecy between the unseen world of wizards and the ordinary or \"No-Maj\" people that the MACUSA Congress struggles to maintain, is at risk of being unsettled. In the meantime, the voices against wizardry keep growing with daily protests led by Mary Lou Barebone and fuelled by the increasing disasters ascribed to a dark wizard, Gellert Grindelwald. At the same time, by a twist of fate, Newt's precious suitcase will be switched with the identical one of an aspiring No-Maj baker, Jacob Kowalski, while demoted Auror, Tina Goldstein, arrests Newt for being an unregistered wizard. To make matters worse, with the suitcase in the wrong hands, several creatures manage to escape to unknown directions. Before long, this situation will catch Senior Auror Percival Graves' attention who will target both Tina and Newt amid panic caused by an invisible, devastating and utterly unpredictable menace that still wreaks havoc in New York's 5th Avenue. Is there a hidden agenda behind Graves' intentions and ultimately, what will happen to the remaining magical creatures still loose in the streets?",
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
      'Is there solace in revenge? Bond and "M" sniff a shadowy international network of power and corruption reaping billions. As Bond pursues the agents of an assassination attempt on "M," all roads lead to Dominic Greene, a world-renowned developer of green technology. Greene, a nasty piece of work, is intent on securing a barren area of Bolivia in exchange for assisting a strongman stage a coup there. The CIA looks the other way, and only Bond, with help from a retired spy and from a mysterious beauty, stands in Greene\'s way. "M" wonders if she can trust Bond, or if vengeance possesses him. Beyond that, can anyone drawn to Bond live to tell the tale?',
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
      "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town. When her parents see a restaurant with great-smelling food but no staff, they decide to eat and pay later. However, Chihiro refuses to eat and decides to explore the theme park a bit more. She meets a boy named Haku who tells her that Chihiro and her parents are in danger, and they must leave immediately. She runs to the restaurant and finds that her parents have turned into pigs. In addition, the theme park turns out to be a town inhabited by demons, spirits, and evil gods. At the center of the town is a bathhouse where these creatures go to relax. The owner of the bathhouse is the evil witch Yubaba, who is intent on keeping all trespassers as captive workers, including Chihiro. Chihiro must rely on Haku to save her parents in hopes of returning to their world.",
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
      'Marvel\'s "Doctor Strange" follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York City\'s Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilising a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.',
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
      'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
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
      'After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth, is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and his team and save the galaxy from his power, Quill creates a team of space heroes known as the "Guardians of the Galaxy" to save the world.',
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
      "In the 1870s, Captain Nathan Algren, a cynical veteran of the American Civil war who will work for anyone, is hired by Americans who want lucrative contracts with the Emperor of Japan to train the peasant conscripts for the first standing imperial army in modern warfare using firearms. The imperial Omura cabinet's first priority is to repress a rebellion of traditionalist Samurai -hereditary warriors- who remain devoted to the sacred dynasty but reject the Westernizing policy and even refuse firearms. Yet when his ill-prepared superior force sets out too soon, their panic allows the sword-wielding samurai to crush them. Badly wounded Algren's courageous stand makes the samurai leader Katsumoto spare his life; once nursed to health he learns to know and respect the old Japanese way, and participates as advisor in Katsumoto's failed attempt to save the Bushido tradition, but Omura gets repressive laws enacted- he must now choose to honor his loyalty to one of the embittered sides when the conflict returns to the battlefield...",
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
      "Balthazar Blake (Nicolas Cage) is a master sorcerer in modern-day Manhattan trying to defend the city from his arch-nemesis, Maxim Horvath (Alfred Molina). Balthazar can't do it alone, so he recruits Dave Stutler (Jay Baruchel), a seemingly average guy who demonstrates hidden potential, as his reluctant protégé. The sorcerer gives his unwilling accomplice a crash course in the art and science of magic, and together, these unlikely partners work to stop the forces of darkness. It'll take all the courage Dave can muster to survive his training, save the city and get the girl as he becomes The Sorcerer's Apprentice.",
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
      "When Bond's latest assignment goes gravely wrong and agents around the world are exposed, MI6 is attacked forcing M to relocate the agency. These events cause her authority and position to be challenged by Gareth Mallory (Ralph Fiennes), the new Chairman of the Intelligence and Security Committee. With MI6 now compromised from both inside and out, M is left with one ally she can trust: Bond. 007 takes to the shadows - aided only by field agent, Eve (Naomie Harris) - following a trail to the mysterious Silva (Javier Bardem), whose lethal and hidden motives have yet to reveal themselves.",
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
      'This film charts the rise and fall of Yuri Orlov, from his early days in the early 1980s in Little Odessa, selling guns to mobsters in his local neighbourhood, through to his ascension through the decade of excess and indulgence into the early 90s, where he forms a business partnership with an African warlord and his psychotic son. The film also charts his relationship through the years with his younger brother, his marriage to a famous model, his relentless pursuit by a determined federal agent and his inner demons that sway between his drive for success and the immorality of what he does.',
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
  },
  {
    Title: 'Gothika',
    Year: '2003',
    Rated: 'R',
    Released: '21 Nov 2003',
    Runtime: '98 min',
    Genre: 'Horror, Mystery, Thriller',
    Director: 'Mathieu Kassovitz',
    Writer: 'Sebastian Gutierrez',
    Actors:
      'Halle Berry, Robert Downey Jr., Charles S. Dutton, John Carroll Lynch',
    Plot:
      'Dr. Miranda Grey is a psychiatrist who works in a penitentiary, in the mental institution sector. She is married with Dr. Douglas Grey, the chief of department where Dr. Pete Graham also works. Chloe Sava, a patient of Dr. Miranda formerly abused by her stepfather, claims that she is frequently raped by the devil in her cell. After leaving the asylum in a stormy night, Dr. Miranda has a car accident, and when she wakes up, she is an inmate of the institution, being accused of an horrible crime and having no memory of the incident.',
    Language: 'English',
    Country: 'USA, France, Canada, Spain',
    Awards: '3 wins & 7 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYxNDA4OTAxNF5BMl5BanBnXkFtZTcwMTI5NjQzMw@@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '5.8/10' },
      { Source: 'Rotten Tomatoes', Value: '15%' },
      { Source: 'Metacritic', Value: '38/100' }
    ],
    Metascore: '38',
    imdbRating: '5.8',
    imdbVotes: '102,918',
    imdbID: 'tt0348836',
    Type: 'movie',
    DVD: '23 Mar 2004',
    BoxOffice: '$59,537,388',
    Production: 'Warner Bros. Pictures',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'The Rock',
    Year: '1996',
    Rated: 'R',
    Released: '07 Jun 1996',
    Runtime: '136 min',
    Genre: 'Action, Adventure, Thriller',
    Director: 'Michael Bay',
    Writer:
      'David Weisberg (story), Douglas Cook (story), David Weisberg (screenplay), Douglas Cook (screenplay), Mark Rosner (screenplay)',
    Actors: 'Sean Connery, Nicolas Cage, Ed Harris, John Spencer',
    Plot:
      "Stanley Goodspeed, who lives in Washington D.C., is a biochemist who works for the FBI. Soon after his fiancée Carla Pestalozzi announces that she is pregnant, Stanley gets a call from FBI director James Womack. Womack tells Stanley that San Francisco's Alcatraz Island has been taken hostage, along with 81 tourists, by marine General Francis Xavier Hummel who, for years, has been protesting the government's refusal to pay benefits to families of war veterans who died during covert military operations. The death of his wife Barbara Hummel on March 9, 1995 drove General Hummel over the edge, and now he's holding hostages in order to get his point across. Stanley is needed because General Hummel has stolen some VX gas warheads and has announced that he will launch them onto San Francisco unless his demands are met. Stanley knows how to disarm the bombs, but Stanley needs someone who knows Alcatraz well enough to get him inside. That man is former British intelligence agent John Patrick Mason, who has been in prison for the past 30 years without a trial because he was accused of stealing the private files of J. Edgar Hoover. In 1962, John became the only inmate ever to escape from Alcatraz, and he stayed out of Alcatraz long enough to father a daughter named Jade Angelou. Despite his extreme hatred of the FBI, John agrees to help Stanley. When John and Stanley are sent into Alcatraz with a Navy SEAL team, General Hummel's men kill the entire SEAL team, leaving Stanley and John to work on their own to rescue the hostages.",
    Language: 'English',
    Country: 'USA',
    Awards: 'Nominated for 1 Oscar. Another 9 wins & 8 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZDJjOTE0N2EtMmRlZS00NzU0LWE0ZWQtM2Q3MWMxNjcwZjBhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.4/10' },
      { Source: 'Rotten Tomatoes', Value: '66%' },
      { Source: 'Metacritic', Value: '58/100' }
    ],
    Metascore: '58',
    imdbRating: '7.4',
    imdbVotes: '300,428',
    imdbID: 'tt0117500',
    Type: 'movie',
    DVD: '02 Dec 1997',
    BoxOffice: 'N/A',
    Production: 'Disney',
    Website: 'N/A',
    Response: 'True'
  },
  {
    Title: 'Mission: Impossible',
    Year: '1996',
    Rated: 'PG-13',
    Released: '22 May 1996',
    Runtime: '110 min',
    Genre: 'Action, Adventure, Thriller',
    Director: 'Brian De Palma',
    Writer:
      'Bruce Geller (television series), David Koepp (story), Steven Zaillian (story), David Koepp (screenplay), Robert Towne (screenplay)',
    Actors: 'Tom Cruise, Jon Voight, Emmanuelle Béart, Henry Czerny',
    Plot:
      'Based on the hit T.V. series. Jim Phelps was sent to Prague for a mission to prevent the theft of classified material. His wife Claire and his trusted partner Ethan Hunt were members of Phelps\' team. Unfortunately, something went horribly wrong and the mission failed, leaving Ethan Hunt the lone survivor. After he reported the failed mission, Kettridge the head of the agency suspects Ethan of being the culprit for the failed mission. Now, Ethan uses unorthodox methods (Which includes the aid of an arms dealer going by the name "Max") to try to find who set him up and to clear his name.',
    Language: 'English, French, Czech',
    Country: 'USA',
    Awards: '3 wins & 17 nominations.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '7.1/10' },
      { Source: 'Rotten Tomatoes', Value: '63%' },
      { Source: 'Metacritic', Value: '59/100' }
    ],
    Metascore: '59',
    imdbRating: '7.1',
    imdbVotes: '370,075',
    imdbID: 'tt0117060',
    Type: 'movie',
    DVD: '17 Jan 1998',
    BoxOffice: 'N/A',
    Production: 'Paramount Pictures',
    Website: 'N/A',
    Response: 'True'
  }
];
