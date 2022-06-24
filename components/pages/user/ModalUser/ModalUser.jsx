import React, { useEffect, useState } from 'react';
import Modal from '../../../common/Modal/Modal';
import styles from './ModalUser.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModalUser } from '../../../../redux/slices/appSlice';
import TextInput from '../../../common/TextInput/TextInput';
import { useForm } from 'react-hook-form';
import { createUser } from '../../../../redux/actions/user/createUser';
import Loading from '../../../common/Loading/Loading';
import { getUsers } from '../../../../redux/actions/user/getUsers';
import { updateUser } from '../../../../redux/actions/user/updateUser';
import { setEditUser } from '../../../../redux/slices/userSlice';
import Select from '../../../common/Select/Select';

const ModalUser = () => {
  const dispatch = useDispatch();
  const { modalUser } = useSelector((state) => state.app);
  const {
    getRoles: { data: roles },
  } = useSelector((state) => state.role);
  const {
    createUser: { data: createData, loading: createLoading },
    updateUser: { data: updateData, loading: updateLoading },
    editUser,
  } = useSelector((state) => state.user);
  const defaultValues = {
    login: '',
    fio: '',
    email: '',
    password: '',
    role: '',
  };
  const userForm = useForm({ defaultValues });
  const onSubmit = (data) => {
    if (editUser) {
      dispatch(updateUser({ ...data, role: data.role.value, id: editUser.U_USER_ID }));
    } else {
      dispatch(createUser({ ...data, role: data.role.value }));
    }
  };
  useEffect(() => {
    if (updateData && !updateLoading) {
      dispatch(setShowModalUser(false));
      dispatch(getUsers());
      dispatch(setEditUser(null));
      userForm.reset();
    }
  }, [updateData, updateLoading]);

  useEffect(() => {
    if (createData && !createLoading) {
      dispatch(setShowModalUser(false));
      dispatch(getUsers());
      userForm.reset();
    }
  }, [createData, createLoading]);

  useEffect(() => {
    if (editUser) {
      userForm.setValue('login', editUser?.S_LOGIN);
      userForm.setValue('fio', editUser?.S_FIRSTNAME);
      userForm.setValue('email', editUser?.S_EMAIL);
      userForm.setValue('password', editUser?.S_PASSWORD_HASH);
      userForm.setValue(
        'role',
        viewRoles?.find((viewRole) => viewRole.label === editUser?.U_ROLE_ID),
      );
    } else {
      userForm.reset();
    }
  }, [editUser]);
  const [viewRoles, setViewRoles] = useState();
  useEffect(() => {
    if (roles) {
      setViewRoles([...roles.map((role) => ({ value: role.U_ROLE__ID, label: role?.S_ROLE_NAME }))]);
    }
  }, [roles]);

  useEffect(() => {
    userForm.register('role', { required: true });
  }, []);

  const watchRole = userForm.watch('role');
  return (
    <Modal title={!editUser ? 'Добавить пользователя' : `Редактировать пользователя "${editUser?.S_LOGIN}"`} onClose={() => dispatch(setShowModalUser(false))} show={modalUser}>
      <div class="modal-body">
        <TextInput name="login" form={userForm} label="Логин" noSpace rules={{ required: true }} />
        <TextInput name="fio" form={userForm} label="ФИО" rules={{ required: true }} />
        <TextInput name="email" form={userForm} label="Почта" rules={{ required: true }} />
        <Select setValue={(val) => userForm.setValue('role', val)} label="Роль" options={viewRoles} value={watchRole} />
        <TextInput name="password" form={userForm} label="Пароль" rules={{ required: true }} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => dispatch(setShowModalUser(false))}>
          Закрыть
        </button>

        <button type="button" class="btn btn-primary" onClick={userForm.handleSubmit(onSubmit)}>
          {editUser ? 'Сохранить' : 'Добавить'}
        </button>
      </div>
      {(createLoading || updateLoading) && <Loading />}
    </Modal>
  );
};

export default ModalUser;
