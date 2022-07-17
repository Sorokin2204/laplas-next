import React from 'react';
import styles from './DragGroupSpecs.module.scss';
import { useFieldArray } from 'react-hook-form';
import DragGroup from '../../../common/DragGroup/DragGroup';
import DragItem from '../../../common/DragItem/DragItem';
import { v4 as uuidv4 } from 'uuid';
import { typeFieldList } from '../CategoryAddEdit/CategoryAddEdit';
const DragGroupSpecs = ({ index, form, catGroup, fieldArray, listName, subListName, defaultAddRow, isEditable, isDeletable, newRow }) => {
  const {
    fields: catItems,
    append,
    update,
  } = useFieldArray({
    control: form.control,
    name: `categorySpecs[${index}].list`,
  });
  return (
    <>
      <DragGroup
        onDelete={(e) => {
          e.stopPropagation();
          fieldArray.update(index, { ...catGroup, deleted: true });
        }}
        isEditable={isEditable}
        isDeletable={isDeletable}
        form={form}
        name={`categorySpecs[${index}].title`}
        title={catGroup?.title}
        key={catGroup?.ID}
        onAddNew={() =>
          append({
            order: 0,
            ID: uuidv4(),
            specs: newRow(index, catItems.length),
          })
        }>
        {catItems?.map((catSpec, indexx) => !catSpec?.deleted && <DragItem form={form} list={catSpec?.specs} key={catSpec?.ID} onDelete={() => update(indexx, { ID: catSpec?.ID, deleted: true })} />)}
      </DragGroup>
    </>
  );
};

export default DragGroupSpecs;
