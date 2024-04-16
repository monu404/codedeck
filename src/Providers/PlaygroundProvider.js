
import { useEffect } from "react";
import { createContext,useContext, useState } from "react"
import { json } from "react-router-dom";

import  {v4} from 'uuid'

export const playgroundContext= createContext();
const intialData=[
{
    id:v4(),
   title:'Spring boot',
   files:[
    {
        id:v4(),
        title:'index',
        code: `cout<<"hello world"`,
        language:'cpp'
    }
]
}
    ,
    {
    id:v4(),
    title:'fronted',
    files:[
     {
         id:v4(),
         title:'index',
         code: `console.log()`,
         language:'javascript'
     }
    ]
   
    }

]

export const PlaygroundProvider=({children})=>{

  const [folder, setFolder] = useState(() => {
    try {
        const localData = localStorage.getItem('data');
        return localData ? JSON.parse(localData) : intialData;
    } catch (error) {
        console.error("Error parsing local storage data:", error);
        // Handle the error gracefully, you can set a default value or clear the local storage
        // For now, setting the initialData as default
        return  intialData;
    }
});

        const createnewplayground=({ foldername, filename, language })=>{
          const newfolder=[...folder];
          newfolder.push({
             id:v4(),
              title:foldername,
              files:[
                {
              id:v4(),
            title:filename,
            code: `console.log()`,
            language
                 }
              ]
          })

            localStorage.setItem('data',JSON.stringify(newfolder));
            setFolder(newfolder);
                  
        }

        const opennewfolder =(foldername)=>{
           const newfolder={
            id:v4(),
            title:foldername,
            files:[]
           }

           const modifieddata=[...folder,newfolder]
           localStorage.setItem('data',JSON.stringify(modifieddata));
           setFolder(modifieddata);


        }
         
        const deletefolder=(id)=>{
             //to delete the folder
             //update the local storage
               const updatefolder=  folder.filter((folderitem)=>{
                    return folderitem.id !== id;
                  })     

                  localStorage.setItem('data',JSON.stringify(updatefolder));
 setFolder(updatefolder);
                  

        };

        const editfoldertitle=(newfoldername,id)=>{
     const updatefolder=folder.map((folderitem)=>{
            if(folderitem.id===id){
              folderitem.title=newfoldername;
            }
            return folderitem;
          })

          localStorage.setItem('data',JSON.stringify(updatefolder));
          setFolder(updatefolder);

        }

         const editfiletitle=(newfilename,folderid,fieldid)=>{
             
          for(let i=0; folder.length; i++){
            if(folderid===folder[i].id){
              const files=folder[i].files;

               for(let j=0; j<folder[i].files.length; j++){
                   if(files[i].id===fieldid){
                         files[i].title=newfilename;
                         break;
                   }
               }
               break;
            }
          }
          
         }
 
           useEffect(()=>{

             if(!localStorage.getItem('data')){
              localStorage.setItem('data',JSON.stringify(folder))
             }
       
           },[folder])
  
            const feature={
              folder,
              createnewplayground,
              opennewfolder,
              deletefolder,
              editfoldertitle
            }

 return (

      <playgroundContext.Provider value={feature} >
        {children}
      </playgroundContext.Provider>

 )

}