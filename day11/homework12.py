def samkutxedis_ori_gverdis_jami(a, b):
    return a + b

pirveli_gverdi = int(input("პირველი გვერდის სიგრძე: "))
meore_gverdi = int(input("მეორე გვერდის სიგრძე: "))

result = samkutxedis_ori_gverdis_jami(pirveli_gverdi, meore_gverdi)

mesame_gverdi = int(input("მესამე გვერდის სიგრძე: "))

if result > mesame_gverdi:
    print("ასეთი სამკუთხედი იარსებებს")
else:
    print("ასეთი სამკუთედი არ იარსებებს")
    

