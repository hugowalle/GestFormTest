from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Data(BaseModel):
    list_send: str


@app.post("/process_list/", response_model=str)         #On récupère puis renvoie la liste à traiter
async def create_item(_string_list: Data):
    return GestForming(_string_list.list_send)


def GestForming(_string):                               #Fonction permettant à partir d'une liste de nombres de tester la divisibilité par 3 et par 5 
    out_list = list()
    L = [int(x) for x in _string.split(',')]
    for number in L:
        if(number%3 == 0):                              
            if(number%5 == 0):                          
                out_list.append("Gestform")
            else:
                out_list.append("Geste")
        elif(number%5 == 0):                            
            out_list.append("Forme")
        else:
            out_list.append(str(number))                
    return '\n'.join(out_list)                          #On renvoie la liste traitée en séparant les termes par '\n'
