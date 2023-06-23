(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(5434);
        },
      ]);
    },
    2854: function (e, t, a) {
      "use strict";
      var n = a(5893);
      a(7294);
      var i = a(3245);
      let l = {
          initial: { opacity: 1 },
          animate: {
            opacity: 1,
            transition: { delay: 0.5, staggerChildren: 0.08 },
          },
        },
        r = {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0, transition: { duration: 1 } },
        };
      t.Z = (e) => {
        let { text: t, className: a = "" } = e;
        return (0, n.jsx)("div", {
          className:
            "w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0  ",
          children: (0, n.jsx)(i.E.h1, {
            className:
              "inline-block w-full text-dark font-bold capitalize text-8xl  dark:text-light\n      ".concat(
                a
              ),
            variants: l,
            initial: "initial",
            animate: "animate",
            children: t.split("").map((e, t) =>
              (0, n.jsxs)(
                i.E.span,
                {
                  className: "inline-block",
                  variants: r,
                  children: [e, "\xa0"],
                },
                e + "-" + t
              )
            ),
          }),
        });
      };
    },
    5434: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        });
      var n = a(5893),
        i = a(497),
        l = a(9008),
        r = a.n(l),
        s = a(5675),
        d = a.n(s),
        c = {
          src: "/_next/static/media/developer-pic-1.e4133958.png",
          height: 1024,
          width: 1024,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42mMAgU0rF3Kf2btGd1Nbes+JFRNa/v//zw4Sv7J7CSNYwdzJHTUT26r/d5Wl/t86t/3/hkWTUhmQwcntyzNWz+z4X5oU9KM2M/J/Z1XuBQYGBo7//69CTNi9albRxvm9/7Oi/X7Ge1r/r8iM+/bu3tk5n24flgArWDOnJ72xLOu/l63pvyhvx7/pUQH/z8+v+393SV00WIEcA4O2lqnNr6k1md+3tSf/97DQ/bu5u/Drx43NJjBncBzaukzxwtZ5ARWRjv+n9TT9f3zjzI3/f25wM6ABwbDwkBXXzx/b/PXeGSsGBgYGAJdMbzv6eanKAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        o = a(2854),
        m = a(1664),
        x = a.n(m);
      function h() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(r(), {
              children: [
                (0, n.jsx)("title", { children: "Renox Omache" }),
                (0, n.jsx)("meta", {
                  name: "description",
                  content: "Generated by Renox Omache",
                }),
              ],
            }),
            (0, n.jsx)("main", {
              className:
                "flex items-center text-dark w-full min-h-screen dark:text-light",
              children: (0, n.jsx)(i.Z, {
                className: "pt-0 md:p-16 sm:pt-8",
                children: (0, n.jsxs)("div", {
                  className:
                    "flex items-center justify-between w-full lg:flex-col",
                  children: [
                    (0, n.jsx)("div", {
                      className: "w-1/2 md:w-full",
                      children: (0, n.jsx)(d(), {
                        src: c,
                        alt: "Renox Omache",
                        className:
                          "w-full h-auto lg:hidden md:inline-block md:w-full",
                        priority: !0,
                        sizes:
                          "(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw",
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center",
                      children: [
                        (0, n.jsx)(o.Z, {
                          text: "Transforming Ideas into Digital Reality",
                          className:
                            "!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl ",
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "my-4 text-base font-medium md:text-sm sm:text-xs",
                          children:
                            "Step into the realm of my portfolio, where the magic of creativity intertwines with the wizardry of cutting-edge technology. As a fervent developer, I traverse the realms of Front End, Back End, and the captivating world of Machine Learning. Join me on this exhilarating journey as we conquer challenges and weave elegant solutions. Embark on an exploration of my work, where ideas come to life and user experiences transcend the ordinary, leaving an indelible mark on the digital landscape of today.",
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex items-center self-start mt-2 lg:self-center",
                          children: [
                            (0, n.jsx)(x(), {
                              href: "/Resume.pdf",
                              target: "_blank",
                              className:
                                "flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base ",
                              children: "Resume",
                            }),
                            (0, n.jsx)("a", {
                              href: "mailto:omacherenox@gmail.com",
                              target: "_blank",
                              className:
                                "ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base",
                              children: "Contact",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      a(8176);
    },
  },
  function (e) {
    e.O(0, [675, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);