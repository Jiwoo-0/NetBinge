import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Checkout_modal = () => {
  return (
    <>
      {/* <!-- Main Content: Modal --> */}
      <main class="relative z-20 flex flex-1 items-center justify-center p-4">
        <div class="layout-container flex h-full grow flex-col">
          <div class="flex flex-1 items-center justify-center py-5">
            <div class="layout-content-container flex w-full max-w-md flex-col items-center rounded-xl bg-red-500/15 p-8 shadow-2xl relative">
              {/* <!-- Success Icon --> */}
              <div class="flex h-20 w-20 items-center justify-center rounded-full bg-primary mb-6">
                <span class="material-symbols-outlined text-red-500 text-7xl">
                  <CheckCircleIcon fontSize="inherit"/>
                </span>
              </div>
              {/* <!-- Headline Text --> */}
              <h1 class="text-white tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-2">
                Order Placed Successfully!
              </h1>
              {/* <!-- Body Text --> */}
              <p class="text-gray-300 text-base font-normal leading-normal pb-6 pt-1 px-4 text-center">
                Your order is being processed and a confirmation email has been
                sent.
              </p>
              {/* <!-- Order Number --> */}
              <div class="w-full flex flex-col items-center gap-2 mb-8 px-4 py-4 bg-black/20 rounded-lg border border-white/10">
                <span class="text-sm text-gray-400">
                  Your Order Number is
                </span>
                <span class="text-lg font-bold text-white tracking-wider">
                  #NB123456789
                </span>
              </div>
              {/* <!-- Button Group --> */}
              <div class="flex w-full flex-col gap-3 items-stretch px-4 pb-3">
                <a class="flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-black bg-white text-base font-bold leading-normal tracking-[0.015em] w-full transition-colors"
                href="/shop">
                  <span class="truncate">Continue Shopping</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout_modal;
