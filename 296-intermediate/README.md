# [2016-12-22] Challenge #296 [Intermediate] Intersecting Area Of Overlapping Rectangles
[Original Post](https://www.reddit.com/r/dailyprogrammer/comments/5jpt8v/20161222_challenge_296_intermediate_intersecting/)

Live Demo: https://jsbin.com/momeme/1/edit?js,console

###Description
You need to find the area that two rectangles overlap. The section you need to output the area of would be the blue lined section here: http://i.imgur.com/brZjYe5.png
If the two rectangles do not overlap, the resultant area should be 0.

###Input Description
There will be two lines of input. On each line are the x and y positions (separated by a comma) of each opposing corner (each corner co-ordinate separated by a space). The co-ordinates can have decimals, and can be negative.

###Output Description
The area of the overlapping section of the two rectangles, including any decimal part.

###Challenge Inputs

```
0,0 2,2
1,1 3,3
```

```
-3.5,4 1,1
1,3.5 -2.5,-1
```

```
-3.5,4 1,1
1,3.5 -2.5,-1
```

###Challenge Outputs

```
1.0
```

```
8.75
```

```
0.0
```
