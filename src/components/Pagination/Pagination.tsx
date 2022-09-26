import ReactPaginate from 'react-paginate';
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Hero } from '../../types/Hero';
import './style.css';
import { HeroCard } from '../HeroCard';

interface PaginationProps {
  data: Hero[];
}

const Pagination: React.FC<PaginationProps> = ({ data }) => {
  const [currentItems, setCurrentItems] = useState<null | Hero[]>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    window.scrollTo({ top: 65, left: 0, behavior: 'smooth' });
    setItemOffset(newOffset);
  };

  if (currentItems === null) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {currentItems.map((hero: Hero) => {
          return <HeroCard key={hero.id} hero={hero} team={false} />;
        })}
      </Box>
      <ReactPaginate
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='< previous'
        containerClassName='pagination'
        pageLinkClassName='page-num'
        nextLinkClassName='page-num'
        previousLinkClassName='page-num'
        activeLinkClassName='active'
      />
    </Box>
  );
};

export default Pagination;
