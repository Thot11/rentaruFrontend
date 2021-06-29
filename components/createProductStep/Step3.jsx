/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../../elements/Button"

const Step3 = ({ step, setStep, data, setData }) => {

  const [selectedFile, setSelectedFile] = useState(data.images ?? [])
  const [previewImages, setPreviewImages] = useState([])
  const [bool, setBool] = useState(false)
  const [error, setError] = useState()

  const nextStep = () => {
    setData({
      ...data,
      images: selectedFile
    })
    setStep(step+1)
  }

  const previousStep = () => {
    setStep(step-1)
  }

  useEffect(() => {
    
    let previewImage = []
    if (selectedFile) {
      selectedFile.forEach(file => {
        if (file.url) previewImage.push(file.url)
        else previewImage.push(URL.createObjectURL(file))
      });
    }
    setPreviewImages(previewImage)

    if (selectedFile) {
      const tempFiles = selectedFile.filter(file => file.name.length > 150)
      if (tempFiles.length > 0) {
        setError('Nom du fichier trop long, veuillez le raccourcir svp')
      } else {setError('')}
    }
  }, [selectedFile, bool])

  return (
    <>
      <div>
        <h3>Ajouter des photos de votre collection : </h3>
        <input
          type="file"
          multiple="multiple"
          accept="image/*"
          id="file-upload"
          onChange={(e) => setSelectedFile([...selectedFile, ...e.target.files])}
        />
        {error && (<p className="error" >{error}</p>)}
        <label for="file-upload" className="addImages">
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M60.568 26.5909H38.4089V4.43182C38.4089 1.98545 36.4235 0 33.9771 0H31.0227C28.5764 0 26.5909 1.98545 26.5909 4.43182V26.5909H4.43182C1.98545 26.5909 0 28.5764 0 31.0227V33.9771C0 36.4235 1.98545 38.4089 4.43182 38.4089H26.5909V60.568C26.5909 63.0144 28.5764 64.9998 31.0227 64.9998H33.9771C36.4235 64.9998 38.4089 63.0144 38.4089 60.568V38.4089H60.568C63.0144 38.4089 64.9998 36.4235 64.9998 33.9771V31.0227C64.9998 28.5764 63.0144 26.5909 60.568 26.5909Z" fill="black" fillOpacity="0.54"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="65" height="65" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </label>
        <div className="previewContainer">
          {previewImages.map((image, index) => {
            return (
              <div className="img">
                <div className="delete" onClick={() => {
                  setBool(!bool);
                  const temp1 = previewImages;
                  const temp2 = selectedFile
                  temp1.splice(index, 1)
                  temp2.splice(index, 1)
                  setPreviewImages(temp1)
                  setSelectedFile(temp2)
                  }}>
                    <img src="/trash.svg" alt="poubelle" />
                  </div>
                <img src={image} alt="preview image" key={index} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="buttonsContainer">
        <Button color={'Transparent'} functionOnClick={previousStep}>Retour</Button>
        <Button color={'Red'} functionOnClick={() => {if (selectedFile.length > 0 && selectedFile.length < 4 && !error) nextStep(); else setError('Minimum 1 image, maximum 3, svp') }}>Continuer</Button>
      </div>
    </>
  );
};

export default Step3;
