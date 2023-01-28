import { Button } from "react-bootstrap";
import { useState } from "react";
import Item from "./Item";
import { uid } from "uid"


export default function Form(){

// state d'affichage des taches + uid() génére un id aléatoire à chaque tâche
    const [dataList, setDataList] = useState([])

// state creation des tâches taper dans l'input
    const [stateInput, setStateInput] = useState(); 

// fonction supprimer une tâche- filtre la liste est retourne seulement tous les id non cliquer
    const deleteElement = id => {
        const filteredState = dataList.filter(item => { 
            return item.id !== id
        })
        setDataList(filteredState)
    }

// fonction crée une tâche , enregistre tous les infos dans un nouveau tableau
// creation d'un nouvelle objet tâche-intialisation du txt+id
// on pousse la nouvelle tâche dans le tableau
// change le state du tableau des taches par le nouveau tableau des tâches modifier

    const addTodo = e => {
        // évite à la page de se mettre à jour à chaque envoie du formulaire
        e.preventDefault();

        const newDataList = [...dataList];

        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uid();

        newDataList.push(newTodo);
        setDataList(newDataList);

        setStateInput('');
    }

// fonction qui enregistre les infos taper dans l'input
    const linkedInput = e => {
        setStateInput(e);
    }

    return(
        <div className="m-auto mt-5 px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3"
                       >Chose à faire
                </label>

                <input onChange={e => linkedInput(e.target.value)}
                       type="text" 
                       value={stateInput}
                       className="form-control" 
                       id="todo">
                </input>

                <Button type="submit"
                        className="mt-2 d-block" 
                        variant="success">Valider
                </Button>

            </form>

            <h2>Liste des choses à faire:</h2>
            <ul className="list-group">
            {/* parcour le tableau d'objet et utilise des props */}
                {dataList.map((item) => {
                    return( 
                        <Item
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc={deleteElement}
                        />
                    )
                })}
            </ul>
        </div>
    )
}