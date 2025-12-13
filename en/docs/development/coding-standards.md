---
title: Coding Standards
---

::: tip Tip
This is the coding standards from the official SRA page, which also applies here.
:::

During SRA development, the following code formatting standards should be followed.

## Naming Conventions

### Variables
   Variables should be named in English, using lowercase letters, and have actual meaning. Each word should be separated by underscores, avoiding spelling errors.
   
   Example: `user_name`, `is_logged_in`.

### Constants
   Constants should be named in English, using uppercase letters, and have actual meaning. Each word should be separated by underscores, avoiding spelling errors.

   Example: `MAX_USER_COUNT`, `DEFAULT_TIMEOUT`.

### Function Names
   Function names should be named in English, using lowercase letters, and have actual meaning. Each word should be separated by underscores, avoiding spelling errors.

   Example: `calculate_average`, `get_user_info`.

### Class Names
   Class names should be named in English, using capitalized first letters of words, and have actual meaning.

   Example: `User`, `DatabaseConnection`.

### Module Names
   Module names should be named in English, using lowercase letters, and have actual meaning. Each word should be separated by underscores, avoiding spelling errors.

   Example: `math_utils`, `database`.

### Package Names
   Package names should be named in English, using lowercase letters, and have actual meaning. Each word should be separated by underscores, avoiding spelling errors.

   Example: `utils`, `database`.

## Formatting Rules

### Indentation
   Indentation should use four spaces.

   Example:

   ```python
   def calculate_average(numbers):
       total = 0
       for number in numbers:
           total += number
       return total / len(numbers)
   ```
### Line Breaks
   Line breaks should use newline characters, avoiding spaces. Line length should not exceed 120 characters.

   Example:

   ```python
   result = calculate_average([1, 2, 3, 4, 5])
   print("The average is:", result)
   ```

### Spaces
   Spaces should use space characters, avoiding tab characters.

   Example:

   ```python
   result = calculate_average([1, 2, 3, 4, 5])
   print("The average is:", result)
   ```