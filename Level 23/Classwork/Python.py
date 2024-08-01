Number = input("Enter a number from 1 to 100")

i = 1
while i < Number:
  print(i + "is not a correct number!")
  i += 1

if i == Number:
    print("The correct Number is " + Number + "!")