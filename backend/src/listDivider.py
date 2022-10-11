from fastapi import FastAPI

app = FastAPI()

def GestForming(L):                 #Fonction permettant à partir d'une liste de nombres de tester la divisibilité par 3 et par 5 
    for number in L:
        if(number%3 == 0):          #Si le nombre est divisible par 3
            if(number%5 == 0):      #On vérifie alors il est aussi divisible par 5
                print("Gestform")   
            else:
                print("Geste")
        elif(number%5 == 0):        #Si il n'est pas divisible par 3 on vérifie s'il est seulement divisible par 5
            print("Forme")   
        else:
            print(number)           #En dernier lieu on renvoie le nombre car il n'est ni divisible par 3 ni par 5

@app.get("/")
def res_list():
