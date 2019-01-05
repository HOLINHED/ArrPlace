# ArrPlace

A r/place clone built using nodejs.

NO LIVE VERSION

TODO:

    1) Add error handling.
    2) Send board information to database instead of a JSON file.

/api (get)

    responses:
      200:
        board: (array) Array containing the color of each pixel.
        
/api (post)

    responses:
      200:
        board: (array) Array containing the updated board.
