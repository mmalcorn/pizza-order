Specs

1.  User selects a pizza size- either small, medium, or large.

    input: medium
    output: medium

2.  Depending on what size a user selects, a temporary pizza total will be generated.

    input: medium
    output: 11.00 (temporary pizza total)

3.  User can select from six pizza toppings, a value (price) will be assigned to each topping depending on the topping.
    input: pepperoni (any meat)
    output: Add 2.00

    input: green peppers (any vegetable)
    output: Add 1.00

4. The temporary pizza total will change depending on what topping is selected.  The values assigned to each topping will be added to the temporary pizza total.

    input: medium; green peppers
    output: 11.00 + 1.00

5.  Multiple toppings will change the temporary total even more.
    input: medium; pepperoni and green peppers
    output: 11.00 (size) + 2.00 (meat) + 1.00 (vegetable) = 14.00

6.  A grand total will be generated and displayed based off of the size, number, and value of the toppings.

    input: large (size) + chicken (meat) + mushrooms (vegetable)
    output: 15.00
