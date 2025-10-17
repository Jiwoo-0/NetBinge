import Navbar_ecom from "./Navbar_ecom";
import Footer_ecom from "./Footer_ecom";

const Landing_page = () => {
  const featuredProducts = [
    {
      title: "Classic Movie Tee",
      description: "Show your love for classic cinema.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAA_c-kAQgITOmbjCpb4Q__XfPexIalvcucRR54ED0vEbA7X6Kt5YUMmdgmFUv2jayHfGrntbITU7umls48xXlcuCYN-vBd8776Vc-yySakGRVNyZn0n5oPjjxuxhfkjPz_YhuddCshiBquDdoNxWZIEiXFW5WLNorPGoWSAr8knXv5XRQvr3XNiXmtmoiOCThLHBQg1AJb67KtQCEFgLmFloa9ZhNsFYZNE0fl3Mg0Y_vKg5gWx-DGBi0_I9lzl9sPK7IeCO2yyO8",
    },
    {
      title: "Limited Edition Poster",
      description: "A must-have for any collector.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDCBZUjlSTr_-qcT8QTxLN1HyzXkGOeoo-aSGmhultcIXCspJmX09gfiEGzN8nFVcxXFpMNCMZ16uxXZBtJWGNARDVIbBiavtprtp7slXzukP7gLaKM5Cmws5Hca3VQQlAolUCj2TQOOLP3b15h-MZvzfK9ali5ll3_74RoU6W0og-bcifVfubccr_JL4yY-B1Fti3mO2tNetcF2nvCybbuC75n2CcqxgYA-HODZ8cdAMtN42tOWAAxyZmIdoveFP6Crcz9xjcTD00",
    },
    {
      title: "Movie Buff Mug",
      description: "Enjoy your favorite beverage in style.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCLdstatAUCmhbLj1KLi0-HJNPkX3zxyLCa5hdi_dbeGgY_ty_hWVmA3D-Yy9b18_TPy0IFg2gv4VKfnN7Hl270Hk6FGZE3RS3qpBNz0PnKemQWcNL4TtOI-M9NOCRaxYUlJcVVnDYsD6wfd5c84lF2gQWD3fcwmWxCZqgF9kk38CC2nqRvzwdkzwvHUghoD54v26e0xt4dsCKuhEclq745HGTpcJs1xa0Ejer8BZ2Wj9KtJNVqFa7_zyD_Ridcy3NQok35nSGvMvY",
    },
    {
      title: "Cinema Keychain",
      description: "Carry a piece of the movies with you.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-HOG8z-RF68VcpGs0BTnEtcbkIOoMKFKrq0GMipvRw87dzmhjFPZ5yK9nAUI3VH3_J1gHiGDWBjfdlVCR1pbbrFP3fNYtzos75pUyzZSEF8P82SGotycq-9hTnFsf8K1xbqvSuejbuskDwcX47XE6nEkgyhukZ3pWRO6B2Ua4AB7BJBAV1NoTOVJ_MRQjl_ySoiNr3rlZkOeUzlYIFyDdUhJ0YbaPKzDgeG0AzUDb6eiu0-jv5z6heTQb0SgunOKT_SW63XWvvM",
    },
  ];

  const categories = [
    {
      name: "Apparel",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAb-0r8fBKY-G7lZDyE9MJCVOJXf1iR12KP0iGigcZdGf4YnOEOEDrzDDfV12OZoGQaJYf4gjUZ3oB19d4LxeyPusyj_lhxLXRy6sgnXS1WxMKsENZApObHC21qP4FLAcAqOkegr6qnpaALGPOgxA3dxxj-K8LqgrfZJf00sk09UvxSW67MoMQqkxgQT69QQNh14bZ9bP2l23YZUwcVs8ShLLRD_-So_1EjXmJOTakbBiGPNgKcTpCcoL3pVOI0Mgbcifb0fgY4AaE",
    },
    {
      name: "Posters",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuATEcCGTg4FTzCM1iXVt1Oe-LTqfnmjo_FM0WbzermiAOOlVBL2_bAsp6w-2NJwwWCx7J_Byn34PJBlNXLMMhW62x5W6KbVslTEQAoV5BAMhVomyrFNWxCsKH7SEnUz_UmmSOpVp5bta9m_MIsXZF6hZ25xjjAC9aTFk_nkezCA2Td177GhZn5bE7DcnWvWRRuGkwP8gjWolWH1cnn_AqTtgUwL8iLp5ees4jvuVo_ZBReCZ0UYxH9fsuqxrQBRwNOipEDugkFHAec",
    },
    {
      name: "Mugs",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBt5KbdQztFGp1IeWTrrBTgqvAXI4uIixf0tWc4BsTNBGj3YINFfJz3dJGFLJyTlZPCucsJLDH5tpBW8U7Q6Y5cHo3nUbG5_nvl9nJ3YEjnrUqFBoXmf1ZGs3SmrrH17-62sbEe1DoG6aFQh1zKSeBEjYpmy48Dz5OzX0vyXMVykv47K0wVvBjihFMerDoxCwaJFp2cWXdYIccftJKq1mQp_Tz6mQ4B0AONbZOcr8jLL1J0XsKg_nV7Xyk351BNSq7ym1s28QUcGIY",
    },
    {
      name: "Accessories",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-HOG8z-RF68VcpGs0BTnEtcbkIOoMKFKrq0GMipvRw87dzmhjFPZ5yK9nAUI3VH3_J1gHiGDWBjfdlVCR1pbbrFP3fNYtzos75pUyzZSEF8P82SGotycq-9hTnFsf8K1xbqvSuejbuskDwcX47XE6nEkgyhukZ3pWRO6B2Ua4AB7BJBAV1NoTOVJ_MRQjl_ySoiNr3rlZkOeUzlYIFyDdUhJ0YbaPKzDgeG0AzUDb6eiu0-jv5z6heTQb0SgunOKT_SW63XWvvM",
    },
  ];

  return (
    <>
      <Navbar_ecom />
      <div className="flex min-h-screen flex-col">
        <section className="container mx-auto px-4 py-10 sm:py-20 lg:px-10">
          <div
            className="relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-lg bg-cover bg-center p-8 text-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(199, 30, 30, 0.2), rgba(199, 30, 30, 0.4)), url('https://pbs.twimg.com/media/Ck9CtrhWUAEcKvQ.jpg')`,
            }}
          >
            <div className="z-10 flex max-w-3xl flex-col items-center gap-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Your Favorite Movies, Now Wearable
              </h1>
              <p className="text-base font-light text-gray-200 sm:text-lg">
                Explore our exclusive collection of movie-themed merchandise.
                From iconic tees to collectible posters, find the perfect way to
                show your love for cinema.
              </p>
              <button className="rounded-lg bg-primary px-8 py-3 text-base font-bold text-white transition hover:bg-opacity-90">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 lg:px-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Featured Products
          </h2>
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="w-64 min-w-64 snap-start sm:w-72 sm:min-w-72"
              >
                <div className="group flex flex-col gap-4">
                  <div
                    className="aspect-square w-full overflow-hidden rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  ></div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-primary dark:text-white">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 lg:px-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {categories.map((category, index) => (
              <a key={index} className="group" href="#">
                <div
                  className="aspect-square w-full overflow-hidden rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url('${category.image}')` }}
                ></div>
                <p className="mt-3 font-medium text-gray-900 group-hover:text-primary dark:text-white">
                  {category.name}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-background-light py-20 dark:bg-background-dark sm:py-24">
          <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center lg:px-10">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Join the NetBinge Community
            </h2>
            <p className="max-w-2xl text-gray-600 dark:text-gray-300">
              Stay up-to-date on new arrivals, exclusive offers, and more.
            </p>
            <button className="rounded-lg bg-primary px-8 py-3 text-base font-bold text-white transition hover:bg-opacity-90">
              Sign Up for Our Newsletter
            </button>
          </div>
        </section>
      </div>
      <Footer_ecom />
    </>
  );
};

export default Landing_page;
