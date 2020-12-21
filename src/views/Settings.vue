<template>
  <div class="settings">
    <div>
      <div>
        <div @click="toHome()" class="toggle"><i class="material-icons toggle-icon">clear</i></div>
        <table v-if="cities.length">
          <tbody>
              <draggable>
                  <tr v-for="city of cities" :key="city">
                    <td class="col1"><i class="material-icons drag custom-icon">drag_handle</i></td>
                    <td class="left col2">{{city | capitalize}}</td>
                    <td class="col3" @click="deleteCity(city)"><i class="material-icons custom-icon delete-icon">delete</i></td>
                  </tr>
              </draggable>
          </tbody>
        </table>
        <form @submit.prevent="getWeather()">
          <div class="search-box">
            <input
                    type="text"
                    class="search-bar"
                    placeholder="Add location..."
                    v-model="city"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import draggable from 'vuedraggable'

@Component({
    components: {
        draggable
    },
    filters: {
        capitalize(value: string) {
            return value.toUpperCase()
        }
    }
})
export default class Settings extends Vue {
  private city = '';
  public toHome(): void {
    this.$router.push("/");
  }

  public getWeather(): void {
    this.$store.dispatch('addCity', this.city)
    this.$store.dispatch('getWeather', this.city)
    this.city = ''
  }

  public deleteCity(city: string): void{
    this.$store.dispatch('deleteCity', city)
  }

  get cities() {
      return this.$store.getters.cities;
  }
}

</script>

<style scoped lang="scss">
    .settings{
      background-image: url('../assets/landscape.jpg');
      background-size: cover;
      background-position: bottom;
      transition: 0.4s;
      height: 100vh;
      box-sizing: border-box;

        .toggle{
          font-size: 30px;
          display: flex;
          justify-content: flex-end;
          padding: 30px;
        }

        i.toggle-icon{
          font-size: 40px;
        }

        table{
          width: 100vw;
          display: table;
        }

        tr{
          background-color: whitesmoke;
          border: none;
          display: flex;
          margin-bottom: 15px;
          border-radius: 5px;
          padding: 10px;
          font-size: 18px;
          line-height: 30px;
        }

        .col1 {width: 20%;}
        .col2 {width: 60%;}
        .col3 {width: 20%;}

        .custom-icon{
          font-size: 28px;
          color: #2e112d;
        }

      .search-box {
        width: 100%;
        margin-bottom: 30px;

        .search-bar {
          display: block;
          width: 100%;
          padding: 15px;

          color: #313131;
          font-size: 20px;
          appearance: none;
          border:none;
          outline: none;
          background: none;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 0px 16px 0px 16px;
          transition: 0.4s;

          :focus {
            box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
            background-color: rgba(255, 255, 255, 0.75);
            border-radius: 16px 0px 16px 0px;
          }
        }
      }
    }
</style>
