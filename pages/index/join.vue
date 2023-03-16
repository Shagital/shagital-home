<template>
  <div>
    <div class="modal overflow-y-scroll">
      <div class="modal__wrapper shadow lg:rounded-t-lg rounded-t-3xl">
        <div class="modal__title pr-8 pt-4 pb-4 lg:rounded-t-lg rounded-t-3xl">
          <div class="flex items-center justify-between">
            <div class="flex pl-4 items-center gap-4">
              <button
                v-show="isBack"
                @click="$router.go(-1)"
                class="w-8 hover:bg-gray-300 rounded-full flex items-center justify-center h-8 bg-gray-200"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21 12C21 11.4477 20.5523 11 20 11L4.5 11C3.94772 11 3.5 11.4477 3.5 12C3.5 12.5523 3.94772 13 4.5 13L20 13C20.5523 13 21 12.5523 21 12Z"
                    fill="#9F9F9F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.7071 19.2071C11.0976 18.8166 11.0976 18.1834 10.7071 17.7929L4.91421 12L10.7071 6.20711C11.0976 5.81658 11.0976 5.18342 10.7071 4.79289C10.3166 4.40237 9.68342 4.40237 9.29289 4.79289L3.5 10.5858C2.71895 11.3668 2.71895 12.6332 3.5 13.4142L9.29289 19.2071C9.68342 19.5976 10.3166 19.5976 10.7071 19.2071Z"
                    fill="#9F9F9F"
                  />
                </svg>
              </button>

              <slot name="title"
                ><span class="text-lg text-mini"
                  >Join Our Private Beta</span
                ></slot
              >
            </div>
            <button
              @click="$router.go(-1)"
              class="w-8 rounded-full flex items-center justify-center h-8 bg-gray-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.2928 18.7071C4.90228 18.3166 4.90228 17.6834 5.2928 17.2929L17.2928 5.29289C17.6833 4.90237 18.3165 4.90237 18.707 5.29289C19.0975 5.68342 19.0975 6.31658 18.707 6.70711L6.70701 18.7071C6.31649 19.0976 5.68332 19.0976 5.2928 18.7071Z"
                  fill="#9F9F9F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="#9F9F9F"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="modal__content p-4 pb-12">
          <div v-if="!isSuccess">
            <slot name="content">
              <span class="text-sm text opacity-40"
                >Begin enjoying seamless offline payment as a beta user. Enter
                your email below and we would follow up on how to get
                started.</span
              >
            </slot>

            <form class="mt-4 flex flex-col gap-12" v-on:submit.prevent>
              <div class="flex flex-col gap-2">
                <div class="flex flex-col w-full items-start h-12 relative">
                  <label
                    for="email"
                    class="text-sm text-mini text-placeholder opacity-100 cursor-text pointer-events-none"
                    >Email Address</label
                  >
                  <input
                    id="email"
                    class="border input-field outline-gray-100 pl-4 mt-2 p-6 border-grey-divider bg-grey-fields-100 w-full rounded-lg h-full"
                    type="email"
                    name="email"
                    v-model="body.email"
                    placeholder="Enter email address"
                  />
                </div>

              </div>
              <button
                @click="submit"
                :disabled="loading || !validEmail(body.email)"
                class="bg-primary text-white w-full p-4 rounded-md text-sm"
              >
                {{ loading ? "Submitting" : "Join" }}
              </button>
              <small class="text-xs text-danger text-center" v-show="error">{{
                  error
                }}</small>
            </form>
          </div>
          <div class="" v-else>
            <div class="flex items-center justify-center">
              <img src="@/static/images/okk.gif" />
            </div>
            <div class="flex flex-col items-center justify-center gap-4">
              <h6 class="text-mini text-lg text-primary">
                Joined Successfully!
              </h6>
              <h6 class="text-sm opacity-60 text-center">
                You are current No.
                <span class="opacity-100 text-primary text-mini">{{
                  queueId
                }}</span>
                in the waitlist. We are trying our best to onboard everyone as
                fast as possible. You should receive a message with instructions
                to join, soon.
              </h6>
            </div>
            <div class="mt-5">
              <span class="text-sm text-mini">Share with Friends</span>
              <div class="mt-4 bg-gray-100 flex gap-2 p-4 rounded-md">
                <a
                  :href="`https://wa.me/?text=${textToShare}`"
                  data-action="share/whatsapp/share"
                  class="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="20px"
                    height="20px"
                  >
                    <path
                      d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"
                    />
                  </svg>
                </a>
                <button
                  v-if="false"
                  class="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                  >
                    <path
                      d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
                    />
                  </svg>
                </button>
                <a
                  :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${textToShare}`"
                  class="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                  >
                    <path
                      d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"
                    />
                  </svg>
                </a>
                <button
                  @click="copyTextToClipboard()"
                  class="w-auto hover:text-white pl-2 pr-2 text-sm text-mini h-8 border-2 bg-white rounded-lg"
                >
                  Copy Link
                </button>
              </div>
              <small class="text-xs text-success text-center" v-show="success">{{
                success
              }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.324);
  left: 0;
  top: 0;
  z-index: 2;
  // transition: all 100s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &__wrapper {
    background: white;
    // margin: 0 auto;
    height: fit-content;
    // width: 100%;
    // bottom: 0;
    // position: absolute;
    max-width: 550px;
    background: white;
    height: fit-content;
    margin: 10vh auto;
    position: relative;

    // @include sm {
    //     // max-width: 550px;
    //     // background: white;
    //     // height: fit-content;
    //     // margin: 10vh auto;
    //     // position: relative;
    // }
  }
  &__title {
    background: #f7f7f7;
  }
}
button {
  &:hover {
    svg {
      fill: white !important;
    }
  }
}
</style>

<script>
export default {
  head() {
    return {
      title: "Join Waitlist | MyOneFi",
    };
  },
  data() {
    return {
      body: {
        email: null,
      },
      isSuccess: false,
      isBack: false,
      loading: false,
      error: null,
      success: null,
      queueId: null,
    };
  },
  computed: {
    textToShare() {
      return `MyOneFi is building the solution to enable Offline payments in Africa. I just joined the waitlist. Follow this link ${this.currentUrl} to join the waitlist.`;
    },
    currentUrl() {
      return process.client
        ? window.location.origin + window.location.pathname
        : null;
    },
  },
  methods: {
    validEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
    fallbackCopyTextToClipboard(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;

      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        const vm = this;
        if (successful) {
          vm.success = "Copied";
          setTimeout(() => {
            vm.success = null;
          }, 2000);
        }
        console.log("Fallback: Copying text command was " + msg);
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }

      document.body.removeChild(textArea);
    },
    copyTextToClipboard(text) {
      text = text || window.location.origin + window.location.pathname;
      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
      }
      const vm = this;
      navigator.clipboard.writeText(text).then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
          vm.success = "Copied";
          setTimeout(() => {
            vm.success = null;
          }, 2000);
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
    },
    submit() {
      const vm = this;
      if (!this.validEmail(this.body.email)) {
        this.error = "Please enter a valid email";
        setTimeout(() => {
          vm.error = null;
        }, 2000);
        return;
      }
      this.loading = true;
      fetch(`https://onefintech-api.onrender.com/v1/join_waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.body.email }),
      })
        .then((res) => res.json())
        .then(({ data }) => {
          this.isSuccess = true;
          this.isBack = true;
          this.queueId = data.queue_id;
          console.log("Request complete! response:", data);
        })
        .catch((e) => {
          console.log('request error', e)
          this.isSuccess = false;
          this.error = "An error occurred. Please try again later";
          setTimeout(() => {
            vm.error = null;
          }, 2000);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
