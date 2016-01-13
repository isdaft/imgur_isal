#imgur gallery search
nodejs server using imgurk to search imgur gallery via url and return results
FOR FCC`

#modified imgurk (npm)
line 21 - from var link = JSON.parse(body).data[0].link;
to - var link = JSON.parse(body).data;
Returns all results for said search term.

#TO DO
store each search session in mongodb
-when api/latest/imagesearch is hit, return latest imagesearch from mongodb

sort through data and assign to variables
create json and populate fields
link app.get 

#EXTRA TO DO
html/css search and return (maybe angular?)
