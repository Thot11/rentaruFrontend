/* eslint-disable prettier/prettier */

import slugify from 'slugify';
import { useEffect, useState } from "react";
import { getMangaCollection } from "../../utils/api";
import Dropdown from "../dropdown";


const Step1 = ({ session, step, setStep, user, data, setData, preview, setPreview }) => {

  const [mangaCollection, setMangaCollection] = useState()
  const [selectedManga, setSelectedManga] = useState(-1)
  const [name, setName] = useState('')
  const [imageId, setImageId] = useState('')
  const [categoriesId, setCategoriesId] = useState([])

  const nextStep = () => {
    if (name) {
      setData({
        user: user.id,
        title : name,
        slug : slugify(name),
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
    if (selectedManga !== -1) {
      setName(mangaCollection[selectedManga].title)
      setImageId(mangaCollection[selectedManga].cover.id)
      setCategoriesId(mangaCollection[selectedManga].categories.map(category => {return category.id}))

      setPreview({
        title : mangaCollection[selectedManga].title,
        imageCover: mangaCollection[selectedManga].cover,
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
       <h3>Quelle série mettez vous en location ?</h3>
       <Dropdown filters={mangaCollection?.map(manga => {return manga.title})} selectedItem={selectedManga} setSelectedItem={setSelectedManga} />
      <div
        onClick={() => {
          if (selectedManga !== -1) nextStep()
        }}
       className="nextStepBtn"
       >
         Submit
        </div>
    </>
  );
};

export default Step1;
