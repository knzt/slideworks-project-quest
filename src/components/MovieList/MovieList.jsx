import { useEffect, useState } from 'react';
import './MovieList.css';
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

  const sortedMovies = sortOption ? sortMovies() : movies;

  function handleSortOptionChange(event) {
    setSortOption(event.target.value);
  }

  function handleSortOrderChange(event) {
    const sortOrder = event.target.value;
    setSortOrder(sortOrder);
  }

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
      <div className='pagination'>
        <button
        className='paginationArrow'
        onClick={() => handlePageClick(page - 1)} disabled={page === 1}>
          <FaChevronLeft/>
        </button>
        {[1, 2, 3, 4, 5, 6].map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageClick(pageNumber)} className={pageNumber === page ? 'active' : ''}>{pageNumber}</button>
        ))}
        <button
        className='paginationArrow'
        onClick={() => handlePageClick(page + 1)}>
          <FaChevronRight/>
        </button>
      </div>
    </div>
  );
}

export default MovieList;
