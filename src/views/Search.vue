<template>
  <div>
    <h1>{{$t('views.search.title')}}</h1>
    <SearchForm/>
  </div>
</template>

<script>
export default {
  components: {
    SearchForm: () => import("@/components/Search/SearchForm")
  }
};
</script>
