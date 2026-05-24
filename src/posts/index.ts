import {posts} from "./post"
import {Post} from "./post_interface";

const sorted: Post[] = [...posts].sort((a, b) => b.date.getTime() - a.date.getTime())
const postsWithNav = sorted.map((post, i) => ({
    ...post, previousDetails: sorted[i - 1] && {
        title: sorted[i - 1].title, path: `/posts/${sorted[i - 1].slug}`
    }, nextDetails: sorted[i + 1] && {
        title: sorted[i + 1].title, path: `/posts/${sorted[i + 1].slug}`
    }
}))

export default postsWithNav


