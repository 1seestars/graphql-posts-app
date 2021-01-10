const allPosts = [
  {
    id: '764357',
    title: 'Learn SEO together',
    body:
      "Howdy, Moz fans. Welcome to another edition of Whiteboard Friday. I'm Cyrus Shepard. Today, so glad that you can join us. We are talking about 21 smart Google SEO tips for 2021. We're getting ready for a new year, a new year of SEO strategies. These are 21 practical tips that you can implement that should, hopefully, move the needle on your organic traffic. \n" +
      '\n' +
      "These are some of the best tips that I've collected over the past year. Many of them that I'm going to use myself in my own SEO strategies. \n" +
      '\n' +
      "Now we have four categories: increasing clicks, content/on-page SEO tips, technical SEO, and a little bit of link building. There are 21 of these. These are going to go fast. We're trying to do 10 to 12 minutes, so we don't get to spend a lot of time on each one. But don't fret. We're going to link to appropriate resources in the transcript below so that we can keep along and explore a little bit more. All right. Ready to dive in? ",
    author: 'Vitaly Matyah'
  },
  {
    id: '356565',
    title: "You don't know JavaScript!",
    body:
      'JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.\n' +
      '\n' +
      'Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[8] JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior,[9] and all major web browsers have a dedicated JavaScript engine to execute it.\n' +
      '\n' +
      'As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). However, the language itself does not include any input/output (I/O), such as networking, storage, or graphics facilities, as the host environment (usually a web browser) provides those APIs.\n' +
      '\n' +
      'JavaScript engines were originally used only in web browsers, but they are now embedded in some servers, usually via Node.js. They are also embedded in a variety of applications created with frameworks such as Electron and Cordova.\n' +
      '\n' +
      'Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.',
    author: 'Vitaly Matyah'
  },
  {
    id: '546666',
    title: 'Something',
    body:
      'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    author: 'Alex Pomazan'
  }
]

export default {
  Query: {
    posts: () => allPosts
  }
}
