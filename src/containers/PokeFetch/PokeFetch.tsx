import React from 'react';
import PokeTrans from './assets/pokeTrans.webm';
import './PokeFetch.scss';
import pokemon from './assets/pokemon';
 
export interface PokeFetchState {
    fetching: boolean,
    errorMsg: string,
    query: string;
    name: string;
    latestCry: string;
    legacyCry: string;
    frontImg: string;
    backImg: string;
}

export interface PokemonData {
    name: string;
    cries: PokemonCries;
    sprites: PokemonSprites;
}

export interface PokemonCries {
    latest: string;
    legacy: string;
}

export interface PokemonSprites {
    front_default: string;
    back_default: string;
}


class PokeFetch extends React.Component<PokeFetchState> {
  videoRef: React.RefObject<HTMLVideoElement> = React.createRef();
  resultsRef: React.RefObject<HTMLElement> = React.createRef();
  video!: HTMLVideoElement;
  resultsCont!: HTMLElement;
  pokeData: PokemonData | null = null;

  state = { 
    fetching: false,
    errorMsg: '\u00A0',
    query: '', 
    name: '',
    frontImg: '',
    backImg: '',
    latestCry: '', 
    legacyCry: '',
    video: this.videoRef.current,
    resultsCont: this.resultsRef.current,
  };

  componentDidMount(): void {
    const tvc = this.videoRef.current as HTMLVideoElement;
    this.video = tvc;
    this.resultsCont = this.resultsRef.current as HTMLElement; 
  }

  async fetchData(event: React.FormEvent<HTMLFormElement>) {
    //prevent page reload on submit
    event?.preventDefault();
    //stop function if already running
    if (this.state.fetching) {
      return;
    } 
    this.setState({
      fetching: true
    });
    //provide a placeholder in the error <p> element for consistency in element height when empty
    const errorElement = document.getElementById('error');
    if (errorElement !== null) {
      errorElement.innerHTML = '<br></br>';
    }
    // declare the query variable with type
    let query: string;
    //declare the event to check which button was pressed, and set correct query, fix spelling and set api url
    const et = event.target as HTMLFormElement;
    const RDM = et.id === 'customAsk' ? false : true;
    RDM === true ? query = pokemon[Math.floor(Math.random() * pokemon.length)] : query = et.customQuery.value;
    query = (query.replace(/\s+/g, '/')).toLowerCase();
    const url = 'https://pokeapi.co/api/v2/pokemon/' + query;
    try {
      if (query === '') {
        throw new Error('No valid query provided!');
      }

      const response = await fetch(url, {method:'GET'});
            
      if (!response.ok) {
        throw new Error(`Failed to fetch pokemon "${query}"`);
      }

      const data: PokemonData = await response.json();

      if (data === this.pokeData) {
        throw new Error('You\'re already looking at this pokemon!');
      }


      this.pokeData = data;

      await this.hideInfo();
      await this.showInfo();
            
      this.setState({
        fetching: false
      });
      console.info('Loaded succesfully!');
            

    } catch (error) {
      console.error(error);
      this.setState({
        errorMsg: `${error}`,
        fetching: false
      });
    }
  }

  async hideInfo() {
    try {
      if (!this.resultsCont.classList.contains('show')) {
        return;
      }
      this.video.currentTime = 0;
      this.video.play();
      this.video.style.display = 'block';

      await new Promise<void>(resolve => setTimeout(() => {
        this.resultsCont.classList.remove('show');
        this.resultsCont.classList.add('hide');
        this.video.pause();
        resolve();
      },1000));

      await new Promise<void>(resolve => setTimeout(() => {
        this.resultsCont.classList.remove('hide');
        this.video.style.display = 'none';
        resolve();
      }, 1000));
            
    } catch (error) {
      console.error(error);
    }
  }

  async showInfo() {
    try {
      if (this.pokeData) {
        this.setState({
          name: `This pokemon is named ${this.pokeData.name.charAt(0).toUpperCase()}${this.pokeData.name.slice(1)}.`,
          frontImg: `${this.pokeData.sprites.front_default}`,
          backImg: `${this.pokeData.sprites.back_default}`,
          latestCry: `${this.pokeData.cries.latest}`,
          legacyCry: `${this.pokeData.cries.legacy}`,
          errorMsg: '\u00A0'
        });
      }
      this.video.style.display = 'block';
      this.video.currentTime = 1;
      this.resultsCont.classList.add('show');

      await new Promise<void>(resolve => setTimeout(() => {
        this.video.play();
        resolve();
      }, 1000));

      await new Promise<void>(resolve => setTimeout(() => {
        this.video.style.display = 'none';
        resolve();
      }, 1000));

    } catch (error) {
      console.error(error);
    }
  }

  playFromURL = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let cry: string;
    if (event.target) {
      const et = event.target as HTMLButtonElement;
      et.id == 'latestBTN' ? cry = this.state.latestCry : cry = this.state.legacyCry;
      const audio = new Audio(cry);
      audio.play();
      et.disabled = true;
      audio.addEventListener('ended', function() {
        et.disabled = false;
        audio.remove();
      });

    }
  };

  render() { 
    return (
      <div id="pokefetch" className='pokeMainContainer'>
        <div className="pokefetch__appcontainer">
          <h1>Fetch a pokemon!</h1>

          <section id='queryContainer' className='queryContainer'>
            <form id='customAsk' className='pokeForm' onSubmit={(event) => this.fetchData(event)}>
              <input id='customQuery' type='text' placeholder='Pokemon name'></input>
              <button id='fetchCustom' type='submit'>Fetch!</button>
            </form>

            <form id='randomAsk' className='pokeForm' onSubmit={(event) => this.fetchData(event)}>
              <button id='fetchRdm' type='submit'>Randomize!</button>
            </form>
            <p id="errorMsg">
              {this.state.errorMsg}
            </p>
          </section>

          <section id='resultsContainer' className='resultsContainer hidden' ref={this.resultsRef}>

            <video ref={this.videoRef} id='anim' muted className='anim' src={PokeTrans} ></video>

            <p id="pokeName">
              {this.state.name}
            </p>
            <p id="pokeShowText">
                        This is how they look like!
            </p>

            <div className="pokeIMGcontainer">
              <img id="pokeIMGf" src={this.state.frontImg} alt="" className='pokeIMG'></img>
              <img id="pokeIMGb" src={this.state.backImg} alt="" className='pokeIMG' style={{ display: this.state.backImg === 'null' ? 'none' : 'inline' }}></img>
            </div>

            <p>
                    This is how they sound like!
            </p>

            <div id="audioContainer" className='audioContainer'>
              <button type="button" id="latestBTN" onClick={this.playFromURL}>Latest cry</button>

              <button type="button" id="legacyBTN" onClick={this.playFromURL} style={{ display: this.state.legacyCry === 'null' ? 'none' : 'flex' }}>Legacy cry</button>
            </div>

          </section>
        </div>
      </div>
    );
  }
}

export default PokeFetch;