from turtle import *

#we want to paint a house

#step 1: draw a square

width(7)
color("cyan")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#end of square

#drawing a door

forward(70)
color("brown")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("brown")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()




exitonclick()