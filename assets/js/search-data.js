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
  },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "You can also check cv.alirezad.ir for another style of my CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-lt-i-class-quot-fa-solid-fa-list-ul-quot-gt-lt-i-gt-all-of-my-links-mirrors-lt-i-class-quot-fa-solid-fa-up-right-from-square-quot-gt-lt-i-gt",
              title: "&lt;i class=&quot;fa-solid fa-list-ul&quot;&gt;&lt;/i&gt; All of my links (mirrors) &lt;i class=&quot;fa-solid fa-up-right-from-square&quot;&gt;&lt;/i&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://links.alirezad.ir";
              },
            },{id: "dropdown-lt-i-class-quot-fa-solid-fa-laptop-code-quot-gt-lt-i-gt-blog-of-my-computer-world-lt-i-class-quot-fa-solid-fa-up-right-from-square-quot-gt-lt-i-gt",
              title: "&lt;i class=&quot;fa-solid fa-laptop-code&quot;&gt;&lt;/i&gt; Blog of my computer world &lt;i class=&quot;fa-solid fa-up-right-from-square&quot;&gt;&lt;/i&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://blog.alirezad.ir";
              },
            },{id: "dropdown-lt-i-class-quot-fa-regular-fa-address-card-quot-gt-lt-i-gt-single-page-cv-lt-i-class-quot-fa-solid-fa-up-right-from-square-quot-gt-lt-i-gt",
              title: "&lt;i class=&quot;fa-regular fa-address-card&quot;&gt;&lt;/i&gt; Single-page CV &lt;i class=&quot;fa-solid fa-up-right-from-square&quot;&gt;&lt;/i&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://cv.alirezad.ir";
              },
            },{id: "dropdown-lt-i-class-quot-fa-regular-fa-images-quot-gt-lt-i-gt-my-photos-gallery-lt-i-class-quot-fa-solid-fa-up-right-from-square-quot-gt-lt-i-gt",
              title: "&lt;i class=&quot;fa-regular fa-images&quot;&gt;&lt;/i&gt; My photos gallery &lt;i class=&quot;fa-solid fa-up-right-from-square&quot;&gt;&lt;/i&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://photo.alirezad.ir";
              },
            },{id: "dropdown-lt-i-class-quot-fa-regular-fa-comment-dots-quot-gt-lt-i-gt-persian-personal-blog-lt-i-class-quot-fa-solid-fa-up-right-from-square-quot-gt-lt-i-gt",
              title: "&lt;i class=&quot;fa-regular fa-comment-dots&quot;&gt;&lt;/i&gt; Persian personal blog &lt;i class=&quot;fa-solid fa-up-right-from-square&quot;&gt;&lt;/i&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://note.alirezad.ir";
              },
            },{id: "dropdown-lt-i-class-quot-fa-solid-fa-clock-rotate-left-quot-gt-lt-i-gt-momentum-lt-i-class-quot-fa-solid-fa-up-right-from-square-quot-gt-lt-i-gt",
              title: "&lt;i class=&quot;fa-solid fa-clock-rotate-left&quot;&gt;&lt;/i&gt; Momentum &lt;i class=&quot;fa-solid fa-up-right-from-square&quot;&gt;&lt;/i&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://now.alirezad.ir";
              },
            },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-my-master-thesis",
        
          title: "My Master Thesis",
        
        description: "My Master degree thesis in University of Tehran",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/master-thesis/";
          
        },
      },{id: "post-i-ve-just-finished-machine-learning-course",
        
          title: "I’ve just finished Machine Learning course",
        
        description: "Machine Learning Course introduced by Andrew Ng, offered by coursera",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/i-ve-just-finished-machine-learning-course/";
          
        },
      },{id: "post-my-youtube-video-about-our-rasberry-pi-project",
        
          title: 'My Youtube video about our Rasberry Pi project <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We were working on a project which the goal was creating a part of a hardware to detect and send &quot;cut signal&quot; to proper section of the device based on Image processing",
        section: "Posts",
        handler: () => {
          
            window.open("https://youtu.be/egN-C9lx9DI", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-giscus-now-works-properly-and-you-can-comment-on-posts",
          title: 'Giscus now works properly and you can comment on posts',
          description: "",
          section: "News",},{id: "news-happy-nowrouz-iranian-new-year-this-website-is-now-in-beta",
          title: '🎉 Happy Nowrouz (Iranian new year)! This website is now in beta.',
          description: "",
          section: "News",},{id: "news-my-gallery-is-online-now-my-online-life",
          title: 'My Gallery is online now ⸺ my online life',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/online_living/";
            },},{id: "projects-basil-harvester",
          title: 'Basil Harvester',
          description: "Design a machine to harvest basils as a successor to Scissor Jack",
          section: "Projects",handler: () => {
              window.location.href = "/projects/basil_harvester/";
            },},{id: "projects-scissor-jack",
          title: 'Scissor Jack',
          description: "Apply engineering to design and simulate a scissor jack",
          section: "Projects",handler: () => {
              window.location.href = "/projects/scissor_jack/";
            },},{id: "projects-seeder-flow-monitoring-system-manual-cover",
          title: 'Seeder Flow Monitoring System Manual Cover',
          description: "Done in photoshop by help of a free template from freepik",
          section: "Projects",handler: () => {
              window.location.href = "/projects/seeder_photoshop/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/alerezaaa", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dehghanzadeh", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://chaos.social/@alireza", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/Talk2Bot", "_blank");
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
