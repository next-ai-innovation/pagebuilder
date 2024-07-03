export async function GET(request) {

  const blog = {
    "title": "Best Practices for Writing Clean and Maintainable Code",
    "publishedAt": "2023-01-02T00:00:00.000Z",
    "updatedAt": "2023-01-02T00:00:00.000Z",
    "description": "How to deploy your Next.js apps on Vercel.",
    "image": {
      "filePath": "../public/blogs/christina-wocintechchat-com-OtHEYbQXLFU-unsplash.jpg",
      "relativeFilePath": "../../public/blogs/christina-wocintechchat-com-OtHEYbQXLFU-unsplash.jpg",
      "format": "jpeg",
      "height": 1282,
      "width": 1920,
      "aspectRatio": 1.497659906396256,
      "blurhashDataUrl": "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBBEhBRIUMf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEBAQEAAAAAAAAAAAAAAAAhABEB/9oADAMBAAIRAxEAPwCj5yzYr1/JRhkieJw5kr2OLGR5yQOoI382NZyiImxOx6N//9k="
    },
    "isPublished": true,
    "author": "codebucks",
    "tags": [
      "code quality"
    ],
    "body": {
      "raw": "",
      "content": `
# This is an example post

This is some sample content written in Markdown.

## Subheading

More content with **bold** and _italic_ text.
        `
    },
    "_id": "best-practices-for-writing-clean-and-maintainable-code/index.mdx",
    "_raw": {
      "sourceFilePath": "best-practices-for-writing-clean-and-maintainable-code/index.mdx",
      "sourceFileName": "index.mdx",
      "sourceFileDir": "best-practices-for-writing-clean-and-maintainable-code",
      "contentType": "mdx",
      "flattenedPath": "best-practices-for-writing-clean-and-maintainable-code"
    },
    "type": "Blog",
    "url": "/blogs/best-practices-for-writing-clean-and-maintainable-code",
    "readingTime": {
      "text": "10 min read",
      "minutes": 9.41,
      "time": 564600,
      "words": 1882
    },
    "toc": [
      {
        "level": "two",
        "text": "What to expect from here on out",
        "slug": "what-to-expect-from-here-on-out"
      },
      {
        "level": "three",
        "text": "Typography should be easy",
        "slug": "typography-should-be-easy"
      },
      {
        "level": "two",
        "text": "What if we stack headings?",
        "slug": "what-if-we-stack-headings"
      },
      {
        "level": "three",
        "text": "We should make sure that looks good, too.",
        "slug": "we-should-make-sure-that-looks-good-too"
      }
    ]
  }

  return new Response(JSON.stringify(blog))


}