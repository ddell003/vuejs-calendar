<template>
    <div id="event-form" :class="{active: active}" :style="{top: top, left: left}">
        <h4> Add an Event</h4>
        <p class="">{{date.format('dddd, MMM Do')}}</p>
        <div class="text">
            <input v-focus type="text" v-model="description" placeholder="Football Practice" @keyup.enter="create">
        </div>
        <div class="buttons">
            <button @click="create">Create</button>
        </div>
        <button id="close-button" @click="close">&#10005</button>
    </div>
</template>

<script>
    export default{
        data(){
          return {
              description:'',
          }
        },
        computed:{
            top(){
                console.log('top');
                return `${this.$store.state.eventFormPosY}px`;
            },
            left(){
                return `${this.$store.state.eventFormPosX}px`;
            },
            active(){
                return this.$store.state.eventFormActive;
            },
            date(){
                return this.$store.state.eventFormDate;
            }
        },
        methods:{
            close(){
                this.$store.commit('eventFormActive', false);
            },
            create(){
                if(this.description.length > 0){
                    this.$store.dispatch('addEvent', this.description).then(response => {
                        this.close();
                        this.description = '';
                    });

                }

            }
        },
        directives:{
            focus:{
                update(el){
                    el.focus();
                }
            }
        }
    }
</script>