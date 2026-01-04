// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-my-homepage-is-up",
        
          title: "My homepage is up!",
        
        description: "The construction of this site",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/setting-up-a-jekyll-page/";
          
        },
      },{id: "news-i-received-a-cny-10000-scholarship-from-sjtu",
          title: 'I received a CNY¥10000 scholarship from SJTU!',
          description: "",
          section: "News",},{id: "news-i-am-honored-with-the-silver-medal-8th-place-in-sjtu-zjuctf-2025",
          title: 'I am honored with the silver medal (8th place) in SJTU×ZJUCTF 2025!',
          description: "",
          section: "News",},{id: "news-my-personal-fediverse-pleroma-instance-is-now-live-at-fedi-yijia-ma",
          title: 'My personal Fediverse (Pleroma) instance is now live at fedi.yijia.ma!',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%61%79%69%68%6A%69%61@%73%6A%74%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Riversity", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://mastodon.social/@riversity", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yihjiamaa", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
