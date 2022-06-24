import React, { useEffect, useState } from 'react';
import { createFirm } from '../../../../redux/actions/firm/createFirm';
import { updateFirm } from '../../../../redux/actions/firm/updateFirm';
import { setShowModalFirm } from '../../../../redux/slices/appSlice';
import { setEditFirm } from '../../../../redux/slices/firmSlice';
import styles from './ModalFirma.module.scss';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../common/Modal/Modal';
import TextInput from '../../../common/TextInput/TextInput';
import Loading from '../../../common/Loading/Loading';
import { getFirms } from '../../../../redux/actions/firm/getFirms';
const ModalFirma = () => {
  const dispatch = useDispatch();
  const { modalFirm } = useSelector((state) => state.app);

  const {
    createFirm: { data: createData, loading: createLoading },
    updateFirm: { data: updateData, loading: updateLoading },
    editFirm,
  } = useSelector((state) => state.firm);
  const defaultValues = {
    name: '',
  };
  const firmForm = useForm({ defaultValues });
  const onSubmit = (data) => {
    if (editFirm) {
      dispatch(updateFirm({ ...data, id: editFirm.U_ID }));
    } else {
      dispatch(createFirm({ ...data }));
    }
  };
  useEffect(() => {
    if (updateData && !updateLoading) {
      dispatch(setShowModalFirm(false));
      dispatch(getFirms());
      dispatch(setEditFirm(null));
      firmForm.reset();
    }
  }, [updateData, updateLoading]);

  useEffect(() => {
    if (createData && !createLoading) {
      dispatch(setShowModalFirm(false));
      dispatch(getFirms());
      firmForm.reset();
    }
  }, [createData, createLoading]);

  useEffect(() => {
    if (editFirm) {
      firmForm.setValue('name', editFirm?.S_NAME);
    } else {
      firmForm.reset();
    }
  }, [editFirm]);
  const [viewRoles, setViewRoles] = useState();

  const watchRole = firmForm.watch('role');
  return (
    <Modal title={!editFirm ? 'Добавить компанию' : `Редактировать компанию "${editFirm?.S_NAME}"`} onClose={() => dispatch(setShowModalFirm(false))} show={modalFirm}>
      <div class="modal-body">
        <TextInput name="name" form={firmForm} label="Наименование" noSpace rules={{ required: true }} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => dispatch(setShowModalFirm(false))}>
          Закрыть
        </button>

        <button type="button" class="btn btn-primary" onClick={firmForm.handleSubmit(onSubmit)}>
          {editFirm ? 'Сохранить' : 'Добавить'}
        </button>
      </div>
      {(createLoading || updateLoading) && <Loading />}
    </Modal>
  );
};

export default ModalFirma;
