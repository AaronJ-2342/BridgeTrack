<script setup></script>

<template>
    <main>
        <div class="topNav">
            <a href="/studentPortal"><img class="topNavBtn" id="menuIcon" src="../assets/homeIcon.png" href="/"></a>
            <a class="topNavBtn" href="#"> Session Picker</a>
            <a class="topNavBtn" href="#"> Course Planner</a>
            <div class="dropDown">

                <button @click="toggleDropdown" id="dropDown" > User </button> <!-- user icon -->
                <div v-if="isOpen" class="dropDownCont">
                    <!-- add settings icon later -->
                    <a href="#"> Settings </a>
                    <!-- add the profile image icon -->
                    <a href="#"> Profile </a>
                    <a href="/"> sign out </a>
                </div>
            </div>

        </div>
    </main>
</template>

<script setup>
    import { ref } from 'vue'

    const isOpen = ref(false)

    const toggleDropdown = () => {
        isOpen.value = !isOpen.value
    }

</script>

<style scoped>

    .topNav {
        background-color: black;
        overflow: hidden;
    }

    .topNavBtn {
        float: left;
        color : rgb(114, 215, 248);
        text-align: center;
        padding: 25px 30px;
        text-decoration: none;
        font-size: 25px;
        margin: 10px 3px;
        border-radius: 5px;
        border: gray solid 2px;
    }

    .topNav a:hover {
        background-color: gray;
        color: rgb(114, 215, 248);
    }

    .topnav a.active { /* i forgot what active does ngl */
        background-color: red;
        color: white;
    }

    #menuIcon{
        display: block;
        /* height: 0.1px; possibly make this so it shows a little line at the top of the icon */
        background: rgb(114, 215, 248);
        margin: 5px 3px;
        border-radius: 5px;
        width: 2%;
    }

    #menuIcon:hover {
        background-color: gray;
        color: blue;
    }

    #dropDown{
        float: right;
        font-size: 20px;
        margin: 10px 10px;
        width: 100px;
        height: 80px;
        background-color: rgb(114, 215, 248);
        color: black;
        border-radius: 5px;
        border: gray solid 2px;
    }

    #dropDown:hover {
        background-color: gray;
        color: blue;
    }

    .dropDown {
        float: right;
        display: inline-block;
    }

    .dropDownCont {
        position: absolute;
        background-color: black;
        min-width: 100px;
        min-height: 120px;
        font-size: 20px;
        top: 100px;
        margin: 10px 8px;
        border-radius: 5px;
        border: rgb(114, 215, 248) solid 2px;
    }

    .dropDownCont a{
        color: rgb(114, 215, 248);
        text-decoration: none;
        display: block;
        padding: 12px 16px;
    }    
</style>