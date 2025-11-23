// TODO
// Grab event input and search on serpapi for information & display
// Save info to local storage for quick links
// Do we want to use jquery and/or dayjs?
// When user searches for destination, grab weather from weatherapi for current and 5 days
// When user clicks on event, search for flight info to destination
//

const FT_CONCERTS = {
  search_metadata: {
    id: "6921d3636feec4272733e133",
    status: "Success",
    json_endpoint:
      "https://serpapi.com/searches/5a5716ef1462ad88/6921d3636feec4272733e133.json",
    created_at: "2025-11-22 15:14:43 UTC",
    processed_at: "2025-11-22 15:14:43 UTC",
    google_events_url:
      "https://www.google.com/search?q=concerts+in+fort+lauderdale&ibp=htl;events&hl=en&gl=us",
    raw_html_file:
      "https://serpapi.com/searches/5a5716ef1462ad88/6921d3636feec4272733e133.html",
    total_time_taken: 7.28,
  },
  search_parameters: {
    q: "concerts in fort lauderdale",
    engine: "google_events",
    hl: "en",
    gl: "us",
  },
  search_information: {
    events_results_state: "Results for exact spelling",
  },
  events_results: [
    {
      title: "Queensryche",
      date: {
        start_date: "Nov 29",
        when: "Sat, Nov 29, 6:00 – 8:30 PM",
      },
      address: [
        "Culture Room, 3045 N Federal Hwy #60-E",
        "Fort Lauderdale, FL",
      ],
      link: "https://open.spotify.com/concert/3Urs1CsR9p0JFsTE9pI36V",
      event_location_map: {
        image:
          "https://www.google.com/maps/vt/data=9YYKjxFFWG1zK9nP586_oiErhEthpU443vIdjhTqSiFFKj2PMHVZl1D_cPjwNDQ6IQwMMoGxaSwF8hGXxuAFwxzD--vSXSrNb8NMt_6Uhj9yNDuwIOs",
        link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x88d901f385f0ccf9:0x165cfe18494ca34c?sa=X&ved=2ahUKEwjL766ghoaRAxVllJUCHcd9KgQQ9eIBegQIAxAA&hl=en&gl=us",
        serpapi_link:
          "https://serpapi.com/search.json?data=%214m2%213m1%211s0x88d901f385f0ccf9%3A0x165cfe18494ca34c&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=concerts+in+fort+lauderdale&type=place",
      },
      description:
        "Find tickets for Queensrÿche with Accept at Culture Room in Ft Lauderdale on 11/29/2025 at 6:30 PM",
      ticket_info: [
        {
          source: "Spotify.com",
          link: "https://open.spotify.com/concert/3Urs1CsR9p0JFsTE9pI36V",
          link_type: "tickets",
        },
        {
          source: "Ticketmaster.com",
          link: "https://ticketmaster.evyy.net/c/6580072/271177/4272?u=https%3A%2F%2Fwww.ticketmaster.com%2Fqueensryche-volume-and-vengeance-tour-ft-lauderdale-florida-11-29-2025%2Fevent%2F0D0062DB07D3538F%3Futm_content%3Dhotevent&utm_medium=affiliate",
          link_type: "tickets",
        },
        {
          source: "Festivaly.eu",
          link: "https://festivaly.eu/en/queensryche-volume-and-vengeance-tour-culture-room-ft-lauderdale-2025",
          link_type: "tickets",
        },
        {
          source: "Gigsberg.com",
          link: "https://gigsberg.com/en/concert-tickets/hard-rock-metal/queensryche-tickets/show-189573",
          link_type: "tickets",
        },
        {
          source: "Premiumseatsusa.com",
          link: "https://www.premiumseatsusa.com/concerts/hard-rock-metal/queensryche/7260160",
          link_type: "tickets",
        },
      ],
      venue: {
        name: "Culture Room",
        rating: 4.5,
        reviews: 1152,
        link: "https://www.google.com/search?sca_esv=43ccaf06e6065102&gl=us&hl=en&q=Culture+Room&ludocid=1611442146954224460&ibp=gwp%3B0,7",
      },
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qtyO6YriBK1dEAgTXUpA9mgL7Yf3irUPwhfxbyjUCCDmzRfpQb3GZkU&s",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvXNqWOe0F9HweIS9_fZiErEOxXmZ1B2w8VwsLMF_4qEIeQHCTg2ioHwUonw&s=10",
    },
    {
      title: "Crystal Gayle",
      date: {
        start_date: "Nov 23",
        when: "Sun, Nov 23, 2 – 4 PM",
      },
      address: [
        "The Rose and Alfred Miniaci Performing Arts Center, 3100 Ray Ferrero Jr Blvd",
        "Davie, FL",
      ],
      link: "https://open.spotify.com/concert/5MkN4MmIH0fcy0c7LvzANw",
      event_location_map: {
        image:
          "https://www.google.com/maps/vt/data=nb0m1ERuWGDStEUVUSBYIepIBrrPIIfS_Dg42VIiC67OIgpuRIU-I5yXxLSYGBf31yMOgjPVsDipPci7DS2h_Alx3_CYFn-A1cHmLSMXUMhijJUpQk8",
        link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x88d9a82f4eaa905d:0x33ded32b7ef0534c?sa=X&ved=2ahUKEwjL766ghoaRAxVllJUCHcd9KgQQ9eIBegQICxAA&hl=en&gl=us",
        serpapi_link:
          "https://serpapi.com/search.json?data=%214m2%213m1%211s0x88d9a82f4eaa905d%3A0x33ded32b7ef0534c&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=concerts+in+fort+lauderdale&type=place",
      },
      description:
        "Find tickets for Crystal Gayle at Rose & Alfred Miniaci Performing Arts Center in Ft Lauderdale on 11/23/2025 at 2:00 PM",
      ticket_info: [
        {
          source: "Spotify.com",
          link: "https://open.spotify.com/concert/5MkN4MmIH0fcy0c7LvzANw",
          link_type: "tickets",
        },
        {
          source: "Tix4cause.com",
          link: "https://www.tix4cause.com/event/crystal-gayle/7230401",
          link_type: "tickets",
        },
        {
          source: "Festivaly.eu",
          link: "https://festivaly.eu/en/crystal-gayle-rose-alfred-miniaci-performing-arts-center-ft-lauderdale-2025",
          link_type: "tickets",
        },
        {
          source: "Stubhub.com",
          link: "https://www.stubhub.com/_C-11257?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-32086%7Cev-158522455%7Ccy-80023&ps_ev=158522455",
          link_type: "tickets",
        },
        {
          source: "Viagogo.com",
          link: "https://www.viagogo.com/_C-11257?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-32086%7Cev-158522455%7Ccy-80023&ps_ev=158522455",
          link_type: "tickets",
        },
      ],
      venue: {
        name: "The Rose and Alfred Miniaci Performing Arts Center",
        rating: 4.7,
        reviews: 231,
        link: "https://www.google.com/search?sca_esv=43ccaf06e6065102&gl=us&hl=en&q=The+Rose+and+Alfred+Miniaci+Performing+Arts+Center&ludocid=3737656924530824012&ibp=gwp%3B0,7",
      },
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPWM9tVOL2p9-8i8cscnXYahF41nxnyyNEiantdO7x8dt1aOrnI-Kvgk&s",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZBn4NpZrIqnXvs8J-Vi3EC_vsSwWCCvNAPfrfcpa22ApTB76ouD_dfBji2U&s=10",
    },
    {
      title: "Kenny Wayne Shepherd",
      date: {
        start_date: "Apr 14",
        when: "Tue, Apr 14, 7 – 9 PM",
      },
      address: [
        "Au-Rene Theater at Broward Center For The Performing Arts, 201 SW 5th Ave",
        "Fort Lauderdale, FL",
      ],
      link: "https://open.spotify.com/concert/59m3DKN7C11k9oZqtcbjSo",
      event_location_map: {
        image:
          "https://www.google.com/maps/vt/data=tSOu9U8Im99dYNgDV4RmOHBi1VpK5rik_MSqdveV1W_PrjISvetZdeC9JlOY4fRjbs72xnNM35J-q_LguxrbnadiKYDZ1v5ZQd-GaivXK40OwLNDdn0",
        link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x88d900fa2cbf21d7:0x1965fa358bd163cd?sa=X&ved=2ahUKEwjL766ghoaRAxVllJUCHcd9KgQQ9eIBegQIExAA&hl=en&gl=us",
        serpapi_link:
          "https://serpapi.com/search.json?data=%214m2%213m1%211s0x88d900fa2cbf21d7%3A0x1965fa358bd163cd&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=concerts+in+fort+lauderdale&type=place",
      },
      description:
        "Find tickets for Kenny Wayne Shepherd with Eric Johnson at Au-Rene Theater at the Broward Center in Ft Lauderdale on 4/14/2026 at 7:30 PM",
      ticket_info: [
        {
          source: "Spotify.com",
          link: "https://open.spotify.com/concert/59m3DKN7C11k9oZqtcbjSo",
          link_type: "tickets",
        },
        {
          source: "Tix4cause.com",
          link: "https://www.tix4cause.com/event/kenny-wayne-shepherd/7457864",
          link_type: "tickets",
        },
        {
          source: "Ticketmaster.com",
          link: "https://ticketmaster.evyy.net/c/6580072/271177/4272?u=https%3A%2F%2Fwww.ticketmaster.com%2Fkenny-wayne-shepherd-and-eric-johnson-ft-lauderdale-florida-04-14-2026%2Fevent%2F0D006336B29A2AF5&utm_medium=affiliate",
          link_type: "tickets",
        },
        {
          source: "Festivaly.eu",
          link: "https://festivaly.eu/en/kenny-wayne-shepherd-and-eric-johnson-au-rene-theater-at-the-broward-center-ft-lauderdale-2026",
          link_type: "tickets",
        },
        {
          source: "Stubhub.com",
          link: "https://www.stubhub.com/_C-22361?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-2374%7Cev-159503326%7Ccy-2292&ps_ev=159503326",
          link_type: "tickets",
        },
      ],
      venue: {
        name: "Au-Rene Theater at Broward Center For The Performing Arts",
        rating: 4.7,
        reviews: 1077,
        link: "https://www.google.com/search?sca_esv=43ccaf06e6065102&gl=us&hl=en&q=Au-Rene+Theater+at+Broward+Center+For+The+Performing+Arts&ludocid=1830143931481940941&ibp=gwp%3B0,7",
      },
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0DDCfHfJ66J9-Vwacl5ftBw_cJMEu7G1Fah3vQwou47_41KAt8uIIXs&s",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5Th3yh1PIUfM-jsfcWHgy96eb3GwxiSbYfkFiTUSr8fGR8_MAK3oqaxPsA&s=10",
    },
    {
      title: "Koolulam",
      date: {
        start_date: "Nov 29",
        when: "Sat, Nov 29, 2 – 5 PM",
      },
      address: ["The Parker, 707 NE 8th St", "Fort Lauderdale, FL"],
      link: "https://open.spotify.com/concert/3nzVrZk1n3FKDHR11Qut4B",
      event_location_map: {
        image:
          "https://www.google.com/maps/vt/data=nYSS_P0PcOmQ2qUpgjRy-Zqqx-pEkPwOWw0w4DD1J7YAgpo8gCUU4vScydYwzNKjQfN2IYxpyg-2Y2M9mXZ6ZVrAd4lObipF4LeQcCY18d4NuGkEDXI",
        link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x88d901aea34e8d99:0x237f7964ddce1a99?sa=X&ved=2ahUKEwjL766ghoaRAxVllJUCHcd9KgQQ9eIBegQIGxAA&hl=en&gl=us",
        serpapi_link:
          "https://serpapi.com/search.json?data=%214m2%213m1%211s0x88d901aea34e8d99%3A0x237f7964ddce1a99&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=concerts+in+fort+lauderdale&type=place",
      },
      description:
        "Find tickets for Koolulam at Wells Hall at The Parker in Ft Lauderdale on 11/29/2025 at 2:00 PM",
      ticket_info: [
        {
          source: "Spotify.com",
          link: "https://open.spotify.com/concert/3nzVrZk1n3FKDHR11Qut4B",
          link_type: "tickets",
        },
        {
          source: "Ticketmaster.com",
          link: "https://ticketmaster.evyy.net/c/4135324/271177/4272?u=https%3A%2F%2Fwww.ticketmaster.com%2Fkoolulam-presents-carolmania-ft-lauderdale-florida-11-29-2025%2Fevent%2F0D0062EAD0F53520%3Futm_content%3Dhotevent&utm_medium=affiliate",
          link_type: "tickets",
        },
        {
          source: "Stubhub.com",
          link: "https://www.stubhub.com/_C-178633?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-150008792%7Cev-158923851%7Ccy-2292&ps_ev=158923851",
          link_type: "tickets",
        },
        {
          source: "Live Nation",
          link: "https://www.livenation.com/artist/K8vZ917rQBV/koolulam-events",
          link_type: "more info",
        },
        {
          source: "The Harrison Hotel Downtown Hollywood",
          link: "https://www.theharrisonhotel.com/events/fort-lauderdale/koolulam-10627253",
          link_type: "more info",
        },
      ],
      venue: {
        name: "The Parker",
        rating: 4.7,
        reviews: 2354,
        link: "https://www.google.com/search?sca_esv=43ccaf06e6065102&gl=us&hl=en&q=The+Parker&ludocid=2557896587494693529&ibp=gwp%3B0,7",
      },
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwE78Hz9U1Xtzz-rNc9DhVG7LhGzgnmFleafBRcrY0pAMG77K9d77AbA&s",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNPubwLoDwMrdHSW8NlwGjrUmGqDLBvgvusZw-X1kWELe1l6o9yCqDE232w&s=10",
    },
    {
      title: "Silverstein",
      date: {
        start_date: "Dec 14",
        when: "Sun, Dec 14, 6:00 – 8:30 PM",
      },
      address: ["Revolution Live, 100 SW 3rd Ave", "Fort Lauderdale, FL"],
      link: "https://gametime.co/concert/silverstein-tickets/12-14-2025-fort-lauderdale-fl-revolution-live/events/6876a037aecf3f1a9c3e0c5c",
      event_location_map: {
        image:
          "https://www.google.com/maps/vt/data=jqniZL2g4p5IO1XpX7HFY343ejpeWyNCZyFDjiiWs-W4xtN8Jd3JTjnNVjbnNcerJxZjOsXH9ILTZ8Io1vYi6Jna6iPcbgzcGLmuQ8UAxlwf2Dosow4",
        link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x88d900f92e27aefd:0x7c52c2b0f0f24e40?sa=X&ved=2ahUKEwjL766ghoaRAxVllJUCHcd9KgQQ9eIBegQIIxAA&hl=en&gl=us",
        serpapi_link:
          "https://serpapi.com/search.json?data=%214m2%213m1%211s0x88d900f92e27aefd%3A0x7c52c2b0f0f24e40&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=concerts+in+fort+lauderdale&type=place",
      },
      description:
        "Gametime is offering last-minute concert tickets to Silverstein at Revolution Live in Fort Lauderdale, FL",
      ticket_info: [
        {
          source: "Spotify.com",
          link: "https://open.spotify.com/concert/1I5qP6p4KLEsWABu9q2Mrq",
          link_type: "tickets",
        },
        {
          source: "Gametime.co",
          link: "https://gametime.co/concert/silverstein-tickets/12-14-2025-fort-lauderdale-fl-revolution-live/events/6876a037aecf3f1a9c3e0c5c",
          link_type: "tickets",
        },
        {
          source: "Festivaly.eu",
          link: "https://festivaly.eu/en/silverstein-25-years-of-noise-revolution-live-ft-lauderdale-2025",
          link_type: "tickets",
        },
        {
          source: "Premiumseatsusa.com",
          link: "https://www.premiumseatsusa.com/concerts/alternative/silverstein/7271059",
          link_type: "tickets",
        },
        {
          source: "Tix4cause.com",
          link: "https://www.tix4cause.com/event/silverstein-thursday-free-throw-bloom/7271059",
          link_type: "tickets",
        },
      ],
      venue: {
        name: "Revolution Live",
        rating: 4.3,
        reviews: 2276,
        link: "https://www.google.com/search?sca_esv=43ccaf06e6065102&gl=us&hl=en&q=Revolution+Live&ludocid=8958436674005782080&ibp=gwp%3B0,7",
      },
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSUU95lRXYiAhOZKTxnc2mPND5ICQ2zymMH738NjQo7p1ifn4UZCXTwo&s",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpAlSQfJRNT62W4-QGi-9n2HSmC_oJw9CFUZNeD97BR0N4Xyw3EFPeXPTVg&s=10",
    },
    {
      title: "Cattle Decapitation",
      date: {
        start_date: "Nov 26",
        when: "Wed, Nov 26, 6 – 8 PM",
      },
      address: ["Revolution Live, 100 SW 3rd Ave", "Fort Lauderdale, FL"],
      link: "https://www.livenation.com/event/vvG1VZbmNjOo0O/cattle-decapitation",
      event_location_map: {
        image:
          "https://www.google.com/maps/vt/data=jqniZL2g4p5IO1XpX7HFY343ejpeWyNCZyFDjiiWs-W4xtN8Jd3JTjnNVjbnNcerJxZjOsXH9ILTZ8Io1vYi6Jna6iPcbgzcGLmuQ8UAxlwf2Dosow4",
        link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x88d900f92e27aefd:0x7c52c2b0f0f24e40?sa=X&ved=2ahUKEwjL766ghoaRAxVllJUCHcd9KgQQ9eIBegQIKxAA&hl=en&gl=us",
        serpapi_link:
          "https://serpapi.com/search.json?data=%214m2%213m1%211s0x88d900f92e27aefd%3A0x7c52c2b0f0f24e40&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=concerts+in+fort+lauderdale&type=place",
      },
      description:
        "Cattle Decapitation WED, Nov 26, 2025 @ 6:00 PM Revolution Live, Ft Lauderdale, FL",
      ticket_info: [
        {
          source: "Spotify.com",
          link: "https://open.spotify.com/concert/613J9mYvjuT5fRfjc893q4",
          link_type: "tickets",
        },
        {
          source: "Gametime.co",
          link: "https://gametime.co/concert/cattle-decapitation-tickets/11-26-2025-fort-lauderdale-fl-revolution-live/events/6876c015bbb7b120a9dd9dad",
          link_type: "tickets",
        },
        {
          source: "Ticketmaster.com",
          link: "https://ticketmaster.evyy.net/c/6580072/271177/4272?u=https%3A%2F%2Fwww.ticketmaster.com%2Fcattle-decapitation-ft-lauderdale-florida-11-26-2025%2Fevent%2F0D0062E8DC811920%3Futm_content%3Dhotevent&utm_medium=affiliate",
          link_type: "tickets",
        },
        {
          source: "Festivaly.eu",
          link: "https://festivaly.eu/en/cattle-decapitation-revolution-live-ft-lauderdale-2025",
          link_type: "tickets",
        },
        {
          source: "Eventseeker.com",
          link: "https://eventseeker.com/tickets/t-3049991",
          link_type: "tickets",
        },
      ],
      venue: {
        name: "Revolution Live",
        rating: 4.3,
        reviews: 2276,
        link: "https://www.google.com/search?sca_esv=43ccaf06e6065102&gl=us&hl=en&q=Revolution+Live&ludocid=8958436674005782080&ibp=gwp%3B0,7",
      },
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxf5Cmo19q5zLX2QDcfUyjTHsamaSr9DLGkMwcY5quYVRu22WMbO2oR7Y&s",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4ex1ESDIhLjkz0_y_BguQvPOtEBlj31cu1bph7gADVd3JhQ7EEMDeS8x-Q&s=10",
    },
    {
      title: "Wayne Newton: Up Close and Personal Tour",
      date: {
        start_date: "Mar 16",
        when: "Mon, Mar 16, 7 – 10 PM",
      },
      address: ["The Parker, 707 NE 8th St", "Fort Lauderdale, FL"],
      link: "https://open.spotify.com/concert/5I7m5oN5bkIUYcto3dOtO9",
      event_location_map: {
        image:
          "https://www.google.com/maps/vt/data=nYSS_P0PcOmQ2qUpgjRy-Zqqx-pEkPwOWw0w4DD1J7YAgpo8gCUU4vScydYwzNKjQfN2IYxpyg-2Y2M9mXZ6ZVrAd4lObipF4LeQcCY18d4NuGkEDXI",
        link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x88d901aea34e8d99:0x237f7964ddce1a99?sa=X&ved=2ahUKEwjL766ghoaRAxVllJUCHcd9KgQQ9eIBegQIMxAA&hl=en&gl=us",
        serpapi_link:
          "https://serpapi.com/search.json?data=%214m2%213m1%211s0x88d901aea34e8d99%3A0x237f7964ddce1a99&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=concerts+in+fort+lauderdale&type=place",
      },
      description:
        "Find tickets for Wayne Newton at Wells Hall at The Parker in Ft Lauderdale on 3/16/2026 at 7:00 PM",
      ticket_info: [
        {
          source: "Spotify.com",
          link: "https://open.spotify.com/concert/5I7m5oN5bkIUYcto3dOtO9",
          link_type: "tickets",
        },
        {
          source: "Ticketmaster.com",
          link: "https://ticketmaster.evyy.net/c/6580072/271177/4272?u=https%3A%2F%2Fwww.ticketmaster.com%2Fwayne-newton-up-close-and-personal-ft-lauderdale-florida-03-16-2026%2Fevent%2F0D006305B1BD1C2E&utm_medium=affiliate",
          link_type: "tickets",
        },
        {
          source: "Festivaly.eu",
          link: "https://festivaly.eu/en/wayne-newton-up-close-and-personal-tour-parker-playhouse-ft-lauderdale-2026",
          link_type: "tickets",
        },
        {
          source: "Premiumseatsusa.com",
          link: "https://www.premiumseatsusa.com/concerts/pop-rock/wayne-newton/7338305",
          link_type: "tickets",
        },
        {
          source: "Stubhub.com",
          link: "https://www.stubhub.com/_C-10553?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-150008792%7Cev-159134840%7Ccy-2292&ps_ev=159134840",
          link_type: "tickets",
        },
      ],
      venue: {
        name: "The Parker",
        rating: 4.7,
        reviews: 2354,
        link: "https://www.google.com/search?sca_esv=43ccaf06e6065102&gl=us&hl=en&q=The+Parker&ludocid=2557896587494693529&ibp=gwp%3B0,7",
      },
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0-0vkIka-L2ZWp08ep7QAGE1HVgO1lMpWmgfaYqzrcOR1fFhBeBH2ww&s",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tIlgmhgoIoTLjABjUqvyOaeNlXlRK76fTQn7-nPCBUV5dlpS8atsZdKZkw&s=10",
    },
    {
      title: "Dark Star Orchestra",
      date: {
        start_date: "Dec 5",
        when: "Fri, Dec 5, 6:29 – 9:29 PM",
      },
      address: ["FTL War Memorial, 800 NE 8th St", "Fort Lauderdale, FL"],
      link: "https://open.spotify.com/concert/3OwWLPKqdUeOSE02sETug3",
      event_location_map: {
        image:
          "https://www.google.com/maps/vt/data=QThfsp6unFsEJMk0HhnZm0geU0FAXTGJwKKR-HEBgawvKs2a1PLi1jN_7IAy9n57j94EvUKmps45AidvGxwahOOBXqAqbH0ERzNjUrJdWmcqNjkOJLg",
        link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x88d901ae793f1bfd:0x1e1b5d5babc529c3?sa=X&ved=2ahUKEwjL766ghoaRAxVllJUCHcd9KgQQ9eIBegQIOxAA&hl=en&gl=us",
        serpapi_link:
          "https://serpapi.com/search.json?data=%214m2%213m1%211s0x88d901ae793f1bfd%3A0x1e1b5d5babc529c3&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=concerts+in+fort+lauderdale&type=place",
      },
      description:
        "Find tickets for Dark Star Orchestra at FTL War Memorial in Fort Lauderdale on 12/5/2025 at 7:30 PM",
      ticket_info: [
        {
          source: "Spotify.com",
          link: "https://open.spotify.com/concert/3OwWLPKqdUeOSE02sETug3",
          link_type: "tickets",
        },
        {
          source: "Festivaly.eu",
          link: "https://festivaly.eu/en/dark-star-orchestra-war-memorial-auditorium-ft-lauderdale-2025-1",
          link_type: "tickets",
        },
        {
          source: "Ticketmaster.com",
          link: "https://www.ticketmaster.com/event/Z7r9jZ1A7QpOt",
          link_type: "tickets",
        },
        {
          source: "Bravotickets.com",
          link: "https://bravotickets.com/tickets/3182152/dark-star-orchestra-2-day-pass-125-126-tickets-fri-dec-5-2025-war-memorial-auditorium-fl",
          link_type: "tickets",
        },
        {
          source: "Premiumseatsusa.com",
          link: "https://www.premiumseatsusa.com/concerts/pop-rock/dark-star-orchestra/7384420",
          link_type: "tickets",
        },
      ],
      venue: {
        name: "FTL War Memorial",
        rating: 4.5,
        reviews: 354,
        link: "https://www.google.com/search?sca_esv=43ccaf06e6065102&gl=us&hl=en&q=FTL+War+Memorial&ludocid=2169430293814258115&ibp=gwp%3B0,7",
      },
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCC9QuAZ5nM8vwQVZvkdci4naFvOg6kqt_Nfjt_l2co7YY4WCXGftobQ&s",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxCmA8TWhKXonZ0Gnd1Kr-VukwG7vNc6YKxP-WUF8q6CkBvkHvx2zKWeMCw&s=10",
    },
    {
      title: "Calum Scott",
      date: {
        start_date: "Apr 14",
        when: "Tue, Apr 14, 7 – 9 PM",
      },
      address: ["Revolution Live, 100 SW 3rd Ave", "Fort Lauderdale, FL"],
      link: "https://open.spotify.com/concert/5UJzO6Tj7qn4qkILOwZSI6",
      event_location_map: {
        image:
          "https://www.google.com/maps/vt/data=jqniZL2g4p5IO1XpX7HFY343ejpeWyNCZyFDjiiWs-W4xtN8Jd3JTjnNVjbnNcerJxZjOsXH9ILTZ8Io1vYi6Jna6iPcbgzcGLmuQ8UAxlwf2Dosow4",
        link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x88d900f92e27aefd:0x7c52c2b0f0f24e40?sa=X&ved=2ahUKEwjL766ghoaRAxVllJUCHcd9KgQQ9eIBegQIQxAA&hl=en&gl=us",
        serpapi_link:
          "https://serpapi.com/search.json?data=%214m2%213m1%211s0x88d900f92e27aefd%3A0x7c52c2b0f0f24e40&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=concerts+in+fort+lauderdale&type=place",
      },
      description:
        "Find tickets for Calum Scott at Revolution Live in Ft Lauderdale on 4/14/2026 at 7:00 PM",
      ticket_info: [
        {
          source: "Spotify.com",
          link: "https://open.spotify.com/concert/5UJzO6Tj7qn4qkILOwZSI6",
          link_type: "tickets",
        },
        {
          source: "Tix4cause.com",
          link: "https://www.tix4cause.com/event/calum-scott/7081602",
          link_type: "tickets",
        },
        {
          source: "Koobit.com",
          link: "https://www.koobit.com/visit?sem=581906&su=/calum-scott-e107137",
          link_type: "tickets",
        },
        {
          source: "Stubhub.com",
          link: "https://www.stubhub.com/_C-39527?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-2432%7Cev-157840833%7Ccy-80023&ps_ev=157840833",
          link_type: "tickets",
        },
        {
          source: "Viagogo.com",
          link: "https://www.viagogo.com/_C-39527?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-2432%7Cev-157840833%7Ccy-80023&ps_ev=157840833",
          link_type: "tickets",
        },
      ],
      venue: {
        name: "Revolution Live",
        rating: 4.3,
        reviews: 2276,
        link: "https://www.google.com/search?sca_esv=43ccaf06e6065102&gl=us&hl=en&q=Revolution+Live&ludocid=8958436674005782080&ibp=gwp%3B0,7",
      },
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfII4DyJLEbW5DT8denfxPcY-f0KJZ3u3CDnMc1wzEP3cZBIsOsm2Lkc0&s",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1VoPKoQAFAiloKR76Y5l6jY9T1yf5U2yNjpSvFduyXWmve97wQPIrUGS0Rg&s=10",
    },
    {
      title: "Los Lobos",
      date: {
        start_date: "Jan 11",
        when: "Sun, Jan 11, 6:30 – 9:00 PM",
      },
      address: [
        "The Rose and Alfred Miniaci Performing Arts Center, 3100 Ray Ferrero Jr Blvd",
        "Davie, FL",
      ],
      link: "https://open.spotify.com/concert/6UliSdqmvRCsQgfNmTqxtx",
      event_location_map: {
        image:
          "https://www.google.com/maps/vt/data=nb0m1ERuWGDStEUVUSBYIepIBrrPIIfS_Dg42VIiC67OIgpuRIU-I5yXxLSYGBf31yMOgjPVsDipPci7DS2h_Alx3_CYFn-A1cHmLSMXUMhijJUpQk8",
        link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x88d9a82f4eaa905d:0x33ded32b7ef0534c?sa=X&ved=2ahUKEwjL766ghoaRAxVllJUCHcd9KgQQ9eIBegQISxAA&hl=en&gl=us",
        serpapi_link:
          "https://serpapi.com/search.json?data=%214m2%213m1%211s0x88d9a82f4eaa905d%3A0x33ded32b7ef0534c&engine=google_maps&gl=us&google_domain=google.com&hl=en&q=concerts+in+fort+lauderdale&type=place",
      },
      description:
        "Find tickets for Los Lobos at Rose & Alfred Miniaci Performing Arts Center in Ft Lauderdale on 1/11/2026 at 7:30 PM",
      ticket_info: [
        {
          source: "Spotify.com",
          link: "https://open.spotify.com/concert/6UliSdqmvRCsQgfNmTqxtx",
          link_type: "tickets",
        },
        {
          source: "Tix4cause.com",
          link: "https://www.tix4cause.com/event/los-lobos/7213436",
          link_type: "tickets",
        },
        {
          source: "Premiumseatsusa.com",
          link: "https://www.premiumseatsusa.com/concerts/latin/los-lobos/7213436",
          link_type: "tickets",
        },
        {
          source: "Stubhub.com",
          link: "https://www.stubhub.com/_C-16847?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-32086%7Cev-158494934%7Ccy-80023&ps_ev=158494934",
          link_type: "tickets",
        },
        {
          source: "Viagogo.com",
          link: "https://www.viagogo.com/_C-16847?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-32086%7Cev-158494934%7Ccy-80023&ps_ev=158494934",
          link_type: "tickets",
        },
      ],
      venue: {
        name: "The Rose and Alfred Miniaci Performing Arts Center",
        rating: 4.7,
        reviews: 231,
        link: "https://www.google.com/search?sca_esv=43ccaf06e6065102&gl=us&hl=en&q=The+Rose+and+Alfred+Miniaci+Performing+Arts+Center&ludocid=3737656924530824012&ibp=gwp%3B0,7",
      },
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eBl9Kls3ixnAOUpIulFfNaMuLN4EqD0cG2xszvMPPoZJvmBXPSlgRUQ&s",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPi61zot-Exyc0rQ2tsqzzCSkS7LxPOkNTy77vdOYh4gAJiY7dwhISsnTTdg&s=10",
    },
  ],
};

