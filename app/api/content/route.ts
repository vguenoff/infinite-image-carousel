export async function GET() {
  const data = [
    {
      id: 'lEBScqUaofo',
      color: '#c0c0c0',
      description:
        'Fans at entrance to the Huntington Avenue Grounds, 1903 World Series Description: Fans milling about at the Huntington Avenue entrance to the Huntington Avenue Grounds before game three of the World Series between the Boston Americans and Pittsburgh Pirates. Overcrowding and overselling of seats during the Series caused problems throughout. Date: 1903 https://www.digitalcommonwealth.org/search/commonwealth:sf268534z',
      urls: {
        full: 'https://images.unsplash.com/photo-1712237286184-164fd17e4dd2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxfHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=85',
        regular:
          'https://images.unsplash.com/photo-1712237286184-164fd17e4dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxfHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=1080',

        thumb:
          'https://images.unsplash.com/photo-1712237286184-164fd17e4dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxfHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=200',
      },
    },
    {
      id: 'VuMKOv1Xjvo',
      color: '#d9d9d9',
      description:
        'Games of the I Olympiad, Panathenaic Stadium, Athens, Greece Collector: Catsimpoolas, Nicholas Date: [1870–1880] https://www.digitalcommonwealth.org/search/commonwealth:j6733m45p',
      urls: {
        full: 'https://images.unsplash.com/photo-1712237286313-c565c7d26690?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=85',
        regular:
          'https://images.unsplash.com/photo-1712237286313-c565c7d26690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=1080',

        thumb:
          'https://images.unsplash.com/photo-1712237286313-c565c7d26690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=200',
      },
    },
    {
      id: '16kRZAgzUz8',
      color: '#f3f3f3',
      description:
        'Young fans climb pole next to Huntington Avenue Grounds, 1903 World Series Description: Young fans of the Boston Americans find way to see the World Series game against the Pittsburgh Pirates for free. Date: 1903 https://www.digitalcommonwealth.org/search/commonwealth:sf268520m',
      urls: {
        full: 'https://images.unsplash.com/photo-1712237286319-751aa4d4a126?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=85',
        regular:
          'https://images.unsplash.com/photo-1712237286319-751aa4d4a126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=1080',
        thumb:
          'https://images.unsplash.com/photo-1712237286319-751aa4d4a126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwzfHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=200',
      },
    },
    // {
    //   id: '-K1BRPCJnJ0',
    //   color: '#f3f3f3',
    //   description:
    //     'Two women playing with a ball on a beach Description: Possibly Lillian and Marian Abdalian. Photographer: Abdalian, Leon H., 1884-1967 Date: August 1934 https://www.digitalcommonwealth.org/search/commonwealth:fj237x25t',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712237286093-0ee486856a1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw0fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712237286093-0ee486856a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw0fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712237286093-0ee486856a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw0fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: '4fdMM79EEAY',
    //   color: '#d9d9d9',
    //   description:
    //     'Park department: Public Garden, Boston. Winter sports on pond Date: February 17, 1923 Format: Photographs Genre: Photographic prints https://www.digitalcommonwealth.org/search/commonwealth:2801pn888',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712237286182-460f057d525b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw1fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712237286182-460f057d525b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw1fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712237286182-460f057d525b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw1fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'iFIPOSpAg9k',
    //   color: '#262626',
    //   description:
    //     "Title: John F. Fitzgerald throws out the first ball of the season at the Huntington Avenue Grounds Description: Taken during one of Fitzgerald's terms as Mayor of Boston (1906-1907; 1910-1911), Fitzgerald's daughter Rose is to the right looking up at her father. Rose would marry Joseph Kennedy and become matriarch of an American political dynasty. Date: [ca. 1910] https://www.digitalcommonwealth.org/search/commonwealth:sf268586q",
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712237286151-09c11ab98db3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw2fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712237286151-09c11ab98db3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw2fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712237286151-09c11ab98db3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw2fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'pKnz0HLTAmM',
    //   color: '#f3f3f3',
    //   description:
    //     'Fans scaling the wall at the Huntington Avenue Grounds, 1903 World Series Description: Taken on October 3, 1903, before game three of the first World Series between the Boston Americans and the Pittsburgh Pirates. Date: 1903 https://www.digitalcommonwealth.org/search/commonwealth:sf268530v',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712237286242-17067d79c7b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712237286242-17067d79c7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712237286242-17067d79c7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'JDPIXxsOIcI',
    //   color: '#d9d9d9',
    //   description:
    //     'Boston Arena, interior Date: [1910–1920] Format: Photographs Genre: Photographic prints https://www.digitalcommonwealth.org/search/commonwealth:5m60th717',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712237286158-64fd052657bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw4fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712237286158-64fd052657bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw4fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712237286158-64fd052657bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw4fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'WofSQqNMurE',
    //   color: '#8c8c8c',
    //   description:
    //     'Huntington Avenue Grounds Description: View of the infield and grand stands at the Huntington Avenue Grounds. Part of a two section panorama with McGreevy No. 42. Scoreboard indicates that the Boston Red Sox are playing the Detroit Tigers and losing 3-0. The grand stand of the South End Grounds where the Boston Braves played is visible in background center. Date: 1911 https://www.digitalcommonwealth.org/search/commonwealth:sf268664w',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712237286193-58073cf5e0cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw5fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712237286193-58073cf5e0cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw5fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712237286193-58073cf5e0cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHw5fHx8fHx8Mnx8MTcxNjI5ODE3MXw&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'BfAxUZhB788',
    //   color: '#f3f3f3',
    //   description:
    //     'Chicago American League Ballpark Description: Panoramic photograph of a game between the Chicago White Sox and the New York Highlanders. New York Highlanders in dark uniforms at bat, White Sox in the field. Photo no. 8239. Photographer: Geo. R. Lawrence Co. Date: 1906 https://www.digitalcommonwealth.org/search/commonwealth:sf2688984',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712237286155-658ff46dfeda?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712237286155-658ff46dfeda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712237286155-658ff46dfeda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'RIw81nAlC_I',
    //   color: '#8c8c8c',
    //   description:
    //     'Famous Boston Infield of 1900 Description: Studio portrait of, clockwise from left, second baseman Bobby Lowe, first baseman Fred Tenney, shortstop Herman Long and third baseman Jimmy Collins. Photographer: Chickering, Elmer Date: 1897–1900 https://www.digitalcommonwealth.org/search/commonwealth:sf2686808',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712237286109-3b67ec9e4fd8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxMXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712237286109-3b67ec9e4fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxMXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712237286109-3b67ec9e4fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxMXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'sZRCXf8EQFw',
    //   color: '#d9d9d9',
    //   description:
    //     'Rooters at Pittsburgh Ball Grounds, 1903 World Series Description: During game four of the World Series between the Boston Americans and Pittsburgh Pirates. Pittsburgh is at bat. Although the Americans lost the game to fall behind three games to one, it was considered the turning point of the series with the Rooters spurring Boston to win in eight games. Photographer: Johnston, R.W., 1874-1960 Date: 1903 https://www.digitalcommonwealth.org/search/commonwealth:sf268564p',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712237286191-d4c16e5448af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxMnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712237286191-d4c16e5448af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxMnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712237286191-d4c16e5448af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxMnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'xWAtkNY6rho',
    //   color: '#d9c0a6',
    //   description:
    //     'Frozen silence Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Edward R. Moreau [artist] Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:d791w593g',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002981-f1fc68d24cae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxM3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002981-f1fc68d24cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxM3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',

    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002981-f1fc68d24cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxM3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'RPSr1UslmKU',
    //   color: '#c0c0c0',
    //   description:
    //     'At the corner Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Polly Nordell [artist] Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:fn109n00b',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002995-63a0996eb66f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxNHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002995-63a0996eb66f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxNHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002995-63a0996eb66f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxNHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'j-B7Run-FxE',
    //   color: '#f3f3d9',
    //   description:
    //     'Crows Artist: Benson, Frank Weston, 1862-1951 Name on Item: F. W. Benson Date: 1936 https://www.digitalcommonwealth.org/search/commonwealth:1v53ks09v',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219003031-1c9e91c28a32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxNXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219003031-1c9e91c28a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxNXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219003031-1c9e91c28a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxNXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'OLweNY973b4',
    //   color: '#d9d9d9',
    //   description:
    //     'Out the window Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Arthur Wilde [artist] Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:z890vj95m',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002737-d4e04d21c2c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxNnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002737-d4e04d21c2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxNnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',

    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002737-d4e04d21c2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxNnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 's-PznS93cOM',
    //   color: '#d9c0a6',
    //   description:
    //     'Vegetables Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Arthur Wilde [artist] Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:wd378j37b',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219003003-23f067d78e55?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxN3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219003003-23f067d78e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxN3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219003003-23f067d78e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxN3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'XWDk47RUgwk',
    //   color: '#d9d9c0',
    //   description:
    //     'In the hills Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Polly Nordell [artist] Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:9z905q923',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002809-33542ff8686c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxOHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002809-33542ff8686c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxOHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002809-33542ff8686c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxOHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'Nsh3BBtSzjg',
    //   color: '#404026',
    //   description:
    //     'Old Roxbury Artist: Kupferman, Lawrence Edward, 1909-1982 Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Lawrence Kupferman Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:hx121529x',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002969-aa89d1bd04f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxOXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002969-aa89d1bd04f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxOXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002969-aa89d1bd04f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwxOXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'UpWYrkQoDDs',
    //   color: '#d9d9c0',
    //   description:
    //     'Back Bay houses Artist: Kupferman, Lawrence Edward, 1909-1982 Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Lawrence Kupferman Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:f1884b049',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002787-967748118170?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyMHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002787-967748118170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyMHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002787-967748118170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyMHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: '9ycnqv5BKWY',
    //   color: '#d9d9d9',
    //   description:
    //     'Victorian vignette Artist: Kupferman, Lawrence Edward, 1909-1982 Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Lawrence Kupferman Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:bk12c118f',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002743-5a840fca6d03?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyMXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002743-5a840fca6d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyMXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002743-5a840fca6d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyMXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'vbZzGYdcwhc',
    //   color: '#d9d9c0',
    //   description:
    //     'Entrance to Harvard Yard Artist: Arapoff, Alexis Paul, 1904-1948 Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Alexis Arapoff Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:tx31t6642',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002732-52665dc4feea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyMnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002732-52665dc4feea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyMnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002732-52665dc4feea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyMnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'Ya7h78ARexM',
    //   color: '#f3f3d9',
    //   description:
    //     'Vegetables Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Arthur Wilde [artist] Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:7d27cg99p',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002760-77bc931d7541?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyM3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002760-77bc931d7541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyM3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002760-77bc931d7541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyM3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'l4-NiINQ-8M',
    //   color: '#f3d9c0',
    //   description:
    //     'The country store (heading) Artist: Pennell, Joseph, 1857-1926 Date: [1883] Format: Drawings/Illustrations https://www.digitalcommonwealth.org/search/commonwealth:pc28c939q',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219003033-a9aaccd14716?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyNHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219003033-a9aaccd14716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyNHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219003033-a9aaccd14716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyNHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'FupQpt0D63Y',
    //   color: '#c0c0c0',
    //   description:
    //     'Surf, New England coast Artist: Ryder, Henry Orne Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Henry Orne Rider Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:3b594105t',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002663-3eaa28e9ae86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyNXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002663-3eaa28e9ae86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyNXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002663-3eaa28e9ae86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyNXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'iT1mb2L1St8',
    //   color: '#d9d9c0',
    //   description:
    //     'Boats - morning Artist: Yater, George, 1910-1993 Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: George Yater Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:9019vq84b',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002775-91f580f41f1c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyNnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002775-91f580f41f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyNnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002775-91f580f41f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyNnx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'A3W0COWp7oQ',
    //   color: '#d9d9c0',
    //   description:
    //     "Title: Brace's Rocks, Gloucester Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Vladimir Pavlosky [artist] Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:dj52zv32k",
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002766-33e03e33477f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyN3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002766-33e03e33477f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyN3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002766-33e03e33477f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyN3x8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'Ri31QfTCmPk',
    //   color: '#c0c0c0',
    //   description:
    //     'South End house - early morning Artist: Kupferman, Lawrence Edward, 1909-1982 Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Lawrence Kupferman Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:rx916c78w',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1712219002686-51925e579943?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyOHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1712219002686-51925e579943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyOHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1712219002686-51925e579943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyOHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: '4Oi7zyp2Bhw',
    //   color: '#d9c0a6',
    //   description:
    //     'The storm Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Polly Nordell [artist] Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:bk12c1175',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1711656706252-d7d882264f9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyOXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1711656706252-d7d882264f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyOXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1711656706252-d7d882264f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwyOXx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
    // {
    //   id: 'tCsogdBMf8M',
    //   color: '#c0c0c0',
    //   description:
    //     'Azaleas Contributor: Federal Art Project Sponsor: United States. Works Progress Administration Sponsor: United States. Work Projects Administration Name on Item: Polly Nordell [artist] Date: [1935–1943] https://www.digitalcommonwealth.org/search/commonwealth:r494z920p',
    //   urls: {
    //     full: 'https://images.unsplash.com/photo-1711656706231-ecf49db5da6a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwzMHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=85',
    //     regular:
    //       'https://images.unsplash.com/photo-1711656706231-ecf49db5da6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwzMHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=1080',
    //     thumb:
    //       'https://images.unsplash.com/photo-1711656706231-ecf49db5da6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTQ2MDF8MHwxfGFsbHwzMHx8fHx8fDJ8fDE3MTYyOTgxNzF8&ixlib=rb-4.0.3&q=80&w=200',
    //   },
    // },
  ]

  return Response.json(data)
}
