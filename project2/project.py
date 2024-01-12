import random
user_move=random.randint(1,6)
computer_move=random.randint(1,6)
if user_move > computer_move:
    print("u win! " + " your number is " + str(user_move) + " computer number is " + str(computer_move) + " CONGRATILATION!")
elif user_move==computer_move:
    print("TIE! " + " your number is " + str(user_move) + " computer number is " + str(computer_move) + " NEXT TIME!")
else:
    print("u loss! " + " your number is " + str(user_move) + " computer number is " + str(computer_move) + " fail!")
