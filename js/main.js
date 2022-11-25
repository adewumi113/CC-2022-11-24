//https://www.codewars.com/kata/56606694ec01347ce800001b
// DESCRIPTION:
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//solution
// use the triangle inequality theorem, which states that the sum of 2 sides of a triangle must be greater than the third side.

function isTriangle (a, b, c) {
  if (a + b <= c | a + c <= b | b + c <= a)
  return false
  else
  return true
}

//solution 2 (short)
function isTriangle(a, b, c)
{
   return a + b > c && a + c > b && b + c > a
}
