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
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
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
      },{id: "post-youtube",
        
          title: '- YouTube <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.youtube.com/watch?v=egN-C9lx9DI", "_blank");
          
        },
      },{id: "books-animal-farm",
          title: 'Animal Farm',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/animal_farm/";
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
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
