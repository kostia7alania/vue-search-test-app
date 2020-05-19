<template>
  <form class="form" @submit.prevent="submitHandler">
    <div class="form__rows">
      <div class="form__row">
        <div class="form__row_options" v-if="form.searchType">
          <SelectOption class="form__select" v-model="form.city" :options="cities" />
          <SelectOption class="form__select" v-model="form.action" :options="actions" />
          <SelectOption class="form__select" v-model="form.place" :options="places" />
        </div>
        <div v-else class="form__row_options">
          <input
            type="text"
            v-model="form.searchString"
            class="form__input"
            :placeholder="$t('components.search.search-placeholder')"
          />
        </div>
        <b-button class="button button__green" variant="success" type="submit">{{$t('components.search.search')}}</b-button>
      </div>
      <transition name="slide">
        <div v-if="form.isShownPrice" class="form__row">
          <div class="form__row-options__length">
            <input
              type="text"
              v-model="form.priceFrom"
              class="form__input"
              :placeholder="$t('components.search.from')"
            />
            <input
              type="text"
              v-model="form.priceTo"
              class="form__input"
              :placeholder="$t('components.search.to')"
            />
            <SelectOption class="form__select" v-model="form.priceType" :options="priceTypes" />
          </div>
          <b-button
            class="button button__transparent button__transparent_length"
            type="button"
            @click.prevent="showLength"
            :disabled="form.isShownLength"
            :class="{'text-muted': form.isShownLength }"
          >{{ $t('components.search.add-length') }}</b-button>
        </div>
      </transition>
      <transition name="slide">
        <div v-if="form.isShownLength" class="form__row form__row_length">
          <b-button
            class="button button__transparent button__transparent_price"
            type="button"
            @click.prevent="showPrice"
            :disabled="form.isShownPrice"
            :class="{'text-muted': form.isShownPrice }"
          >{{ $t('components.search.add-price') }}</b-button>
          <div class="form__row-options__price">
            <input
              type="text"
              v-model="form.lengthFrom"
              class="form__input"
              :placeholder="$t('components.search.from')"
            />
            <input
              type="text"
              v-model="form.lengthTo"
              class="form__input"
              :placeholder="$t('components.search.to')"
            />
            <div class="units">
              <span class="units__length">м</span>
              <sup class="units__sup">2</sup>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div class="settings">
      <div class="settings__type">
        <SwitchSelect
          :prefix="$t('components.search.main-search')"
          :postfix="$t('components.search.search-by-name')"
          v-model="form.searchType"
        />
      </div>
      <div class="settings__params">
        <ToggleSelect :text="$t('components.search.length')" v-model="form.isShownLength" />
        <ToggleSelect :text="$t('components.search.price')" v-model="form.isShownPrice" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "search-form",
  components: {
    SwitchSelect: () =>
      import(
        /* webpackChunkName: "SwitchSelect" */ "@/components/general/SwitchSelect"
      ),

    SelectOption: () =>
      import(
        /* webpackChunkName: "SelectOption" */ "@/components/general/SelectOption"
      ),
    ToggleSelect: () =>
      import(
        /* webpackChunkName: "SwitchSelect" */ "@/components/general/ToggleSelect"
      )
  },
  data() {
    return {
      form: {
        city: "msk",
        action: "buy",
        place: "office",
        searchString: "",
        searchType: true, // true - основной, false - по названию,
        isShownLength: false,
        length: "month",
        lengthFrom: "",
        lengthTo: "",
        isShownPrice: false,
        priceType: "month",
        priceFrom: "",
        priceTo: ""
      }
    };
  },
  computed: {
    cities() {
      return [
        { value: "msk", text: this.$t("components.search.cities.msk") },
        { value: "mo", text: this.$t("components.search.cities.mo") }
      ];
    },
    actions() {
      return [
        { value: "buy", text: this.$t("components.search.actions.buy") },
        { value: "sell", text: this.$t("components.search.actions.sell") }
      ];
    },
    places() {
      return [
        { value: "office", text: this.$t("components.search.places.office") },
        { value: "home", text: this.$t("components.search.places.home") }
      ];
    },
    priceTypes() {
      return [
        {
          value: "month",
          text: this.$t("components.search.place-types.month")
        },
        { value: "year", text: this.$t("components.search.place-types.year") }
      ];
    }
  },
  methods: {
    submitHandler() {
      console.log("Submitting..>", { ...this.form });
      this.$emit("submit", this.form);
    },
    showLength() {
      this.form.isShownLength = !this.form.isShownLength;
    },
    showPrice() {
      this.form.isShownPrice = !this.form.isShownPrice;
    }
  }
};
</script>

