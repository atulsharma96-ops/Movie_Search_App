import React, { useEffect, useState } from 'react'
import "./MoviApp.css"
import DataCard from './DataCard'


const MoviApp = () => {
  const [movies, setMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popularity.desc")
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState("")

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSortBy = (e) => {
    setSortBy(e.target.value)
  }

  const handleSelectedGenre = (e) => {
    setSelectedGenre(e.target.value)
  }
  // console.log(sortBy)

  useEffect(() => {
    const fetchGenre = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=31871111bca292d0f5591a4a823acf53`
      )
      const data = await response.json()
      setGenres(data.genres)
    }
    fetchGenre()
  }, [])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=31871111bca292d0f5591a4a823acf53&sort_by=${sortBy}&page=1&with_genres=${selectedGenre}&query=${searchQuery}`
      )
      const data = await response.json()
      setMovies(data.results)
      // console.log(data.results)
    }
    fetchMovies()
  }, [sortBy, selectedGenre, searchQuery])

  const handleSearchSubmit = async () => {
    if(searchQuery.trim() === ""){
      alert("Input Required")
      return
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=31871111bca292d0f5591a4a823acf53&query=${searchQuery}`
    )
    const data = await response.json()
    setMovies(data.results)
    // console.log(data.results)
    // console.log(movies)
  }
  // console.log(movies)

  return (
    <div className='p-5'>
      <div >
        <h1 className=' text-3xl lg:text-5xl text-white text-center font-bold'>Movie Explorer</h1>
        <div className='flex justify-center mt-10'>
          <div className='flex  lg:gap-10 gap-5 my-0'>
            <input type="text"
              name=""
              id=""
              placeholder='Movie Search '
              className='px-2 lg:w-96 rounded-xl focus:outline-none border'
              value={searchQuery}
              onChange={handleSearchQuery}
            />
            <button className='bg-white px-2 lg:px-3 py-1 rounded-md text-black hover:bg-slate-200 transition-all duration-300' onClick={handleSearchSubmit}>Search</button>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10 lg:gap-10 gap-2'>
        <div>
          <label className='lg:font-bold text-white' htmlFor="sortby">Sort By : </label>
          <select className='focus:outline-none rounded-md lg:px-3 lg:py-1' name="" id="sortby" value={sortBy} onChange={handleSortBy}>
            <option value="popularity.desc">popularity Descending</option>
            <option value="popularity.asc">popularity Ascending</option>
            <option value="vote-average.desc">Rating Descending</option>
            <option value="vote-average.asc">Rating Ascending</option>
            <option value="realease_date.desc">Realease Date Descending</option>
            <option value="realease_date.asc">Realease Date Ascending</option>
          </select>
        </div>
        <div>
          <label className='lg:font-bold text-white' htmlFor="genre">Genre : </label>
          <select className='focus:outline-none rounded-md lg:px-3 lg:py-1' id="genre" value={selectedGenre} onChange={handleSelectedGenre}>
            <option value="">All Genres</option>
            {genres.map((genre) => {
              return (<option key={genre.id} value={genre.id}>{genre.name}</option>)
            })}
          </select>
        </div>
      </div>
      <div className='flex flex-wrap gap-5 mt-10'>
        {movies.map((movie) => {
          return (<DataCard
            key={movie.id}
            id={movie.id}
            imgSrc={movie.poster_path}
            altTitle={movie.title}
            moviTitle={movie.title}
            rating={movie.vote_average}
            description={movie.overview}
          />)
        })}
      </div>
    </div>
  )
}

export default MoviApp
