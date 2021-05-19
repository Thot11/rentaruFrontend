/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList";
import { getManga, getMangaCollection, getProductsByTitle } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";

// Date
import { DateRangePicker } from 'react-dates';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import 'moment/locale/fr'
import 'react-dates/lib/css/_datepicker.css';


import { useDispatch, useSelector } from "react-redux";
import { paiementData, updateMe } from "../../store";

// Data
import dataCities from '../../utils/dataCities'

const delivery = [
  'Point relais',
  'Remise en main propre',
  'Indifférent'
]

const filters = [
  'Les plus récents',
  'Les plus anciens',
  'Les moins chers',
  'Les plus loués'
]


const MangaPage = ({ manga, products }) => {


  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading products...</div>;
  }

  const dispatch = useDispatch();
  const { session } = useSelector((state) => state);
  const moment = extendMoment(Moment);

  const [windowWidth, setWindowWidth] = useState(1281);

  const [allProducts, setAllProducts] = useState(products)
  const [productList, setProductList] = useState([]);

  // mangaInfo
  const [synopsisOpen, setSynopsisOpen] = useState(false);
  const [rank, setRank] = useState(0);

  //FilterBar
  const [tomeInitial, setTomeInitial] = useState();
  const [tomeFinal, setTomeFinal] = useState();

  const [selectGeoOpen, setSelectGeoOpen] = useState(false)
  const [inputCity, setInputCity] = useState('');
  const [cityList, setCityList] = useState([]);
  const [rayon, setRayon] = useState(25);

  const [selectDeliveryOpen, setSelectDeliveryOpen] = useState(false);
  const [deliverySelected, setDeliverySelected] = useState(0);

  const [selectFilterOpen, setSelectFilterOpen] = useState(false);
  const [filterSelected, setFilterSelected] = useState(0);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState();

  const [changes, setChanges] = useState(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    getMangaList()
  }, [session])

  const getMangaList = () => {
    getMangaCollection(session).then(resp => {
      if (!resp.error) {
        setupTopManga(resp);
      }
    }).catch(()=> console.log('error'))
  }

  const setupTopManga = (data) => {
    const arrayBooked = [];
    data.forEach((manga) => {
      if(manga.products.length > 0) {
        let booked = 0;
        manga.products.forEach((product) => {
          booked += product.booked ? product.booked.length : 0;
        })
        arrayBooked.push({booked: booked, manga: manga.title})
      }
    })
    arrayBooked.sort(function(a, b) {
      return b.booked - a.booked;
    });
    const newMangaCollection = [];
    arrayBooked.forEach((item) => {
      data.forEach((manga, index) => {
        if(item.manga === manga.title) {
          newMangaCollection.push(manga)
        }
      })
    })
    setRank(newMangaCollection.findIndex(val => val.title === manga.title ))
    setTopManga(newMangaCollection)
  }

  useEffect(() => {
    let newProductList = [];
    if(tomeInitial !== undefined && tomeFinal !== undefined && tomeInitial < tomeFinal) {
      allProducts.forEach((_product) => {
        if(_product.tomeInitial === parseInt(tomeInitial) && _product.tomeFinal === parseInt(tomeFinal)) {
          newProductList.push(_product);
        }
        else if(_product.tomeFinal < parseInt(tomeFinal) && _product.tomeInitial > parseInt(tomeInitial)) {
          newProductList.push(_product);
        }
        else if(_product.tomeFinal > parseInt(tomeInitial) && _product.tomeInitial < parseInt(tomeFinal)) {
          newProductList.push(_product);
        }
      })
    }
    else {
      allProducts.forEach((_product) => {
        newProductList.push(_product);
      })
    }
    const newProductListCityFilter = [];
    if(cityList.length > 0) {
      newProductList.forEach((_product) => {
        cityList.forEach((_city) => {
          if(_city.toLowerCase().includes(_product.user.ville.toLowerCase())) {
            newProductListCityFilter.push(_product);
          }
        })
      })
      newProductList = newProductListCityFilter;
    }
    const newProductListDateFilter = [];
    if(startDate && endDate) { 
      newProductList.forEach((_product) => {
        if(_product.booked && moment.range(_product.booked[0].startDate,_product.booked[0].endDate).contains(moment.range(startDate, endDate))) {
          newProductListDateFilter.push(_product);
        }
      })
      newProductList = newProductListDateFilter;
    }
    setProductList(newProductList)
  }, [tomeInitial, tomeFinal, cityList, startDate, endDate]);

  useEffect(() => {
    if(productList.length > 0) {
      const newProductList = productList;
      if(filterSelected === 0) {
        newProductList.sort(function(a, b) {
          return new Date(a.created_at) - new Date(b.created_at);
        })
      }
      else if(filterSelected === 1) {
        newProductList.sort(function(a, b) {
          return new Date(b.created_at) - new Date(a.created_at);
        });
      }
      else if(filterSelected === 2) {
        newProductList.sort(function(a, b) {
          return a.price - b.price;
        });
      }
      
      else if(filterSelected === 3) {
        newProductList.sort(function(a, b) {
          return a.booked.length - b.booked.length;
        });
      }
      console.log(productList)
      setChanges(!changes)
      setProductList(newProductList)
    }
  }, [productList, filterSelected]);

  const updateSize = () => {
    setWindowWidth(window.innerWidth)
  }

  const removeCity = (index) => {
    const newArray = cityList;
    newArray.splice(index, 1);
    setCityList(newArray);
    setChanges(!changes)
  }
 
  const saveDate = () => {
    if(startDate && endDate) {
      console.log('here')
      dispatch(paiementData([], startDate, endDate));
    }
  }
  
  return (
    <div className="mangaPage">
      <Head>
        <title>{manga.title} </title>
      </Head>
      <div className="mangaInfo">
        <img src={getStrapiMedia(manga.cover.url)} alt="cover" className="cover"/>
        <div className="rightContainer">
          <div className="header">
            <h2>{manga.title}</h2>
            <div className="ranking">
              <h3>n°{rank + 1}</h3>
              <p className="label">Classement top des lecteurs</p>
            </div>
          </div>
          <div className="info">
            <p className="label">Dessinateur</p>
            <p className="answer">{manga.artist}</p>
          </div>
          <div className="info">
            <p className="label">Scénariste</p>
            <p className="answer">{manga.scenarist}</p>
          </div>
          <div className="info">
            <p className="label">Année de création</p>
            <p className="answer">{manga.year}</p>
          </div>
          <div className="info infoCatégories">
            <p className="label">Catégories</p>
            <p className="answer">
              {manga.categories.map((category) => {
                return (
                  `#${category.slug} `
                )
              })}
            </p>
          </div>
          <div className="info">            
            <p className="label">Nombre de tomes</p>
            <div>
              <div className="frenchVolumes">
                <p className="answer">{manga.frenchVolumes} <img src="/frenchFlag.png" alt="frenchFlag"/> ({manga.frenchParutionOver ? 'Terminé' : 'En cours'})</p>
              </div>
              <div className="japVolumes">
                <p className="answer">{manga.japVolumes} <img src="/japFlag.png" alt="japFlag"/> ({manga.japParutionOver ? 'Terminé' : 'En cours'})</p>
              </div>
            </div>
          </div>
          <div className="info infoSynopsis">
            <p className="label">Synopsis</p>
            <p className={synopsisOpen ? "answer answerOpen" : "answer"} dangerouslySetInnerHTML={{__html: manga.synopsis}}></p>
            <p className="seemore" onClick={() => setSynopsisOpen(!synopsisOpen)}>{synopsisOpen ? 'Voir moins...' : 'Voir plus...'}</p>
          </div>
          <div className="links">
            {manga.links.map((link) => {
              console.log(manga.categories)
              return (
                <a href={link.link} className='link'>Lien sens critique</a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="filterBar">
        <h3>Recherche avancée</h3>
        <div className="filters">
          <div className="filter">
            <p className="label">Tomes</p>
            <div className="inputs">
              <input type="number" min="1" max="200" value={tomeInitial} onChange={(e) => setTomeInitial(e.target.value)} placeholder='1' />
              <p>au</p>
              <input type="number" min="1" max="200" value={tomeFinal} onChange={(e) => setTomeFinal(e.target.value)} placeholder='10' />
            </div>
          </div>
          <div className="filter">
            <p className="label">Zone géographique</p>
            <div className="select selectGeo">
              <input type="text" placeholder='Saisissez une ville' autoComplete="off" value={inputCity} onChange={(e) => setInputCity(e.target.value)} />
              {selectGeoOpen && inputCity.length < 3 && cityList.length > 0 &&
                <div className="options">
                  <div className="cityList">
                    {cityList.map((city, key) => {
                      return <p key={key} className='cityLabel'>{city} <img src="/exitCross.svg" alt="exit" onClick={() => removeCity(key)} /></p>
                    })}
                  </div>
                  <div className="rayon">
                    <p>Rayon</p>
                  </div>
                  <button onClick={() => setSelectGeoOpen(false)}>Valider</button>
                </div>
              }
              {inputCity.length > 2 && 
                <div className="autocompletion">
                  {dataCities.map((city, key) => {         
                    if(city.name.toLowerCase().startsWith(inputCity.toLowerCase())) {
                      return (
                        <p className="option" key={key} onClick={() => {setCityList([...cityList, `${city.name} (${city.departement})`]); setInputCity(''); setSelectGeoOpen(true)}}>{city.name} ({city.departement})</p>
                      )
                    }
                  })}
                </div>
              }
            </div>
          </div>
          <div className="filter">
            <p className="label">Mode de livraison</p>
            <div className="select selectDelivery">
              <p>{delivery[deliverySelected]}</p>
              <img src="/chevronLeftS.svg" alt="arrow" className={selectDeliveryOpen ? 'imageOpen' : ''} onClick={() => setSelectDeliveryOpen(!selectDeliveryOpen)} />
              {selectDeliveryOpen && 
                <div className="options">
                  {delivery.map((option, key) => {
                    if(option !== delivery[deliverySelected])
                    return (
                      <p className="option" key={key} onClick={() => {setDeliverySelected(key);setSelectDeliveryOpen(false)}}>{option}</p>
                    )
                  })}
                </div>
              }
            </div>
          </div>
          <div className="filter">
            <p className="label">Trier par</p>
            <div className="select selectFilter">
              <p>{filters[filterSelected]}</p>
              <img src="/chevronLeftS.svg" alt="arrow" className={selectFilterOpen ? 'imageOpen' : ''} onClick={() => setSelectFilterOpen(!selectFilterOpen)}/>
              {selectFilterOpen && 
                <div className="options">
                  {filters.map((option, key) => {
                    if(option !== filters[filterSelected])
                    return (
                      <p className="option" key={key} onClick={() => {setFilterSelected(key);setSelectFilterOpen(false)}}>{option}</p>
                    )
                  })}
                </div>
              }
            </div>
          </div>
          <div className="filter filterDate">            
            <p className="label">Date de location</p>
            <DateRangePicker
              hideKeyboardShortcutsPanel
              navPrev={<img src="/chevronLeftS.svg" alt="" style={{left: "10px"}} />}
              navNext={<img src="/chevronRightS.svg" alt="" style={{right: "10px"}}/>}
              firstDayOfWeek={1}
              noBorder
              customInputIcon={<img src="/calendar.svg" alt=""/>}
              customArrowIcon={<img src="/lineSpace.svg" alt=""/>}
              startDatePlaceholderText={'Du'}
              endDatePlaceholderText={'au'}
              startDate={startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => {setStartDate(startDate); setEndDate(endDate);}} // PropTypes.func.isRequired,
              focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
              minimumNights={3}
              numberOfMonths={windowWidth > 700 ? 2 : 1}
            />
          </div>
        </div>
        <div className="activeFilters">
          <div className="labels">
            {tomeInitial && tomeFinal && 
              <div className="label">
                Tomes {tomeInitial} à {tomeFinal} <img src="/exitCross.svg" alt="exit" onClick={() => {setTomeInitial(); setTomeFinal()}} />
              </div>
            }
            {cityList.map((city, key) => {
              return (
                <div className="label" key={key}>
                  {city} <img src="/exitCross.svg" alt="exit" onClick={() => removeCity(key)} />
                </div>
              )
            })               
            }
            {startDate && endDate && 
              <div className="label">
                {moment.format(startDate)} - {new Date(endDate).toString()} <img src="/exitCross.svg" alt="exit" onClick={() => {setTomeInitial(); setTomeFinal()}} />
              </div>
            }
          </div>
          <button className="resetFilters">
            Supprimer les filtres
          </button>
        </div>
      </div>
      <ProductsList products={productList} saveDate={saveDate}/>
    </div>
  );
};

export default MangaPage;

export async function getStaticProps({ params }) {
  const manga = await getManga(params.id);  
  const products = await getProductsByTitle(manga.title);
  return { props: { manga, products } };
}

export async function getStaticPaths() {
  const mangas = await getMangaCollection();
  return {
    paths: mangas.map((_manga) => {
      return {
        params: { id: _manga.id.toString() },
      };
    }),
    fallback: true,
  };
}

