/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from "react";
import { getProductsPublished, getMangaCollection } from "../utils/api";
import CardProductTrending from "../components/CardProductTrending";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Mousewheel } from 'swiper';

SwiperCore.use([Navigation, Mousewheel])


const TrendingPage = ({ products }) => {


  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading products...</div>;
  }

  const { session } = useSelector((state) => state);
  const [mangaCollection, setMangaCollection] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [topShonen, setTopShonen] = useState([]);
  const [topSeinen, setTopSeinen] = useState([]);

  const [windowWidth, setWindowWidth] = useState(1281);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSize);
  }, []);

  const updateSize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    getMangaList()
  }, [session])

  const getMangaList = () => {
    getMangaCollection(session).then(resp => {
      if (!resp.error) {
        setupTopManga(resp);
        setupCategory(resp, 'shonen');
        setupCategory(resp, 'seinen');
      }
    }).catch(()=> console.log('error'))
  }

  const setupTopManga = (data) => {
    const arrayBooked = [];
    data.forEach((manga) => {
      let booked = 0;
      manga.products.forEach((product) => {
        booked += product.booked ? product.booked.length : 0;
      })
      arrayBooked.push({booked: booked, manga: manga.title})
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
    setTopManga(newMangaCollection)
  }

  const setupCategory = (data, category) => {
    const arrayBooked = [];
    data.forEach((manga) => {
      let goodCategory = false;
      manga.categories.forEach((_category) => {
        console.log(_category)
        if(_category.slug === category) {
          goodCategory = true;
        }
      })
      if(goodCategory) {
        let booked = 0;
        manga.products.forEach((product) => {
          booked += product.booked ? product.booked.length : 0;
        })
        arrayBooked.push({booked: booked, manga: manga.title});
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
    if(category === 'shonen') {
      setTopShonen(newMangaCollection);
    }
    if(category === 'seinen') {
      setTopSeinen(newMangaCollection);
    }
  }

  return (
    <div className="trendingPage">
      <Head>
        <title>Tendance </title>
      </Head>
      <h1 className="h1">Les tops de nos lecteurs</h1>
      <div className="top">
        <h3>Top des lecteurs</h3>
        <div className="slider">
          <Swiper
            freeMode={true}
            mousewheel={{invert:true, forceToAxis: true}}
            navigation={{              
              nextEl: '.rightArrowTop',
              prevEl: '.leftArrowTop',
            }}
            hiddenClass
            disabledClass
            spaceBetween={windowWidth > 700 ? 30 : 10}
            slidesPerView={windowWidth > 700 ? 5 : 2.4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {topManga.map((manga, key) => {
              return (
                <SwiperSlide>
                  <CardProductTrending mangaCollection={manga} key={key} position={key + 1} />
                </SwiperSlide>
              )
            })}
          </Swiper>
          {windowWidth > 700 &&
            <img src="/trendingArrow.svg" alt="leftArrow" className="arrow leftArrow leftArrowTop" />
          }
          {windowWidth > 700 &&
            <img src="/trendingArrow.svg" alt="rightArrow" className="arrow rightArrow rightArrowTop" />
          }
        </div>
      </div>

      <div className="top">
        <h3>Top des shonen</h3>
        <div className="slider">
          <Swiper
            freeMode={true}
            mousewheel={{invert:true, forceToAxis: true}}
            navigation={{              
              nextEl: '.rightArrowShonen',
              prevEl: '.leftArrowShonen',
            }}
            hiddenClass
            disabledClass
            spaceBetween={windowWidth > 700 ? 30 : 10}
            slidesPerView={windowWidth > 700 ? 5 : 2.4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {topShonen.map((manga, key) => {
              return (
                <SwiperSlide>
                  <CardProductTrending mangaCollection={manga} key={key} position={key + 1} />
                </SwiperSlide>
              )
            })}
          </Swiper>
          {windowWidth > 700 &&
            <img src="/trendingArrow.svg" alt="leftArrow" className="arrow leftArrow leftArrowShonen" />
          }
          {windowWidth > 700 &&
            <img src="/trendingArrow.svg" alt="rightArrow" className="arrow rightArrow rightArrowShonen" />
          }
        </div>
      </div>

      <div className="top">
        <h3>Top des seinen</h3>
        <div className="slider">
          <Swiper
            freeMode={true}
            mousewheel={{invert:true, forceToAxis: true}}
            navigation={{              
              nextEl: '.rightArrowSeinen',
              prevEl: '.leftArrowSeinen',
            }}
            hiddenClass
            disabledClass
            spaceBetween={windowWidth > 700 ? 30 : 10}
            slidesPerView={windowWidth > 700 ? 5 : 2.4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {topSeinen.map((manga, key) => {
              return (
                <SwiperSlide>
                  <CardProductTrending mangaCollection={manga} key={key} position={key + 1} />
                </SwiperSlide>
              )
            })}
          </Swiper>
          {windowWidth > 700 &&
            <img src="/trendingArrow.svg" alt="leftArrow" className="arrow leftArrow leftArrowSeinen" />
          }
          {windowWidth > 700 &&
            <img src="/trendingArrow.svg" alt="rightArrow" className="arrow rightArrow rightArrowSeinen" />
          }
        </div>
      </div>
      
    </div>
  );
};

export default TrendingPage;

export async function getStaticProps() {
  const products = await getProductsPublished();
  return { props: { products } };
}