// --------------------------------------------------------------------
//
//
// --------------------------------------------------------------------

const secondFlight = {
  search_metadata: {
    id: "6921e9a0ff3b7a6b5f5b3a88",
    status: "Success",
    json_endpoint:
      "https://serpapi.com/searches/ebab4bed30082103/6921e9a0ff3b7a6b5f5b3a88.json",
    created_at: "2025-11-22 16:49:36 UTC",
    processed_at: "2025-11-22 16:49:36 UTC",
    google_flights_url:
      "https://www.google.com/travel/flights?hl=en&gl=us&curr=USD&tfs=CBwQAhoeEgoyMDI1LTExLTIzagcIARIDVFVMcgcIARIDRkxMGh4SCjIwMjUtMTEtMjlqBwgBEgNGTExyBwgBEgNUVUxCAQFIAXABmAEB&tfu=EgIIAQ",
    raw_html_file:
      "https://serpapi.com/searches/ebab4bed30082103/6921e9a0ff3b7a6b5f5b3a88.html",
    prettify_html_file:
      "https://serpapi.com/searches/ebab4bed30082103/6921e9a0ff3b7a6b5f5b3a88.prettify",
    total_time_taken: 0.51,
  },
  search_parameters: {
    engine: "google_flights",
    hl: "en",
    gl: "us",
    departure_id: "TUL",
    arrival_id: "FLL",
    outbound_date: "2025-11-23",
    return_date: "2025-11-29",
    currency: "USD",
    sort_by: "1",
  },
  best_flights: [
    {
      flights: [
        {
          departure_airport: {
            name: "Tulsa International Airport",
            id: "TUL",
            time: "2025-11-23 11:51",
          },
          arrival_airport: {
            name: "George Bush Intercontinental Airport",
            id: "IAH",
            time: "2025-11-23 13:40",
          },
          duration: 109,
          airplane: "Embraer ERJ-135/145",
          airline: "United",
          airline_logo:
            "https://www.gstatic.com/flights/airline_logos/70px/UA.png",
          travel_class: "Economy",
          flight_number: "UA 4370",
          legroom: "31 in",
          extensions: [
            "Average legroom (31 in)",
            "Carbon emissions estimate: 143 kg",
          ],
          plane_and_crew_by: "Commuteair DBA United Express",
        },
        {
          departure_airport: {
            name: "George Bush Intercontinental Airport",
            id: "IAH",
            time: "2025-11-23 14:20",
          },
          arrival_airport: {
            name: "Fort Lauderdale-Hollywood International Airport",
            id: "FLL",
            time: "2025-11-23 17:52",
          },
          duration: 152,
          airplane: "Boeing 737MAX 8 Passenger",
          airline: "United",
          airline_logo:
            "https://www.gstatic.com/flights/airline_logos/70px/UA.png",
          travel_class: "Economy",
          flight_number: "UA 1718",
          legroom: "30 in",
          extensions: [
            "Average legroom (30 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "On-demand video",
            "Carbon emissions estimate: 123 kg",
          ],
        },
      ],
      layovers: [
        {
          duration: 40,
          name: "George Bush Intercontinental Airport",
          id: "IAH",
        },
      ],
      total_duration: 301,
      carbon_emissions: {
        this_flight: 267000,
        typical_for_this_route: 218000,
        difference_percent: 22,
      },
      price: 887,
      type: "Round trip",
      airline_logo: "https://www.gstatic.com/flights/airline_logos/70px/UA.png",
      extensions: [
        "Checked baggage for a fee",
        "Bag and fare conditions depend on the return flight",
      ],
      departure_token:
        "WyJDalJJZVMwemRVdGhNSGQ2VlRCQlNsZHphRUZDUnkwdExTMHRMUzB0ZG5kaWFYRXhOVUZCUVVGQlIydG9ObUZCU1ZaM09IbEJFZzFWUVRRek56QjhWVUV4TnpFNEdnc0l2YlFGRUFJYUExVlRSRGdjY0wyMEJRPT0iLFtbIlRVTCIsIjIwMjUtMTEtMjMiLCJJQUgiLG51bGwsIlVBIiwiNDM3MCJdLFsiSUFIIiwiMjAyNS0xMS0yMyIsIkZMTCIsbnVsbCwiVUEiLCIxNzE4Il1dXQ==",
    },
    {
      flights: [
        {
          departure_airport: {
            name: "Tulsa International Airport",
            id: "TUL",
            time: "2025-11-23 12:53",
          },
          arrival_airport: {
            name: "Hartsfield-Jackson Atlanta International Airport",
            id: "ATL",
            time: "2025-11-23 15:45",
          },
          duration: 112,
          airplane: "Boeing 717",
          airline: "Delta",
          airline_logo:
            "https://www.gstatic.com/flights/airline_logos/70px/DL.png",
          travel_class: "Economy",
          flight_number: "DL 2620",
          legroom: "31 in",
          extensions: [
            "Average legroom (31 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "Carbon emissions estimate: 141 kg",
          ],
        },
        {
          departure_airport: {
            name: "Hartsfield-Jackson Atlanta International Airport",
            id: "ATL",
            time: "2025-11-23 16:40",
          },
          arrival_airport: {
            name: "Fort Lauderdale-Hollywood International Airport",
            id: "FLL",
            time: "2025-11-23 18:30",
          },
          duration: 110,
          airplane: "Airbus A321",
          airline: "Delta",
          airline_logo:
            "https://www.gstatic.com/flights/airline_logos/70px/DL.png",
          travel_class: "Economy",
          flight_number: "DL 1735",
          legroom: "31 in",
          extensions: [
            "Average legroom (31 in)",
            "Free Wi-Fi",
            "In-seat power & USB outlets",
            "Live TV",
            "Carbon emissions estimate: 102 kg",
          ],
        },
      ],
      layovers: [
        {
          duration: 55,
          name: "Hartsfield-Jackson Atlanta International Airport",
          id: "ATL",
        },
      ],
      total_duration: 277,
      carbon_emissions: {
        this_flight: 244000,
        typical_for_this_route: 218000,
        difference_percent: 12,
      },
      price: 887,
      type: "Round trip",
      airline_logo: "https://www.gstatic.com/flights/airline_logos/70px/DL.png",
      extensions: [
        "Checked baggage for a fee",
        "Bag and fare conditions depend on the return flight",
      ],
      departure_token:
        "WyJDalJJZVMwemRVdGhNSGQ2VlRCQlNsZHphRUZDUnkwdExTMHRMUzB0ZG5kaWFYRXhOVUZCUVVGQlIydG9ObUZCU1ZaM09IbEJFZzFFVERJMk1qQjhSRXd4TnpNMUdnc0l2YlFGRUFJYUExVlRSRGdjY0wyMEJRPT0iLFtbIlRVTCIsIjIwMjUtMTEtMjMiLCJBVEwiLG51bGwsIkRMIiwiMjYyMCJdLFsiQVRMIiwiMjAyNS0xMS0yMyIsIkZMTCIsbnVsbCwiREwiLCIxNzM1Il1dXQ==",
    },
    {
      flights: [
        {
          departure_airport: {
            name: "Tulsa International Airport",
            id: "TUL",
            time: "2025-11-23 05:00",
          },
          arrival_airport: {
            name: "Dallas Fort Worth International Airport",
            id: "DFW",
            time: "2025-11-23 06:20",
          },
          duration: 80,
          airplane: "Embraer 170",
          airline: "American",
          airline_logo:
            "https://www.gstatic.com/flights/airline_logos/70px/AA.png",
          travel_class: "Economy",
          flight_number: "AA 3829",
          legroom: "30 in",
          extensions: [
            "Average legroom (30 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "Stream media to your device",
            "Carbon emissions estimate: 102 kg",
          ],
          plane_and_crew_by: "Envoy Air as American Eagle",
        },
        {
          departure_airport: {
            name: "Dallas Fort Worth International Airport",
            id: "DFW",
            time: "2025-11-23 07:00",
          },
          arrival_airport: {
            name: "Fort Lauderdale-Hollywood International Airport",
            id: "FLL",
            time: "2025-11-23 10:48",
          },
          duration: 168,
          airplane: "Airbus A321",
          airline: "American",
          airline_logo:
            "https://www.gstatic.com/flights/airline_logos/70px/AA.png",
          travel_class: "Economy",
          flight_number: "AA 1340",
          legroom: "30 in",
          extensions: [
            "Average legroom (30 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "Stream media to your device",
            "Carbon emissions estimate: 169 kg",
          ],
        },
      ],
      layovers: [
        {
          duration: 40,
          name: "Dallas Fort Worth International Airport",
          id: "DFW",
        },
      ],
      total_duration: 288,
      carbon_emissions: {
        this_flight: 272000,
        typical_for_this_route: 218000,
        difference_percent: 25,
      },
      price: 897,
      type: "Round trip",
      airline_logo: "https://www.gstatic.com/flights/airline_logos/70px/AA.png",
      extensions: [
        "Checked baggage for a fee",
        "Bag and fare conditions depend on the return flight",
      ],
      departure_token:
        "WyJDalJJZVMwemRVdGhNSGQ2VlRCQlNsZHphRUZDUnkwdExTMHRMUzB0ZG5kaWFYRXhOVUZCUVVGQlIydG9ObUZCU1ZaM09IbEJFZzFCUVRNNE1qbDhRVUV4TXpRd0dnc0lwYndGRUFJYUExVlRSRGdjY0tXOEJRPT0iLFtbIlRVTCIsIjIwMjUtMTEtMjMiLCJERlciLG51bGwsIkFBIiwiMzgyOSJdLFsiREZXIiwiMjAyNS0xMS0yMyIsIkZMTCIsbnVsbCwiQUEiLCIxMzQwIl1dXQ==",
    },
    {
      flights: [
        {
          departure_airport: {
            name: "Tulsa International Airport",
            id: "TUL",
            time: "2025-11-23 05:35",
          },
          arrival_airport: {
            name: "St. Louis Lambert International Airport",
            id: "STL",
            time: "2025-11-23 06:55",
          },
          duration: 80,
          airplane: "Boeing 737",
          airline: "Southwest",
          airline_logo:
            "https://www.gstatic.com/flights/airline_logos/70px/WN.png",
          travel_class: "Economy",
          flight_number: "WN 4480",
          legroom: "31 in",
          extensions: [
            "Average legroom (31 in)",
            "Free Wi-Fi",
            "In-seat USB outlet",
            "Stream media to your device",
            "Carbon emissions estimate: 87 kg",
          ],
        },
        {
          departure_airport: {
            name: "St. Louis Lambert International Airport",
            id: "STL",
            time: "2025-11-23 07:50",
          },
          arrival_airport: {
            name: "Fort Lauderdale-Hollywood International Airport",
            id: "FLL",
            time: "2025-11-23 11:30",
          },
          duration: 160,
          airplane: "Boeing 737MAX 8 Passenger",
          airline: "Southwest",
          airline_logo:
            "https://www.gstatic.com/flights/airline_logos/70px/WN.png",
          travel_class: "Economy",
          flight_number: "WN 807",
          legroom: "31 in",
          extensions: [
            "Average legroom (31 in)",
            "Free Wi-Fi",
            "In-seat USB outlet",
            "Stream media to your device",
            "Carbon emissions estimate: 137 kg",
          ],
        },
      ],
      layovers: [
        {
          duration: 55,
          name: "St. Louis Lambert International Airport",
          id: "STL",
        },
      ],
      total_duration: 295,
      carbon_emissions: {
        this_flight: 225000,
        typical_for_this_route: 218000,
        difference_percent: 3,
      },
      price: 907,
      type: "Round trip",
      airline_logo: "https://www.gstatic.com/flights/airline_logos/70px/WN.png",
      extensions: [
        "Checked baggage for a fee",
        "Bag and fare conditions depend on the return flight",
      ],
      departure_token:
        "WyJDalJJZVMwemRVdGhNSGQ2VlRCQlNsZHphRUZDUnkwdExTMHRMUzB0ZG5kaWFYRXhOVUZCUVVGQlIydG9ObUZCU1ZaM09IbEJFZ3hYVGpRME9EQjhWMDQ0TURjYUN3aU54QVVRQWhvRFZWTkVPQnh3amNRRiIsW1siVFVMIiwiMjAyNS0xMS0yMyIsIlNUTCIsbnVsbCwiV04iLCI0NDgwIl0sWyJTVEwiLCIyMDI1LTExLTIzIiwiRkxMIixudWxsLCJXTiIsIjgwNyJdXV0=",
    },
  ],
  price_insights: {
    lowest_price: 709,
    price_level: "high",
    typical_price_range: [305, 600],
    price_history: [
      [1758603600, 467],
      [1758690000, 462],
      [1758776400, 420],
      [1758862800, 419],
      [1758949200, 407],
      [1759035600, 407],
      [1759122000, 407],
      [1759208400, 407],
      [1759294800, 407],
      [1759381200, 462],
      [1759467600, 462],
      [1759554000, 476],
      [1759640400, 474],
      [1759726800, 473],
      [1759813200, 473],
      [1759899600, 463],
      [1759986000, 524],
      [1760072400, 524],
      [1760158800, 524],
      [1760245200, 524],
      [1760331600, 524],
      [1760418000, 543],
      [1760504400, 534],
      [1760590800, 557],
      [1760677200, 567],
      [1760763600, 567],
      [1760850000, 567],
      [1760936400, 567],
      [1761022800, 567],
      [1761109200, 567],
      [1761195600, 407],
      [1761282000, 407],
      [1761368400, 474],
      [1761454800, 625],
      [1761541200, 625],
      [1761627600, 417],
      [1761714000, 417],
      [1761800400, 417],
      [1761886800, 567],
      [1761973200, 567],
      [1762059600, 567],
      [1762149600, 567],
      [1762236000, 597],
      [1762322400, 597],
      [1762408800, 585],
      [1762495200, 585],
      [1762581600, 585],
      [1762668000, 533],
      [1762754400, 533],
      [1762840800, 679],
      [1762927200, 578],
      [1763013600, 624],
      [1763100000, 623],
      [1763186400, 628],
      [1763272800, 643],
      [1763359200, 706],
      [1763445600, 694],
      [1763532000, 694],
      [1763618400, 694],
      [1763704800, 694],
      [1763791200, 709],
    ],
  },
  airports: [
    {
      departure: [
        {
          airport: {
            id: "TUL",
            name: "Tulsa International Airport",
          },
          city: "Tulsa",
          country: "United States",
          country_code: "US",
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqLH2StQp5uyleU63u8rVwijncuV5ISMhpzOKbkqD6lK5VWU4vM1qcL1N1MxzporUqGZ1USbs9kOrR3Q",
          thumbnail:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSacjOHz2FKwwvLGKUbkmBmcD0rv1vpJ4GKXHwqSvYxMW1B8pBit5U9sdAaEL7Yz3QldpfnXbFZwJBrEJbA7aIjKs9fYAJ-628SUqDFHHU",
        },
      ],
      arrival: [
        {
          airport: {
            id: "FLL",
            name: "Fort Lauderdale-Hollywood International Airport",
          },
          city: "Fort Lauderdale",
          country: "United States",
          country_code: "US",
          image:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmDQqWESxX9pBaPnqncSZuS_vQFZjUDuWIdjZvTjNfvVU-Uhyp963_UpZRBoZyhd-p5rKrQwpo4oEO8g",
          thumbnail:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQXfhjsfAJafNEvYnhloxrnwdk4TkuLXYRFsXIqookRRktvG9tdDn1bOHSiZD9H9flgkc2s3xOv2rA4hu2t_3zz8JNix7ihZzofbgUbvks",
        },
      ],
    },
    {
      departure: [
        {
          airport: {
            id: "FLL",
            name: "Fort Lauderdale-Hollywood International Airport",
          },
          city: "Fort Lauderdale",
          country: "United States",
          country_code: "US",
          image:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmDQqWESxX9pBaPnqncSZuS_vQFZjUDuWIdjZvTjNfvVU-Uhyp963_UpZRBoZyhd-p5rKrQwpo4oEO8g",
          thumbnail:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQXfhjsfAJafNEvYnhloxrnwdk4TkuLXYRFsXIqookRRktvG9tdDn1bOHSiZD9H9flgkc2s3xOv2rA4hu2t_3zz8JNix7ihZzofbgUbvks",
        },
      ],
      arrival: [
        {
          airport: {
            id: "TUL",
            name: "Tulsa International Airport",
          },
          city: "Tulsa",
          country: "United States",
          country_code: "US",
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqLH2StQp5uyleU63u8rVwijncuV5ISMhpzOKbkqD6lK5VWU4vM1qcL1N1MxzporUqGZ1USbs9kOrR3Q",
          thumbnail:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSacjOHz2FKwwvLGKUbkmBmcD0rv1vpJ4GKXHwqSvYxMW1B8pBit5U9sdAaEL7Yz3QldpfnXbFZwJBrEJbA7aIjKs9fYAJ-628SUqDFHHU",
        },
      ],
    },
  ],
};

