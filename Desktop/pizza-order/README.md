Specs

1.  User selects a pizza size- either small, medium, or large.  It is assumed that the pizza will be a cheese pizza.  Depending on what size is selected, a total will be generated:

    input: small cheese
    output: 9.00

    input: medium cheese
    output: 11.00

    input: large cheese
    output: 13.00

2.  User can select from one of six pizza toppings, and a value will be assigned to each topping.  Depending on the pizza size selected, and topping selected, the total will change:

    input: small, pepperoni
    output: 11.00

    input: small, green pepper
    output: 10.00

    input: large, pepperoni
    output: 15.00

    input: large, green pepper
    output: 14.00

3.  User can select two toppings on the same pizza.  Depending on the size selected, and the two toppings selected, the total increases:

    input: small, pepperoni, sausage
    output: 13.00

    input: small, green pepper, mushroom
    output: 11.00

4.  User can select more than two toppings.  Depending on the size selected, and how many toppings are selected for the pizza, the total increases:

    input: small, pepperoni, sausage, ham
    output: 15.00

    input: small, green pepper, mushroom, black olives
    output: 12.00

5.  User can mix toppings to be both meat and vegetables.  Based off of the size that is selected, and the combination of toppings, the total changes:

  input: small, pepperoni, ham, green peppers
  output: 14.00
