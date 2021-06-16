/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react";
import { getMangaCollection } from "../../utils/api";
import Dropdown from "../dropdown";
import Button from "../../elements/Button"


const Step1 = ({ session, step, setStep, user, data, setData, preview, setPreview, mangaId, setMangaId }) => {

  const [mangaCollection, setMangaCollection] = useState()
  const [selectedManga, setSelectedManga] = useState("")
  const [name, setName] = useState('')
  const [imageId, setImageId] = useState('')
  const [categoriesId, setCategoriesId] = useState([])

  const nextStep = () => {
    if (name) {
      setData({
        user: user.id,
        title : name,
        imageCover: imageId,
        categories: categoriesId
      })
      setStep(step+1)
    }
  }


  useEffect(() => {
    getMangaList()
  }, [session])

  useEffect(() => {
    if (mangaId !== -1 && mangaCollection) {
      mangaCollection.forEach((manga) => {
        if(manga.title === selectedManga) {
          setName(manga.title)
          setImageId(manga.cover.id)
          setCategoriesId(manga.categories.map(category => {return category.id}))
    
          setPreview({
            title : manga.title,
            imageCover: manga.cover,
          })
        }
      })
    } 
    else {
      setName(selectedManga);
      setPreview({
        title : selectedManga,
        imageCover: null,
      })
    }
  }, [selectedManga])


  const getMangaList = () => {
    getMangaCollection(session).then(resp => {
      if (!resp.error) setMangaCollection(resp)
    }).catch(()=> console.log('error'))
  }

  return (
    <>
      <div>
        <h3>Quelle série mettez vous en location ?</h3>
        {/* <Dropdown filters={mangaCollection?.map(manga => {return manga.title})} selectedItem={selectedManga} setSelectedItem={setSelectedManga} /> */}
        <div className="inputContainer">
          <input type="text" value={selectedManga} onChange={(e) => {setSelectedManga(e.target.value); setMangaId(-1)}} />
          {selectedManga.length > 0 && mangaId === -1 &&
            <div className="autocompletion">
              {mangaCollection.map((manga, key) => {         
                if(manga.title.toLowerCase().startsWith(selectedManga.toLowerCase())) {
                  return (
                    <p className="option" key={key} onClick={() => {setSelectedManga(manga.title); setMangaId(manga.id)}}>{manga.title}</p>
                  )
                }
              })}
            </div>
          }
        </div>
      </div>
      <div className="buttonsContainer">
        <div />
          <Button color={'Red'} functionOnClick={() => {
            if (selectedManga !== -1) nextStep()
          }}>Continuer</Button>
      </div>
    </>
  );
};

export default Step1;
