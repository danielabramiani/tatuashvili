# print("3" + "0")

# #integer 15
# #string "15"

# print(10 > 9)
# print(10 == 9)
# print(10 < 9)

# name = "nika"
# surname = "Tatuashvili"
# age = 15

# print(name + " " + surname + " " + age)

#data types მონაცემთა ტიპები string-str,integer-int,float 
#0.2 = 2 / 10 
#15,16,2,3,4,4,5,5,6,7,8,9 int

# name = "shota"

# if name == "shota":
#     print("Shota Best")
    
# elif name == "luka":
#     print("luka best")

# elif name == "deme":
#     print("deme best")
    
# else:
#     print("no")

# even_numbers = []  

# for number in range(0, 101):
#     if number % 2 == 0:
#         even_numbers.append(number) 
        
# print("Even numbers from 0 to 100 are:")
# for even_number in even_numbers:
#     print(even_number)
    
# #უკეთესი გზა

# even_numbers = [number for number in range(101) if number % 2 == 0]

# print(even_numbers)


# print(int('10'))
# print(int(3.14))

# name = 2.55
# print(int(name))

# print(int('abc'))   
# print(int('10.5')) 

#/ divison(გაყოფა)

#% Modules(Reminder)

# x = 5
# y = 2
# z = x // y
# print(z)

# w = x % y

# print(w)

# def is_palindrome(s):
#     return s == s[::-1]

# def vowels(s):
#     vowels = "aeiouAEIOU"
#     count = 0
    
#     for char in s:
#         if char in vowels:
#             count += 1
#         return count
    
# def strings(strings):
#     uppercase_list = []
    
#     for s in strings:
#         upper_s = s.upper()
        
#         uppercase_list.append(upper_s)
#     return uppercase_list

def find_last_repeated_element(arr):
     seen = {}
     last_repeated = None
     for num in arr:
         if num in seen:
             last_repeated = num
         seen[num] = seen.get(num, 0) + 1
     if last_repeated is None:
         print("მასივში არც ერთი ელემენტი არ მეორდება")
     else:
         print(last_repeated)
find_last_repeated_element([5, 1, 3, 4, 1, 3, 12])

# შემოგდით n და n ზომის მასივი. თქვენი ამოცანაა იპოვოთ მასივში ყველაზე
# ბოლოს გამეორებული ელემენტი 
# და დაბეჭდოთ იგი. თუ  ასეთი ელემენტი არ არსებობს დაბეჭდეთ რომ მასივში 
# არცერთი ელემენტი არ მეორდება
# მაგ : 5, 1 3 4 1 3 12 
# პასუხია 3 (მასივში გამიმეორდა 1-იანი და 3-იანი თუმცა რადგან 3 უფრო გვიან
# გამეორდა ეგაა საძებნი ელემენტიც)


def count_greater_left(arr):
    result = []
    for i in range(len(arr)):
        count = 0
        for j in range(i):
            if arr[i] > arr[j]:
                count += 1
        result.append(count)

    print(result)
count_greater_left([3, 2, 6, 5, 1])
# 3) შემოდის n და n ზომის მასივი. თქვენი  
# ამოცანაა თითოეული ელემენტისთვის დაბეჭდოთ 
# მის მარცხნივ მყოფ ელემენტებს შორის რამდენზე მეტია იგი.
# მაგ  n=5, 3 2 6 5 1
# პასუხია 0,0,2,2,0  (3-ის წინ არცერთი ელემეტნია,
# 2ის წინ 3ია თუმცა არაა მასზე მეტი , 6ის წინ 3 და 2
# წერია რადგან ორივეზე მეტია დაიბეჭდება 2, 5ის 3 2 6 წერია ამათგან 2 
# მათგანზე მეტია აქაც 2 და ბოლოს 
# 1იანი არცერთზე მეტი არაა და დაიბეჭდება 0 ) გააკეთე პითონში კოდი