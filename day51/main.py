def task1(user_str):
    n = 0
    comparison_count = 0
    increment_count = 0

    for i in user_str:
        n += 1
        comparison_count += 1
        if i.isupper():
            increment_count += 1
    
    return comparison_count, increment_count


compare, increment = task1("abcdEFGH")
print(f"Comparison count: {compare}, increment count: {increment}")


def task2(numbers):
    sum_of_nums = 0
    count = 0

    for i in numbers:
        sum_of_nums += i
        count += 1

    avg = sum_of_nums / count
    return avg

average = task2({1, 2, 3, 4, 5, 6, 7})
print(f"Average of your numbers is: {average}")

def task2_extra(numbers):
    n = 0
    product = 1

    for num in numbers:
        n += 1
        product *= num
    
    result = product ** (1 / n)
    return result

average2 = task2_extra({1, 2, 3, 4, 5, 6, 7})
print(f"Average geometrical of your numbers is: {average2}")



# 3
def task3(numbers):
    num1 = numbers[0]
    num2 = numbers[1]
    num3 = numbers[2]

    if type(num1) == int:
        if type(num2) == int:
            if type(num3) == int:

                # After checking input datatypes
                if num1 != num2:
                    if num1 != num3:
                        if num2 != num3:
                            return True
    return False

same_or_not = task3([1, 2, 3])
print(f"Result is: {same_or_not}")