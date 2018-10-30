# ArrPlace

A r/place clone built using nodejs.


API Doc -

-> POST /api

Request: {
  index,
  color
}

Response: {newBoard}

A post request to the api should contain an object with the index of the tile you would like to change,
and the color you would like to change it to. Before the new color is inserted into the array,
it runs through a format function that always returns a # + 6 hexadecimal value in lowercase.

INPUT: 'a'
OUTPUT: '#aaaaaa'

INPUT: '#fff'
OUTPUT: '#ffffff'

INPUT: 'howdy'
OUTPUT: '#dddddd'

-> GET /api

Response: {newBoard}

A get request to the api will return an object with the board array (Length 512). This array contains the colors of all
pixels of a 512 pixel board. Index 0 being the first pixel of the board, and index 511 being the last pixel of the board.

{
'#ffffff',
'#ffffff',
...
}

-> GET /

Response: Public Directory

This returns the public directory, which contains the premade client to interact with the API.
