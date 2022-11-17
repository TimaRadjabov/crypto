document.addEventListener("DOMContentLoaded", () => {
  const slider01 = document.querySelector(".slider01");
  const slider02 = document.querySelector(".slider02");
  const sliderOne = document.querySelector(".slider-one");
  const sliderTwo = document.querySelector(".slider-two");
  const progressOne = document.querySelector(".point01");
  const progress02One = document.querySelector(".point02");
  const progressTwo = document.querySelector(".point03");
  const progress02Two = document.querySelector(".point04");
  const screenWidth = window.screen.width;
  const resultOne = document.querySelector(".result");
  const resultTwo = document.querySelector(".result-two");
  const calcResult = document.querySelector(".result-calc");
  const tabItemThree = document.querySelectorAll(".tab-three");

  function customSlider(one, two, progress, progress02, result01, calcResult) {
    if (matchMedia) {
      const matchResultMobile = window.matchMedia("(max-width: 600px)");
      const matchResult = window.matchMedia(
        "(max-width: 1082px) and (min-width: 601px)"
      );
      let arrs = [
        window.matchMedia("(max-width: 1082px) and (min-width: 601px)"),
        window.matchMedia("(max-width: 600px)"),
      ];
      function working(arr) {
        if (arrs[0].matches) {
          if (one.value === "2000") {
            progress.style.width = one.value - 2000 + "px";
          }
          if (one.value === "2100") {
            progress.style.width = one.value - 2025 + "px";
          }
          if (one.value === "2200") {
            progress.style.width = one.value - 2070 + "px";
          }
          if (one.value === "2300") {
            progress.style.width = one.value - 2120 + "px";
          }
          if (one.value === "2400") {
            progress.style.width = one.value - 2170 + "px";
          }
          if (one.value === "2500") {
            progress.style.width = one.value - 2220 + "px";
          }
          if (one.value === "2600") {
            progress.style.width = one.value - 2270 + "px";
          }
          if (one.value === "2700") {
            progress.style.width = one.value - 2310 + "px";
          }
          if (one.value === "2800") {
            progress.style.width = one.value - 2360 + "px";
          }
          if (one.value === "2900") {
            progress.style.width = one.value - 2400 + "px";
          }
          if (one.value === "3000") {
            progress.style.width = one.value - 2450 + "px";
          }

          if (one.value === "1750") {
            progress.style.width = one.value - 1750 + "px";
          }
          if (one.value === "1850") {
            progress.style.width = one.value - 1770 + "px";
          }
          if (one.value === "1950") {
            progress.style.width = one.value - 1825 + "px";
          }
          if (one.value === "2050") {
            progress.style.width = one.value - 1870 + "px";
          }
          if (one.value === "2150") {
            progress.style.width = one.value - 1920 + "px";
          }
          if (one.value === "2250") {
            progress.style.width = one.value - 1960 + "px";
          }
          if (one.value === "2350") {
            progress.style.width = one.value - 2020 + "px";
          }
          if (one.value === "2450") {
            progress.style.width = one.value - 2065 + "px";
          }
          if (one.value === "2550") {
            progress.style.width = one.value - 2115 + "px";
          }
          if (one.value === "2650") {
            progress.style.width = one.value - 2160 + "px";
          }
          if (one.value === "2750") {
            progress.style.width = one.value - 2210 + "px";
          }

          if (two.value === "0") {
            progress02.style.width = two.value + 0 + "px";
          }
          if (two.value === "3") {
            progress02.style.width = 88 - two.value + "px";
          }
          if (two.value === "6") {
            progress02.style.width = 146 - two.value + "px";
          }
          if (two.value === "9") {
            progress02.style.width = 199 - two.value + "px";
          }
          if (two.value === "12") {
            progress02.style.width = 262 - two.value + "px";
          }
          if (two.value === "15") {
            progress02.style.width = 330 - two.value + "px";
          }
          if (two.value === "18") {
            progress02.style.width = 388 - two.value + "px";
          }
          if (two.value === "21") {
            progress02.style.width = 451 - two.value + "px";
          }
          if (two.value === "24") {
            progress02.style.width = 504 - two.value + "px";
          }
          if (two.value === "27") {
            progress02.style.width = 577 - two.value + "px";
          }
        }else if (arrs[1].matches) {
          if (one.value === "2000") {
            progress.style.width = one.value - 2000 + "px";
          }
          if (one.value === "2100") {
            progress.style.width = one.value - 2065 + "px";
          }
          if (one.value === "2200") {
            progress.style.width = one.value - 2135 + "px";
          }
          if (one.value === "2300") {
            progress.style.width = one.value - 2215 + "px";
          }
          if (one.value === "2400") {
            progress.style.width = one.value - 2290 + "px";
          }
          if (one.value === "2500") {
            progress.style.width = one.value - 2360 + "px";
          }
          if (one.value === "2600") {
            progress.style.width = one.value - 2440 + "px";
          }
          if (one.value === "2700") {
            progress.style.width = one.value - 2515 + "px";
          }
          if (one.value === "2800") {
            progress.style.width = one.value - 2590 + "px";
          }
          if (one.value === "2900") {
            progress.style.width = one.value - 2670 + "px";
          }
          if (one.value === "3000") {
            progress.style.width = one.value - 2740 + "px";
          }

          if (one.value === "1750") {
            progress.style.width = one.value - 1750 + "px";
          }
          if (one.value === "1850") {
            progress.style.width = one.value - 1815 + "px";
          }
          if (one.value === "1950") {
            progress.style.width = one.value - 1885 + "px";
          }
          if (one.value === "2050") {
            progress.style.width = one.value - 1960 + "px";
          }
          if (one.value === "2150") {
            progress.style.width = one.value - 2040 + "px";
          }
          if (one.value === "2250") {
            progress.style.width = one.value - 2110 + "px";
          }
          if (one.value === "2350") {
            progress.style.width = one.value - 2190 + "px";
          }
          if (one.value === "2450") {
            progress.style.width = one.value - 2265 + "px";
          }
          if (one.value === "2550") {
            progress.style.width = one.value - 2345 + "px";
          }
          if (one.value === "2650") {
            progress.style.width = one.value - 2415 + "px";
          }
          if (one.value === "2750") {
            progress.style.width = one.value - 2490 + "px";
          }

          if (two.value === "0") {
            progress02.style.width = two.value + 0 + "px";
          }
          if (two.value === "3") {
            progress02.style.width = 43 - two.value + "px";
          }
          if (two.value === "6") {
            progress02.style.width = 70 - two.value + "px";
          }
          if (two.value === "9") {
            progress02.style.width = 105 - two.value + "px";
          }
          if (two.value === "12") {
            progress02.style.width = 136 - two.value + "px";
          }
          if (two.value === "15") {
            progress02.style.width = 165 - two.value + "px";
          }
          if (two.value === "18") {
            progress02.style.width = 198 - two.value + "px";
          }
          if (two.value === "21") {
            progress02.style.width = 226 - two.value + "px";
          }
          if (two.value === "24") {
            progress02.style.width = 254 - two.value + "px";
          }
          if (two.value === "27") {
            progress02.style.width = 282 - two.value + "px";
          }
        }else{
          if (one.value === "2000") {
            progress.style.width = one.value - 2000 + "px";
          }
          if (one.value === "2100") {
            progress.style.width = one.value - 1990 + "px";
          }
          if (one.value === "2200") {
            progress.style.width = one.value - 1990 + "px";
          }
          if (one.value === "2300") {
            progress.style.width = one.value - 1988 + "px";
          }
          if (one.value === "2400") {
            progress.style.width = one.value - 1987 + "px";
          }
          if (one.value === "2500") {
            progress.style.width = one.value - 1986 + "px";
          }
          if (one.value === "2600") {
            progress.style.width = one.value - 1986 + "px";
          }
          if (one.value === "2700") {
            progress.style.width = one.value - 1988 + "px";
          }
          if (one.value === "2800") {
            progress.style.width = one.value - 1987 + "px";
          }
          if (one.value === "2900") {
            progress.style.width = one.value - 1987 + "px";
          }
          if (one.value === "3000") {
            progress.style.width = one.value - 1987 + "px";
          }

          if (one.value === "1750") {
            progress.style.width = one.value - 1750 + "px";
          }
          if (one.value === "1850") {
            progress.style.width = one.value - 1741 + "px";
          }
          if (one.value === "1950") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2050") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2150") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2250") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2350") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2450") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2550") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2650") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2750") {
            progress.style.width = one.value - 1740 + "px";
          }

          if (two.value === "0") {
            progress02.style.width = two.value + 0 + "px";
          }
          if (two.value === "3") {
            progress02.style.width = 128 - two.value + "px";
          }
          if (two.value === "6") {
            progress02.style.width = 243 - two.value + "px";
          }
          if (two.value === "9") {
            progress02.style.width = 359 - two.value + "px";
          }
          if (two.value === "12") {
            progress02.style.width = 474 - two.value + "px";
          }
          if (two.value === "15") {
            progress02.style.width = 585 - two.value + "px";
          }
          if (two.value === "18") {
            progress02.style.width = 698 - two.value + "px";
          }
          if (two.value === "21") {
            progress02.style.width = 815 - two.value + "px";
          }
          if (two.value === "24") {
            progress02.style.width = 928 - two.value + "px";
          }
          if (two.value === "27") {
            progress02.style.width = 1037 - two.value + "px";
          }
        }
      }
      for (let i = 0; i < arrs.length; i++) {
        working(arrs[i]);
        arrs[i].addListener(working);
        
      }
      /*  matchResultMobile.addListener(changes);
      changesA(matchResultMobile);
      function changesA(matchResultMobile) {
        if (matchResultMobile.matches) {
          console.log("small");
          if (one.value === "2000") {
            progress.style.width = one.value - 2000 + "px";
          }
          if (one.value === "2100") {
            progress.style.width = one.value - 2025 + "px";
          }
          if (one.value === "2200") {
            progress.style.width = one.value - 2070 + "px";
          }
          if (one.value === "2300") {
            progress.style.width = one.value - 2120 + "px";
          }
          if (one.value === "2400") {
            progress.style.width = one.value - 2170 + "px";
          }
          if (one.value === "2500") {
            progress.style.width = one.value - 2220 + "px";
          }
          if (one.value === "2600") {
            progress.style.width = one.value - 2270 + "px";
          }
          if (one.value === "2700") {
            progress.style.width = one.value - 2310 + "px";
          }
          if (one.value === "2800") {
            progress.style.width = one.value - 2360 + "px";
          }
          if (one.value === "2900") {
            progress.style.width = one.value - 2400 + "px";
          }
          if (one.value === "3000") {
            progress.style.width = one.value - 2450 + "px";
          }

          if (one.value === "1750") {
            progress.style.width = one.value - 1750 + "px";
          }
          if (one.value === "1850") {
            progress.style.width = one.value - 1815 + "px";
          }
          if (one.value === "1950") {
            progress.style.width = one.value - 1825 + "px";
          }
          if (one.value === "2050") {
            progress.style.width = one.value - 1870 + "px";
          }
          if (one.value === "2150") {
            progress.style.width = one.value - 1920 + "px";
          }
          if (one.value === "2250") {
            progress.style.width = one.value - 1960 + "px";
          }
          if (one.value === "2350") {
            progress.style.width = one.value - 2020 + "px";
          }
          if (one.value === "2450") {
            progress.style.width = one.value - 2065 + "px";
          }
          if (one.value === "2550") {
            progress.style.width = one.value - 2115 + "px";
          }
          if (one.value === "2650") {
            progress.style.width = one.value - 2160 + "px";
          }
          if (one.value === "2750") {
            progress.style.width = one.value - 2210 + "px";
          }

          if (two.value === "0") {
            progress02.style.width = two.value + 0 + "px";
          }
          if (two.value === "3") {
            progress02.style.width = 88 - two.value + "px";
          }
          if (two.value === "6") {
            progress02.style.width = 146 - two.value + "px";
          }
          if (two.value === "9") {
            progress02.style.width = 199 - two.value + "px";
          }
          if (two.value === "12") {
            progress02.style.width = 262 - two.value + "px";
          }
          if (two.value === "15") {
            progress02.style.width = 330 - two.value + "px";
          }
          if (two.value === "18") {
            progress02.style.width = 388 - two.value + "px";
          }
          if (two.value === "21") {
            progress02.style.width = 451 - two.value + "px";
          }
          if (two.value === "24") {
            progress02.style.width = 504 - two.value + "px";
          }
          if (two.value === "27") {
            progress02.style.width = 577 - two.value + "px";
          }
        } else {
          if (one.value === "2000") {
            progress.style.width = one.value - 2000 + "px";
          }
          if (one.value === "2100") {
            progress.style.width = one.value - 2025 + "px";
          }
          if (one.value === "2200") {
            progress.style.width = one.value - 2070 + "px";
          }
          if (one.value === "2300") {
            progress.style.width = one.value - 2120 + "px";
          }
          if (one.value === "2400") {
            progress.style.width = one.value - 2170 + "px";
          }
          if (one.value === "2500") {
            progress.style.width = one.value - 2220 + "px";
          }
          if (one.value === "2600") {
            progress.style.width = one.value - 2270 + "px";
          }
          if (one.value === "2700") {
            progress.style.width = one.value - 2310 + "px";
          }
          if (one.value === "2800") {
            progress.style.width = one.value - 2360 + "px";
          }
          if (one.value === "2900") {
            progress.style.width = one.value - 2400 + "px";
          }
          if (one.value === "3000") {
            progress.style.width = one.value - 2450 + "px";
          }

          if (one.value === "1750") {
            progress.style.width = one.value - 1750 + "px";
          }
          if (one.value === "1850") {
            progress.style.width = one.value - 1770 + "px";
          }
          if (one.value === "1950") {
            progress.style.width = one.value - 1825 + "px";
          }
          if (one.value === "2050") {
            progress.style.width = one.value - 1870 + "px";
          }
          if (one.value === "2150") {
            progress.style.width = one.value - 1920 + "px";
          }
          if (one.value === "2250") {
            progress.style.width = one.value - 1960 + "px";
          }
          if (one.value === "2350") {
            progress.style.width = one.value - 2020 + "px";
          }
          if (one.value === "2450") {
            progress.style.width = one.value - 2065 + "px";
          }
          if (one.value === "2550") {
            progress.style.width = one.value - 2115 + "px";
          }
          if (one.value === "2650") {
            progress.style.width = one.value - 2160 + "px";
          }
          if (one.value === "2750") {
            progress.style.width = one.value - 2210 + "px";
          }

          if (two.value === "0") {
            progress02.style.width = two.value + 0 + "px";
          }
          if (two.value === "3") {
            progress02.style.width = 88 - two.value + "px";
          }
          if (two.value === "6") {
            progress02.style.width = 146 - two.value + "px";
          }
          if (two.value === "9") {
            progress02.style.width = 199 - two.value + "px";
          }
          if (two.value === "12") {
            progress02.style.width = 262 - two.value + "px";
          }
          if (two.value === "15") {
            progress02.style.width = 330 - two.value + "px";
          }
          if (two.value === "18") {
            progress02.style.width = 388 - two.value + "px";
          }
          if (two.value === "21") {
            progress02.style.width = 451 - two.value + "px";
          }
          if (two.value === "24") {
            progress02.style.width = 504 - two.value + "px";
          }
          if (two.value === "27") {
            progress02.style.width = 577 - two.value + "px";
          }
        }
      }
      matchResult.addListener(changes);
      changes(matchResult);
      function changes(matchResult) {
        if (matchResult.matches) {
          console.log("big");
          if (one.value === "2000") {
            progress.style.width = one.value - 2000 + "px";
          }
          if (one.value === "2100") {
            progress.style.width = one.value - 2025 + "px";
          }
          if (one.value === "2200") {
            progress.style.width = one.value - 2070 + "px";
          }
          if (one.value === "2300") {
            progress.style.width = one.value - 2120 + "px";
          }
          if (one.value === "2400") {
            progress.style.width = one.value - 2170 + "px";
          }
          if (one.value === "2500") {
            progress.style.width = one.value - 2220 + "px";
          }
          if (one.value === "2600") {
            progress.style.width = one.value - 2270 + "px";
          }
          if (one.value === "2700") {
            progress.style.width = one.value - 2310 + "px";
          }
          if (one.value === "2800") {
            progress.style.width = one.value - 2360 + "px";
          }
          if (one.value === "2900") {
            progress.style.width = one.value - 2400 + "px";
          }
          if (one.value === "3000") {
            progress.style.width = one.value - 2450 + "px";
          }

          if (one.value === "1750") {
            progress.style.width = one.value - 1750 + "px";
          }
          if (one.value === "1850") {
            progress.style.width = one.value - 1770 + "px";
          }
          if (one.value === "1950") {
            progress.style.width = one.value - 1825 + "px";
          }
          if (one.value === "2050") {
            progress.style.width = one.value - 1870 + "px";
          }
          if (one.value === "2150") {
            progress.style.width = one.value - 1920 + "px";
          }
          if (one.value === "2250") {
            progress.style.width = one.value - 1960 + "px";
          }
          if (one.value === "2350") {
            progress.style.width = one.value - 2020 + "px";
          }
          if (one.value === "2450") {
            progress.style.width = one.value - 2065 + "px";
          }
          if (one.value === "2550") {
            progress.style.width = one.value - 2115 + "px";
          }
          if (one.value === "2650") {
            progress.style.width = one.value - 2160 + "px";
          }
          if (one.value === "2750") {
            progress.style.width = one.value - 2210 + "px";
          }

          if (two.value === "0") {
            progress02.style.width = two.value + 0 + "px";
          }
          if (two.value === "3") {
            progress02.style.width = 88 - two.value + "px";
          }
          if (two.value === "6") {
            progress02.style.width = 146 - two.value + "px";
          }
          if (two.value === "9") {
            progress02.style.width = 199 - two.value + "px";
          }
          if (two.value === "12") {
            progress02.style.width = 262 - two.value + "px";
          }
          if (two.value === "15") {
            progress02.style.width = 330 - two.value + "px";
          }
          if (two.value === "18") {
            progress02.style.width = 388 - two.value + "px";
          }
          if (two.value === "21") {
            progress02.style.width = 451 - two.value + "px";
          }
          if (two.value === "24") {
            progress02.style.width = 504 - two.value + "px";
          }
          if (two.value === "27") {
            progress02.style.width = 577 - two.value + "px";
          }
        } else {
          if (one.value === "2000") {
            progress.style.width = one.value - 2000 + "px";
          }
          if (one.value === "2100") {
            progress.style.width = one.value - 1990 + "px";
          }
          if (one.value === "2200") {
            progress.style.width = one.value - 1990 + "px";
          }
          if (one.value === "2300") {
            progress.style.width = one.value - 1988 + "px";
          }
          if (one.value === "2400") {
            progress.style.width = one.value - 1987 + "px";
          }
          if (one.value === "2500") {
            progress.style.width = one.value - 1986 + "px";
          }
          if (one.value === "2600") {
            progress.style.width = one.value - 1986 + "px";
          }
          if (one.value === "2700") {
            progress.style.width = one.value - 1988 + "px";
          }
          if (one.value === "2800") {
            progress.style.width = one.value - 1987 + "px";
          }
          if (one.value === "2900") {
            progress.style.width = one.value - 1987 + "px";
          }
          if (one.value === "3000") {
            progress.style.width = one.value - 1987 + "px";
          }

          if (one.value === "1750") {
            progress.style.width = one.value - 1750 + "px";
          }
          if (one.value === "1850") {
            progress.style.width = one.value - 1741 + "px";
          }
          if (one.value === "1950") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2050") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2150") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2250") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2350") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2450") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2550") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2650") {
            progress.style.width = one.value - 1740 + "px";
          }
          if (one.value === "2750") {
            progress.style.width = one.value - 1740 + "px";
          }

          if (two.value === "0") {
            progress02.style.width = two.value + 0 + "px";
          }
          if (two.value === "3") {
            progress02.style.width = 128 - two.value + "px";
          }
          if (two.value === "6") {
            progress02.style.width = 243 - two.value + "px";
          }
          if (two.value === "9") {
            progress02.style.width = 359 - two.value + "px";
          }
          if (two.value === "12") {
            progress02.style.width = 474 - two.value + "px";
          }
          if (two.value === "15") {
            progress02.style.width = 585 - two.value + "px";
          }
          if (two.value === "18") {
            progress02.style.width = 698 - two.value + "px";
          }
          if (two.value === "21") {
            progress02.style.width = 815 - two.value + "px";
          }
          if (two.value === "24") {
            progress02.style.width = 928 - two.value + "px";
          }
          if (two.value === "27") {
            progress02.style.width = 1037 - two.value + "px";
          }
        }
      } */
    }

    if (two.value === "0") {
      const profit = new Intl.NumberFormat("ru-RU").format(
        Math.round(one.value * 1 * 321 * 0.075)
      );
      result01.innerHTML = profit;
      calcResult.innerHTML = profit;
    } else {
      const profit = new Intl.NumberFormat("ru-RU").format(
        Math.round(one.value * two.value * 321 * 0.075)
      );
      result01.innerHTML = profit;
      calcResult.innerHTML = profit;
    }
  }
  customSlider(
    sliderOne,
    sliderTwo,
    progressTwo,
    progress02Two,
    resultTwo,
    calcResult
  );
  customSlider(
    slider01,
    slider02,
    progressOne,
    progress02One,
    resultOne,
    calcResult
  );

  tabItemThree.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.innerHTML === "Павильон") {
        customSlider(
          sliderOne,
          sliderTwo,
          progressTwo,
          progress02Two,
          resultTwo,
          calcResult
        );
      } else {
        customSlider(
          slider01,
          slider02,
          progressOne,
          progress02One,
          resultOne,
          calcResult
        );
      }
    });
  });
  slider01.addEventListener("input", () => {
    customSlider(
      slider01,
      slider02,
      progressOne,
      progress02One,
      resultOne,
      calcResult
    );
  });

  slider02.addEventListener("input", () => {
    customSlider(
      slider01,
      slider02,
      progressOne,
      progress02One,
      resultOne,
      calcResult
    );
  });
  sliderOne.addEventListener("input", () => {
    customSlider(
      sliderOne,
      sliderTwo,
      progressTwo,
      progress02Two,
      resultTwo,
      calcResult
    );
  });

  sliderTwo.addEventListener("input", () => {
    customSlider(
      sliderOne,
      sliderTwo,
      progressTwo,
      progress02Two,
      resultTwo,
      calcResult
    );
  });
});
