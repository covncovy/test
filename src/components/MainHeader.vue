<template>
    <div class="container">

        <nav>
            <ul>
                <router-link to="/test">首頁</router-link>
                <router-link to="/test/educationlist"><li>教育</li></router-link>
                <router-link to="/test/landlist"><li>土地</li></router-link>
            </ul>
        </nav>
    </div>
</template>
<style lang="scss">
@import "../style/_header.scss";
</style>