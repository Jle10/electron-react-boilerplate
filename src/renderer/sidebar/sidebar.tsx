import React from 'react';
import * as S from './sidebar.styled';
import InputSearch from 'components/input-search/input-search';
import ModalCreateSnippet from './modal-create/modal-create';
import { Button } from 'rsuite';
import { useAtom } from 'jotai';
import { cloneSnippetAtom, openModalAtom } from 'atoms/atoms';

const Sidebar: React.FC = () => {
  const [, setOpenModal] = useAtom(openModalAtom);
  const [cloneSnippet, setCloneSnippet] = useAtom(cloneSnippetAtom);
  const handleOpen = () => {
    setCloneSnippet({ keyword: '', text: '' });
    setOpenModal(true);
  };
  return (
    <S.SideBar>
      <Button appearance="primary" onClick={handleOpen}>
        Create Snippet
      </Button>
      <InputSearch />
      <ModalCreateSnippet cloneSnippet={cloneSnippet} />
    </S.SideBar>
  );
};

export default Sidebar;