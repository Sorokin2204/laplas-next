import Accordion from '../../components/common/Accordion/Accordion';
import CardToggle from '../../components/common/CardToggle/CardToggle';
import Select from '../../components/common/Select/Select';
import TextInput from '../../components/common/TextInput/TextInput';
import AccordionAllSpecs from '../../components/pages/upload/AccordionAllSpecs/AccordionAllSpecs';
import AccordionCommon from '../../components/pages/upload/AccordionCommon/AccordionCommon';
import AccordionFeatures from '../../components/pages/upload/AccordionFeatures/AccordionFeatures';
import AccordionInfographic from '../../components/pages/upload/AccordionInfographic/AccordionInfographic';
import AccordionLinks from '../../components/pages/upload/AccordionLinks/AccordionLinks';
import AccordionManufactures from '../../components/pages/upload/AccordionManufactures/AccordionManufactures';
import AccordionPhotoVideo from '../../components/pages/upload/AccordionPhotoVideo/AccordionPhotoVideo';
import AccordionPromotion from '../../components/pages/upload/AccordionPromotion/AccordionPromotion';

function Update() {
  const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

  return (
    <>
      <div class="card mb-3">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize fw-normal">
            {/* <i class="header-icon lnr-pencil me-3 text-muted opacity-6"></i> */}
            Редактирование товара
          </div>
          <div class="btn-actions-pane-right actions-icon-btn">
            <button class=" me-2 btn-icon btn btn-primary">
              <i class="lnr-arrow-left btn-icon-wrapper"></i>Назад
            </button>
            <button class=" me-2 btn-icon btn btn-primary">
              <i class="lnr-history btn-icon-wrapper"></i>Восстановить
            </button>
            <button class=" me-2 btn-icon btn btn-primary">
              <i class="lnr-arrow-right btn-icon-wrapper"></i>Отправить
            </button>

            <button type="button" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown" class=" me-2 dropdown-toggle btn btn-primary">
              <i class="me-2 lnr-printer btn-icon-wrapper text-white"></i>
              Печать
            </button>
            <button type="button" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown" class=" me-2 dropdown-toggle btn btn-primary">
              Еще
            </button>
          </div>
        </div>
        <div class="card-body">
          <TextInput label={'Название'} placeholder="Введите название" />
          <TextInput label={'Код товара'} placeholder="Введите код товара" />
          <Select placeholder={'Выберите'} isMulti options={colourOptions} creatable label={'Теги'} />
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              // gridTemplateColumns: '1fr 1fr',
              gridGap: '1rem',
            }}
            class="mt-3">
            {' '}
            <CardToggle title="Яндекс Маркет FBS Эвилент Маркет" img="/img/yandex.png" />
            <CardToggle title="Ozon Эвилент Маркет" img="/img/ozon.png" />
            <CardToggle title="Ozon Эвилент" img="/img/ozon.png" />
            <CardToggle title="Wildberries Эвилент Маркет" img="/img/wildbires.png" /> <CardToggle title="Wildberries Эвилент" img="/img/wildbires.png" />
          </div>
          <Select label="Категория" />

          <div class="form-label mt-3">Модификации</div>
          <table class="mb-0 table table-borderless">
            <thead>
              <tr>
                <th>Код</th>
                <th>Название</th>
                <th style={{ textAlign: 'center' }}>
                  <button class=" btn-sm btn-icon btn-icon-only  btn btn-primary" style={{ width: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px', borderRadius: '50%', margin: '0 auto !important' }}>
                    <i
                      class=" lnr-plus-circle btn-icon-wrapper"
                      style={{
                        transform: 'translate(3.1%, -5.4%);',
                      }}></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" class="form-control" style={{ fontSize: '16px' }} />
                </td>
                <td>
                  <input type="text" class="form-control" style={{ fontSize: '16px' }} />
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button class=" btn-icon btn-icon-only btn btn-link  ">
                    <i class="text-danger lnr-trash btn-icon-wrapper "></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <input type="text" class="form-control" style={{ fontSize: '16px' }} />
                </td>
                <td>
                  {' '}
                  <input type="text" class="form-control" style={{ fontSize: '16px' }} />
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button class=" btn-icon btn-icon-only btn btn-link  ">
                    <i class="text-danger lnr-trash btn-icon-wrapper "></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  {' '}
                  <input type="text" class="form-control" style={{ fontSize: '16px' }} />
                </td>
                <td>
                  {' '}
                  <input type="text" class="form-control" style={{ fontSize: '16px' }} />
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button class=" btn-icon btn-icon-only btn btn-link  ">
                    <i class="text-danger lnr-trash btn-icon-wrapper "></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <AccordionLinks />
          <AccordionCommon />
          <AccordionPhotoVideo />
          <AccordionInfographic />
          <AccordionPromotion />
          <AccordionFeatures />
          <AccordionManufactures />
          <AccordionAllSpecs />
        </div>
      </div>
    </>
  );
}
export default Update;
