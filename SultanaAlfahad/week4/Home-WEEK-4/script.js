

function factorFunction (number)
{

if ((number % 3 != 0) && (number % 5 != 0)   && (number % 7 != 0) )
{
  console.log("Number as string: " + number.toString());
} else

if (number % 3 == 0)
{
  console.log("Pling");
}

if (number % 5 == 0)
{
  console.log("Plang");
}

if (number % 7 == 0)
{
  console.log("Plong");
}
}

factorFunction(28);
factorFunction(1755);
factorFunction(34);
