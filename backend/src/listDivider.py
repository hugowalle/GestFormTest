from fastapi import FastAPI
from typing import Union
from pydantic import BaseModel


app = FastAPI()

@app.post("/process_list/", response_model=str)
async def create_item(_string_list: str):
    return GestForming(_string_list)

def GestForming(_string):                 #Fonction permettant à partir d'une liste de nombres de tester la divisibilité par 3 et par 5 
    out_list = list()
    L = [int(x) for x in _string.split(',')]
    for number in L:
        if(number%3 == 0):          #Si le nombre est divisible par 3
            if(number%5 == 0):      #On vérifie alors il est aussi divisible par 5
                out_list.append("Gestform")
            else:
                out_list.append("Geste")
        elif(number%5 == 0):        #Si il n'est pas divisible par 3 on vérifie s'il est seulement divisible par 5
            out_list.append("Forme")
        else:
            out_list.append(str(number))           #En dernier lieu on renvoie le nombre car il n'est ni divisible par 3 ni par 5
    return '\n'.join(out_list)

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
