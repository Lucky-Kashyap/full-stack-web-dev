# full-stack-web-dev

take challenge #75 days to complete full stack web dev

### Started with FrontEnd Journey

Learn HTML , CSS & JavaScript

HTML:

Basic tags , formatting tags , semantic elements.

CSS :

Learn Basics of CSS:

How to do Styling in an element

Developer Projects:

Landing page :

Project 1: Urban Women Wear

Project 2: Peanut butter get silvs

Project 3: Simple Landing Page

Project 4: Block Practice

Project 5: Fashion Arrival From (Adobe XD) Design

Project 6: Maria Michno From (Adobe XD) Design

Project 7: Apna College Website Landing Page

Project 8: Blog Post

Project 9: Microsoft UI Design (Home Page clone)

Project 10: Pentaclay (Home Page)

Project 11: Vmake Fashion Model (Complete Home page with CSS Effects)

Project 12: School UI (Figma Design)

Project 13: SpiderMan UI (Figma Design)

Started with JavaScript:

Learn Basics of programming

Build small-small projects

Project 1: Bulb on off

Project 2: Event Timer

Project 3: Modal

Project 4: Login-signup

Move to React JS Library:

Learn Basics of react-js

- How react works.
- About components.
- Rendering.
- Types of components.
- state variables
- react Hooks.
- Event Handling

Implement all these learning inside project:

Project 1: Bharat clock APP

Project 2: Calculator APP

Project 3: Todo APP

Project 4: Social Media APP

Learning Advance topics:

- state management library
- context API
- advance hooks
- react-routing
- API Handling
- react-redux & react-redux-toolkit
- RTK
- Many more...

Now Move to Backend Part:

🚀 Backend (Node JS) Series - Learn What Matters 1: Understanding the Internet

🌐 What is the Internet?

◽Discover the origins and evolution of the Internet, and why it's such a crucial part of our daily lives.

🌐 Ownership of the Internet

◽Learn about the decentralized nature of the Internet and explore who owns and manages this vast global network.

🌐 Data Transfer

◽Dive into the fascinating mechanisms behind how your messages and data travel across the Internet. We explore the role of towers and undersea fiber optic cables.

🌐 Packets and Servers

◽Uncover the magic of data packets and how they ensure efficient communication across the web. We also touch on the role of servers in this process.

🌐 HTTP vs. HTTPS

◽Understand the importance of secure web browsing and the differences between HTTP and HTTPS protocols.

🌐 Ports

Explore the concept of ports in networking and how they facilitate the flow of data between your computer and web servers.

🚀 Backend (Node JS) Series - Learn What Matters 2: Mastering Node.js Fundamentals

- what is backend ?
  backend developer wo banda hai jo ki server and db program karta hai
- why backend

      download now  par kuch ho
      to make websites more usable and purpose ful for the audience, to make websites dynamic

- why not frontend alone ?

      with frontend websites are static and they are of not much use.

- what do we need ?

      node js, mongodb, mongoose js, express js

- what should we make to hit big companies ?

CONTENT

- node js install

      install ka matlab hota hai aapke laptop/computer/tablet usmein files ko copy karna

- import and export

      var figlet = require("figlet");
      figlet("Hello World!!", function (err, data) {
          if (err) {
              console.log("Something went wrong...");
              console.dir(err);
              return;
          }
          console.log(data);
      });

- run the code

      node ja hai khoob saara c++ ka code jo ki liya gaya hai chrome browser ke v8 engine ke code se aur is c++ code jisko liya gaya usey wrap kar diya gaya js code se and ye hume allow krta hai ke hum js code likhien aur ye js code accept karega and c++ ke basis par aapko ek server environmant bana kar deta hai, par sirf tab tak ye code chalayega  jab tak apka node (v8 engine and js wrapper) chaalu hai

-- node js core usage & usage & understanding - http

- npm usage

         npm - naan paneer makhni
         npm ek jagah hai jaha par khoob saare packages milte hai
         bani banaai cheejein/features kehlaate hai packages

      text -> voice

      // hey hello

npm package for text -> audio

- express

      // express fromework for node js
      // express k use case => routing
      // routing => GET POST PUT PATCH DELETE
      // /profile = profile
      // /contact = contact
      // /like/hfvyhjgb = like post
      // /comment/jhmvubhjn = comment
      // /cart = cart

- express generator
- mongodb

-- intermediate mongodb

-- api development

-- authentication and authorization

-- error handling

- middleware

  middleware ek aisa function hai jo kisi bhi route se pehle chalta hai, jiska matlab aapka route chalne se pehle agar aap koi kaam
  karana chaahte ho to middleware ka upyog kiya jaa sakta hai

route pe chalne se pehle print karo chala on console

route chalne se pehle route pe hits counter ki value badhegi

iska matlab route chlne se pehle jo chalega woh hai middleware

sirf ek dikkat hai agar humara iddleware chl gya toh req jaam ho jati hai aur route tak nahi pahuch paati

🚀 Express.js - Learn What Matters: Mastering the Framework | Backend (Node JS) Series

- node vs express :

            node is the main thing express ke code se hum server ka code likh pate hein and
            server kaisa react karega wo bhi express ke help se likhte hai

- what is the real deal ?
- what is express js ?

            package, routing perform, server side management & many more....

- why express js ?

            http is difficult to use,
            express makes this easier.

- Routing

            routes banaane ke process ko hum kahte hai routing.

            /profile
            /home
            /contact
            /profile/lucky/jhnvhjngb

- Middleware

      middleware ek aisa function hota hai jo har route se pehle chalta hai, iska matlab
      saare routes mein koi bhi chale usse pehle middleware chalta hai and usmein likha code pehle execute hota hai

      node ke saath ek dikkat hai ki agar control ek baar bhi kisi middleware par gaya to control khud se agle route/
      middleware par nahi jaayega, use agle par lejaane ke liyein aapko push karna padega aur
      ye push kahlaayega next ko chalaana

- Request and Response

              req mein saara data hota hai aane waale user ki request ki
              taraf ka, jaise ki uski location, info and other things.

              res mein controls hote hai jinke basis pe hum server se response bhej paate hai

              next is just a push so that our request moves to the next thing which

              should be executed.

- Route Parameters

            aisa koi bhi route jiska koi hissa baar baar same rehta hai and kuch hissa baar
            baar change hota hai iske liye aap ek dynamic route bana skte ho

            /profile/:username
            /profile/lucky
            /profile/ansh
            /profile/sachin

URL mein jab bhi aapke paas ek aisa pattern ho

      req.params

to make any route dynamic you can use :

at the place where you want
to make it dynamic, and to access there value use req.params

      /author/books/issued/harsh
      /author/books/issued/harsh
      /author/books/issued/harshita
      /author/books/issued/lucky
      /author/books/issued/ajay
      /author/books/issued/:username

- Templates engine

      html ke pass superpowers nahi hai calculation krne ki
      ejs is html with superpower

ejs setup karne ke liyein

1.  ejs install

             npm i ejs

2.  configure ejs

             app.set('view engine','ejs')

3.  ek views folder banao

4.  usmein ejs files banao

5.  send ki jagah render karo => render karte waqt make sure aap views folder ke andar waali hi koi file kaa naam likhein, aur render fnc mein .ejs mention naa karein

- Static Files
- HTTP Methods - get and post
- Error Handling

-- session and cookies

-- deployement
-- testing

-- realtime stuff

### Self Learning And Building Things Up to Grow More..!!

Happy Coding With ☕ Divyanshu Kashyap 💻🚀
