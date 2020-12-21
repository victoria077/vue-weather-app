<template>
  <div id="app">
    <main>
      <div @click="toSettings()" class="toggle"><i class="material-icons custom-icon">settings</i></div>
      <div class="weather-wrap"  v-for="card of cards" :key="card.id">
        <div class="location-box">
          <div class="location">{{ card.name }}, {{ card.sys.country }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(card.main.temp) }}°c</div>
          <div class="weather">{{ card.weather[0].main }}</div>
        </div>
      </div>

    </main>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import axios from "axios";

  @Component({
    created(){
      if(localStorage.getItem('cards') === null){
      this.$getLocation({})
              .then((coordinates: any): void => {
                axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${coordinates.lat.toFixed(1)}&lon=${coordinates.lng.toFixed(1)}&cnt=1&appid=07b1b55e77723024c22b03a635c3c661&units=metric`)
                        .then((resp: any): void => {
                          const currentLocation = {
                            name: resp.data.list[0].name,
                            sys: {
                              country: resp.data.list[0].sys.country
                            },
                            main: {
                              temp: resp.data.list[0].main.temp
                            },
                            weather: [{
                              main: resp.data.list[0].weather[0].main
                            }]
                          }
                          this.$store.dispatch('getWeather', currentLocation)
                          this.$store.dispatch('addCity', resp.data.list[0].name)
                        })
              });
      }
    }
  })
  export default class Cards extends Vue {
    get cards() {
      return this.$store.getters.cards
    }


    public toSettings(): void {
      if (this.$route.path != '/settings') {
        this.$router.push("/settings");
      }
    }
  }
</script>

<style scoped lang="scss">
  main {
    min-height: 100vh;
    padding: 25px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));

    .toggle{
      display: flex;
      justify-content: flex-end;
    }

    i.custom-icon{
      font-size: 40px;
    }

    .location-box .location {
      color: #FFF;
      font-size: 48px;
      font-weight: 500;
      text-align: center;
      text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    }

    .weather-wrap{
      margin: 20px 0;

      .weather-box {
        text-align: center;

        .temp {
          display: inline-block;
          padding: 10px 25px;
          color: #FFF;
          font-size: 102px;
          font-weight: 900;
          text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
          background-color:rgba(255, 255, 255, 0.25);
          border-radius: 16px;
          margin: 30px 0px;
          box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
        }

        .weather {
          color: #FFF;
          font-size: 32px;
          font-weight: 700;
          font-style: italic;
          text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
</style>