<style lang="scss" scoped>
$radius: 3px;
$green: #28a745;
$height: 44px;
$fs: 16px;
$md: 768px;
$sm: 576px;

.form {
  &__rows {
    background-color: #86b6e6;
    padding: 36px 20px;
    & > *:not(:last-child) {
      padding-bottom: 28px !important;
    }
  }

  &__row {
    display: flex;
    align-items: center;

    @media (max-width: $md) {
      flex-direction: column;
    }

    &_options {
      display: flex;
      flex-grow: 1;
      :first-child {
        border-bottom-left-radius: $radius;
        border-top-left-radius: $radius;
      }
      :not(:last-child) {
        margin-right: 1px;
      }

      .form__select {
        @media (max-width: $md) {
          margin-top: 20px;
        }
      }

      @media (max-width: $md) {
        width: 100%;
        :last-child {
          border-bottom-right-radius: $radius;
          border-top-right-radius: $radius;
        }
      }

      @media (max-width: $sm) {
        flex-direction: column;
        :not(:last-child) {
          margin-right: 0px;
        }
        > * {
          border-radius: $radius;
        }
      }
    }

    &-options__length,
    &-options__price {
      display: flex;
      flex-grow: 1;
      & > *:first-child {
        border-bottom-left-radius: $radius;
        border-top-left-radius: $radius;
      }
      & > *:last-child {
        border-bottom-right-radius: $radius;
        border-top-right-radius: $radius;
      }
      & > *:not(:last-child) {
        margin-right: 1px;
      }

      @media (max-width: $md) {
        width: 100%;
      }

      @media (max-width: $sm) {
        :not(&__price) {
          flex-direction: column;
        }
      }
    }
  }

  &__input,
  &__select {
    flex-grow: 1;
    height: $height;
    border: 0;
    font-size: $fs;
    padding: 12px 20px;
    width: 100%;

    @media (max-width: $md) {
      padding: 6px 10px;
      :last-child {
        border-radius: 0 $radius $radius 0;
      }
    }

    @media (max-width: $sm) {
      padding: 3px 5px;
    }
  }
}

.settings {
  background-color: #e6f2fe;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  &__params {
    & > *:first-child {
      margin-right: 24px;
    }
  }

  @media (max-width: $sm) {
    flex-direction: column;
  }
}

.button {
  padding: 0;
  font-size: $fs;
  height: $height;
  width: 130px;
  border: 0;
  border-radius: 0 $radius $radius 0;
  transition: 0.1s ease-out;
  &:hover {
    transform: scale(1.005);
  }
  &:active {
    transform: scale(0.9);
  }
  &__green {
    background-color: $green;
    color: #ffffff;
    text-align: center;
    @media (max-width: $md) {
      border-radius: $radius;
      width: 100%;
      margin-top: 20px;
    }
  }
  &__transparent {
    background-color: transparent;
    color: #506981;
    border: 1px solid #506981;
    border-radius: $radius;
    min-width: 330px;
    &_length {
      margin-left: 20px;
      @media (max-width: $md) {
        margin-top: 20px;
        margin-left: 0px;
      }
    }
    &_price {
      margin-right: 20px;
      .form__input {
        margin-top: 0px !important;
      }
      @media (max-width: $md) {
        margin-right: 0px;
        margin-top: 20px;
        order: 2;
      }
    }
    @media (max-width: $md) {
      border-radius: $radius;
      min-width: 100%;
    }
  }
}

.units {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 54px;
  background-color: #c2e3f2;
}
</style>
