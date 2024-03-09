# Clamp

Implement a function clamp to restrict a number within the inclusive lower and upper bounds.

### Arguments
1. value(number): number to clamp
2. lower(number): lower boundary
3. upper(number): upper boundary

### Returns
(number): clamped number


### Examples
#### Within the bounds, return as-is.
clamp(3, 0, 5) returns 3

#### Smaller than the lower bound.
clamp(-10, -3, 5); returns -3

#### Bigger than the upper bound.
clamp(10, -5, 5); returns 5

### Resources
[Lodash clamp docs](https://lodash.com/docs/4.17.15#clamp)