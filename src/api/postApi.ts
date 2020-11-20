import matter from 'gray-matter'
import marked from 'marked'

export async function getAllPosts() {
  const context = require.context('../_posts', false, /\.md$/)
  const posts = []

  for (const key of context.keys()) {
    const post = key.slice(2)
    const content = await import(`../_posts/${post}`)
    console.log(content)
    posts.push({
      slug: post.replace('.md', '')
    })
  }

  return posts
}
