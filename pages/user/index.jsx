import MainGrid from '../../components/common/MainGrid/MainGrid';
import Select from '../../components/common/Select/Select';
import TextInput from '../../components/common/TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import { getUsers } from '../../redux/actions/user/getUsers';
import Modal from '../../components/common/Modal/Modal';
import ModalUser from '../../components/pages/user/ModalUser/ModalUser';
import { setShowModalUser } from '../../redux/slices/appSlice';
import { getFirms } from '../../redux/actions/firm/getFirms';
import { getRoles } from '../../redux/actions/role/getRoles';
import { setEditUser, setPage } from '../../redux/slices/userSlice';
import { deleteUser } from '../../redux/actions/user/deleteUser';
import { deleteUsers } from '../../redux/actions/user/deleteUsers';
const UserPage = () => {
  const [viewData, setViewData] = useState(null);
  const [viewRoles, setViewRoles] = useState(null);
  const [viewFirms, setViewFirms] = useState(null);
  const [searchTable, setSearchTable] = useState(null);
  const [head, setHead] = useState(null);
  const {
    getUsers: { data: usersData, loading: usersLoading, pages, page },
    deleteUser: { loading: deleteLoading, data: deleteData },
    deleteUsers: { loading: deleteManyLoading, data: deleteManyData },
  } = useSelector((state) => state.user);
  const {
    getRoles: { data: roles },
  } = useSelector((state) => state.role);
  const {
    getFirms: { data: firms },
  } = useSelector((state) => state.firm);

  const dispath = useDispatch();
  const [selectRows, setSelectRows] = useState([]);
  useEffect(() => {
    dispath(getFirms());
    dispath(getRoles());
    dispath(getUsers());
  }, []);

  useEffect(() => {
    if (deleteData && !deleteLoading) {
      dispath(getUsers());
    }
  }, [deleteData, deleteLoading]);
  useEffect(() => {
    if (deleteManyData && !deleteManyLoading) {
      dispath(getUsers());
    }
  }, [deleteManyData, deleteManyLoading]);

  useEffect(() => {
    if (firms) {
      setViewFirms(firms.map((firm) => ({ value: firm.U_ID, label: firm.S_NAME })));
    }
  }, [firms]);

  useEffect(() => {
    if (roles && !viewRoles) {
      setViewRoles([{ label: 'Роль', value: '' }, ...roles.map((role) => ({ value: role.U_ROLE__ID, label: role?.S_ROLE_NAME }))]);
    }
    if (roles && usersData) {
      const view = usersData.map((user) => {
        const findRole = roles.find((role) => role.U_ROLE__ID === user.U_ROLE_ID);
        return { ...user, U_ROLE_ID: findRole?.S_ROLE_NAME };
      });
      setViewData(view);
    }
  }, [roles, usersData]);

  useEffect(() => {
    if (viewRoles) {
      setHead({
        S_LOGIN: {
          type: 'input',
          title: 'Логин',
        },
        S_EMAIL: {
          type: 'input',
          title: 'Почта',
        },
        S_FIRSTNAME: {
          type: 'input',
          title: 'Имя',
        },
        U_ROLE_ID: {
          width: '170px',
          type: 'select',
          title: 'Роль',
          list: viewRoles,
        },
      });
    }
  }, [viewRoles]);

  useEffect(() => {
    if (searchTable) {
      dispath(getUsers({ ...searchTable, page: 1 }));
    }
  }, [searchTable]);

  return (
    <>
      <MainGrid
        head={head}
        data={viewData}
        counted
        selectBy="U_USER_ID"
        setSelectRows={setSelectRows}
        search={searchTable}
        setSearch={setSearchTable}
        selectRows={selectRows}
        loading={usersLoading || deleteLoading || deleteManyLoading}
        selectable
        pages={pages}
        currentPage={page}
        onAdd={() => {
          dispath(setEditUser(null));
          dispath(setShowModalUser(true));
        }}
        onEdit={(val) => {
          dispath(setEditUser(val));
          dispath(setShowModalUser(true));
        }}
        onDeleteMany={(ids) => dispath(deleteUsers(ids))}
        onDelete={(val) => dispath(deleteUser({ deleteId: val?.U_USER_ID }))}
        onPageClick={(page) => dispath(getUsers({ ...searchTable, page }))}
      />
    </>
  );
};

export default UserPage;
