import React from 'react';
import ImageItem from '../../../common/ImageItem/ImageItem';
import ImageList from '../../../common/ImageList/ImageList';
import styles from './TabAllPhotos.module.scss';
const TabAllPhotos = () => {
  const images = [
    {
      title: 'Комплектация',
      name: 'comlekt',
      imageList: [
        { src: 'https://picsum.photos/id/1/200/300', name: 'img-1.png' },
        { src: 'https://picsum.photos/id/2/200/300', name: 'img-2.png' },

        { src: 'https://picsum.photos/id/3/200/300', name: 'img-3.png' },

        { src: 'https://picsum.photos/id/4/200/300', name: 'img-4.png' },

        { src: 'https://picsum.photos/id/5/200/300', name: 'img-5.png' },
      ],
    },
    {
      title: 'Упковка',
      name: 'comlekt',
      imageList: [
        { src: 'https://picsum.photos/id/1/200/300', name: 'img-1.png' },
        { src: 'https://picsum.photos/id/2/200/300', name: 'img-2.png' },

        { src: 'https://picsum.photos/id/3/200/300', name: 'img-3.png' },
      ],
    },
  ];
  return (
    <>
      <div className={'mt-3 ' + styles.selectBox}>
        <div class="form-label me-2 ">Модификация</div>
        <button type="button" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown" class="mb-2 me-2 dropdown-toggle btn btn-primary">
          Общие
        </button>
      </div>

      {images?.map((imgItem) => (
        <ImageList title={imgItem.title}>
          {imgItem.imageList.map((img) => (
            <ImageItem src={img?.src} name={img?.name} />
          ))}
        </ImageList>
      ))}
      <div className={'mt-3 ' + styles.btnBox}>
        <button class="mb-2 me-2 btn-icon btn btn-primary">
          <i class="lnr-plus-circle btn-icon-wrapper"></i>Добавить фото
        </button>
        <button class="mb-2 me-2 btn btn-outline-primary">
          <i class="mt-4 me-2 lnr-cloud-download btn-icon-wrapper" style={{ fontSize: '17px' }}></i>Скачать фото
        </button>
      </div>
    </>
  );
};

export default TabAllPhotos;
