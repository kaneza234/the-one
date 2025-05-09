def multiplication_tables(n):
    """Generate multiplication tables from 2 up to n."""
    tables = {}
    for i in range(2, n + 1):
        tables[i] = [f"{i} x {j} = {i * j}" for j in range(1, 11)]
    return tables

# Example usage:
user_input = int(input("Enter a number: "))
tables = multiplication_tables(user_input)

# Display results
for key, values in tables.items():
    print(f"\nMultiplication Table of {key}:")
    for value in values:
        print(value)