const airlineNames = {
  "American Airlines": "https://www.aa.com",
  "Delta Air Lines": "https://www.delta.com",
  "United Airlines": "https://www.united.com",
  "Southwest Airlines": "https://www.southwest.com",
  "Air Canada": "https://www.aircanada.com",
  "British Airways": "https://www.britishairways.com",
  Lufthansa: "https://www.lufthansa.com",
  "Air France": "https://www.airfrance.us",
  Emirates: "https://www.emirates.com",
  "Qatar Airways": "https://www.qatarairways.com",
  "Singapore Airlines": "https://www.singaporeair.com",
  "Qantas Airways": "https://www.qantas.com",
  "Aer Lingus": "https://www.aerlingus.com",
  "Alaska Airlines": "https://www.alaskaair.com",
  "Spirit Airlines": "https://www.spirit.com",
};

const airlineWebsites = {
  american: "https://www.aa.com",
  delta: "https://www.delta.com",
  united: "https://www.united.com",
  southwest: "https://www.southwest.com",
  "air Canada": "https://www.aircanada.com",
  "british Airways": "https://www.britishairways.com",
  lufthansa: "https://www.lufthansa.com",
  "air France": "https://www.airfrance.us",
  emirates: "https://www.emirates.com",
  "qatar Airways": "https://www.qatarairways.com",
  singapore: "https://www.singaporeair.com",
  "qantas Airways": "https://www.qantas.com",
  "aer Lingus": "https://www.aerlingus.com",
  alaska: "https://www.alaskaair.com",
  spirit: "https://www.spirit.com",
};

