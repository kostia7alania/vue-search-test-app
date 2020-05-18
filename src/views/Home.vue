<template>
  <div class="home uk-container">
    <h1>{{$t('home.home-page')}}</h1>
    <router-link :to="{ name: 'search' }">{{$t('home.go-to-search')}}</router-link>
  </div>
</template>
