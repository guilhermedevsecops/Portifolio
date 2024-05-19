import { getFirestore, doc, setDoc, getDoc, collection, getDocs, updateDoc } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { connectionFb } from './Connection';

export const Insert = async function (connectionFb: any,
    table: string,
    collection: string,
    title: string,
    information: string,
    description: any) {
    let conn = connectionFb()
    const db = getFirestore(conn);
    console.log("aqui")
    try {
        await setDoc(doc(db, table, collection), {
            name: title,
            state: information,
            country: description
        });
        console.log("Documento adicionado com sucesso!");
    } catch (error) {
        console.error("Erro ao adicionar documento:", error);
    }
}

// dessa forma deve ser efetuado o insert no banco 
//Insert(connectionFb, "Teste", "Teste", "Teste", "Teste", "Teste")


export const ReadAll = async (connectionFb: any, collectionName: string) => {
        try {
            let conn = connectionFb()
            const db = getFirestore(conn);
            const querySnapshot = await getDocs(collection(db, collectionName));
            querySnapshot.forEach((doc) => {
                console.log("ID do documento:", doc.id, "Dados:", doc.data());
            });
        } catch (error) {
            console.error("Erro ao ler coleção:", error);
        }
}

//forma qe deve ser efetuado o read no banco
//ReadAll(connectionFb, "Teste")

export const ReadOne = async (connectionFb: any, collectionName : string, documentId : string) =>{
    try {
        let conn = connectionFb()
        const db = getFirestore(conn);
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(docSnap.data());
        } else {
            console.log("Documento não encontrado!");
        }
    } catch (error) {
        console.error("Erro ao ler o documento", error)
    }
}
//Forma que deve ser efetuado a leitura no banco para trazer 1 resultado
//ReadOne(connectionFb, "Teste", "Teste")

export const Update = async (connectionFb: any, collectionName : string, documentId : string, atualizarCountry : string, atualizarState : string, atualizarName : string) => {
    try{
        let conn = connectionFb()
        const db = getFirestore(conn);
        const docRef = doc(db, collectionName, documentId);
        await updateDoc(docRef, {
            country : atualizarCountry,
            state : atualizarState,
            name : atualizarName
        });
        console.log("Documento atualizado")   

    }catch(error){
        console.error("Erro ao atualizar o documento", error)
    }
}
//Update(connectionFb, "Teste", "Teste", "Brazil", "GO", "Valor de atualização")

