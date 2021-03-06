import React, {useEffect, useState} from 'react'; 
import MovieRow from './components/MovieRow'
import Tmdb from './Tmdb';
import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {                                                   //o useEffect é quando a tela for carregada ela executa a função.
    const loadAll = async () => {
      //get all movies list.
      let list = await Tmdb.getHomeList();
      setMovieList(list)
    }
    loadAll();
  }, [])



  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}

      </section>
    </div>
  );
}
