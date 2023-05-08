import './MovieList.css';
import { useEffect, useState } from 'react';
// icons
import { FaStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
// styled-component
import { SpanContainer } from '../Span/styledSpan';

function MovieList() {
//   para listagem de filmes:
  const [movies, setMovies] = useState([]);
// para paginação:
  const [page, setPage] = useState(1);
// para escolher a ordem de exibição da lista:
  const [sortOption, setSortOption] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const sortedMovies = sortOption ? sortMovies() : movies;
  // para os botões de paginação
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, '...', 21]);


  useEffect(() => {
    // requere os dados da API
    async function fetchMovies() {
      try {
        const response = await fetch(`https://movies.slideworks.cc/movies?page=${page}&limit=12`);
        const data = await response.json();
        setMovies(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [page]);

  function sortMovies() {
    if (sortOption === "title") {
      return movies.sort((a, b) => (sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)));
    } else if (sortOption === "year") {
      return movies.sort((a, b) => (sortOrder === 'asc' ? a.year - b.year : b.year - a.year));
    } else if (sortOption === "rating") {
      return movies.sort((a, b) => (sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating));
    } else {
      return movies;
    }
  }

  function handleSortOptionChange(event) {
    setSortOption(event.target.value);
  }

  function handleSortOrderChange(event) {
    const sortOrder = event.target.value;
    setSortOrder(sortOrder);
  }

  useEffect(() => {
    // atualiza a lista de botões de paginação
    const newPageNumbers = [];
    if (page <= 3) {
      newPageNumbers.push(1, 2, 3);
    } else if (page >= 19) {
      newPageNumbers.push(19, 20, 21);
    } else {
      newPageNumbers.push(page - 1, page, page + 1);
    }
    setPageNumbers(newPageNumbers);
  }, [page]);

  function handlePageClick(newPage) {
    setPage(newPage);
  }

  return (
    <div className='movies'>
      <div className='sort-options'>
        <label htmlFor='sort'>Ordenar por:</label>
        <select id='sort' value={sortOption} onChange={handleSortOptionChange}>
          <option value=''>Selecione uma opção</option>
          <option value='title'>Título</option>
          <option value='year'>Lançamento</option>
          <option value='rating'>Avaliação</option>
        </select>
        <div className='sort-order'>
          <label htmlFor='order'>Ordem:</label>
          <select id='order' value={sortOrder} onChange={handleSortOrderChange}>
            <option value='asc'>Crescente</option>
            <option value='desc'>Decrescente</option>
          </select>
        </div>
      </div>
      <ul className='movies-list'>

      {sortedMovies.map((movie) => (
          <li key={movie.title} className='movie-item'>
            <div className='movie-container'>
              <img src={movie.image_url} alt={movie.title} />
              <h3>{movie.title}</h3>
              <span>Ano de lançamento: {movie.year}</span>
              <p>{movie.crew}</p>
              <SpanContainer><FaStar/> {movie.rating}/10</SpanContainer>
            </div>
          </li>
        ))}
      </ul>
      {/* pagination */}
      <div className='pagination'>
        <button
          className='paginationArrow'
          onClick={() => handlePageClick(page - 1)}
          disabled={page === 1}>
            <FaChevronLeft/>
        </button>

        {pageNumbers.map((pageNumber) => (
          <button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          className={pageNumber === page ? 'active' : ''} >
            {pageNumber}
          </button>
))}
        <button
        className= 'paginationArrow'
        onClick={() => handlePageClick(page + 1)}
        disabled={page === 21}>
          <FaChevronRight/>
        </button>
      </div>
    </div>
  );
}

export default MovieList;
