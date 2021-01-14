import {Suspense, useState} from 'react';
import EditButton from './EditButton.client';
import NoteList from './NoteList.server';
import NoteListSkeleton from './NoteListSkeleton';
import SearchField from './SearchField.client';

export default function NoteManager({searchText}) {
  const [notes, setNotes] = useState([]);

  return (
    <>
      <section className="sidebar-menu" role="menubar">
        <SearchField />
        <EditButton noteId={null}>New</EditButton>
      </section>
      <nav>
        <Suspense fallback={<NoteListSkeleton />}>
          <NoteList notes={notes} searchText={searchText} />
        </Suspense>
      </nav>
    </>
  );
}