// Given the results array, display events to the page
function displayEventsData(eventsData) {
  let eventResults = [];
  for (let eventData of eventsData) {
    let address = eventData.address[0];
    eventResults.push({
      title: eventData.title,
      venueName: address.split(",", 2)[0],
      location: `${address.split(",", 2)[1]}, ${eventData.address[1]}`,
      description: eventData.description,
      startDate: eventData.date.start_date,
      when: eventData.date.when,
      thumbnail: eventData.thumbnail,
      ticketSource: eventData.ticket_info.source,
      ticketLink: eventData.ticket_info.link,
    });
  }
  console.log(eventResults);
}

// Gets the html for display of info
function getDisplayHTML(data) {
  let addressString = data.address[0];
  return `<div>
      <h3>${data.title}</h3>
      <p>${addressString.split(",", 2)[0]}</p>
      <p>${addressString.split(",", 2)[1]}, ${data.address[1]}</p>
      <p>${data.description}</p>
    </div>`;
}

// Gets the html for display of info
function getDisplayFlightHTML(data) {
  let flightsInfo = [];
  if (data.flights.length >= 2) {
    for (let flight of data.flights) {
      flightsInfo.push({
        airline: flight.airline,
        airlineLink: returnAirlineLink(flight.airline.toLowerCase()),
        logo: flight.airline_logo,
        class: flight.travel_class,
        flightNumber: flight.flight_number,
        departureTime: flight.departure_airport.time,
        departureAirport: flight.departure_airport.name,
        arrivalAirport: flight.arrival_airport.name,
        price: data.price,
      });
    }

    console.log(flightsInfo);

    return flightsInfo;
  }
}

function returnAirlineLink(airline) {
  let airlineLink = airlineWebsites[airline];

  if (airlineLink) {
    return airlineLink;
  } else {
    return "#";
  }
}

function displayFlights(flightsData) {
  for (let flightData of flightsData) {
    let flightHTML = getDisplayFlightHTML(flightData);
  }
}

displayEventsData(FT_CONCERTS.events_results);

displayFlights(secondFlight.best_flights);
