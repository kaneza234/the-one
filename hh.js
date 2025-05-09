 multiplication_tables_up_to(n):
    for i in range(2,n + 1):
        print("f"\n "Multiplication table of {i}:")
        for j in range(1, 11):
            print(f"{i} x {j} = {i * j}")

            user_input = int(input("Enter a number to get muitipliction tables up to: ")
            if user_input>=2:
                multiplication_tables_up_to(user_input)
            else:
                print("Please enter a number greater than or equal to 2.")
                except valueError:
                    print("Invalid input. Please enter a valid number.")